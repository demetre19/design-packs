import React from 'react';
import { ChevronRight, Radio } from 'lucide-react';

export function Cta1() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ff3d0010_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-flex items-center space-x-2 bg-[#ff3d00]/10 border border-[#ff3d00]/40 px-3 py-1 text-xs font-bold text-[#ff3d00]">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>CALL TO ACTION // BAY 4 COMMAND</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase font-sans leading-none">
          ENGAGE THE <span className="text-[#ff3d00]">MACH 4.8</span> FLIGHT TEST PROGRAM
        </h2>

        <p className="text-zinc-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Secure your telemetry bay reservation and initialize experimental aircraft test schedules today.
        </p>

        <div>
          <button className="bg-[#ff3d00] hover:bg-[#e03500] text-white font-black text-xs tracking-widest px-8 py-4 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] flex items-center space-x-2 mx-auto">
            <span>INITIATE PROGRAM CONTRACT</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
