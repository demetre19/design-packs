import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export function Hero3() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111111] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#111111]">
          {/* Huge Wordmark Left */}
          <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-[9px] uppercase tracking-widest text-[#666] mb-6">
                <Terminal className="w-3 h-3" />
                <span>ARCHIVE REF // 03-SPLIT</span>
              </div>
              <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                CHASSIS<br/>DYNAMICS
              </h1>
              <p className="text-xs uppercase tracking-widest text-[#444] leading-relaxed max-w-lg">
                High-tensile tubular spaceframe integrated with aerospace-grade carbon-titanium monocoque structure. Engineered for maximum torsional rigidity under extreme lateral g-forces.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button 
                onClick={() => alert('Loading CAD schematics...')}
                className="px-6 py-3 bg-[#111] text-[#e8e8e6] font-bold text-xs uppercase tracking-widest flex items-center space-x-2 hover:bg-[#333] transition-colors cursor-pointer"
              >
                <span>VIEW CAD SCHEMATICS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => alert('Viewing test report...')}
                className="px-6 py-3 border border-[#111] font-bold text-xs uppercase tracking-widest hover:bg-[#e8e8e6] transition-colors cursor-pointer"
              >
                TEST REPORT 04
              </button>
            </div>
          </div>

          {/* Documentation Plate Right */}
          <div className="lg:col-span-5 p-6 bg-[#f0f0ee] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-[9px] uppercase tracking-widest border-b border-[#111] pb-2 mb-4">
                <span>PLATE REF: 099-CH</span>
                <span>STATUS: CERTIFIED</span>
              </div>
              <div className="w-full h-56 bg-[#111] border border-[#111] relative overflow-hidden mb-4">
                <img 
                  src="https://picsum.photos/seed/kraftwerk2/600/500" 
                  alt="Chassis Structure" 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                />
                <span className="absolute bottom-2 right-2 bg-[#111] text-[#e8e8e6] text-[8px] px-1">STUTTGART LAB</span>
              </div>
            </div>

            <div className="space-y-2 text-[10px]">
              <div className="flex justify-between border-b border-[#111] pb-1">
                <span className="text-[#666]">TORSIONAL RIGIDITY</span>
                <span className="font-bold">48,500 NM/DEG</span>
              </div>
              <div className="flex justify-between border-b border-[#111] pb-1">
                <span className="text-[#666]">SUSPENSION TRAVEL</span>
                <span className="font-bold">95MM / 110MM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barcode Footer Strip */}
        <div className="border-t border-[#111] p-3 bg-[#e8e8e6] flex flex-col sm:flex-row items-center justify-between text-[9px] uppercase tracking-widest">
          <span>KRAFTWERK HOMOLOGATION SYSTEM // SERIAL 9904-8821</span>
          <div className="h-4 w-48 bg-[repeating-linear-gradient(90deg,#111,#111_2px,#e8e8e6_2px,#e8e8e6_5px)] my-2 sm:my-0 border border-[#111]" />
          <span>VERIFIED 2026</span>
        </div>
      </div>
    </section>
  );
}
