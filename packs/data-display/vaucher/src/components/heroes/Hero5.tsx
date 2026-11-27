import React from 'react';
import { Compass, Clock, Award } from 'lucide-react';

export function Hero5() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      {/* Split hero — text left, tall cased image right, fine stat indices bottom */}
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">
            REF. 5726-A · ATELIER EDITION
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.06em] text-[#232a30] leading-tight">
            Annuity & Precision in Stainless Steel
          </h1>
          <p className="text-sm font-light tracking-widest text-[#232a30]/80 leading-relaxed">
            The annual calendar mechanism automatically accounts for months of 30 and 31 days, requiring only single manual correction on the first of March.
          </p>
          <div className="flex items-center space-x-4 pt-2">
            <button className="bg-[#2e5e8e] text-white font-mono text-xs tracking-[0.25em] px-6 py-3 hover:bg-[#232a30] transition-colors">
              RESERVE PIECE
            </button>
            <button className="border border-[#232a30]/30 text-[#232a30] font-mono text-xs tracking-[0.25em] px-6 py-3 hover:border-[#2e5e8e] transition-colors">
              SPECIFICATIONS
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 screw-corner border border-[#d0d0cc] bg-[#1c2128] text-white p-8 relative h-96 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 bg-geneva-stripe opacity-40" />
          <div className="relative z-10 flex justify-between items-center">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#2e5e8e]">CASEBACK REF. 5726</span>
            <Clock className="w-4 h-4 text-[#2e5e8e]" />
          </div>
          <div className="relative z-10 text-center space-y-2">
            <div className="text-3xl font-light tracking-widest">CAL. 324 S QA LU</div>
            <div className="font-mono text-[10px] text-white/60 tracking-widest">347 COMPONENTS · 10 JEWELS</div>
          </div>
          <div className="relative z-10 font-mono text-[10px] text-white/50 text-center tracking-[0.2em]">
            VAUCHER & FILS · GENÈVE
          </div>
        </div>
      </div>

      {/* Fine stat indices bottom */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-[#d0d0cc]">
        <div>
          <div className="font-mono text-[10px] text-[#232a30]/50 tracking-[0.25em]">DIAMETER</div>
          <div className="font-mono text-base text-[#232a30] tracking-wider mt-1">40.5 MM</div>
        </div>
        <div>
          <div className="font-mono text-[10px] text-[#232a30]/50 tracking-[0.25em]">THICKNESS</div>
          <div className="font-mono text-base text-[#232a30] tracking-wider mt-1">11.3 MM</div>
        </div>
        <div>
          <div className="font-mono text-[10px] text-[#232a30]/50 tracking-[0.25em]">FINISHING</div>
          <div className="font-mono text-base text-[#232a30] tracking-wider mt-1">Côtes de Genève</div>
        </div>
        <div>
          <div className="font-mono text-[10px] text-[#232a30]/50 tracking-[0.25em]">ACCURACY</div>
          <div className="font-mono text-base text-[#2e5e8e] tracking-wider mt-1">-1 / +2 SEC/DAY</div>
        </div>
      </div>
    </section>
  );
}
