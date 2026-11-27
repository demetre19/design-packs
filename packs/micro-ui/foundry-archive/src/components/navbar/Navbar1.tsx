import React from 'react';
import { BookOpen, Compass, Search, Bookmark, ArrowUpRight } from 'lucide-react';

export function Navbar1() {
  return (
    <header className="w-full bg-neutral-900 border-b border-neutral-800 text-neutral-200 px-6 py-4 font-mono">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="text-xl font-serif tracking-widest text-white uppercase">
            TYPOGRAPHICA <span className="text-neutral-500 font-sans text-xs">ÉD. 1957</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-xs text-neutral-400">
            <a href="#era" className="hover:text-white transition-colors">ERA [1957]</a>
            <a href="#specimens" className="hover:text-white transition-colors">SPECIMENS</a>
            <a href="#foundry" className="hover:text-white transition-colors">FOUNDRY REC.</a>
            <a href="#colophon" className="hover:text-white transition-colors">COLOPHON</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4 text-xs">
          <span className="text-neutral-500 hidden sm:inline">REF: ARC-5701</span>
          <button className="bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1.5 border border-neutral-700 flex items-center space-x-2 transition-colors">
            <Search className="w-3.5 h-3.5 text-neutral-400" />
            <span>INDEX</span>
          </button>
        </div>
      </div>
    </header>
  );
}
