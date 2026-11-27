import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export function BlogCard2() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="p-4 border-b border-[#111] bg-[#e8e8e6] text-[10px] uppercase font-bold flex justify-between">
          <span>[FEATURED EDITORIAL DOSSIER]</span>
          <span>REF: BC-02</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#111]">
          <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between">
            <div>
              <div className="text-[9px] text-[#666] mb-3">2026.11.25 // LEAD TECHNICAL FEATURE</div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                THE HOMOLOGATION MANIFESTO: BRUTALIST ENGINEERING
              </h2>
              <p className="text-xs uppercase tracking-widest text-[#555] leading-relaxed mb-8">
                Examining the philosophy of uncompromised motorsport design where every gram of weight and millimetre of aero surface is strictly accounted for in the master homologation ledger.
              </p>
            </div>

            <button 
              onClick={() => alert('Loading full featured editorial...')}
              className="px-6 py-3 bg-[#111] text-[#e8e8e6] font-bold text-xs uppercase tracking-widest flex items-center space-x-2 hover:bg-[#333] transition-colors cursor-pointer w-fit"
            >
              <span>READ FULL MANIFESTO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-5 p-4 bg-[#f0f0ee] relative flex flex-col justify-between">
            <div className="absolute top-6 left-6 z-10 bg-[#111] text-[#e8e8e6] text-[8px] px-2 py-1">PLATE: FEAT-01</div>
            <div className="w-full h-64 sm:h-80 bg-[#111] border border-[#111] overflow-hidden">
              <img src="https://picsum.photos/seed/kraftwerk_feat/800/600" alt="Featured" className="w-full h-full object-cover grayscale contrast-125" />
            </div>
            <div className="mt-4 pt-3 border-t border-[#111] flex justify-between text-[9px] text-[#666]">
              <span>AUTHOR: ARCHIVE EDITORIAL</span>
              <span>READ TIME: 8 MIN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
