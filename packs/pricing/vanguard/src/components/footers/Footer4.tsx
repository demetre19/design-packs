import React from 'react';

export function Footer4() {
  return (
    <footer className="w-full bg-[#16181d] border-t border-[#2a2d35] text-white font-mono py-16 px-4 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-black text-white/[0.03] uppercase font-sans">
          VANGUARD
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-2xl font-black uppercase font-sans">VANGUARD HYPERSONICS</h2>
            <p className="text-xs text-zinc-400 mt-1">Experimental aerospace flight test program.</p>
          </div>
          <div className="flex space-x-6 text-xs text-zinc-300">
            <a href="#" className="hover:text-[#ff3d00]">SORTIES</a>
            <a href="#" className="hover:text-[#ff3d00]">CFD MATRIX</a>
            <a href="#" className="hover:text-[#ff3d00]">DISPATCH</a>
          </div>
        </div>
        <div className="border-t border-[#2a2d35] pt-6 text-xs text-zinc-500">
          © 2026 VANGUARD HYPERSONICS. ALL RIGHTS RESERVED. AREA 51 TEST FACILITY.
        </div>
      </div>
    </footer>
  );
}
