import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import WhatsAppFloat from "@/components/whatsapp";
import type { Viewport } from "next";
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
  title: "Urban Cleaning Services | Residential & Office Cleaning in Nairobi",
  description:
    "Urban Cleaning Services offers professional residential, office, move-in/move-out, post-construction, sofa, carpet, and mattress cleaning services in Nairobi, Rongai, Kasarani, Kiambu and surrounding areas. Fast. Fresh. Spotless.",
  keywords: [
    "cleaning services Nairobi",
    "residential cleaning Nairobi",
    "office cleaning Nairobi",
    "move in move out cleaning",
    "post construction cleaning",
    "sofa cleaning Nairobi",
    "carpet cleaning Nairobi",
    "mattress cleaning Nairobi",
    "deep cleaning services",
    "Urban Cleaning Services",
  ],
  authors: [
    {
      name: "Urban Cleaning Services",
    },
  ],
  icons: {
    icon: "/favicon.ico",
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
        {children}

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
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
