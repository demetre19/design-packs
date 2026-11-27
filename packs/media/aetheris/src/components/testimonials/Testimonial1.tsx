import React from 'react';

export function Testimonial1() {
  return (
    <section className="w-full bg-[#0b0d10] py-24 px-6 border-b border-white/10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <span className="text-[#d4b06a] text-lg font-serif mb-4">◆</span>
        
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#ece8e1] italic leading-relaxed mb-8">
          "The level of discretion and horological precision maintained by Aetheris & Co. is unmatched in the modern era of private collections."
        </blockquote>

        <div className="w-16 h-[1px] bg-[#d4b06a]/40 mb-6" />

        <div className="flex flex-col items-center">
          <span className="font-serif text-base text-[#ece8e1] tracking-wider">Lord Alistair Sterling</span>
          <span className="text-xs font-mono text-[#7a8494] mt-1">PATRON & COLLECTOR, LONDON</span>
        </div>
      </div>
    </section>
  );
}
