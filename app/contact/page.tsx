import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

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
        <section className="bg-white border rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">
            Request a Cleaning Service
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="e.g. 07XXXXXXXX"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Location / Address
              </label>
              <input
                type="text"
                placeholder="Your area in Nairobi"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Service Needed
              </label>
              <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Residential Cleaning</option>
                <option>Office & Shop Cleaning</option>
                <option>Move-In / Move-Out Cleaning</option>
                <option>Post-Construction Cleaning</option>
                <option>Sofa, Carpet & Mattress Cleaning</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message (Optional)
              </label>
              <textarea
                rows={4}
                placeholder="Any special instructions?"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Request Service
            </button>
          </form>
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
                <span>info@urbancleaning.co.ke</span>
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