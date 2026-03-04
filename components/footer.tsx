import Link from 'next/link';
import { Phone, Mail, MapPin} from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0F1C2E] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Urban<span className="text-blue-500">Cleaning</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Fast. Fresh. Spotless. Professional residential, office,
            move-in/move-out, post-construction, sofa, carpet and mattress
            cleaning services in Nairobi and surrounding areas.
          </p>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-white font-medium mb-3">Contacts</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              <span>+254 752 612 044</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>info.urbancleaners@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-white font-medium mb-3">Service Areas</h4>
          <div className="flex items-start gap-2 text-sm">
            <MapPin className="w-4 h-4 text-blue-500 mt-1" />
            <span>
              Rongai <br />
              Nairobi CBD <br />
              Kasarani <br />
              Kiambu & Surrounding Areas <br />
              Mon – Sat: 8:00 AM – 7:00 PM
            </span>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-medium mb-3">Follow Us</h4>

          <div className="flex items-center gap-4">
            <Link
              href="https://www.tiktok.com/@urbuncleaners.ke"
              target="_blank"
              aria-label="TikTok"
              className="flex items-center gap-2 hover:text-pink-500 transition"
            >
              <FaTiktok className="w-5 h-5" />
              <span className="text-sm">TikTok</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Urban Cleaning Services. All rights reserved.
      </div>
    </footer>
  );
}