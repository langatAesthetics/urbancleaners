import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import WhatsAppFloat from "@/components/whatsapp";
import type { Viewport } from "next";
import StructuredData from "@/components/structured-data";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  display: "swap",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://urbancleaners.co.ke"),

  title: {
    default: "Urban Cleaning Services | Professional Cleaning in Nairobi",
    template: "%s | Urban Cleaning Services",
  },

  description:
    "Urban Cleaning Services provides professional residential and commercial cleaning in Nairobi, Rongai, Kasarani, Kiambu and nearby areas. We specialize in deep cleaning, sofa cleaning, carpet cleaning, mattress cleaning, and post-construction cleaning.",

  keywords: [
    "cleaning services Nairobi",
    "professional cleaners Nairobi",
    "home cleaning Nairobi",
    "office cleaning Nairobi",
    "deep cleaning Nairobi",
    "sofa cleaning Nairobi",
    "carpet cleaning Nairobi",
    "mattress cleaning Nairobi",
    "post construction cleaning Nairobi",
    "move in move out cleaning Nairobi",
    "Urban Cleaning Services Nairobi",
  ],

  authors: [{ name: "Urban Cleaning Services" }],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Urban Cleaning Services",
    description:
      "Professional residential and office cleaning services in Nairobi and surrounding areas.",
    url: "https://urbancleaners.co.ke",
    siteName: "Urban Cleaning Services",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StructuredData />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CHN42L0QDT"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-CHN42L0QDT');
  `}
        </Script>
        {children}
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
