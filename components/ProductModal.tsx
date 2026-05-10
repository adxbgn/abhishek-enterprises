"use client";

import Image from "next/image";

interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  materialGrade: string;
  featuredImage: string;
  additionalImages: string[];
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-auto w-full max-w-4xl rounded-xl bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 shadow-md transition-colors hover:bg-gold-500 hover:text-white"
          aria-label="Close modal"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="relative h-64 w-full bg-gray-50 rounded-t-xl lg:h-auto lg:w-2/5 lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-tr-none overflow-hidden">
            {product.featuredImage ? (
              <div className="absolute inset-0 p-6">
                <div className="relative h-full w-full">
                  <Image
                    src={product.featuredImage}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority
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

          {/* Content Section */}
          <div className="flex-1 p-6 lg:p-8 rounded-b-xl lg:rounded-br-xl lg:rounded-bl-none">
            {/* Product Name */}
            <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
              {product.name}
            </h2>

            {/* Category and Grade */}
            <div className="mb-4 space-y-3">
              {product.category && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-600">Category:</span>
                  <span className="rounded-full bg-gold-100 px-3 py-1 text-sm font-semibold text-gold-600">
                    {product.category}
                  </span>
                </div>
              )}
              {product.materialGrade && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-600">Grade:</span>
                  <span className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-900">
                    {product.materialGrade}
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <div className="mb-6">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-700">
                  Description
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
                  {product.description}
                </p>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+917307779000"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us
              </a>
              <a
                href="https://wa.me/917307779000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gold-500 hover:bg-gold-50 hover:text-gold-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
