"use client";

import { useState, useEffect } from "react";
import { db, storage } from "@/lib/firebase";
import { addDoc, updateDoc, doc, collection, getDocs, query, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  materialGrade: string;
  featuredImage: string;
  additionalImages: string[];
}

interface ProductOffcanvasProps {
  product: Product | null;
  onClose: () => void;
  onSave: () => void;
}

export default function ProductOffcanvas({
  product,
  onClose,
  onSave,
}: ProductOffcanvasProps) {
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [materialGrade, setMaterialGrade] = useState("");
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [featuredImagePreview, setFeaturedImagePreview] = useState("");
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);
  const [additionalImagesPreview, setAdditionalImagesPreview] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategories();
    if (product) {
      setCategory(product.category);
      setName(product.name);
      setDescription(product.description);
      setMaterialGrade(product.materialGrade);
      setFeaturedImagePreview(product.featuredImage);
      setAdditionalImagesPreview(product.additionalImages || []);
    } else {
      resetForm();
    }
    setError("");
  }, [product]);

  const fetchCategories = async () => {
    try {
      const categoriesRef = collection(db, "categories");
      const q = query(categoriesRef);
      const querySnapshot = await getDocs(q);
      const categoriesData: { id: string; name: string }[] = [];

      querySnapshot.forEach((doc) => {
        categoriesData.push({
          id: doc.id,
          name: doc.data().name,
        });
      });

      setCategories(categoriesData);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const resetForm = () => {
    setCategory("");
    setName("");
    setDescription("");
    setMaterialGrade("");
    setFeaturedImage(null);
    setFeaturedImagePreview("");
    setAdditionalImages([]);
    setAdditionalImagesPreview([]);
  };

  const handleFeaturedImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFeaturedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFeaturedImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setAdditionalImages((prev) => [...prev, ...files]);
      
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setAdditionalImagesPreview((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeAdditionalImage = (index: number) => {
    setAdditionalImages((prev) => prev.filter((_, i) => i !== index));
    setAdditionalImagesPreview((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadImage = async (file: File, path: string): Promise<string> => {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!category || !name.trim() || !description.trim() || !materialGrade.trim()) {
      setError("All fields are required");
      return;
    }

    setLoading(true);

    try {
      let featuredImageUrl = featuredImagePreview;
      const additionalImagesUrls: string[] = [...additionalImagesPreview];

      // Upload featured image if new file is selected
      if (featuredImage) {
        const timestamp = Date.now();
        featuredImageUrl = await uploadImage(
          featuredImage,
          `products/${timestamp}_${featuredImage.name}`
        );
      }

      // Upload additional images if new files are selected
      if (additionalImages.length > 0) {
        const uploadPromises = additionalImages.map(async (file, index) => {
          const timestamp = Date.now();
          return await uploadImage(
            file,
            `products/additional/${timestamp}_${index}_${file.name}`
          );
        });
        const newUrls = await Promise.all(uploadPromises);
        additionalImagesUrls.push(...newUrls);
      }

      const productData = {
        category,
        name: name.trim(),
        description: description.trim(),
        materialGrade: materialGrade.trim(),
        featuredImage: featuredImageUrl,
        additionalImages: additionalImagesUrls,
        updatedAt: new Date(),
      };

      // Find category document by name
      const findCategoryDoc = async (categoryName: string) => {
        const categoriesRef = collection(db, "categories");
        const q = query(categoriesRef);
        const querySnapshot = await getDocs(q);
        
        for (const categoryDoc of querySnapshot.docs) {
          if (categoryDoc.data().name === categoryName) {
            return categoryDoc;
          }
        }
        return null;
      };

      if (product) {
        // Update existing product
        const productRef = doc(db, "products", product.id);
        await updateDoc(productRef, productData);

        // Handle category count update when editing
        if (product.category !== category) {
          // Decrement old category
          const oldCategoryDoc = await findCategoryDoc(product.category);
          if (oldCategoryDoc) {
            const oldCategoryData = oldCategoryDoc.data();
            const oldCount = oldCategoryData.products || 0;
            await updateDoc(doc(db, "categories", oldCategoryDoc.id), {
              products: Math.max(0, oldCount - 1),
            });
          }

          // Increment new category
          const newCategoryDoc = await findCategoryDoc(category);
          if (newCategoryDoc) {
            const newCategoryData = newCategoryDoc.data();
            const newCount = newCategoryData.products || 0;
            await updateDoc(doc(db, "categories", newCategoryDoc.id), {
              products: newCount + 1,
            });
          }
        }
      } else {
        // Add new product
        await addDoc(collection(db, "products"), {
          ...productData,
          createdAt: new Date(),
        });

        // Increment category products count
        const categoryDoc = await findCategoryDoc(category);
        if (categoryDoc) {
          const categoryData = categoryDoc.data();
          const currentCount = categoryData.products || 0;
          await updateDoc(doc(db, "categories", categoryDoc.id), {
            products: currentCount + 1,
          });
        }
      }

      onSave();
    } catch (error: any) {
      console.error("Error saving product:", error);
      setError(error.message || "Failed to save product");
      setLoading(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={onClose}
      ></div>

      {/* Offcanvas */}
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-2xl bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {product ? "Edit Product" : "Add Product"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  placeholder="Enter product name"
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  placeholder="Enter product description"
                />
              </div>

              {/* Material/Grade */}
              <div>
                <label
                  htmlFor="materialGrade"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Material/Grade
                </label>
                <input
                  id="materialGrade"
                  type="text"
                  value={materialGrade}
                  onChange={(e) => setMaterialGrade(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  placeholder="Enter material/grade"
                />
              </div>

              {/* Featured Image */}
              <div>
                <label
                  htmlFor="featuredImage"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Featured Image
                </label>
                <input
                  id="featuredImage"
                  type="file"
                  accept="image/*"
                  onChange={handleFeaturedImageChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
                {featuredImagePreview && (
                  <div className="mt-3">
                    <img
                      src={featuredImagePreview}
                      alt="Featured preview"
                      className="h-32 w-32 rounded-lg object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Additional Images */}
              <div>
                <label
                  htmlFor="additionalImages"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Additional Images
                </label>
                <input
                  id="additionalImages"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleAdditionalImagesChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
                {additionalImagesPreview.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {additionalImagesPreview.map((preview, index) => (
                      <div key={index} className="relative">
                        <img
                          src={preview}
                          alt={`Additional ${index + 1}`}
                          className="h-24 w-24 rounded-lg object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeAdditionalImage(index)}
                          className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {error && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Footer */}
              <div className="flex gap-3 border-t border-gray-200 pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
