import React from 'react';
import { ArrowUpRight, Sliders, Disc } from 'lucide-react';

export function Navbar4() {
  return (
    <header className="w-full border-b border-neutral-800 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-white" />
          <span className="font-extrabold tracking-tighter text-lg uppercase">Gravitas Studio</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex flex-col text-right text-[10px] font-mono text-neutral-400 leading-tight">
            <span>SPECIMEN INDEX</span>
            <span className="text-white font-bold">44 FAMILY VARIANTS</span>
          </div>
          <div className="relative group">
            <button className="bg-neutral-900 border border-neutral-800 px-4 py-2 text-xs font-mono flex items-center space-x-3 text-white hover:border-neutral-600 transition-colors">
              <span>SPECIMEN MENU [v4]</span>
              <span className="text-neutral-500">▼</span>
            </button>
            <div className="absolute right-0 top-full mt-1 w-56 bg-neutral-950 border border-neutral-800 p-2 hidden group-hover:block z-50 shadow-2xl">
              <a href="#hairline" className="block px-3 py-2 text-xs font-light text-neutral-300 hover:bg-neutral-900 hover:text-white">Hairline (200)</a>
              <a href="#light" className="block px-3 py-2 text-xs font-light text-neutral-300 hover:bg-neutral-900 hover:text-white">Light (300)</a>
              <a href="#regular" className="block px-3 py-2 text-xs font-normal text-neutral-300 hover:bg-neutral-900 hover:text-white">Regular (400)</a>
              <a href="#bold" className="block px-3 py-2 text-xs font-bold text-neutral-200 hover:bg-neutral-900 hover:text-white">Bold (700)</a>
              <a href="#extrabold" className="block px-3 py-2 text-xs font-black text-white hover:bg-neutral-900">Extra Bold (900)</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
