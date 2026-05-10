import Link from "next/link";
import Image from "next/image";
import brandLogo from "@/assets/abhient.jpeg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:items-start lg:gap-8">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="mb-4 inline-block rounded bg-white p-2">
              <Image
                src={brandLogo}
                alt="Abhishek Enterprises Logo"
                width={130}
                height={52}
                className="h-10 w-auto sm:h-11"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Your trusted partner for quality steel and alloy products and
              exceptional service. Connecting international industries with
              premium Indian manufacturing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 transition-colors hover:text-gold-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#who-we-are"
                  className="text-sm text-gray-400 transition-colors hover:text-gold-500"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-400 transition-colors hover:text-gold-500"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="text-sm text-gray-400 transition-colors hover:text-gold-500"
                >
                  Quality
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-gray-400 transition-colors hover:text-gold-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Sister Concerns */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Sister Concerns
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sister-concerns/surya-automotive"
                  className="text-sm text-gray-400 transition-colors hover:text-gold-500"
                >
                  Surya Automotives
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:abhishekenterprises4191@gmail.com"
                  className="flex items-center gap-2 transition-colors hover:text-gold-500"
                >
                  <svg
                    className="h-5 w-5 text-gold-500"
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
                  abhishekenterprises4191@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917307779000"
                  className="flex items-center gap-2 transition-colors hover:text-gold-500"
                >
                  <svg
                    className="h-5 w-5 text-gold-500"
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
                  +91 73077 79000
                </a>
              </li>
              <li className="flex items-start gap-2 pt-2">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-gold-500"
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
                <span className="leading-relaxed">
                  Ground, First Floor, Jaspal Bangar Near Khushi Kanda,
                  <br />
                  Yumuna Industrial Area, Ludhiana, Punjab
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Abhishek Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
