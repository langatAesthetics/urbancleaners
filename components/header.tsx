'use client';

import Link from 'next/link';
import { Menu, Droplets } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white  shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Droplets className="w-7 h-7 text-blue-600" />
          <span className="text-xl font-semibold text-gray-900">
            Urban<span className="text-blue-600">Cleaners</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-black hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/services" className="text-black hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="/about" className="text-black hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="text-black hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-black">
              Home
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-black">
              Services
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-black">
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-black">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
