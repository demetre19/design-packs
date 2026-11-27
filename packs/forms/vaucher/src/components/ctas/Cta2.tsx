import React from 'react';
import { Compass } from 'lucide-react';

export function Cta2() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="grid md:grid-cols-12 border border-[#d0d0cc] bg-white">
        <div className="md:col-span-7 p-8 md:p-12 space-y-6 flex flex-col justify-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">CTA 02 · SPLIT WITH CASED IMAGE</div>
          <h2 className="text-3xl font-light tracking-wide text-[#232a30]">Experience the Caliber in Person</h2>
          <p className="font-mono text-xs text-[#232a30]/70 tracking-wider leading-relaxed">
            Schedule a private consultation at our Geneva headquarters or authorized international salons.
          </p>
          <div>
            <button className="bg-[#1c2128] text-white font-mono text-xs tracking-[0.25em] px-8 py-3.5 hover:bg-[#2e5e8e] transition-colors">
              BOOK PRIVATE VIEWING
            </button>
          </div>
        </div>
        <div className="md:col-span-5 bg-[#1c2128] text-white p-8 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-geneva-stripe opacity-40" />
          <div className="text-center relative z-10 space-y-2 font-mono text-xs text-white/80">
            <div>REF. 5711-CTA</div>
            <div className="text-[#2e5e8e] text-[10px] tracking-widest">GENEVA SALON</div>
          </div>
        </div>
      </div>
    </section>
  );
}
