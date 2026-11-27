import React from 'react';

export const Testimonial3: React.FC = () => {
  return (
    <section className="relative bg-[#14161a] text-[#f7f6f3] py-28 overflow-hidden">
      {/* Oversized faint numeral behind */}
      <div className="absolute right-[-5%] bottom-[-10%] text-[32vw] font-extrabold text-[#f7f6f3] opacity-[0.03] pointer-events-none font-mono select-none leading-none">
        03
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
        <div className="inline-block bg-[#ffc72c] text-[#14161a] px-3 py-1 font-mono text-xs uppercase font-bold transform skew-x-[-12deg]">
          // FEATURED VERBATIM
        </div>

        <blockquote className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight">
          &ldquo;THEIR MASTERY OF DIAGONAL TECTONICS REDEFINED WHAT OUR MUNICIPALITY THOUGHT POSSIBLE IN PUBLIC ARCHITECTURE.&rdquo;
        </blockquote>

        <div className="flex items-center gap-6 pt-4">
          <div className="w-14 h-14 bg-[#ffc72c] text-[#14161a] flex items-center justify-center font-mono font-extrabold text-lg transform skew-x-[-12deg]">
            MD
          </div>
          <div>
            <div className="font-extrabold uppercase text-base">MARCUS DUBOIS</div>
            <div className="font-mono text-xs text-[#f7f6f3]/60">CHIEF URBAN PLANNER // GENEVA</div>
          </div>
        </div>
      </div>
    </section>
  );
};
