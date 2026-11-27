import React from 'react';
import { Sparkles, Star } from 'lucide-react';

export function Testimonial1() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-12 rounded-[40px] shadow-2xl border-4 border-[#3d2530] relative text-center space-y-6">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#f975a3] text-white flex items-center justify-center font-black text-2xl shadow-lg border-4 border-[#3d2530]">
          💖
        </div>
        <div className="flex justify-center gap-1 text-[#ff8c42] pt-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-current" />
          ))}
        </div>
        <p className="text-2xl md:text-3xl font-black text-[#3d2530] leading-snug">
          "MellowSprout boxes have completely transformed our weekend afternoons. My kids look forward to unboxing every single month!"
        </p>
        <div>
          <div className="font-black text-lg text-[#3d2530]">Sarah Jenkins</div>
          <div className="text-sm font-bold text-[#3d2530]/60">Mom of two curious explorers (Ages 5 & 8)</div>
        </div>
      </div>
    </section>
  );
}
