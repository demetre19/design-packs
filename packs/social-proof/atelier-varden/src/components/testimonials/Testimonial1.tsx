import React from 'react';

export function Testimonial1() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-4xl mx-auto px-6 space-y-8 text-center">
        <div className="inline-flex items-center space-x-2">
          <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">CLIENT REFLECTION</span>
        </div>
        <blockquote className="text-2xl lg:text-3xl font-medium tracking-tight text-[#16171a] leading-relaxed">
          &ldquo;Atelier Varden gave us more than a house; they carved a serene sanctuary out of the jagged cliffs. The spatial restraint and light poetry exceed anything we imagined.&rdquo;
        </blockquote>
        <div className="space-y-1 pt-4">
          <div className="text-sm font-medium text-[#16171a]">Dr. Henrik & Elena von Stauffen</div>
          <div className="text-xs font-mono text-stone-500 uppercase tracking-widest">Owners, Engadin Stone Pavilion · St. Moritz</div>
        </div>
      </div>
    </section>
  );
}
