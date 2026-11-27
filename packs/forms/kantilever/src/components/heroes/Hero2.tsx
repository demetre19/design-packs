import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Hero2: React.FC = () => {
  return (
    <section className="relative bg-[#14161a] text-[#f7f6f3] py-28 overflow-hidden">
      {/* Diagonal hatch accent strip in background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[repeating-linear-gradient(45deg,#ffc72c,#ffc72c_10px,transparent_10px,transparent_20px)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-[#ffc72c] transform skew-x-[-12deg]" />
          <span className="font-mono text-xs text-[#ffc72c] uppercase tracking-widest">// ARCHITECTURAL PRACTICE 02</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tight max-w-4xl leading-[1.02]">
          PRECISION DIAGONAL TECTONICS & STRUCTURAL RIGOR
        </h1>

        <p className="text-sm md:text-base text-[#f7f6f3]/70 max-w-2xl font-sans leading-relaxed">
          Uncompromising geometry for forward-thinking clients. Every cantilever engineered with absolute mathematical clarity and aesthetic severity.
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-4">
          <a
            href="#inquire"
            className="relative px-8 py-4 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider transform skew-x-[-12deg] hover:bg-[#f7f6f3] transition-colors flex items-center gap-2"
          >
            <span className="transform skew-x-[12deg] flex items-center gap-2">
              Initiate Project <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          <div className="flex items-center gap-3 font-mono text-xs text-[#f7f6f3]/60">
            <ShieldCheck className="w-4 h-4 text-[#ffc72c]" />
            <span>ISO 9001 STRUCTURAL ACCREDITATION // 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};
