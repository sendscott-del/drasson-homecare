"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [openedAtPath, setOpenedAtPath] = useState<string | null>(null);
  const pathname = usePathname();
  const isOpen = openedAtPath !== null && openedAtPath === pathname;

  const toggle = () => setOpenedAtPath(isOpen ? null : pathname);

  return (
    <div className="md:hidden">
      <button
        onClick={toggle}
        className="text-gray-700 p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <nav className="flex flex-col p-4 gap-3">
            <Link
              href="/"
              className="text-gray-700 hover:text-teal-800 font-medium py-2 px-3 rounded-lg hover:bg-teal-50 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-teal-800 font-medium py-2 px-3 rounded-lg hover:bg-teal-50 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-teal-800 font-medium py-2 px-3 rounded-lg hover:bg-teal-50 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="bg-teal-900 text-white text-center px-5 py-2 rounded-lg hover:bg-teal-800 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
