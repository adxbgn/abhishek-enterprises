import Image from "next/image";
import Link from "next/link";
import manuImage from "@/assets/manu.avif";

export default function SisterConcernsPage() {
  const sisterConcerns = [
    {
      name: "Surya Automotive",
      href: "/sister-concerns/surya-automotive",
      logo: "/salogo.webp",
      description: "Specializing in Aluminum & Zinc Die Casting for global markets",
      established: "2016",
      location: "Ludhiana, Punjab, India",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src={manuImage}
            alt="Sister Concerns"
            fill
            className="object-cover opacity-40"
            style={{ objectPosition: "30% center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60"></div>
        </div>
        <div className="relative mx-auto flex max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8" style={{ minHeight: '500px' }}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              Trusted Partners
            </span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              Sister Concerns
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Our network of trusted partners and sister companies working together
              to deliver excellence
            </p>
          </div>
        </div>
      </section>

      {/* Sister Concerns Listing */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
              Our Network
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Sister Concerns
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              We work closely with our sister companies to ensure consistent quality,
              competitive pricing, and timely global delivery.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-xl grid-cols-1 justify-items-stretch gap-8">
            {sisterConcerns.map((concern) => (
              <Link
                key={concern.href}
                href={concern.href}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-xl bg-white shadow-md">
                  <Image
                    src={concern.logo}
                    alt={`${concern.name} Logo`}
                    width={80}
                    height={80}
                    className="h-auto w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gold-500 transition-colors">
                  {concern.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  {concern.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="font-medium">Est. {concern.established}</span>
                  <span className="text-gray-400">•</span>
                  <span>{concern.location}</span>
                </div>
                <div className="mt-6 flex items-center text-sm font-semibold text-gold-500 group-hover:text-gold-600">
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
