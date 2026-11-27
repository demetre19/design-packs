import React from 'react';
import { ChevronRight, Radio } from 'lucide-react';

export function Hero5() {
  return (
    <section className="relative w-full bg-[#16181d] text-white font-mono overflow-hidden py-16 px-4 lg:px-8 border-b border-[#2a2d35] flex items-center">
      {/* Vertical Stencil Index Margin */}
      <div className="absolute left-0 top-0 bottom-0 bg-[#20232a] border-r border-[#3a3e4c] w-12 hidden sm:flex items-center justify-center">
        <span className="text-[10px] font-black text-[#ff3d00] tracking-widest [writing-mode:vertical-lr] rotate-180">
          SORTIE // S-012
        </span>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pl-0 sm:pl-8 relative z-10">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center space-x-2 text-xs">
            <Radio className="w-3.5 h-3.5 text-[#ff3d00]" />
            <span className="text-[#ff3d00] font-bold tracking-widest">SPLIT EXPERIMENTAL STAGE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase font-sans leading-none">
            VANGUARD <br />
            <span className="text-[#ff3d00]">INTERCEPTOR</span>
          </h1>
          <p className="text-zinc-300 text-sm">
            Split-layout test architecture featuring dual-ramjet propulsion telemetry and automated flight stabilization matrix.
          </p>
          <button className="bg-[#ff3d00] hover:bg-[#e03500] text-white font-extrabold text-xs tracking-widest px-6 py-3 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] flex items-center space-x-2">
            <span>LAUNCH SIMULATION</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="lg:col-span-6 bg-[#20232a] border border-[#3a3e4c] p-8 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] relative">
          <div className="absolute top-4 right-4 text-xs font-mono text-[#ff3d00] font-bold">M 3.4 // FL490</div>
          <div className="h-64 bg-[#16181d] border border-[#2a2d35] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ff3d0020_1px,transparent_1px)] [background-size:16px_16px]" />
            <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">AIRFRAME CAD // 3D TELEMETRY MESH</span>
          </div>
        </div>
      </div>
    </section>
  );
}
