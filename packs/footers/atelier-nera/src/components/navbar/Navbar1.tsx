import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Navbar1() {
  return (
    <header className="w-full max-w-6xl mx-auto px-6 py-4 border-b border-black/10">
      <div className="flex items-center justify-between text-[9px] tracking-widest uppercase mb-4 text-black/60">
        <span>atelier nera [01]</span>
        <div className="hidden md:flex items-center gap-6">
          <a href="#work" className="hover:text-black transition-colors">work</a>
          <a href="#studio" className="hover:text-black transition-colors">studio</a>
          <a href="#journal" className="hover:text-black transition-colors">journal</a>
          <a href="#contact" className="hover:text-black transition-colors">contact</a>
        </div>
        <span>page 01/44</span>
      </div>
      <div className="flex items-center justify-between py-2">
        <a href="#" className="font-light text-lg tracking-tight lowercase">atelier nera</a>
        <div className="flex items-center gap-4 text-xs font-light">
          <span className="text-black/50">milano / paris</span>
          <a href="#inquiry" className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white hover:bg-black/80 transition-colors">
            inquire <ArrowRight className="w-3 h-3 stroke-[1.5]" />
          </a>
        </div>
      </div>
    </header>
  );
}
