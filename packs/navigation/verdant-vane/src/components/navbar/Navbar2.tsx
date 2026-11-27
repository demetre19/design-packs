import React from 'react';
import { Sparkles } from 'lucide-react';

export function Navbar2() {
  return (
    <header className="w-full bg-[#faf6f0] px-6 py-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#122420]/15">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#2a7a6d] font-semibold">Est. 2022</span>
            <div className="h-4 w-[1px] bg-[#122420]/20" />
            <span className="font-serif text-2xl text-[#122420]">Verdant & Vane</span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm text-[#122420]">
              <a href="#services" className="hover:text-[#2a7a6d] transition-colors">Services</a>
              <a href="#practitioners" className="hover:text-[#2a7a6d] transition-colors">Practitioners</a>
              <a href="#research" className="hover:text-[#2a7a6d] transition-colors">Research</a>
              <a href="#contact" className="hover:text-[#2a7a6d] transition-colors">Contact</a>
            </nav>
            <a
              href="#portal"
              className="px-4 py-2 rounded-full border border-[#1d4f47] text-[#1d4f47] text-sm font-medium hover:bg-[#1d4f47] hover:text-[#faf6f0] transition-all"
            >
              Patient Portal
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
