import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';

export const Hero1: React.FC = () => {
  return (
    <section className="relative bg-[#f7f6f3] text-[#14161a] overflow-hidden py-24 border-b border-[#14161a]/15">
      {/* Oversized faint project numeral in background (8% opacity) */}
      <div className="absolute right-[-2%] top-[10%] text-[28vw] font-extrabold text-[#14161a] opacity-[0.05] pointer-events-none font-mono select-none leading-none">
        01
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left type column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#ffc72c] px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest transform skew-x-[-12deg]">
            <Compass className="w-3.5 h-3.5" /> MERIDIAN ANGLE SYSTEM
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-[1.05]">
            CANTILEVERED HORIZONS IN CONCRETE & INK
          </h1>
          <p className="text-sm md:text-base text-[#14161a]/80 max-w-xl font-sans leading-relaxed">
            KANTILEVER operates at the intersection of structural audacity and precise tectonic restraint. We design diagonal architectural interventions that slice through urban topography.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-[#14161a] text-[#f7f6f3] text-xs font-bold uppercase tracking-wider hover:bg-[#ffc72c] hover:text-[#14161a] transition-colors flex items-center gap-2"
            >
              Explore Works <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="font-mono text-xs text-[#14161a]/60 border-l-2 border-[#ffc72c] pl-3 py-1">
              SPEC // 1,840 m²<br />4 LEVELS // 2026
            </div>
          </div>
        </div>

        {/* Right angled image bleeding */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full h-[420px] bg-[#14161a] overflow-hidden transform skew-x-[-6deg]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Architectural Cantilever"
              className="w-full h-full object-cover transform skew-x-[6deg] scale-110 filter saturate-[0.8] hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 bg-[#14161a] text-[#ffc72c] px-3 py-1 font-mono text-[10px] uppercase">
              FIG 1.1 // STÄFA PAVILION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
