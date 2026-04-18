import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { Phone, Mail, Menu, X } from "lucide-react";
import "./globals.css";
import MobileNav from "./MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drasson Home Care — Compassionate Care in Hyde Park, Chicago",
  description:
    "Drasson Home Care provides compassionate, reliable home care services for older adults and individuals with disabilities in Hyde Park, Chicago. Personal care, companionship, meal prep, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-800">
        {/* Top bar with phone */}
        <div className="bg-teal-900 text-white text-sm">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
            <a
              href="tel:7087041346"
              className="flex items-center gap-2 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (708) 704-1346
            </a>
            <a
              href="mailto:drassoncare@gmail.com"
              className="flex items-center gap-2 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              drassoncare@gmail.com
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <span className="text-xl font-bold text-teal-900">
                  Drasson Home Care
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-teal-800 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-teal-800 font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-teal-800 font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="bg-teal-900 text-white px-5 py-2 rounded-lg hover:bg-teal-800 transition-colors font-medium"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile nav toggle */}
            <MobileNav />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-teal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand column */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">D</span>
                  </div>
                  <span className="text-lg font-bold">Drasson Home Care</span>
                </div>
                <p className="text-teal-50/80 text-sm leading-relaxed">
                  Serving the Hyde Park community with compassion and dignity.
                </p>
              </div>

              {/* Quick links */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-teal-50/80 hover:text-amber-300 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-teal-50/80 hover:text-amber-300 transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-teal-50/80 hover:text-amber-300 transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-teal-50/80 hover:text-amber-300 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact info */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
                <div className="space-y-3 text-sm">
                  <a
                    href="tel:7087041346"
                    className="flex items-center gap-2 text-teal-50/80 hover:text-amber-300 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (708) 704-1346
                  </a>
                  <a
                    href="mailto:drassoncare@gmail.com"
                    className="flex items-center gap-2 text-teal-50/80 hover:text-amber-300 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    drassoncare@gmail.com
                  </a>
                  <p className="text-teal-50/80">Hyde Park, Chicago, IL</p>
                </div>
              </div>
            </div>

            <div className="border-t border-teal-800 mt-8 pt-6 text-center text-sm text-teal-50/60">
              &copy; {new Date().getFullYear()} Drasson Home Care. All rights
              reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
