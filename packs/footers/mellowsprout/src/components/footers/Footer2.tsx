import React from 'react';
import { Sparkles } from 'lucide-react';

export function Footer2() {
  return (
    <footer className="w-full bg-white text-[#3d2530] pt-20 pb-12 px-6 relative border-t-4 border-[#3d2530]/10">
      {/* Decorative SVG top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full pointer-events-none">
        <svg className="relative block w-full h-8 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#ff8c42] flex items-center justify-center text-white font-black">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-2xl font-black">MellowSprout</span>
        </div>
        <div className="flex gap-6 font-bold text-sm">
          <a href="#" className="hover:text-[#ff8c42]">Privacy</a>
          <a href="#" className="hover:text-[#ff8c42]">Terms</a>
          <a href="#" className="hover:text-[#ff8c42]">Support</a>
          <a href="#" className="hover:text-[#ff8c42]">Contact</a>
        </div>
        <div className="text-sm font-bold opacity-60">
          © 2026 MellowSprout Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
