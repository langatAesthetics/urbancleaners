import Link from "next/link";
import { CheckCircle, MapPin, Users, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <main className="w-full">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            About Urban Cleaning Services
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Fast. Fresh. Spotless. We provide professional residential and commercial cleaning services across Nairobi and surrounding areas.
          </p>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Reliable Cleaning You Can Trust
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Urban Cleaning Services is dedicated to delivering high-quality,
              reliable, and affordable cleaning solutions for homes, offices,
              and commercial spaces. We understand that a clean environment
              improves comfort, productivity, and overall wellbeing.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you need standard home cleaning, deep cleaning,
              move-in/move-out services, post-construction cleanup, or
              upholstery cleaning, our team is committed to leaving your space
              fresh, organized, and spotless.
            </p>

            <div className="mt-8 space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 w-5 h-5" />
                <span>Trained and professional cleaning team</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 w-5 h-5" />
                <span>Transparent pricing with no hidden charges</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 w-5 h-5" />
                <span>Flexible scheduling to fit your routine</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 w-5 h-5" />
                <span>Attention to detail in every service</span>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid gap-6">

            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-blue-600 w-6 h-6" />
                <h3 className="font-semibold text-gray-900">
                  Residential & Commercial
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                We serve both homes and businesses with tailored cleaning
                solutions designed to meet different space requirements.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="text-blue-600 w-6 h-6" />
                <h3 className="font-semibold text-gray-900">
                  Professional Standards
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                Our team follows proper cleaning procedures to ensure hygiene,
                safety, and high-quality results for every client.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-blue-600 w-6 h-6" />
                <h3 className="font-semibold text-gray-900">
                  Areas We Serve
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                Rongai, Nairobi CBD, Kasarani, Kiambu and surrounding areas.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-semibold">
            Ready for a Cleaner, Healthier Space?
          </h2>
          <p className="mt-4 text-blue-100">
            Contact Urban Cleaning Services today and let our team handle the cleaning while you focus on what matters most.
          </p>

          <Link
            href="https://wa.me/254752612044"
            target="_blank"
            className="mt-8 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Book via WhatsApp
          </Link>
        </div>
      </section>

    </main>
  );
}