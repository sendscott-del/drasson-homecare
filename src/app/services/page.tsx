import type { Metadata } from "next";
import Link from "next/link";
import {
  Bath,
  Heart,
  Home,
  ShoppingBag,
  Moon,
  CalendarHeart,
  ArrowRight,
  Phone,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Pricing — Drasson Home Care",
  description:
    "View our home care services and pricing. Personal care, companionship, support services, household logistics, and overnight care in Hyde Park, Chicago.",
};

const services = [
  {
    icon: Bath,
    title: "Personal Care",
    price: "$20/hour",
    description:
      "Hands-on assistance with the essential activities of daily living, always delivered with warmth and respect for your dignity.",
    details: [
      "Bathing and showering assistance",
      "Grooming and personal hygiene",
      "Dressing and wardrobe selection",
      "Toileting assistance",
      "Mobility support and transfers",
      "Skin care and comfort measures",
    ],
  },
  {
    icon: Heart,
    title: "Companionship & Social Engagement",
    price: "$25/hour",
    description:
      "Meaningful connection and social interaction to combat loneliness and keep spirits high.",
    details: [
      "Friendly conversation and active listening",
      "Games, puzzles, and recreational activities",
      "Reading and shared hobbies",
      "Walks and outdoor activities",
      "Technology assistance for video calls with family",
      "Dementia and memory care support",
    ],
  },
  {
    icon: Home,
    title: "Support Services",
    price: "$25/hour",
    description:
      "Help maintaining a clean, comfortable, and safe living environment along with nutritious home-cooked meals.",
    details: [
      "Light housekeeping and tidying",
      "Laundry and linen changes",
      "Meal planning and preparation",
      "Kitchen cleanup and dishwashing",
      "Medication reminders",
      "Mail sorting and light organization",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Household Logistics",
    price: "$28/hour",
    description:
      "Running errands and managing tasks outside the home so clients and families can focus on what matters most.",
    details: [
      "Grocery shopping and delivery",
      "Prescription pickup",
      "Escort to medical appointments",
      "Escort to personal appointments and social events",
      "Banking and post office errands",
      "General errands and tasks",
    ],
  },
  {
    icon: Moon,
    title: "Overnight Care",
    price: "$220 - $280",
    priceNote: "flat rate per night",
    description:
      "Peace of mind through the night with a trained caregiver present to provide assistance whenever needed.",
    details: [
      "Evening routine and bedtime assistance",
      "Nighttime safety monitoring",
      "Bathroom assistance during the night",
      "Morning wake-up and routine support",
      "Medication reminders",
      "Emergency response and comfort",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services & Pricing
            </h1>
            <p className="text-xl text-teal-50/90 leading-relaxed">
              Transparent pricing for quality home care. Every service is
              delivered with the compassion and dignity your loved one deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon and title */}
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                        <service.icon className="w-7 h-7 text-teal-800" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-teal-900 mb-2">
                          {service.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    {/* Price */}
                    <div className="md:text-right shrink-0">
                      <div className="text-2xl md:text-3xl font-bold text-amber-600">
                        {service.price}
                      </div>
                      {service.priceNote && (
                        <p className="text-gray-500 text-sm mt-1">
                          {service.priceNote}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Details */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <span className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holiday notice */}
      <section className="bg-amber-50 py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
              <CalendarHeart className="w-6 h-6 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-teal-900 mb-1">
                Holiday Pricing
              </h3>
              <p className="text-gray-700">
                A <strong className="text-amber-600">25% surcharge</strong>{" "}
                applies to all services on major holidays (New Year&apos;s Day,
                Memorial Day, Independence Day, Labor Day, Thanksgiving, and
                Christmas).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free consultation CTA */}
      <section className="bg-teal-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Not Sure Which Service Is Right?
          </h2>
          <p className="text-teal-50/80 text-lg mb-8 max-w-2xl mx-auto">
            We offer a free, no-obligation consultation to discuss your needs
            and create a personalized care plan. Every family is different, and
            we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors font-semibold text-lg"
            >
              Schedule a Consultation
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
