import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CTA1: React.FC = () => {
  return (
    <section className="bg-[#14161a] text-[#f7f6f3] py-28 relative overflow-hidden">
      {/* Diagonal band slicing behind */}
      <div className="absolute inset-0 bg-[#ffc72c] transform skew-y-[-6deg] scale-125 opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
        <span className="font-mono text-xs text-[#ffc72c] uppercase tracking-widest">// INITIATE BRIEF</span>
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-tight">
          READY TO CONSTRUCT YOUR CANTILEVERED VISION?
        </h2>
        <p className="text-sm md:text-base text-[#f7f6f3]/80 font-sans max-w-xl mx-auto">
          Transmit your plot specifications and architectural requirements to our Zurich and Tokyo practice partners today.
        </p>
        <div className="pt-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider hover:bg-[#f7f6f3] transition-colors"
          >
            Submit Project Brief <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
