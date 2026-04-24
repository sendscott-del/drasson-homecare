import Link from "next/link";
import {
  Heart,
  Bath,
  UtensilsCrossed,
  Home,
  Footprints,
  Brain,
  Users,
  Phone,
  ArrowRight,
  Gift,
  Star,
  CheckCircle,
  Clock,
} from "lucide-react";

const services = [
  {
    icon: Bath,
    title: "Personal Care",
    description:
      "Bathing, grooming, dressing assistance, and toileting support — delivered with warmth and respect for dignity.",
  },
  {
    icon: Heart,
    title: "Companion Care",
    description:
      "Friendly conversation, emotional support, and engaging games and activities to brighten every day.",
  },
  {
    icon: UtensilsCrossed,
    title: "Daily Living Assistance",
    description:
      "Meal preparation, light housekeeping, laundry, and errands to keep the home comfortable and running smoothly.",
  },
  {
    icon: Footprints,
    title: "Mobility Support",
    description:
      "Walking assistance, fall prevention, and safe transfers to help clients move with confidence.",
  },
  {
    icon: Brain,
    title: "Specialized Care",
    description:
      "Dementia and Alzheimer's care, plus dedicated support for seniors living with memory loss.",
  },
  {
    icon: Users,
    title: "Respite Care",
    description:
      "Giving family caregivers a well-deserved break while their loved one receives quality care.",
  },
];

const whyChooseUs = [
  "Experienced and caring caregivers",
  "Personalized care plans for each client",
  "Affordable and flexible services",
  "Available 24 hours a day, 7 days a week",
  "Trusted, reliable, and compassionate care",
];

const testimonials = [
  {
    quote:
      "Drasson Home Care took great care of my mother. The caregiver was kind, patient, and very professional.",
    author: "Family Member",
  },
  {
    quote:
      "I highly recommend their services. They treated my father with respect and dignity.",
    author: "Satisfied Client",
  },
  {
    quote:
      "Reliable and trustworthy care. I feel at peace knowing my loved one is in good hands.",
    author: "Grateful Daughter",
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
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Available 24 hours a day, 7 days a week</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Welcome to Drasson Home Care Services
            </h1>
            <p className="text-lg md:text-xl text-teal-50/90 leading-relaxed mb-4">
              Compassionate and reliable home care services in Hyde Park and
              surrounding areas. We help seniors and individuals stay safe,
              comfortable, and independent in their own homes.
            </p>
            <p className="text-lg text-teal-50/80 leading-relaxed mb-8">
              At Drasson Home Care Services, we treat every client like family.
              Our goal is to provide quality care with respect, dignity, and
              kindness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors font-semibold text-lg"
              >
                FREE Consultation
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

      {/* Caregiver & Client Photo */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-teal-50 to-amber-50 aspect-[16/9] md:aspect-[21/9] relative">
            <img
              src="/caregiver-client.svg"
              alt="A Drasson Home Care caregiver sharing a warm moment with a senior client"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-4 italic">
            Care delivered with compassion, dignity, and respect — every visit,
            every day.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-4">
              Why Choose Drasson Home Care Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We understand how important it is to find the right care for your
              loved one. You can trust us to provide safe and dependable
              support.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChooseUs.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief About */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">
              Care You Can Trust
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              With over 7 years of hands-on caregiving and CNA experience, we
              understand the needs of seniors and their families. Your loved
              one&apos;s safety, comfort, and happiness are our top priority.
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
              Our Home Care Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Non-medical home care services designed to meet your daily needs.
              Our caregivers are trained to provide care with patience, respect,
              and dignity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Testimonials */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-xl p-6 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-amber-500"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <cite className="text-teal-900 font-semibold not-italic text-sm">
                  — {t.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-teal-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-4">
              Service Area
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We proudly serve <strong>Hyde Park and surrounding areas</strong>.
              If you are unsure whether we cover your area, please call us and
              we will be happy to assist.
            </p>
            <a
              href="tel:7087041346"
              className="inline-flex items-center gap-2 mt-6 bg-teal-900 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-colors font-semibold"
            >
              <Phone className="w-5 h-5" />
              Call (708) 704-1346
            </a>
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
            Call us today for a FREE consultation and let us create a care plan
            that works for you. We are here to support you and your loved ones
            24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors font-semibold text-lg"
            >
              FREE Consultation
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
