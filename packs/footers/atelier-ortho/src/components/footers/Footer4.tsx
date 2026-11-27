import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

export function Footer4() {
  return (
    <footer className="w-full bg-[#1b3a5c] text-white py-12 px-6 border-t border-white/30 font-mono text-xs uppercase tracking-wider">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/20 pb-8">
          <div className="border border-white/30 p-4 bg-[#142d48]">
            <span className="text-[10px] text-cyan-300">SPECIFICATION CONTACT [01]</span>
            <div className="font-bold text-sm mt-1">INQUIRIES@ATELIERORTHOGONAL.COM</div>
          </div>
          <div className="border border-white/30 p-4 bg-[#142d48]">
            <span className="text-[10px] text-cyan-300">SPECIFICATION CONTACT [02]</span>
            <div className="font-bold text-sm mt-1">+1 (415) 890-2400</div>
          </div>
          <div className="border border-white/30 p-4 bg-[#142d48]">
            <span className="text-[10px] text-cyan-300">SPECIFICATION CONTACT [03]</span>
            <div className="font-bold text-sm mt-1">SAN FRANCISCO HQ // GRID C-4</div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] text-cyan-200">
          <div>ATELIER ORTHOGONAL ARCHITECTURAL PRACTICE</div>
          <div>SHEET FT-04 // REV 03</div>
        </div>
      </div>
    </footer>
  );
}
