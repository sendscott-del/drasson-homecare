import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Shield,
  Users,
  Home,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Drasson Home Care Services",
  description:
    "Learn about Drasson Home Care Services — over 7 years of hands-on caregiving and CNA experience providing compassionate home care in Hyde Park and surrounding areas.",
};

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description:
      "We treat every client like family, guided by genuine care, kindness, and empathy in every visit.",
  },
  {
    icon: Shield,
    title: "Dignity & Respect",
    description:
      "Every client deserves to be treated with the dignity and respect they have earned over a lifetime.",
  },
  {
    icon: Users,
    title: "Trusted & Reliable",
    description:
      "With over 7 years of hands-on caregiving experience, families trust us to show up when it matters.",
  },
  {
    icon: Home,
    title: "Comfort of Home",
    description:
      "We help clients remain safe, comfortable, and independent in the place they love most — home.",
  },
];

const services = [
  "Personal care — bathing, grooming, dressing, and toileting",
  "Companion care — conversation, emotional support, games",
  "Meal preparation and nutritious home-cooked meals",
  "Light housekeeping, laundry, and errands",
  "Mobility support — walking, fall prevention, transfers",
  "Dementia and Alzheimer's care",
  "Support for seniors with memory loss",
  "Respite care for family caregivers",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About Drasson Home Care Services
            </h1>
            <p className="text-xl md:text-2xl text-teal-50/90 leading-relaxed">
              Founded with a passion for helping others — providing
              compassionate, high-quality home care to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Founder story */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Drasson Home Care Services was founded with a passion for
                  helping others. With over 7 years of hands-on caregiving and
                  CNA experience, we understand the needs of seniors and their
                  families.
                </p>
                <p>
                  We are committed to providing high-quality, compassionate
                  care that allows our clients to remain in the comfort of
                  their homes — safe, supported, and surrounded by the people
                  and places they love.
                </p>
                <p>
                  Your loved one&apos;s safety, comfort, and happiness are our
                  top priority.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-teal-900 mb-4">
                Our Promise
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Drasson Home Care Services, we treat every client like
                family. Our goal is to provide quality care with respect,
                dignity, and kindness — 24 hours a day, 7 days a week.
              </p>
              <div className="flex items-center gap-3 text-amber-600 font-semibold">
                <Heart className="w-5 h-5 fill-amber-500 text-amber-500" />
                Every client is family
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 text-center mb-12">
            What Guides Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-teal-800" />
                </div>
                <h3 className="text-lg font-semibold text-teal-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-8 text-center">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-start gap-3 bg-teal-50 rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-teal-900 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-colors font-semibold"
              >
                View Full Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Let&apos;s Talk About Your Care Needs
          </h2>
          <p className="text-teal-50/80 text-lg mb-8 max-w-2xl mx-auto">
            We&apos;d love to learn about you or your loved one and discuss how
            we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors font-semibold text-lg"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:7087041346"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"
            >
              <Phone className="w-5 h-5" />
              (708) 704-1346
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
