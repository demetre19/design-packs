import React from 'react';
import { Menu, Search, Ticket, ArrowUpRight } from 'lucide-react';

export function Navbar1() {
  return (
    <nav className="w-full bg-black border-b-2 border-white text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
        {/* Condensed Wordmark filling width feeling */}
        <div className="flex items-center justify-between border-b md:border-b-0 border-white/20 pb-3 md:pb-0">
          <a href="#" className="font-display text-4xl tracking-tighter hover:opacity-80 transition-opacity">
            TEATRO // DEL CAOS
          </a>
          <button className="md:hidden p-1 border border-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Stacked tiny links */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-mono-num uppercase tracking-widest border-t md:border-t-0 pt-3 md:pt-0 border-white/20">
          <a href="#" className="hover:underline flex items-center gap-1">01. REPERTOIRE <ArrowUpRight className="w-3 h-3" /></a>
          <a href="#" className="hover:underline">02. ENSEMBLE</a>
          <a href="#" className="hover:underline">03. MANIFESTO</a>
          <a href="#" className="hover:underline">04. ARCHIVIO</a>
          <a href="#" className="hover:underline">05. RESIDENZE</a>
          <div className="flex items-center gap-3 col-span-2 sm:col-span-1 justify-end">
            <button className="px-3 py-1 bg-white text-black font-display text-sm tracking-wider hover:bg-black hover:text-white border border-white transition-colors flex items-center gap-1">
              <Ticket className="w-3 h-3" /> TICKETS
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
