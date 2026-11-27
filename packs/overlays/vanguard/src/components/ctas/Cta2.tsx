import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Cta2() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto bg-[#20232a] border border-[#3a3e4c] p-8 sm:p-12 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold text-[#ff3d00] uppercase tracking-widest">SPLIT CTA BAND</span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase font-sans tracking-tight">
            READY FOR <span className="text-[#ff3d00]">STRATOSPHERIC</span> LAUNCH?
          </h2>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Join Vanguard Hypersonics' experimental test program. Full wind tunnel telemetry and chase plane support included.
          </p>
        </div>
        <div className="lg:col-span-5 flex justify-end">
          <button className="bg-[#ff3d00] hover:bg-[#e03500] text-white font-black text-xs tracking-widest px-8 py-4 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] flex items-center space-x-2">
            <span>ENGAGE LAUNCH</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
