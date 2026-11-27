import React from 'react';

export function Testimonial3() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#f0efeb] border border-[#e2e0d8] p-12 lg:p-16 relative">
          <div className="absolute top-6 right-6 text-xs font-mono text-stone-400 uppercase">
            [ MONOGRAPH EXCERPT ]
          </div>
          <div className="space-y-6 max-w-3xl">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">ARCHITECTURAL MONOGRAPH</span>
            </div>
            <blockquote className="text-xl lg:text-2xl font-medium text-[#16171a] leading-relaxed">
              &ldquo;Architecture is the thoughtful making of space. Atelier Varden strips away all superfluous vanity until only the raw, tectonic truth remains.&rdquo;
            </blockquote>
            <div className="pt-4 border-t border-[#e2e0d8] flex justify-between items-center text-xs font-mono text-stone-600">
              <span>CONTEMPORARY ARCHITECTURE QUARTERLY</span>
              <span className="text-[#b5482e] uppercase">ISSUE 88</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
