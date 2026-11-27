import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';

export function Hero1() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111111] bg-white relative">
        {/* Crosshair corners */}
        <span className="absolute -top-2 -left-2 text-xs font-bold">+</span>
        <span className="absolute -top-2 -right-2 text-xs font-bold">+</span>
        <span className="absolute -bottom-2 -left-2 text-xs font-bold">+</span>
        <span className="absolute -bottom-2 -right-2 text-xs font-bold">+</span>

        {/* Top Header Row */}
        <div className="border-b border-[#111111] grid grid-cols-2 md:grid-cols-4 text-[9px] uppercase tracking-widest divide-x divide-[#111111] bg-[#e8e8e6]">
          <div className="p-2">SUB: VGH-01-A</div>
          <div className="p-2">DATE: 2026.11.25</div>
          <div className="p-2">MODEL: KRAFTWERK K-99</div>
          <div className="p-2 font-bold">[HOMOLOGATION SPEC]</div>
        </div>

        {/* Massive Extended Wordmark */}
        <div className="p-6 md:p-10 border-b border-[#111111] text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none font-mono">
            KRAFTWERK K-99
          </h1>
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase mt-4 text-[#555]">
            UNCOMPROMISING MOTORENGINEERING // STUTTGART ARCHIVE 044
          </p>
        </div>

        {/* B&W Photo Plate & Spec Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#111111]">
          {/* Photo Plate */}
          <div className="p-4 relative bg-[#dcdcd8]">
            <div className="absolute top-2 left-2 z-10 bg-[#111] text-[#e8e8e6] text-[8px] px-1 py-0.5">PLATE 01 // CHASSIS VIEW</div>
            <div className="w-full h-64 sm:h-80 bg-[#111] overflow-hidden relative border border-[#111]">
              <img 
                src="https://picsum.photos/seed/kraftwerk1/800/600" 
                alt="Chassis" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-90"
              />
              <div className="absolute inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
            </div>
            <div className="mt-2 flex justify-between text-[9px] text-[#666]">
              <span>ISO 800 // 1/2000s // F4.5</span>
              <span>REF: 37599C</span>
            </div>
          </div>

          {/* Spec Cells Grid */}
          <div className="p-4 flex flex-col justify-between space-y-4">
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="border border-[#111] p-3">
                <span className="text-[#666] block text-[8px]">POWER OUTPUT</span>
                <span className="font-bold text-lg">840 HP</span>
              </div>
              <div className="border border-[#111] p-3">
                <span className="text-[#666] block text-[8px]">MAX TORQUE</span>
                <span className="font-bold text-lg">820 NM</span>
              </div>
              <div className="border border-[#111] p-3">
                <span className="text-[#666] block text-[8px]">DRY WEIGHT</span>
                <span className="font-bold text-lg">1,120 KG</span>
              </div>
              <div className="border border-[#111] p-3">
                <span className="text-[#666] block text-[8px]">DOWNFORCE</span>
                <span className="font-bold text-lg">650 KG @ 250</span>
              </div>
            </div>

            <button 
              onClick={() => alert('Initiating download of full technical dossier...')}
              className="w-full py-4 bg-[#111] text-[#e8e8e6] font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-[#333] transition-colors cursor-pointer"
            >
              <span>DOWNLOAD COMPLETE DOSSIER (.PDF)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
