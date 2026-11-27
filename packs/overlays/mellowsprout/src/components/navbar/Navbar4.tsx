import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Navbar4() {
  return (
    <header className="w-full bg-[#5ba8e8] text-white py-4 px-6 relative shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white text-[#5ba8e8] flex items-center justify-center font-black shadow-lg transform -rotate-6">
            🌈
          </div>
          <span className="text-2xl font-black tracking-tight">MellowSprout</span>
        </div>

        {/* Sticker Dropdown Container */}
        <div className="flex items-center gap-4">
          <div className="relative group">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#5ba8e8] font-black shadow-md hover:bg-[#fdf3e7] transition-all">
              Explore Kits ▾
            </button>
            {/* Sticker Dropdown Card */}
            <div className="absolute right-0 mt-3 w-64 bg-white text-[#3d2530] rounded-3xl p-4 shadow-2xl border-4 border-[#3d2530] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="absolute -top-3 right-6 bg-[#ff8c42] text-white text-xs px-3 py-0.5 rounded-full font-black border-2 border-[#3d2530] rotate-3">
                Hot! 🔥
              </div>
              <div className="space-y-2">
                <a href="#" className="flex items-center justify-between p-2 rounded-2xl hover:bg-[#fdf3e7] font-bold text-sm">
                  <span>🎨 Painting Carnival</span>
                  <ArrowRight className="w-4 h-4 text-[#ff8c42]" />
                </a>
                <a href="#" className="flex items-center justify-between p-2 rounded-2xl hover:bg-[#fdf3e7] font-bold text-sm">
                  <span>🧩 Clay Sculpting Box</span>
                  <ArrowRight className="w-4 h-4 text-[#5ba8e8]" />
                </a>
                <a href="#" className="flex items-center justify-between p-2 rounded-2xl hover:bg-[#fdf3e7] font-bold text-sm">
                  <span>🎶 Rhythm & Tunes</span>
                  <ArrowRight className="w-4 h-4 text-[#f975a3]" />
                </a>
              </div>
            </div>
          </div>

          <button className="px-6 py-2.5 rounded-full bg-[#ff8c42] text-white font-black shadow-lg border-b-4 border-[#d66a20]">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
