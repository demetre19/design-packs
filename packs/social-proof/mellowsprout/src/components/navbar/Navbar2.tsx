import React from 'react';
import { Palette, Heart, Compass } from 'lucide-react';

export function Navbar2() {
  return (
    <header className="w-full bg-[#f975a3] text-white pt-5 pb-8 px-6 relative shadow-lg shadow-[#f975a3]/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white text-[#f975a3] flex items-center justify-center font-black shadow-md">
            <Palette className="w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-wide">MellowSprout</span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-6 font-bold">
          <a href="#" className="hover:underline flex items-center gap-1.5"><Compass className="w-4 h-4" /> Explore</a>
          <a href="#" className="hover:underline">Activities</a>
          <a href="#" className="hover:underline">Stories</a>
          <a href="#" className="hover:underline">Pricing</a>
        </div>

        {/* Action */}
        <div className="flex items-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider">Carnival Edition</span>
          <button className="px-5 py-2.5 rounded-full bg-white text-[#f975a3] font-black shadow-md hover:bg-[#fdf3e7] transition-all">
            Start Free ✨
          </button>
        </div>
      </div>

      {/* Decorative bottom wavy SVG edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg className="relative block w-full h-4 text-[#fdf3e7]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
    </header>
  );
}
