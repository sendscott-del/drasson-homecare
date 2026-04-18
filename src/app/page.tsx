import Link from "next/link";
import {
  Heart,
  Bath,
  UtensilsCrossed,
  Home,
  Pill,
  Car,
  Brain,
  Users,
  Phone,
  ArrowRight,
  Gift,
  Star,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Companionship",
    description:
      "Meaningful conversation, social engagement, and emotional support to brighten each day.",
  },
  {
    icon: Bath,
    title: "Personal Care",
    description:
      "Gentle assistance with bathing, grooming, and dressing while preserving dignity.",
  },
  {
    icon: UtensilsCrossed,
    title: "Meal Preparation",
    description:
      "Nutritious, home-cooked meals tailored to dietary needs and personal preferences.",
  },
  {
    icon: Home,
    title: "Light Housekeeping",
    description:
      "Keeping living spaces clean, comfortable, and safe for daily living.",
  },
  {
    icon: Pill,
    title: "Medication Reminders",
    description:
      "Timely reminders to help maintain consistent medication schedules.",
  },
  {
    icon: Car,
    title: "Escort to Appointments",
    description:
      "Safe, reliable transportation and accompaniment to medical and personal appointments.",
  },
  {
    icon: Brain,
    title: "Dementia Support",
    description:
      "Specialized, patient care for individuals living with dementia or memory challenges.",
  },
  {
    icon: Users,
    title: "Respite Care",
    description:
      "Giving family caregivers a well-deserved break while their loved one receives quality care.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,162,78,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6">
              <Heart className="w-4 h-4 text-amber-400" />
              <span>Compassionate Care in Hyde Park</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Welcome to Drasson Home Care Services
            </h1>
            <p className="text-lg md:text-xl text-teal-50/90 leading-relaxed mb-8">
              Your trusted partner in providing compassionate and reliable care
              for older adults and individuals with disabilities in the Hyde Park
              neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors font-semibold text-lg"
              >
                Get Started Today
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
        </div>
      </section>

      {/* Brief About */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">
              Care Rooted in Community
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded by a CNA-licensed caregiver based right here in Hyde Park,
              Drasson Home Care brings together professional healthcare
              expertise with deep-rooted Nigerian cultural values of elder
              respect and dignity. We believe every individual deserves to age
              with grace in the comfort of their own home.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-teal-800 font-semibold hover:text-teal-900 transition-colors"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive home care services designed to support independence,
              comfort, and quality of life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-teal-800" />
                </div>
                <h3 className="text-lg font-semibold text-teal-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-teal-900 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-colors font-semibold"
            >
              View Pricing & Details
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-amber-500 fill-amber-500"
                />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
              &ldquo;From the very first visit, I knew we had found the right
              care for my mother. The caregiver&apos;s skills and compassion
              made all the difference. Mom looks forward to each visit, and I
              finally have peace of mind knowing she&apos;s in excellent
              hands.&rdquo;
            </blockquote>
            <cite className="text-teal-900 font-semibold not-italic text-lg">
              &mdash; Sarah T.
            </cite>
            <p className="text-gray-500 text-sm mt-1">Hyde Park Family</p>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="bg-amber-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold text-teal-900 mb-2">
                Refer a Neighbor Program
              </h2>
              <p className="text-gray-700 text-lg">
                Know someone who could benefit from compassionate home care?
                Refer a neighbor and you both receive a{" "}
                <strong className="text-amber-600">
                  mutual 15% discount
                </strong>{" "}
                on services. Caring for our community starts with connection.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 bg-teal-900 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-colors font-semibold"
            >
              Contact Us to Refer
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-teal-50/80 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you or your loved one live comfortably and independently
            at home. Contact us today for a free consultation.
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
              Call (708) 704-1346
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
