import React from 'react';
import { Terminal } from 'lucide-react';

export function Stat2() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white p-8 md:p-12">
        <div className="flex justify-between items-center border-b border-[#111] pb-3 mb-8 text-[10px] uppercase font-bold">
          <span>[GIANT NUMERALS & ANNOTATIONS]</span>
          <span>REF: STAT-02</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-7xl sm:text-9xl font-black uppercase tracking-tighter leading-none">
              9,200
            </div>
            <span className="text-xs uppercase tracking-widest text-[#666] block mt-2">RPM HARD REDLINE // V8 QUAD-TURBO</span>
          </div>

          <div className="space-y-4 text-[10px] border-l-2 border-[#111] pl-6">
            <div>
              <span className="text-[#666] block text-[8px]">VALVETRAIN</span>
              <span className="font-bold text-sm">PNEUMATIC RETURN SPRINGS</span>
            </div>
            <div>
              <span className="text-[#666] block text-[8px]">CONNECTING RODS</span>
              <span className="font-bold text-sm">FORGED AEROSPACE TITANIUM</span>
            </div>
            <div>
              <span className="text-[#666] block text-[8px]">LUBRICATION</span>
              <span className="font-bold text-sm">DRY SUMP MULTI-STAGE PUMP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
