import React from 'react';
import { Award, Compass } from 'lucide-react';

export function Testimonial1() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">TESTIMONIAL 01 · REFINED QUOTE WITH MEDALLION</div>
      </div>

      <div className="max-w-3xl mx-auto bg-white border border-[#d0d0cc] p-8 md:p-12 relative text-center space-y-6 shadow-sm">
        <div className="w-12 h-12 rounded-full bg-[#1c2128] text-white flex items-center justify-center mx-auto border border-[#2e5e8e]">
          <Award className="w-6 h-6 text-[#2e5e8e]" />
        </div>

        <blockquote className="text-xl md:text-2xl font-light tracking-[0.06em] text-[#232a30] leading-relaxed">
          &ldquo;The level of finishing achieved on the internal bridge angles exceeds anything else in contemporary haute horlogerie. Truly a masterpiece of mechanical tolerance.&rdquo;
        </blockquote>

        <div className="pt-4 border-t border-[#d0d0cc]/60">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#232a30] font-semibold">JEAN-LUC FAVRE</div>
          <div className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.2em] mt-1">CHIEF HOROLOGIST · GENEVA INSTITUTE</div>
        </div>
      </div>
    </section>
  );
}
