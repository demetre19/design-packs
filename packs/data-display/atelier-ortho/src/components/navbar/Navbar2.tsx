import React from 'react';
import { Ruler, FileText, CheckSquare, ChevronDown } from 'lucide-react';

export function Navbar2() {
  return (
    <div className="w-full bg-[#f2f5f9] text-[#1b3a5c] font-mono text-xs uppercase tracking-wider relative border-b border-[#1b3a5c]/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-[#1b3a5c] flex items-center justify-center font-bold text-sm bg-white">
            AO
          </div>
          <div>
            <div className="font-bold tracking-widest">ATELIER ORTHOGONAL</div>
            <div className="text-[9px] text-[#1b3a5c]/70">DWG REF: NB-02 // ELEVATION 02</div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-[11px]">
          <a href="#geometry" className="hover:underline flex items-center gap-1">
            <span>Geometry</span>
            <span className="text-[9px] border border-[#1b3a5c]/40 px-1">A2</span>
          </a>
          <a href="#materials" className="hover:underline flex items-center gap-1">
            <span>Materials</span>
            <span className="text-[9px] border border-[#1b3a5c]/40 px-1">B4</span>
          </a>
          <a href="#structural" className="hover:underline flex items-center gap-1">
            <span>Structural Matrix</span>
            <span className="text-[9px] border border-[#1b3a5c]/40 px-1">C1</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col text-right text-[9px] text-[#1b3a5c]/70">
            <span>SCALE: 1:50</span>
            <span>STATUS: APPROVED</span>
          </div>
          <button className="bg-[#1b3a5c] text-white px-4 py-2 hover:bg-[#254e7a] transition-colors border border-[#1b3a5c] cursor-pointer">
            INITIALIZE DWG
          </button>
        </div>
      </div>

      {/* Dimension line bottom edge */}
      <div className="w-full h-3 border-t border-b border-[#1b3a5c]/40 flex items-center justify-between px-6 text-[9px] text-[#1b3a5c]/60 select-none bg-white/50">
        <div className="flex items-center gap-1">
          <span>|&lt;---</span>
          <span>12000MM AXIS SPAN</span>
          <span>---&gt;|</span>
        </div>
        <div className="flex items-center gap-4">
          <span>SEC: A-A</span>
          <span>REV: 04</span>
        </div>
      </div>
    </div>
  );
}
