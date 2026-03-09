export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Urban Cleaning Services",
    url: "https://urbancleaners.co.ke",
    logo: "https://urbancleaners.co.ke/logo.png",
    description:
      "Urban Cleaning Services offers professional residential, office, sofa, carpet, mattress, and post-construction cleaning services in Nairobi and surrounding areas.",
    
    telephone: "+254752612044",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
      areaServed: [
      "Nairobi",
      "Rongai",
      "Kasarani",
      "Kiambu"
    ],
    serviceType: [
      "Residential Cleaning",
      "Office Cleaning",
      "Carpet Cleaning",
      "Sofa Cleaning",
      "Mattress Cleaning",
      "Post Construction Cleaning"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}