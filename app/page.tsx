"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import heroImage from "@/assets/hero.avif";
import forgingImage from "@/assets/forging.avif";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

interface Category {
  id: string;
  name: string;
  products: number;
}

interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  materialGrade: string;
  featuredImage: string;
  additionalImages: string[];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("mission");
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [productIndex, setProductIndex] = useState(0);

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
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoadingProducts(false);
    }
  };

  const tabs = [
    { id: "mission", label: "OUR MISSION" },
    { id: "vision", label: "OUR VISION" },
    { id: "history", label: "OUR HISTORY" },
  ];

  const tabContent = {
    mission: {
      title: "Our Mission",
      description:
        "To deliver high-quality steel and alloy products to global industries through disciplined manufacturing, robust processes, and long-term partnerships. We combine in-house production with our sister concerns to ensure consistent quality, competitive pricing, and reliable delivery worldwide.",
      points: [
        "High-Quality Manufacturing",
        "Transparency & Reliability",
        "Long-Term Partnerships",
      ],
    },
    vision: {
      title: "Our Vision",
      description:
        "To become a trusted global manufacturing partner for steel and alloy components across key international markets. We build lasting relationships with industrial customers through engineering-led production, scale, and dependable execution—representing premium Indian manufacturing on the world stage.",
      points: [
        "Global Manufacturing Partner",
        "Key International Markets",
        "Engineering & Production Excellence",
      ],
    },
    history: {
      title: "Our History",
      description:
        "Abhishek Enterprises is an India-based metal manufacturing company specializing in steel and alloy products for international industrial markets. Together with our sister concerns and integrated operations, we maintain consistent quality, competitive pricing, and timely delivery worldwide.",
      points: [
        "India-Based Manufacturing",
        "International Market Focus",
        "Integrated Sister Concerns Network",
      ],
    },
  };

  const features = [
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Consistent Quality",
      description:
        "Rigorous manufacturing processes and quality systems—supported by our sister concerns—ensure consistent quality in every batch we produce.",
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Competitive Pricing",
      description:
        "Integrated manufacturing and scale help us offer competitive pricing without compromising quality or service standards.",
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Timely Global Delivery",
      description:
        "Efficient logistics and supply chain management ensure timely global delivery to international industrial markets worldwide.",
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Trusted Partnerships",
      description:
        "Close coordination across our manufacturing ecosystem and sister concerns keeps operations seamless and supply chains dependable.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[800px] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Industrial Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60"></div>
        </div>
        <div className="relative mx-auto flex max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8" style={{ minHeight: '800px' }}>
          <div className="mx-auto max-w-3xl text-center">
      
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              <span className="block">Engineered Metal Solutions.</span>
              <span className="mt-3 block sm:mt-4">Built to Perform</span>
            </h1>
            <div className="mt-10 flex justify-center">
              <Link
                href="/products"
                className="group flex items-center gap-2 rounded-lg bg-gold-500 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-gold-600"
              >
                Get Started Now
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-lg border-2 border-gold-500 bg-white p-8 shadow-lg transition-transform hover:-translate-y-2"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gold-500 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch">
            {/* Left Side - Content */}
            <div className="flex flex-col">
              <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
                Who We Are
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Your trusted partner in{" "}
                <span className="text-gold-500">metal manufacturing</span>. Excellence delivered worldwide
              </h2>

              {/* Tabs */}
              <div className="mt-8 border-b border-gray-200">
                <div className="flex gap-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`border-b-2 pb-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                        activeTab === tab.id
                          ? "border-gold-500 text-gold-500"
                          : "border-transparent text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="mt-6">
                <p className="text-base leading-relaxed text-gray-600">
                  {tabContent[activeTab as keyof typeof tabContent].description}
                </p>
                <ul className="mt-6 space-y-3">
                  {tabContent[activeTab as keyof typeof tabContent].points.map(
                    (point, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500">
                          <svg
                            className="h-4 w-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    )
                  )}
                </ul>
                <Link
                  href="/sister-concerns"
                  className="mt-8 inline-block rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
                >
                  Know More
                </Link>
              </div>

              {/* Have Question Section */}
              <div className="mt-8 flex items-center gap-4 rounded-lg bg-gray-100 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Have question?</p>
                  <a
                    href="tel:+917307779000"
                    className="text-lg font-bold text-gray-900 hover:text-gold-500"
                  >
                    Call Us +91 73077 79000
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg lg:h-auto lg:min-h-[480px]">
              <Image
                src={forgingImage}
                alt="Industrial Plant"
                fill
                className="object-cover"
                style={{ objectPosition: "30% center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Side - Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
                Our Products
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Discover Our{" "}
                <span className="text-gold-500">Premium Products</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-gray-300">
                Explore our selection of premium steel and alloy products.
                Each item is manufactured and quality-assured to meet the
                highest industrial standards. Browse our featured products and find
                the right fit for your applications.
              </p>
              <Link
                href="/products"
                className="mt-8 inline-block rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
              >
                View All Products
              </Link>
              {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
              <div className="mt-8 hidden gap-4 lg:flex">
                <button
                  onClick={() => {
                    if (products.length > 0) {
                      setProductIndex((prev) =>
                        prev === 0 ? products.length - 2 : prev - 2
                      );
                    }
                  }}
                  disabled={products.length <= 2}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-white transition-colors hover:bg-gold-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    if (products.length > 0) {
                      setProductIndex((prev) =>
                        prev + 2 >= products.length ? 0 : prev + 2
                      );
                    }
                  }}
                  disabled={products.length <= 2}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-white transition-colors hover:bg-gold-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Products Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {loadingProducts ? (
                <div className="flex items-center justify-center py-12">
                  <p className="text-gray-400">Loading products...</p>
                </div>
              ) : products.length === 0 ? (
                <div className="flex items-center justify-center py-12">
                  <p className="text-gray-400">No products available</p>
                </div>
              ) : (
                products
                  .slice(productIndex, productIndex + 2)
                  .map((product) => (
                  <Link
                    key={product.id}
                    href="/products"
                    className="group block overflow-hidden rounded-xl bg-gray-700 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                  >
                    {/* Image Section */}
                    <div className="relative h-56 w-full overflow-hidden bg-white">
                      {product.featuredImage ? (
                        <div className="absolute inset-0 p-4">
                          <div 
                            className="relative h-full w-full transition-transform duration-300 group-hover:scale-105"
                            style={{ 
                              transform: 'scale(1.015)',
                              transformOrigin: 'center'
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
                        <div className="flex h-full items-center justify-center">
                          <svg
                            className="h-16 w-16 text-gray-500"
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
                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      {/* Product Name - Primary Hierarchy */}
                      <h3 className="text-xl font-bold text-white transition-colors group-hover:text-gold-400">
                        {product.name}
                      </h3>

                      {/* Material Grade - Secondary Information */}
                      {product.materialGrade && (
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                            Grade:
                          </span>
                          <span className="text-sm font-semibold text-gray-300">
                            {product.materialGrade}
                          </span>
                        </div>
                      )}

                      {/* Description Preview - Tertiary Information */}
                      {product.description && (
                        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-400">
                          {product.description}
                        </p>
                      )}

                      {/* CTA Button - Clear Call to Action */}
                      <div className="mt-6 flex items-center justify-between border-t border-gray-600 pt-4">
                        <span className="text-sm font-semibold text-gold-500 transition-colors group-hover:text-gold-400">
                          View Details
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-white transition-all group-hover:scale-110 group-hover:bg-gold-400">
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
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      
      {/* Contact Section */}
      <section id="contact" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Have questions about our products or services? We'd love to hear
              from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Contact Form Card */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-6 text-lg font-semibold text-gray-900">
                  Send us a Message
                </h3>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <a
                  href="mailto:abhishekenterprises4191@gmail.com"
                  className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:bg-gray-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="mt-1 text-base font-medium text-gray-900">
                      abhishekenterprises4191@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+917307779000"
                  className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:bg-gray-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="mt-1 text-base font-medium text-gray-900">
                      +91 73077 79000
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="mt-1 text-base leading-relaxed text-gray-900">
                      Ground, First Floor, Jaspal Bangar Near Khushi Kanda,
                      <br />
                      Yumuna Industrial Area, Ludhiana, Punjab
                    </p>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="mb-4 text-sm font-semibold text-gray-600">
                    Location
                  </p>
                  <div className="overflow-hidden rounded-lg">
                    <iframe
                      src="https://maps.google.com/maps?q=Ground%2C+First+Floor%2C+Jaspal+Bangar+Near+Khushi+Kanda%2C+Yumuna+Industrial+Area%2C+Ludhiana%2C+Punjab&hl=en&z=14&output=embed"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
