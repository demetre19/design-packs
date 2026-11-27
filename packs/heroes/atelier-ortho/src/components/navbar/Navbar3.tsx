import React from 'react';
import { Layers, Grid, Square } from 'lucide-react';

export function Navbar3() {
  return (
    <nav className="w-full bg-[#1b3a5c] text-white font-mono text-xs uppercase tracking-widest border-b border-white/25">
      {/* Top Bar with coordinates */}
      <div className="border-b border-white/15 px-6 py-1.5 flex justify-between items-center text-[9px] text-cyan-200 opacity-80">
        <div className="flex items-center gap-4">
          <span>LAT: 37.7749° N</span>
          <span>LONG: 122.4194° W</span>
          <span>DATUM: WGS84</span>
        </div>
        <div className="flex items-center gap-4">
          <span>SHEET: 01 OF 44</span>
          <span className="border border-cyan-300 px-1 py-0.5 text-[8px]">CHECKED: RO</span>
        </div>
      </div>

      {/* Centered Brand Header */}
      <div className="py-5 text-center border-b border-white/15 relative">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 text-[10px] text-cyan-300">
          <Square className="w-3 h-3" />
          <span>GRID: B-04</span>
        </div>
        <h1 className="text-lg font-bold tracking-[0.25em] text-white">ATELIER ORTHOGONAL</h1>
        <p className="text-[10px] text-cyan-200 mt-1 tracking-widest">ARCHITECTURAL PRACTICE & STRUCTURAL ENGINEERING</p>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 text-[10px] text-cyan-300">
          <span>SCALE 1:200</span>
          <Grid className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Link Row */}
      <div className="max-w-4xl mx-auto px-6 py-2.5 flex flex-wrap items-center justify-center gap-8 text-[11px]">
        <a href="#master" className="hover:text-cyan-300 hover:underline">Master Plan</a>
        <a href="#elevations" className="hover:text-cyan-300 hover:underline">Elevations</a>
        <a href="#sections" className="hover:text-cyan-300 hover:underline">Sections</a>
        <a href="#details" className="hover:text-cyan-300 hover:underline">Details</a>
        <a href="#register" className="hover:text-cyan-300 hover:underline">Register</a>
        <a href="#contact" className="text-cyan-300 hover:underline">[ Contact ]</a>
      </div>
    </nav>
  );
}
