"use client";

import { stack } from "@/constants/stack";
import { TechCard } from "@/components/tech/TechCard"

export default function StackPage() {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-400 mb-10 text-center">
          My Tech Stack
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            stack.map(({ category, techs }) => (
              <TechCard key={category} category={category} techs={techs} />
            ))
          }
        </div>
      </div>
    </section>
  );
}
