import React from 'react';
import { Play } from 'lucide-react';

export function Media3() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// VIDEO PLATE DISPATCH</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
          SUZUKA <span className="text-[#ff2e00]">ON-BOARD</span>
        </h2>

        {/* Video plate with oversized play glyph */}
        <div className="relative border-2 border-black bg-black h-[400px] overflow-hidden flex items-center justify-center group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=1600&q=80" 
            alt="Video thumbnail"
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 filter contrast-125"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Oversized play glyph */}
          <div className="relative z-10 w-24 h-24 bg-[#ff2e00] text-black flex items-center justify-center border-2 border-black group-hover:scale-110 transition-transform">
            <Play className="w-10 h-10 fill-black translate-x-1" />
          </div>

          <div className="absolute bottom-4 left-6 font-mono text-xs text-white z-10">
            [PLAY: FULL LAP RECORD ONBOARD // 1:58.42]
          </div>
        </div>
      </div>
    </section>
  );
}
