import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Drasson Home Care",
  description:
    "Get in touch with Drasson Home Care in Hyde Park, Chicago. Call (708) 704-1346 or email drassonhomecareservices@gmail.com for a free consultation.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-teal-50/90 leading-relaxed">
              If you have any questions about our services or would like to
              learn more, our team is here to help. We&apos;d love to hear from
              you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-teal-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you need care for yourself or a loved one, we&apos;re
                here to answer your questions and help you find the right
                support.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:7087041346"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                    <Phone className="w-5 h-5 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal-900">Phone</h3>
                    <p className="text-gray-600 group-hover:text-teal-800 transition-colors">
                      (708) 704-1346
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:drassonhomecareservices@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                    <Mail className="w-5 h-5 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal-900">Email</h3>
                    <p className="text-gray-600 group-hover:text-teal-800 transition-colors">
                      drassonhomecareservices@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal-900">Location</h3>
                    <p className="text-gray-600">Hyde Park, Chicago, IL</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal-900">
                      Availability
                    </h3>
                    <p className="text-gray-600">
                      We offer flexible scheduling including evenings, weekends,
                      and overnight care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-teal-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
