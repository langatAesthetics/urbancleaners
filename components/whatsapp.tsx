"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const whatsappNumber = "254752612044";
  const message =
    "Hello Urban Cleaning Services, I would like to book a cleaning service.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      {/* Online Status Badge */}
      <div className="bg-white shadow-md rounded-full px-3 py-1 flex items-center gap-2 text-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </span>
        <span className="text-gray-700 font-medium">Online</span>
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-3 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-105"
      >
        <MessageCircle size={22} />
        <span className="hidden md:inline font-medium">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
}