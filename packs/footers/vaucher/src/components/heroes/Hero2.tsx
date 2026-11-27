import React from 'react';
import { Sliders, Cpu, Award } from 'lucide-react';

export function Hero2() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left headline */}
        <div className="lg:col-span-7 space-y-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e] flex items-center space-x-2">
            <Sliders className="w-3.5 h-3.5" />
            <span>ATELIER CHRONOMETRY · GENÈVE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.06em] text-[#232a30] leading-tight">
            Designed for Absolute Temporal Accuracy
          </h1>
          <p className="text-sm font-light tracking-widest text-[#232a30]/80 leading-relaxed">
            Every movement undergoes 720 hours of rigorous climatic and positional testing before receiving the Geneva seal of uncompromising horological fidelity.
          </p>
          <div className="pt-2">
            <button className="bg-[#1c2128] text-white font-mono text-xs tracking-[0.25em] px-6 py-3 hover:bg-[#2e5e8e] transition-colors">
              VIEW SPECIFICATIONS
            </button>
          </div>
        </div>

        {/* Specification panel (double-ruled rows, mono reference numbers) */}
        <div className="lg:col-span-5 bg-white border-y-2 border-[#232a30] p-6 shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b border-[#d0d0cc] pb-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#232a30] font-semibold">TECHNICAL DOSSIER</span>
            <span className="font-mono text-[10px] text-[#2e5e8e] tracking-widest">REF. 330-SC</span>
          </div>
          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between py-1.5 border-b border-[#d0d0cc]/50">
              <span className="text-[#232a30]/60">POWER RESERVE</span>
              <span className="text-[#232a30] font-medium">48 Hours ± 2 hrs</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-[#d0d0cc]/50">
              <span className="text-[#232a30]/60">JEWEL COUNT</span>
              <span className="text-[#232a30] font-medium">29 Rubies</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-[#d0d0cc]/50">
              <span className="text-[#232a30]/60">BALANCE WHEEL</span>
              <span className="text-[#232a30] font-medium">Gyromax® Free-Sprung</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-[#232a30]/60">WATER RESISTANCE</span>
              <span className="text-[#232a30] font-medium">30 Meters / 3 ATM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
