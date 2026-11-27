import React from 'react';

export function Media2() {
  return (
    <section className="w-full bg-[#e8f0ec] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Visual Ecosystem
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            Tactile materiality in practice.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 rounded-[28px] overflow-hidden shadow-xl aspect-[16/10] bg-[#faf6f0]">
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80" alt="Treatment" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-5 rounded-[28px] overflow-hidden shadow-xl aspect-[4/5] bg-[#faf6f0]">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" alt="Botanical" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
