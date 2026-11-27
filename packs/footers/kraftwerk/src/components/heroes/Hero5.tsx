import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export function Hero5() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111111] bg-white">
        {/* Top Header */}
        <div className="p-8 md:p-14 text-center border-b border-[#111111] bg-[#e8e8e6]">
          <div className="inline-block bg-[#111] text-[#e8e8e6] text-[9px] px-3 py-1 uppercase tracking-widest mb-4">
            DOSSIER 05 // POWERTRAIN SPECIFICATION
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
            4.0L QUAD-TURBO
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#555] mt-4 max-w-xl mx-auto">
            Dry-sump lubrication with forged titanium connecting rods and dual-scroll ceramic turbine bearings.
          </p>
        </div>

        {/* Bottom Spec-Table Band in Compartmented Cells */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#111111] text-[10px]">
          <div className="p-4 bg-[#f8f8f6]">
            <span className="text-[#666] block text-[8px] mb-1">DISPLACEMENT</span>
            <span className="font-bold text-base">3,998 CC</span>
            <span className="block text-[8px] text-[#888] mt-1">V8 90-DEGREE</span>
          </div>
          <div className="p-4 bg-[#f8f8f6]">
            <span className="text-[#666] block text-[8px] mb-1">VALVETRAIN</span>
            <span className="font-bold text-base">DOHC 32V</span>
            <span className="block text-[8px] text-[#888] mt-1">PNEUMATIC SPRINGS</span>
          </div>
          <div className="p-4 bg-[#f8f8f6]">
            <span className="text-[#666] block text-[8px] mb-1">MAX RPM</span>
            <span className="font-bold text-base">9,200 RPM</span>
            <span className="block text-[8px] text-[#888] mt-1">HARD REDLINE</span>
          </div>
          <div className="p-4 bg-[#111] text-[#e8e8e6] flex flex-col justify-between">
            <div>
              <span className="text-[#aaa] block text-[8px] mb-1">ACTION</span>
              <span className="font-bold text-sm">ORDER SPEC</span>
            </div>
            <button 
              onClick={() => alert('Opening powertrain configuration modal...')}
              className="mt-3 w-full py-2 bg-[#e8e8e6] text-[#111111] font-bold text-[9px] uppercase tracking-widest hover:bg-white transition-colors cursor-pointer flex items-center justify-center space-x-1"
            >
              <span>CONFIGURE</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
