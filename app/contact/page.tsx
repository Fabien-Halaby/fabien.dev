"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import { SocialNetwork } from "@/components/contact/SocialNetwork";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <SocialNetwork />
        <ContactForm />
      </div>
    </section>
  );
}
