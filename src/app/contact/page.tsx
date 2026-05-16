import type { Metadata } from "next";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Drasson Home Care",
  description:
    "Get in touch with Drasson Home Care Services in Hyde Park and surrounding areas. Call or text (708) 704-1346, or email drassoncare@gmail.com for a FREE consultation.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-teal-50/90 leading-relaxed">
              Reach us directly by phone, text, or email. We&apos;re happy to
              answer questions and set up a FREE consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Direct contact CTAs */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a
              href="tel:7087041346"
              className="group flex flex-col items-center text-center bg-teal-900 text-white rounded-2xl p-8 hover:bg-teal-800 transition-colors shadow-sm"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <Phone className="w-7 h-7" />
              </div>
              <h2 className="text-lg font-semibold mb-1">Call us</h2>
              <p className="text-2xl font-bold">(708) 704-1346</p>
              <p className="text-sm text-teal-100/80 mt-2">
                Tap to call from your phone
              </p>
            </a>

            <a
              href="sms:+17087041346"
              className="group flex flex-col items-center text-center bg-amber-500 text-white rounded-2xl p-8 hover:bg-amber-400 transition-colors shadow-sm"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h2 className="text-lg font-semibold mb-1">Text us</h2>
              <p className="text-2xl font-bold">(708) 704-1346</p>
              <p className="text-sm text-white/85 mt-2">
                Tap to open a new message
              </p>
            </a>

            <a
              href="mailto:drassoncare@gmail.com"
              className="group flex flex-col items-center text-center bg-teal-50 text-teal-900 rounded-2xl p-8 hover:bg-teal-100 transition-colors shadow-sm border border-teal-100"
            >
              <div className="w-14 h-14 bg-teal-900/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-900/20 transition-colors">
                <Mail className="w-7 h-7 text-teal-900" />
              </div>
              <h2 className="text-lg font-semibold mb-1">Email us</h2>
              <p className="text-xl font-bold break-all">
                drassoncare@gmail.com
              </p>
              <p className="text-sm text-teal-900/70 mt-2">
                Tap to open your email app
              </p>
            </a>
          </div>

          {/* Secondary info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-teal-800" />
              </div>
              <div>
                <h3 className="font-semibold text-teal-900">Service Area</h3>
                <p className="text-gray-600 text-sm">
                  Hyde Park and surrounding areas, Chicago, IL
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-teal-800" />
              </div>
              <div>
                <h3 className="font-semibold text-teal-900">Availability</h3>
                <p className="text-gray-600 text-sm">
                  Flexible scheduling — evenings, weekends, overnight, and 24/7
                  care.
                </p>
              </div>
            </div>

            <a
              href="https://www.drassonhomecare.com"
              className="flex items-start gap-3 group"
            >
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                <Globe className="w-5 h-5 text-teal-800" />
              </div>
              <div>
                <h3 className="font-semibold text-teal-900">Website</h3>
                <p className="text-gray-600 text-sm group-hover:text-teal-800 transition-colors">
                  www.drassonhomecare.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
