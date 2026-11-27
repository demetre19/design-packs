import React from 'react';
import { Compass, Grid } from 'lucide-react';

export function Footer1() {
  return (
    <footer className="w-full bg-[#1b3a5c] text-white py-12 px-6 border-t border-white/30 font-mono text-xs uppercase tracking-wider relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/20">
        <div className="space-y-3">
          <div className="font-bold text-sm tracking-widest text-cyan-300">ATELIER ORTHOGONAL</div>
          <p className="text-[11px] text-cyan-100 leading-relaxed">Structural engineering & architectural master planning practiced with millimeter precision.</p>
        </div>
        <div className="space-y-2">
          <div className="text-[10px] text-cyan-300 font-bold">[01] SYSTEMS</div>
          <a href="#structural" className="block hover:text-cyan-300 text-[11px]">Foundation Matrix</a>
          <a href="#facade" className="block hover:text-cyan-300 text-[11px]">Curtain Wall Glazing</a>
          <a href="#seismic" className="block hover:text-cyan-300 text-[11px]">Seismic Damping</a>
        </div>
        <div className="space-y-2">
          <div className="text-[10px] text-cyan-300 font-bold">[02] REGISTER</div>
          <a href="#dwg" className="block hover:text-cyan-300 text-[11px]">Drawing Index</a>
          <a href="#revisions" className="block hover:text-cyan-300 text-[11px]">Revision History</a>
          <a href="#standards" className="block hover:text-cyan-300 text-[11px]">ISO Standards</a>
        </div>
        <div className="space-y-2 border border-white/30 p-4 bg-[#142d48]">
          <div className="text-[10px] text-cyan-300 font-bold">TITLE BLOCK</div>
          <div className="text-[10px] text-cyan-100">DWG REF: FT-01</div>
          <div className="text-[10px] text-cyan-100">SCALE: 1:100</div>
          <div className="text-[10px] text-cyan-300 font-bold mt-2">STATUS: APPROVED</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-cyan-200">
        <div>© 2026 ATELIER ORTHOGONAL. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>LAT: 37.7749° N</span>
          <span>LONG: 122.4194° W</span>
          <span>SHEET 44/44</span>
        </div>
      </div>
    </footer>
  );
}
