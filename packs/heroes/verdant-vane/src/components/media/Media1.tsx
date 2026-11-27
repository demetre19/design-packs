import React from 'react';

export function Media1() {
  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Spatial Plate No. 04
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            The Botanical Consultation Suite
          </h2>
        </div>

        <div className="w-full rounded-[32px] overflow-hidden shadow-2xl aspect-[21/9] bg-[#e8f0ec] relative">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Botanical consultation suite"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-[#faf6f0]/90 backdrop-blur-md px-6 py-3.5 rounded-2xl text-[#122420]">
            <p className="font-serif text-base">Zurich Flagship Studio</p>
            <p className="text-xs text-[#2a7a6d] uppercase tracking-wider font-semibold">Designed for absolute somatic calm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
