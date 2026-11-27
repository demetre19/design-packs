import React from 'react';
import { Compass } from 'lucide-react';

export function Footer2() {
  return (
    <footer className="w-full bg-[#f4f4f2] border-t border-[#d0d0cc]">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 border-b border-[#d0d0cc]/60">
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] font-semibold text-[#232a30]">Vaucher & Fils</span>
          <p className="font-mono text-xs text-[#232a30]/70 tracking-wider">
            Ruled multi-column precision footer for horological institutions.
          </p>
        </div>
        <div className="space-y-3 font-mono text-xs">
          <div className="text-[#2e5e8e] uppercase tracking-[0.25em] text-[10px]">Collections</div>
          <a href="#c1" className="block text-[#232a30]/80 hover:text-[#2e5e8e]">Officer Series</a>
          <a href="#c2" className="block text-[#232a30]/80 hover:text-[#2e5e8e]">Perpetual Cal.</a>
        </div>
        <div className="space-y-3 font-mono text-xs">
          <div className="text-[#2e5e8e] uppercase tracking-[0.25em] text-[10px]">Atelier</div>
          <a href="#m1" className="block text-[#232a30]/80 hover:text-[#2e5e8e]">Manufacture</a>
          <a href="#m2" className="block text-[#232a30]/80 hover:text-[#2e5e8e]">Finishing</a>
        </div>
        <div className="space-y-3 font-mono text-xs">
          <div className="text-[#2e5e8e] uppercase tracking-[0.25em] text-[10px]">Inquiries</div>
          <a href="#i1" className="block text-[#232a30]/80 hover:text-[#2e5e8e]">Private Viewings</a>
          <a href="#i2" className="block text-[#232a30]/80 hover:text-[#2e5e8e]">Client Portal</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center font-mono text-[10px] text-[#232a30]/50 tracking-[0.2em]">
        <span>REF. 4420-FT</span>
        <span>GENEVA, SWITZERLAND</span>
      </div>
    </footer>
  );
}
