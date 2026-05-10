"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import Image from "next/image";
import ProductModal from "@/components/ProductModal";
import heroImage from "@/assets/hero.avif";

interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  materialGrade: string;
  featuredImage: string;
  additionalImages: string[];
}

interface Category {
  id: string;
  name: string;
  products: number;
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const fetchCategories = async () => {
    try {
      const categoriesRef = collection(db, "categories");
      const q = query(categoriesRef, orderBy("name", "asc"));
      const querySnapshot = await getDocs(q);
      const categoriesData: Category[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        categoriesData.push({
          id: doc.id,
          name: data.name,
          products: data.products || 0,
        });
      });

      setCategories(categoriesData);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

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
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Our Products"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60"></div>
        </div>
        <div className="relative mx-auto flex max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8" style={{ minHeight: '400px' }}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              Product Catalog
            </span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              Our Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Explore our comprehensive range of steel and alloy products
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sidebar Filter */}
            <aside className="lg:w-64">
              <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                <h2 className="mb-6 text-lg font-bold text-gray-900">
                  Categories
                </h2>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full rounded-lg px-4 py-3 text-left text-sm font-semibold transition-all ${
                      selectedCategory === "all"
                        ? "bg-gold-500 text-white shadow-md"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    All Products
                    <span className="ml-2 text-xs opacity-75">
                      ({products.length})
                    </span>
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full rounded-lg px-4 py-3 text-left text-sm font-semibold transition-all ${
                        selectedCategory === category.name
                          ? "bg-gold-500 text-white shadow-md"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category.name}
                      <span className="ml-2 text-xs opacity-75">
                        ({category.products})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {loading ? (
                <div className="flex items-center justify-center py-24">
                  <div className="text-center">
                    <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-gold-500"></div>
                    <p className="mt-4 text-gray-600">Loading products...</p>
                  </div>
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="rounded-xl border border-gray-200 bg-white p-12 text-center shadow-sm">
                  <svg
                    className="mx-auto h-16 w-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <p className="mt-4 text-lg font-medium text-gray-900">
                    No products found
                  </p>
                  <p className="mt-2 text-gray-600">
                    {selectedCategory === "all"
                      ? "No products available at the moment."
                      : `No products found in "${selectedCategory}" category.`}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div className="relative h-64 w-full overflow-hidden bg-white">
                        {product.featuredImage ? (
                          <div className="absolute inset-0 p-4">
                            <div
                              className="relative h-full w-full transition-transform duration-300 group-hover:scale-105"
                              style={{
                                transform: "scale(1.015)",
                                transformOrigin: "center",
                              }}
                            >
                              <Image
                                src={product.featuredImage}
                                alt={product.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="flex h-full items-center justify-center bg-gray-50">
                            <svg
                              className="h-16 w-16 text-gray-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="mb-2 text-xl font-bold text-gray-900">
                          {product.name}
                        </h3>
                        {product.materialGrade && (
                          <div className="mb-4 flex items-center gap-2">
                            <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                              Grade:
                            </span>
                            <span className="text-sm font-semibold text-gray-700">
                              {product.materialGrade}
                            </span>
                          </div>
                        )}
                        {product.description && (
                          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-600">
                            {product.description}
                          </p>
                        )}
                        <button
                          onClick={() => {
                            setSelectedProduct(product);
                            setIsModalOpen(true);
                          }}
                          className="w-full rounded-lg bg-gold-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {isModalOpen && (
        <ProductModal
          product={selectedProduct}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-16 text-center">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
