import React from 'react';

export function Navbar3() {
  return (
    <header className="w-full bg-white text-black border-b border-black flex items-center">
      {/* Vertical rotated wordmark along left edge */}
      <div className="bg-black text-white px-3 py-6 font-mono text-[10px] tracking-[0.3em] uppercase flex items-center justify-center [writing-mode:vertical-lr] rotate-180">
        VELOX // ROTATION 03
      </div>
      
      <div className="flex-1 px-8 py-4 flex items-center justify-between">
        <div className="font-black text-xl tracking-tighter uppercase">
          V-999 APEX PREDATOR
        </div>
        <div className="hidden md:flex items-center gap-6 font-mono text-[11px]">
          <span className="text-neutral-400">LAT: 35.6762 N</span>
          <span className="text-neutral-400">LON: 139.6503 E</span>
          <span className="bg-[#ff2e00] text-white px-2 py-1 font-bold">LIVE TELEMETRY</span>
        </div>
      </div>
    </header>
  );
}
