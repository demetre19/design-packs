import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial1() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-4">// TESTIMONIAL // 01</span>
        
        <Quote size={48} className="text-[#ff5a1f] mx-auto mb-6 opacity-80" />

        <blockquote className="font-display font-extrabold text-2xl md:text-4xl text-white tracking-tight leading-tight">
          "THE INSTANTANEOUS TORQUE DELIVERY OUT OF HAIRPIN CORNERS DEFIES PHYSICS. IT IS QUITE SIMPLY THE MOST FEROCIOUS MACHINE I HAVE EVER RIDDEN ON A TRACK."
        </blockquote>

        <div className="mt-8 pt-6 border-t border-[#272a33] inline-block text-center">
          <span className="font-mono-spec text-sm font-bold text-white block">HIROSHI TANAKA</span>
          <span className="font-mono-spec text-xs text-[#ff5a1f] mt-1 block">MOTO GP WORLD CHAMPION & FACTORY TEST PILOT</span>
        </div>
      </div>
    </section>
  );
}
