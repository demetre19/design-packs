import React from 'react';
import { Leaf, ArrowRight } from 'lucide-react';

export function Navbar1() {
  return (
    <header className="w-full bg-[#faf6f0] border-b border-[#122420]/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#1d4f47] flex items-center justify-center text-[#faf6f0]">
            <Leaf className="w-5 h-5" />
          </div>
          <span className="font-serif text-xl tracking-tight text-[#122420]">Verdant & Vane</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#122420]">
          <a href="#philosophy" className="hover:text-[#2a7a6d] transition-colors">Philosophy</a>
          <a href="#clinical" className="hover:text-[#2a7a6d] transition-colors">Clinical Practice</a>
          <a href="#journal" className="hover:text-[#2a7a6d] transition-colors">Journal</a>
          <a href="#studio" className="hover:text-[#2a7a6d] transition-colors">Studio</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1d4f47] text-[#faf6f0] text-sm font-medium hover:bg-[#153b34] transition-all shadow-sm"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
