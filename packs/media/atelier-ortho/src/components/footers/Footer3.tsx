import React from 'react';
import { Compass } from 'lucide-react';

export function Footer3() {
  return (
    <footer className="w-full bg-[#1b3a5c] text-white py-8 px-6 border-t border-white/30 font-mono text-xs uppercase tracking-widest">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <Compass className="w-4 h-4 text-cyan-300" />
          <span>ATELIER ORTHOGONAL // STRUCTURAL SYSTEMS</span>
        </div>
        <div className="border border-white/30 px-4 py-1.5 bg-[#142d48] text-cyan-300 text-[11px]">
          SHEET FT-03 // SCALE 1:100 // APPROVED
        </div>
      </div>
    </footer>
  );
}
