import React from 'react';
import { BookOpen, Compass, Search, Bookmark, ArrowUpRight } from 'lucide-react';

export function Navbar4() {
  return (
    <header className="w-full bg-neutral-900 border-b border-neutral-800 text-neutral-200 px-6 py-4 font-mono">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 bg-neutral-400 rounded-none"></div>
          <span className="text-xs tracking-widest text-white uppercase font-bold">MUSEUM OF METAL TYPE</span>
        </div>
        <div className="flex items-center space-x-8 text-xs text-neutral-400">
          <a href="#exhibit" className="hover:text-white">EXHIBIT</a>
          <a href="#timeline" className="hover:text-white">TIMELINE</a>
          <a href="#specimens" className="hover:text-white">SPECIMENS</a>
          <a href="#contact" className="hover:text-white">INQUIRY</a>
        </div>
        <div className="text-[11px] text-neutral-500 border border-neutral-800 px-2.5 py-1">
          DOC ID: #883-M
        </div>
      </div>
    </header>
  );
}
