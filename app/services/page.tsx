import Link from "next/link";
import {
  Hammer,
  Sofa,
  CheckCircle,
} from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

interface ServiceBlockProps {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
}

interface ComparisonCardProps {
  title: string;
  features: string[];
  highlight?: boolean;
}

export default function Services() {
  return (
    <main className="w-full">

      {/* ================= HEADER ================= */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Professional Cleaning Services
          </h1>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Reliable, affordable and detail-focused cleaning solutions
            for homes, offices and commercial spaces across Nairobi.
          </p>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">

            <ServiceBlock
              image="/residential.jpg"
              title="Residential Cleaning"
              description="Professional standard and deep cleaning for homes."
              items={[
                "Bedsitter – From KSh 2,500",
                "1 Bedroom – From KSh 3,000",
                "2 Bedroom – From KSh 4,000",
                "3 Bedroom – From KSh 5,000",
              ]}
            />

            <ServiceBlock
              image="/office.jpg"
              title="Office & Shop Cleaning"
              description="Clean and productive workspaces."
              items={[
                "Small Office – From KSh 3,000",
                "Medium Office – From KSh 5,000",
                "Large Office – Quotation after visit",
                "Monthly contracts available",
              ]}
            />

            <ServiceBlock
              image="/emptyroom.jpg"
              title="Move-In / Move-Out Cleaning"
              description="Thorough cleaning before or after relocation."
              items={[
                "Bedsitter – From KSh 1,500",
                "1 Bedroom – From KSh 2,500",
                "2 Bedroom – From KSh 4,000",
                "3 Bedroom – From KSh 5,500",
              ]}
            />

          </div>
        </div>
      </section>

      {/* ================= STANDARD VS DEEP ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Standard vs Deep Cleaning
          </h2>
          <p className="mt-4 text-gray-600">
            Choose the cleaning level that fits your needs.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 text-left">

            <ComparisonCard
              title="Standard Cleaning"
              features={[
                "Sweeping & mopping floors",
                "Dusting furniture & surfaces",
                "Cleaning sinks & taps",
                "Bathroom & toilet cleaning",
                "Emptying trash bins",
              ]}
            />

            <ComparisonCard
              title="Deep Cleaning"
              highlight
              features={[
                "Inside cabinets & drawers",
                "Tile & grout scrubbing",
                "Fridge & oven cleaning",
                "Wardrobes & skirting boards",
                "Window & balcony cleaning",
              ]}
            />

          </div>
        </div>
      </section>

      {/* ================= SPECIALIZED SERVICES ================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">
              Specialized Cleaning Services
            </h2>
            <p className="mt-4 text-gray-600">
              Professional cleaning for larger and detailed spaces.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-2">

            <SpecialService
              icon={<Hammer />}
              title="Post-Construction Cleaning"
              description="Dust removal, stain cleaning and full property preparation."
              items={[
                "Small House – From KSh 6,000",
                "Medium House – From KSh 10,000",
                "Large Building – Quotation after inspection",
              ]}
            />

            <SpecialService
              icon={<Sofa />}
              title="Sofa, Carpet & Mattress Cleaning"
              description="Deep upholstery and fabric cleaning."
              items={[
                "Single Sofa – From KSh 800",
                "Carpet – From KSh 150 per m²",
                "Mattress – From KSh 1,000",
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function SpecialService({
  icon,
  title,
  description,
  items,
}: ServiceBlockProps) {
  return (
    <div className="space-y-6">
      <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>

      <ul className="space-y-2 text-sm text-gray-700">
        {items.map((item: string, index: number) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


function ServiceBlock({
  image,
  title,
  description,
  items,
}: {
  image: string;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">

      {/* Image */}
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          quality={75}
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-gray-600 text-sm">
          {description}
        </p>

        <ul className="space-y-2 text-sm text-gray-700">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-1" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="https://wa.me/254752612044"
          target="_blank"
          className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
        >
          Get Quote →
        </Link>
      </div>
    </div>
  );
}

function ComparisonCard({
  title,
  features,
  highlight = false,
}: ComparisonCardProps) {
  return (
    <div
      className={`p-8 rounded-2xl shadow-sm ${highlight ? "bg-white border-2 border-blue-600" : "bg-white"
        }`}
    >
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

      <ul className="mt-6 space-y-3 text-sm text-gray-700">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}