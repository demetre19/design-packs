import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Cta2() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-block bg-[#ff6b5e] text-white font-mono text-xs font-black px-3 py-1 mb-4 shadow-hard-sm">
            EDITION SLOT OPEN
          </div>
          <h2 className="font-grotesk font-black text-4xl sm:text-6xl uppercase tracking-tighter mb-6">
            SECURE YOUR QUARTERLY FORGE SLOT.
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#111111]/80 mb-8 leading-relaxed">
            We limit intake to maintain uncompromised print quality and frontend precision. Q2 intake closes soon.
          </p>
          <button className="btn-brutal bg-[#ffd92e] text-[#111111] font-grotesk font-black text-sm px-8 py-4 flex items-center gap-2">
            <span>BOOK DISCOVERY CALL</span>
            <ArrowRight size={16} strokeWidth={3} />
          </button>
        </div>

        <div className="lg:col-span-5 bg-white border-3 border-[#111111] shadow-hard-lg p-3 bg-halftone">
          <div className="aspect-[4/3] border-2 border-[#111111] overflow-hidden bg-[#ffd92e]">
            <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80" alt="CTA Visual" className="w-full h-full object-cover contrast-125 mix-blend-multiply" />
          </div>
          <div className="mt-2 font-mono text-xs font-bold flex justify-between px-2">
            <span>BERLIN & TOKYO</span>
            <span className="text-[#ff6b5e]">● 4 SLOTS LEFT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
