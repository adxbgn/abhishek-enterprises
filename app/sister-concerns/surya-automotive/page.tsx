import Image from "next/image";
import { Metadata } from "next";
import manuImage from "@/assets/manu.avif";
import saCertificate from "@/assets/sacert.jpeg";

export const metadata: Metadata = {
  title: "Surya Automotive - Aluminum & Zinc Die Casting",
  description: "Surya Automotive specializes in High Pressure Die Casting (HPDC) of Aluminum & Zinc components. ISO 9001:2015 certified manufacturing facility serving global automotive and industrial markets.",
  alternates: {
    canonical: "/sister-concerns/surya-automotive",
  },
  keywords: [
    "Surya Automotive",
    "die casting",
    "aluminum die casting",
    "zinc die casting",
    "HPDC",
    "high pressure die casting",
    "automotive components",
    "die casting India",
  ],
  openGraph: {
    title: "Surya Automotive - Aluminum & Zinc Die Casting",
    description: "ISO 9001:2015 certified High Pressure Die Casting facility specializing in Aluminum & Zinc components for automotive and industrial markets.",
    url: "/sister-concerns/surya-automotive",
  },
};

export default function SuryaAutomotivePage() {
  const coreServices = [
    "High Pressure Die Casting (HPDC) - Aluminum & Zinc",
    "Automotive logistics and transportation",
    "Vehicle handling and movement solutions",
    "Supply chain support services",
    "Customized operational solutions based on client requirements",
  ];

  const processSteps = [
    { number: 1, title: "Raw Material Arrival", description: "Receipt and verification of incoming materials" },
    { number: 2, title: "Grade Analysis", description: "Spectroscopy conducted to ensure grade compliance" },
    { number: 3, title: "Furnace Preparation", description: "Post-use cleaning and temperature-controlled melting in electric furnace" },
    { number: 4, title: "HPDC Shot Pull", description: "Accurate pour and die casting under high pressure" },
    { number: 5, title: "Incoming & Inspection", description: "Castings examined for defects and dimensional accuracy" },
    { number: 6, title: "Processing", description: "Approved components directed for further operations" },
    { number: 7, title: "Fettling & Lancer", description: "Castings trimmed and smoothed to remove excess material" },
    { number: 8, title: "Drilling", description: "Drilling operations executed as per design requirements" },
    { number: 9, title: "Milling/Reaming", description: "Critical surfaces and holes machined to specifications" },
    { number: 10, title: "Shotblast/Vibro", description: "Component surfaces treated for finish and cleanliness" },
    { number: 11, title: "QC & Final Inspection", description: "Final dimensional and visual inspection before dispatch" },
    { number: 12, title: "Packaging", description: "Secure packaging to ensure damage-free transportation" },
  ];

  const strengths = [
    "Experienced management and operations team",
    "Strong understanding of automotive logistics requirements",
    "Focus on reliability and consistency",
    "Scalable business model to support growth",
    "ISO 9001:2015 Certified",
    "Fully equipped tool room and R&D capabilities",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src={manuImage}
            alt="Surya Automotive"
            fill
            className="object-cover opacity-40"
            style={{ objectPosition: "30% center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60"></div>
        </div>
        <div className="relative mx-auto flex max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8" style={{ minHeight: '500px' }}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              Sister Concern
            </span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              Surya Automotive
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Specializing in Aluminum & Zinc Die Casting for global markets
            </p>
          </div>
        </div>
      </section>

      {/* Surya Automotive Header */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-xl bg-white shadow-lg">
              <Image
                src="/salogo.webp"
                alt="Surya Automotive Logo"
                width={100}
                height={100}
                className="h-auto w-auto object-contain"
              />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Surya Automotive
            </h2>
            <p className="mt-4 text-lg font-semibold text-gray-700">
              GST Number: 03ACZFS5409G1ZS
            </p>
            <div className="mt-4 text-base leading-relaxed text-gray-600">
              <p>Industrial Area - C, Dhandari Kalan, Sua Road, Ludhiana</p>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
              <span className="font-medium">Founded in 2016</span>
              <span className="text-gray-400">•</span>
              <span>Ludhiana, Punjab, India</span>
              <span className="text-gray-400">•</span>
              <span className="font-semibold text-gold-500">ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Side - Image */}
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src={manuImage}
                alt="Surya Automotive"
                fill
                className="object-cover"
                style={{ objectPosition: "30% center" }}
              />
            </div>

            {/* Right Side - Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
                About Us
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Our Story
              </h2>
              <p className="mt-6 text-base leading-relaxed text-gray-600">
                Surya Automotive was established in 2016, specializing in Aluminum & Zinc Die Casting. We are a growing organization
                engaged in the automotive logistics and services sector, focusing on
                delivering reliable, efficient, and scalable solutions to meet the evolving
                needs of the automotive industry.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                With a strong operational foundation and customer-first approach, Surya
                Automotive aims to build long-term partnerships across the value chain.
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-gray-900">Markets Served:</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <span className="rounded-lg bg-gold-500 px-4 py-2 text-sm font-medium text-white">
                    India
                  </span>
                  <span className="rounded-lg bg-gold-500 px-4 py-2 text-sm font-medium text-white">
                    U.S.A.
                  </span>
                  <span className="rounded-lg bg-gold-500 px-4 py-2 text-sm font-medium text-white">
                    Europe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
              Our Values
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Mission & Vision
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gold-500">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                To become a trusted and preferred partner in the automotive ecosystem
                by delivering consistent quality, operational excellence, and
                sustainable growth.
              </p>
            </div>

            <div className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gold-500">
                <svg
                  className="h-8 w-8 text-white"
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
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                To provide dependable automotive solutions through process-driven
                operations, skilled manpower, and continuous improvement while
                maintaining transparency and commitment to stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
              What We Offer
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Core Services
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="group rounded-xl bg-gray-700 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-base font-medium leading-relaxed text-white">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure & Production Capacity */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gold-500">
                <svg
                  className="h-8 w-8 text-white"
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
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Infrastructure</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Surya Automotive was established in 2016 over a land area of 8,000 sq.
                ft. with 2 120 ton die-casting machines. Today, we have expanded our
                manufacturing facilities with a fully equipped tool room and 4 high
                pressure die-casting machines with a capacity of 180 tons over a land
                area of 15,000 sq. ft.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                At the moment, we have power backup available along with CNCs and VMCs
                and a defined space for finishing process related equipment. Our
                existing units produce around 1500 tons of fully finished components of
                various dimensions, whose weight can vary from a few grams up to 2 kgs.
                And as for the sheet metal and forging components we have a capacity of
                30 ton to 200 ton power presses.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gold-500">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Production Capacity</h3>
              <div className="mt-8 space-y-6">
                <div className="rounded-lg bg-gray-50 p-6">
                  <p className="text-sm font-medium text-gray-600">Casting Weight</p>
                  <p className="mt-2 text-3xl font-bold text-gold-500">Up to 2 Kgs</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <p className="text-sm font-medium text-gray-600">Annual Production Volume</p>
                  <p className="mt-2 text-3xl font-bold text-gold-500">1500 Tons</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <p className="text-sm font-medium text-gray-600">Average Lead Time</p>
                  <p className="mt-2 text-3xl font-bold text-gold-500">3 Weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HPDC Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
              Manufacturing Excellence
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              High Pressure Die Casting (HPDC)
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              High Pressure Die Casting (HPDC) is one of the most advanced methods in
              modern manufacturing, and also one of the most challenging to perfect. In
              this process, molten aluminum or zinc is forced into a steel mold at very
              high pressure and speed, solidifying within seconds. This allows us to
              produce intricate shapes, thin walls, and smooth surfaces with remarkable
              consistency.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Even the smallest variation in temperature, pressure, or timing can affect
              the outcome, making precision and control absolutely critical. At Surya
              Automotive, our HPDC lines use state-of-the-art machines and quality
              systems to ensure accuracy at every step. Our team focuses on tooling,
              process control, and quality checks to deliver castings that are strong,
              lightweight, and dimensionally precise. This process is essential for
              components like automotive parts, LED housings, and structural
              applications where reliability and performance cannot be compromised.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
              Our Process
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Process Flow
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="group rounded-xl bg-gray-700 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold-500 text-lg font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Raw Material Grades & Additional Info */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Raw Material Grades */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Raw Material Grades</h3>
              <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">ALUMINIUM</h4>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                      ADC12
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                      LM24
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                      A380
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                      A356
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                      A360
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                      AC46500
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                      AC46000
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                      AC46100
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                      Al-Mg5s11
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                      AlMg6
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                      Al-Si10Mg
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                      Al-Si7Mg
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                      Al-Si9Cu3Mg
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">ZINC</h4>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                      ZAMAK 3
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                      ZAMAK 5
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Strengths */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Our Strengths</h3>
              <ul className="mt-6 space-y-4">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold-500">
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
                    <span className="text-base leading-relaxed text-gray-600">
                      {strength}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      

      {/* Certificate Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
              Certification
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              ISO 9001:2015 Certificate
            </h2>
            <div className="mt-12 flex justify-center">
              <div className="relative w-full max-w-xs overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                <Image
                  src={saCertificate}
                  alt="ISO 9001:2015 Certificate - Surya Automotive"
                  width={400}
                  height={300}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
