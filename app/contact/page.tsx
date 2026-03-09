import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import BookingForm from "@/components/bookingform";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Urban Cleaning Services",

  description:
    "Contact Urban Cleaning Services today to book professional residential or office cleaning in Nairobi, Rongai, Kasarani, Kiambu and nearby areas. Fast response and affordable cleaning services.",

  keywords: [
    "contact cleaning services Nairobi",
    "book cleaning Nairobi",
    "cleaners near me Nairobi",
    "Urban Cleaning Services contact",
  ],
};

export default function Contact() {
  const whatsappNumber = "254752612044";
  const whatsappMessage =
    "Hello Urban Cleaning Services, I would like to book a cleaning service.";

  return (
    <main className="px-6 md:px-12 lg:px-20 py-20">
      
      {/* ================= HEADER ================= */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact Urban Cleaning Services
        </h1>
        <p className="text-gray-600 text-lg">
          Book a cleaning service, request a quote, or ask us anything — we’re ready to help.
        </p>
      </section>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {/* ================= CONTACT FORM ================= */}
        <section>
          <BookingForm />
        </section>

        {/* ================= WHATSAPP + CONTACT INFO ================= */}
        <section className="space-y-8">

          {/* WhatsApp CTA */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <MessageCircle className="mx-auto mb-4 text-green-600" size={40} />
            <h2 className="text-2xl font-semibold mb-3">
              Prefer WhatsApp?
            </h2>
            <p className="text-gray-600 mb-6">
              Chat with us directly for faster booking and instant responses.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Details */}
          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">
              Our Contact Details
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <Phone className="text-blue-600" size={20} />
                <span>+254 752 612 044</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-blue-600" size={20} />
                <span>info.urbancleaners@gmail.com</span>
              </li>

              <li className="flex items-center gap-3">
                <MapPin className="text-blue-600" size={20} />
                <span>Nairobi, Kenya</span>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="text-blue-600" size={20} />
                <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>

        </section>
      </div>
    </main>
  );
}