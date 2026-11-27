import React from 'react';
import { Leaf } from 'lucide-react';

export function Footer2() {
  return (
    <footer className="w-full bg-[#faf6f0] py-16 px-6 border-t border-[#122420]/10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-[#1d4f47] flex items-center justify-center text-[#faf6f0] mb-4">
          <Leaf className="w-5 h-5" />
        </div>
        <span className="font-serif text-2xl text-[#122420] mb-6">Verdant & Vane</span>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-[#122420] mb-8">
          <a href="#philosophy" className="hover:text-[#2a7a6d]">Philosophy</a>
          <a href="#practice" className="hover:text-[#2a7a6d]">Practice</a>
          <a href="#journal" className="hover:text-[#2a7a6d]">Journal</a>
          <a href="#inquire" className="hover:text-[#2a7a6d]">Inquire</a>
        </div>

        <p className="text-xs text-[#122420]/60 uppercase tracking-widest">
          © 2026 Verdant & Vane. All rights reserved. Crafted for clinical excellence.
        </p>
      </div>
    </footer>
  );
}
