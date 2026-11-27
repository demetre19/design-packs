import React from 'react';
import { BookOpen, Compass, Search, Bookmark, ArrowUpRight } from 'lucide-react';

export function Navbar3() {
  return (
    <header className="w-full bg-neutral-900 border-b border-neutral-800 text-neutral-200 flex">
      <div className="bg-neutral-950 border-r border-neutral-800 px-4 py-3 flex items-center justify-center font-mono text-[10px] tracking-widest text-neutral-400 uppercase [writing-mode:vertical-rl] rotate-180 h-16">
        ARCHIVE REEL // 1961
      </div>
      <div className="flex-1 px-6 py-4 flex items-center justify-between font-mono">
        <div className="flex items-center space-x-8">
          <div className="text-lg font-serif font-bold text-white tracking-wider">
            ÉPOQUE FONTAINE
          </div>
          <div className="hidden md:flex items-center space-x-4 text-xs text-neutral-400 border-l border-neutral-800 pl-4">
            <span>CURATOR: DR. H. VANDERBILT</span>
            <span>•</span>
            <span>EDITION: FIRST PRESS</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-xs">
          <a href="#vault" className="text-neutral-400 hover:text-white px-3 py-1 border border-neutral-800 hover:border-neutral-700">VAULT ACCESS</a>
          <a href="#acquire" className="bg-white text-neutral-900 px-3 py-1 font-bold flex items-center space-x-1 hover:bg-neutral-200">
            <span>ACQUIRE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
