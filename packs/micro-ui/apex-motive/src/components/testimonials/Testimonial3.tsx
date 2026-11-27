import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial3() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33] relative overflow-hidden">
      <div className="absolute right-10 top-1/2 -translate-y-1/2 font-extrabold text-[240px] text-white/[0.02] select-none pointer-events-none">
        03
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-[#16181d] border border-[#272a33] p-12 clip-corner-lg">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-4">// FEATURED DEBRIEF</span>
          <Quote size={40} className="text-[#ff5a1f] mb-6" />
          <blockquote className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight leading-snug">
            "THE WEIGHT DISTRIBUTION AND LOW CENTER OF GRAVITY MAKE THE APEX V12 FEEL LIKE A FIGHTER JET ON TWO WHEELS."
          </blockquote>
          <div className="mt-8 pt-6 border-t border-[#272a33] flex justify-between items-center">
            <div>
              <span className="font-mono-spec text-sm font-bold text-white block">SOPHIA LARSEN</span>
              <span className="font-mono-spec text-xs text-[#ff5a1f] block">CHIEF AUTOMOTIVE EDITOR, SPEED & MACHINE</span>
            </div>
            <span className="font-mono-spec text-xs text-neutral-500">TEST REF // #8849</span>
          </div>
        </div>
      </div>
    </section>
  );
}
