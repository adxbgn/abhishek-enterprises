"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import brandLogo from "@/assets/abhient.jpeg";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/#who-we-are" },
    { name: "Quality", href: "/quality" },
    { name: "Sister Concerns", href: "/sister-concerns" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/#contact" },
  ];

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      // If already on home page, scroll to contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home page with hash
      router.push("/#contact");
      // Scroll to contact section after navigation
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const handleWhoWeAreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      // If already on home page, scroll to who we are section
      const whoWeAreSection = document.getElementById("who-we-are");
      if (whoWeAreSection) {
        whoWeAreSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home page with hash
      router.push("/#who-we-are");
      // Scroll to who we are section after navigation
      setTimeout(() => {
        const whoWeAreSection = document.getElementById("who-we-are");
        if (whoWeAreSection) {
          whoWeAreSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  // Handle scrolling when page loads with hash
  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash === "#contact") {
        setTimeout(() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else if (hash === "#who-we-are") {
        setTimeout(() => {
          const whoWeAreSection = document.getElementById("who-we-are");
          if (whoWeAreSection) {
            whoWeAreSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={brandLogo}
              alt="Abhishek Enterprises Logo"
              width={180}
              height={72}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {menuItems.map((item) => {
              if (item.href === "/#contact") {
                return (
                  <a
                    key={item.href}
                    href="/#contact"
                    onClick={handleContactClick}
                    className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                      pathname === "/"
                        ? "text-gray-700 hover:text-gold-500"
                        : "text-gray-700 hover:text-gold-500"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              }
              if (item.href === "/#who-we-are") {
                return (
                  <a
                    key={item.href}
                    href="/#who-we-are"
                    onClick={handleWhoWeAreClick}
                    className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                      pathname === "/"
                        ? "text-gray-700 hover:text-gold-500"
                        : "text-gray-700 hover:text-gold-500"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                    isActive(item.href)
                      ? "text-gold-500"
                      : "text-gray-700 hover:text-gold-500"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Contact Info and CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-700">
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
              <span className="font-medium">+91 73077 79000</span>
            </div>
            <a
              href="/#contact"
              onClick={handleContactClick}
              className="rounded bg-gold-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => {
                if (item.href === "/#contact") {
                  return (
                    <a
                      key={item.href}
                      href="/#contact"
                      onClick={handleContactClick}
                      className="px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors text-gray-700 hover:text-gold-500"
                    >
                      {item.name}
                    </a>
                  );
                }
                if (item.href === "/#who-we-are") {
                  return (
                    <a
                      key={item.href}
                      href="/#who-we-are"
                      onClick={handleWhoWeAreClick}
                      className="px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors text-gray-700 hover:text-gold-500"
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                      isActive(item.href)
                        ? "text-gold-500"
                        : "text-gray-700 hover:text-gold-500"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="mt-4 border-t border-gray-200 pt-4">
                <a
                  href="/#contact"
                  onClick={handleContactClick}
                  className="mx-3 block rounded bg-gold-500 px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-gold-600"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
