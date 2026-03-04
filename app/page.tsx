import Link from "next/link";
import {
  Zap,
  Wallet,
  Sparkles,
  Clock,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Fast. Fresh. <br />
              <span className="text-blue-600">
                Spotless Cleaning Services
              </span>
            </h1>

            <p className="mt-4 text-gray-800 max-w-xl">
              Urban Cleaning Services provides professional residential,
              office, move-in/move-out, post-construction, sofa, carpet,
              and mattress cleaning services in Nairobi and surrounding areas.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="https://wa.me/254752612044"
                target="_blank"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Book via WhatsApp
              </Link>

              <Link
                href="/services"
                className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="max-h-80 overflow-hidden">
            <Image
              src="/hero.jpg"
              alt="Urban Cleaning Services"
              width={500}
              height={350}
              priority
              className="w-auto"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Choose Urban Cleaning Services
          </h2>

          <p className="mt-3 text-gray-800">
            Professional, reliable, and affordable cleaning tailored to your home and business needs.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            <Feature
              icon={<Zap />}
              title="Fast Response"
              description="Quick booking and flexible scheduling across Nairobi."
            />
            <Feature
              icon={<Wallet />}
              title="Affordable Pricing"
              description="Transparent rates with no hidden charges."
            />
            <Feature
              icon={<Sparkles />}
              title="Deep & Thorough Cleaning"
              description="Attention to detail for spotless homes and offices."
            />
            <Feature
              icon={<Clock />}
              title="Reliable & On Time"
              description="We arrive as scheduled and get the job done efficiently."
            />
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Residential Cleaning Pricing
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with flexible Standard and Deep cleaning options.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <PricingCard
              title="Bedsitter"
              price="KSh 2,500"
              description="Perfect for compact living spaces."
              features={[
                "Standard – KSh 2,500",
                "Deep – KSh 3,500",
                "Kitchen, bathroom & floors included",
                "Estimated 3–4 hours",
              ]}
            />

            <PricingCard
              title="1–2 Bedroom"
              price="From KSh 3,000"
              highlight
              description="Most popular choice for families."
              features={[
                "1 Bedroom – 3,000 / 4,500 (Deep)",
                "2 Bedroom – 4,000 / 5,500 (Deep)",
                "Full house dusting & mopping",
                "Bathroom & kitchen deep scrub",
              ]}
            />

            <PricingCard
              title="3 Bedroom"
              price="From KSh 5,000"
              description="Ideal for larger households."
              features={[
                "Standard – KSh 5,000",
                "Deep – KSh 7,500",
                "Detailed cleaning service",
                "Balcony & windows included",
              ]}
            />

          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            How It Works
          </h2>

          <p className="mt-3 text-gray-800">
            Simple, reliable steps to a cleaner home or office.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            <Step number="1" text="Book via Call or WhatsApp" />
            <Step number="2" text="Confirm Service & Schedule" />
            <Step number="3" text="We Arrive & Clean Thoroughly" />
            <Step number="4" text="Enjoy a Fresh, Spotless Space" />
          </div>
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <div className="w-12 h-12 mx-auto flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-800">{description}</p>
    </div>
  );
}

function PricingCard({
  title,
  price,
  description,
  features,
  highlight,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative p-8 rounded-2xl shadow-md transition ${
        highlight
          ? "bg-blue-600 text-white scale-105"
          : "bg-white text-gray-900"
      }`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-3xl font-bold">
        {price}
      </p>

      <p className={`mt-3 text-sm ${highlight ? "text-blue-100" : "text-gray-600"}`}>
        {description}
      </p>

      <ul className={`mt-6 space-y-3 text-sm ${highlight ? "text-blue-100" : "text-gray-700"}`}>
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckCircle className={`w-4 h-4 mt-1 ${highlight ? "text-white" : "text-blue-600"}`} />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href="https://wa.me/254752612044"
        target="_blank"
        className={`mt-8 inline-block w-full py-3 rounded-lg font-medium transition ${
          highlight
            ? "bg-white text-blue-600 hover:bg-gray-100"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Book Now
      </Link>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="text-blue-600 text-2xl font-bold mb-2">{number}</div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}