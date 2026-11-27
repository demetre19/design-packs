import React from 'react';

export function Stat3() {
  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6">
      <div className="max-w-6xl mx-auto bg-[#e8f0ec] rounded-[32px] p-10 md:p-16 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-2">
            Practice Overview
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#122420] tracking-tight">
            Excellence in numbers.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="font-serif text-4xl md:text-5xl text-[#122420] font-bold block mb-2">140+</span>
            <span className="text-xs uppercase tracking-wider text-[#2a7a6d] font-semibold">Clinics Partnered</span>
          </div>
          <div>
            <span className="font-serif text-4xl md:text-5xl text-[#122420] font-bold block mb-2">98%</span>
            <span className="text-xs uppercase tracking-wider text-[#2a7a6d] font-semibold">Retention Rate</span>
          </div>
          <div>
            <span className="font-serif text-4xl md:text-5xl text-[#122420] font-bold block mb-2">3</span>
            <span className="text-xs uppercase tracking-wider text-[#2a7a6d] font-semibold">Global Flagships</span>
          </div>
        </div>
      </div>
    </section>
  );
}
