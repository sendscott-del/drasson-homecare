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
  title: "About Us — Drasson Home Care",
  description:
    "Learn about Drasson Home Care, a CNA-licensed home care provider in Hyde Park, Chicago, rooted in Nigerian cultural values of elder respect and dignity.",
};

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description:
      "Every interaction is guided by genuine care and empathy. We treat each client as family.",
  },
  {
    icon: Shield,
    title: "Dignity & Respect",
    description:
      "Rooted in Nigerian cultural values, we believe elders deserve the highest honor and respect.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description:
      "Based in Hyde Park, we are committed to strengthening and serving our local community.",
  },
  {
    icon: Home,
    title: "Independence at Home",
    description:
      "We help clients maintain their independence and quality of life in the comfort of their own home.",
  },
];

const services = [
  "Companionship and social engagement",
  "Personal care — bathing, grooming, and dressing assistance",
  "Nutritious meal preparation based on dietary needs",
  "Light housekeeping and home organization",
  "Medication reminders and health monitoring",
  "Escort to medical and personal appointments",
  "Specialized dementia and memory care support",
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
              Drasson Homecare
            </h1>
            <p className="text-xl md:text-2xl text-teal-50/90 leading-relaxed">
              Your trusted source for compassionate and reliable care.
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
                  Drasson Home Care was founded by a CNA-licensed caregiver
                  based in the heart of Hyde Park, Chicago. Driven by a deep
                  commitment to community care and inspired by Nigerian cultural
                  values that place the highest importance on respect for elders,
                  we set out to create a home care service that goes beyond
                  clinical tasks.
                </p>
                <p>
                  In our culture, caring for our elders is not just a duty
                  &mdash; it is an honor. We carry this belief into every home
                  we serve, ensuring that each client is treated with the
                  dignity, warmth, and respect they deserve. We use compassion
                  over clinical terminology, focusing on the person rather than
                  the condition.
                </p>
                <p>
                  Our mission is simple: to help every client maintain their
                  dignity, independence, and quality of life in the comfort of
                  their own home, while building trustworthy relationships that
                  families can rely on.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-teal-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                To provide compassionate, dignified, and reliable home care that
                empowers older adults and individuals with disabilities to thrive
                in the comfort of their own homes, building relationships
                founded on trust, respect, and genuine care.
              </p>
              <div className="flex items-center gap-3 text-amber-600 font-semibold">
                <Heart className="w-5 h-5 fill-amber-500 text-amber-500" />
                Dignity over clinical terminology
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
