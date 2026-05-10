import Image from "next/image";
import { Metadata } from "next";
import forgingImage from "@/assets/forging.avif";
import manuImage from "@/assets/manu.avif";

export const metadata: Metadata = {
  title: "Quality Assurance - ISO Certified Quality Standards",
  description: "Learn about Abhishek Enterprises quality assurance processes. ISO 9001:2015 certified quality standards for steel and alloy products. Comprehensive quality control and inspection procedures.",
  alternates: {
    canonical: "/quality",
  },
  keywords: [
    "quality assurance",
    "ISO certified",
    "quality control",
    "steel quality",
    "quality standards",
    "inspection procedures",
    "quality management",
  ],
  openGraph: {
    title: "Quality Assurance - ISO Certified Quality Standards | Abhishek Enterprises",
    description: "ISO 9001:2015 certified quality standards and comprehensive quality control processes for steel and alloy products.",
    url: "/quality",
  },
};

export default function QualityPage() {
  const qualityProcedures = [
    {
      title: "Aluminium PDC (Pressure Die Casting)",
      items: [
        "Alloy verification with MTC and melt process control",
        "Critical dimensions, porosity, and surface finish inspection",
      ],
    },
    {
      title: "Investment Casting",
      items: [
        "Chemical & mechanical compliance as per MTC",
        "Dimensional accuracy and surface integrity verification",
      ],
    },
    {
      title: "Hot Forged Components",
      items: [
        "Raw material validation with MTC",
        "Heat treatment and hardness verification",
      ],
    },
    {
      title: "Sheet Metal & Fabrication",
      items: [
        "Material grade and thickness verification with MTC",
        "Weld quality, fitment, and geometry inspection",
      ],
    },
    {
      title: "Screw Forging / Fasteners",
      items: [
        "Wire rod certification verified through MTC",
        "Thread gauging and mechanical property inspection",
      ],
    },
    {
      title: "U-Bolt Parts",
      items: [
        "Bar material traceability with MTC",
        "Bend accuracy, thread quality, and coating inspection",
      ],
    },
  ];

  const pdiIncludes = [
    {
      icon: (
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Material Verification (MTC)",
      description: "Raw material grade and certification validated",
    },
    {
      icon: (
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
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      title: "Dimensional & Visual Inspection",
      description: "Conformance to approved drawings and specifications",
    },
    {
      icon: (
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Process & Finish Validation",
      description: "Heat treatment, coating, welding, machining as applicable",
    },
    {
      icon: (
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
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
      ),
      title: "Identification & Packaging",
      description: "Batch traceability, labeling, and damage-free packing",
    },
    {
      icon: (
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Final Quality Approval",
      description: "Dispatch clearance with inspection record",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src={forgingImage}
            alt="Quality Assurance"
            fill
            className="object-cover opacity-40"
            style={{ objectPosition: "30% center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60"></div>
        </div>
        <div className="relative mx-auto flex max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8" style={{ minHeight: '500px' }}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              Quality Excellence
            </span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              Quality Assurance
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Our commitment to excellence through rigorous quality control and
              international standards
            </p>
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Side - Image */}
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src={manuImage}
                alt="Quality Process"
                fill
                className="object-cover"
                style={{ objectPosition: "30% center" }}
              />
            </div>

            {/* Right Side - Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
                Our Commitment
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Quality Policy
              </h2>
              <p className="mt-6 text-base leading-relaxed text-gray-600">
                We are committed to delivering consistent, defect-free components that
                meet customer, statutory, and international requirements.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Our quality system is built on ISO-aligned processes, Pre-Dispatch
                Inspection (PDI), and full Material Test Certificate (MTC) traceability,
                ensuring reliability, transparency, and continuous improvement across all
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PDI & MTC Section */}
      <section className="bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
              Pre-Dispatch Inspection
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              PDI & <span className="text-gold-500">MTC</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-300">
              All products undergo a documented Pre-Dispatch Inspection prior to
              shipment, ensuring every component meets our stringent quality standards.
            </p>
          </div>

          {/* PDI Includes Cards */}
          <div className="mx-auto mt-16 max-w-5xl">
            {/* First 3 cards in 3 columns */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pdiIncludes.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="group rounded-xl bg-gray-700 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500 text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            {/* Last 2 cards in 2 columns */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              {pdiIncludes.slice(3, 5).map((item, index) => (
                <div
                  key={index + 3}
                  className="group rounded-xl bg-gray-700 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500 text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Procedures Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
              Industry Standards
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Quality Procedures by Industry
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Our comprehensive quality procedures ensure compliance across all
              manufacturing processes and industry standards.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {qualityProcedures.map((procedure, index) => (
              <div
                key={index}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {procedure.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {procedure.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold-500">
                        <svg
                          className="h-3 w-3 text-white"
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
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
