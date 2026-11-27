import React from 'react';
import { Compass } from 'lucide-react';

export const Blog4: React.FC = () => {
  return (
    <section className="bg-[#14161a] text-[#f7f6f3] py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#ffc72c] text-[#14161a] px-3 py-1 font-mono text-xs uppercase font-bold transform skew-x-[-12deg]">
            <Compass className="w-3.5 h-3.5" /> ESSAY MONOGRAPH 04
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight">
            THE GEOMETRY OF CANTILEVER EQUILIBRIUM
          </h1>
          <p className="text-sm text-[#f7f6f3]/80 font-sans leading-relaxed">
            Exploring how diagonal force vectors distribute immense dead loads across high-tensile concrete frameworks without buckling.
          </p>
          <div className="font-mono text-xs text-[#ffc72c]">
            PUBLISHED: MARCH 2026 // READ TIME: 12 MINS
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative w-full h-[360px] bg-[#f7f6f3] overflow-hidden transform skew-x-[-8deg]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Article Header"
              className="w-full h-full object-cover transform skew-x-[8deg] scale-110 filter saturate-[0.8]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
