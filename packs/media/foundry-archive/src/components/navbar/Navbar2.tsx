import React from 'react';
import { BookOpen, Compass, Search, Bookmark, ArrowUpRight } from 'lucide-react';

export function Navbar2() {
  return (
    <header className="w-full bg-neutral-900 border-b border-neutral-800 text-neutral-200 px-6 py-3 font-mono">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-xs">
        <div className="flex items-center space-x-4">
          <span className="bg-neutral-800 text-neutral-300 px-2 py-0.5 border border-neutral-700 font-bold">CATALOG // 04</span>
          <span className="text-neutral-400 hidden lg:inline">BODONI REVIVAL ARCHIVE — SECTION C</span>
        </div>
        <div className="flex items-center space-x-6 uppercase tracking-wider text-neutral-300">
          <a href="#glyphs" className="hover:text-white">01. GLYPHS</a>
          <a href="#weights" className="hover:text-white">02. WEIGHTS</a>
          <a href="#license" className="hover:text-white">03. ACQUISITION</a>
          <a href="#curator" className="hover:text-white">04. NOTES</a>
        </div>
        <div className="flex items-center space-x-2 text-neutral-400">
          <Bookmark className="w-3.5 h-3.5" />
          <span>SHELF 9B</span>
        </div>
      </div>
    </header>
  );
}
