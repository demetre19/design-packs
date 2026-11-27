import React from 'react';
import { Mail, Phone } from 'lucide-react';

export function Navbar2() {
  return (
    <header className="w-full bg-white text-black border-b border-black font-mono">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <div>
          <h1 className="text-sm font-bold uppercase tracking-tight">MARCUS STERLING / STUDIO STERLING</h1>
          <p className="text-[10px] uppercase tracking-widest text-neutral-600">Design Director & Spatial Typographer</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
          <span className="flex items-center gap-1 border-b border-black pb-0.5">
            <Mail className="w-3 h-3" /> studio@marcussterling.com
          </span>
          <span className="flex items-center gap-1 border-b border-black pb-0.5">
            <Phone className="w-3 h-3" /> +44 (0)20 7946 0912
          </span>
          <span className="border border-black px-2 py-0.5">LON / ZUR</span>
        </div>
      </div>
    </header>
  );
}
