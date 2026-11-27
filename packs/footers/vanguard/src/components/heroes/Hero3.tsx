import React from 'react';
import { ShieldAlert, Radio } from 'lucide-react';

export function Hero3() {
  return (
    <section className="relative w-full bg-[#16181d] text-white font-mono overflow-hidden py-24 px-4 lg:px-8 border-b border-[#2a2d35]">
      {/* HUD Corner Brackets */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#ff3d00]" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#ff3d00]" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#ff3d00]" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#ff3d00]" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        <div className="inline-flex items-center space-x-2 bg-[#ff3d00]/10 border border-[#ff3d00]/40 px-3 py-1 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
          <Radio className="w-3.5 h-3.5 text-[#ff3d00] animate-pulse" />
          <span className="text-xs tracking-widest font-extrabold text-[#ff3d00]">FULL BLEED STAGE // X-99 SPECTRE</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase font-sans leading-none">
          SPEED IS <span className="text-[#ff3d00]">RELIGION</span>
        </h1>

        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Uncompromising aerospace research facility. State-of-the-art telemetry monitoring and high-mach structural test programs executed daily at Area 51.
        </p>

        <div className="flex justify-center space-x-4 pt-4">
          <button className="bg-[#ff3d00] hover:bg-[#e03500] text-white font-black text-xs tracking-widest px-8 py-3 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]">
            ENGAGE SYSTEM
          </button>
          <button className="bg-[#20232a] hover:bg-[#282c35] text-zinc-200 border border-[#3a3e4c] font-bold text-xs tracking-widest px-8 py-3 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]">
            VIEW SORTIES
          </button>
        </div>
      </div>
    </section>
  );
}
