"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white border rounded-2xl p-8 shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">
        Request a Cleaning Service
      </h2>

      {success && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 text-green-700 text-sm">
          ✅ Your request has been sent successfully. We will contact you shortly.
        </div>
      )}

      <form ref={formRef} onSubmit={sendEmail} className="space-y-5">

        <div>
          <label className="block text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="user_name"
            required
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
            name="user_phone"
            required
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
            name="user_location"
            required
            placeholder="Your area in Nairobi"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Service Needed
          </label>
          <select
            name="service_type"
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Service</option>
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
            name="message"
            rows={4}
            placeholder="Any special instructions?"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-70"
        >
          {loading ? "Sending..." : "Request Service"}
        </button>
      </form>
    </section>
  );
}