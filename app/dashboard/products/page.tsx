"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import ProductOffcanvas from "@/components/ProductOffcanvas";
import Pagination from "@/components/Pagination";

interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  materialGrade: string;
  featuredImage: string;
  additionalImages: string[];
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsRef = collection(db, "products");
      const q = query(productsRef, orderBy("name", "asc"));
      const querySnapshot = await getDocs(q);
      const productsData: Product[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        productsData.push({
          id: doc.id,
          category: data.category || "",
          name: data.name || "",
          description: data.description || "",
          materialGrade: data.materialGrade || "",
          featuredImage: data.featuredImage || "",
          additionalImages: data.additionalImages || [],
        });
      });

      setProducts(productsData);
      setFilteredProducts(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(products);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.materialGrade.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchQuery, products]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsOffcanvasOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsOffcanvasOpen(true);
  };

  const handleDeleteProduct = async (product: Product) => {
    if (!confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      // Delete the product
      await deleteDoc(doc(db, "products", product.id));

      // Decrement category products count
      const categoriesRef = collection(db, "categories");
      const categoriesSnapshot = await getDocs(categoriesRef);
      
      for (const categoryDoc of categoriesSnapshot.docs) {
        if (categoryDoc.data().name === product.category) {
          const categoryData = categoryDoc.data();
          const currentCount = categoryData.products || 0;
          await updateDoc(doc(db, "categories", categoryDoc.id), {
            products: Math.max(0, currentCount - 1),
          });
          break;
        }
      }

      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product");
    }
  };

  const handleOffcanvasClose = () => {
    setIsOffcanvasOpen(false);
    setEditingProduct(null);
  };

  const handleOffcanvasSave = () => {
    fetchProducts();
    handleOffcanvasClose();
  };

  return (
    <div className="h-full p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Card */}
        <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
            <button
              onClick={handleAddProduct}
              className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Add Products
            </button>
          </div>
          {/* Search Filter */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, category, material/grade, or description..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pl-10 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
            <svg
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Products Table */}
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          {loading ? (
            <div className="p-8 text-center text-gray-600">Loading...</div>
          ) : filteredProducts.length === 0 ? (
            <div className="p-8 text-center text-gray-600">
              {searchQuery
                ? "No products found matching your search."
                : "No products found. Add your first product to get started."}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-200 bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      Serial Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      Featured Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      Material/Grade
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {paginatedProducts.map((product, index) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                        {startIndex + index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {product.featuredImage ? (
                          <img
                            src={product.featuredImage}
                            alt={product.name}
                            className="h-16 w-16 rounded-lg object-contain border border-gray-200"
                          />
                        ) : (
                          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-400">
                            No Image
                          </div>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        {product.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                        {product.category}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                        {product.materialGrade}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditProduct(product)}
                            className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product)}
                            className="rounded-lg border border-red-300 bg-white px-3 py-1.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {!loading && filteredProducts.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>

      {/* Offcanvas */}
      {isOffcanvasOpen && (
        <ProductOffcanvas
          product={editingProduct}
          onClose={handleOffcanvasClose}
          onSave={handleOffcanvasSave}
        />
      )}
    </div>
  );
}
