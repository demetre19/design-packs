import React from 'react';
import { ArrowUpRight, Search, Menu } from 'lucide-react';

export function Navbar2() {
  return (
    <header className="w-full bg-black text-white border-b border-white/20">
      <div className="flex justify-between items-center px-4 py-1 text-[9px] uppercase tracking-widest border-b border-white/20 font-mono text-zinc-400">
        <span>BLACKBAR // EDITION 04</span>
        <span>ISSN 2940-1029</span>
        <span>RESTRICTED ACCESS</span>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-xl font-black uppercase tracking-tighter">VAULT*</span>
          <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-mono text-zinc-300">
            <a href="#" className="hover:text-white transition-colors">Manifesto</a>
            <a href="#" className="hover:text-white transition-colors">Volumes</a>
            <a href="#" className="hover:text-white transition-colors">Studio</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden sm:flex items-center gap-1 text-xs uppercase tracking-widest font-mono bg-white text-black px-4 py-2 hover:bg-zinc-200 transition-colors font-medium">
            Inquire <ArrowUpRight className="w-4 h-4" />
          </a>
          <button className="p-2 bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
