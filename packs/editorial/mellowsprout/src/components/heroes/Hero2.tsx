import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export function Hero2() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-6 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5ba8e8]/25 text-[#2b7bc0] font-black text-sm uppercase tracking-wider w-fit">
            <Sparkles className="w-4 h-4" /> sensory learning adventure
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#3d2530] leading-tight">
            Play that sparks <span className="relative inline-block px-2 text-[#f975a3]">
              endless
              <span className="absolute inset-0 border-4 border-[#f975a3] rounded-3xl transform -rotate-2 scale-110 pointer-events-none"></span>
            </span> smiles.
          </h1>
          <p className="text-lg text-[#3d2530]/80 font-medium">
            Designed by childhood experts and beloved by families worldwide. Dive into our colorful boxes filled with art, science, and imagination.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <button className="px-8 py-4 rounded-full bg-[#6dbf67] text-white font-extrabold text-lg shadow-xl shadow-[#6dbf67]/30 hover:bg-[#5da857] transition-all border-b-4 border-[#4d9c47]">
              Get Started Today ✨
            </button>
            <div className="flex items-center gap-2 font-bold text-[#3d2530]">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#ff8c42] border-2 border-white flex items-center justify-center text-white text-xs font-black">👧</div>
                <div className="w-10 h-10 rounded-full bg-[#5ba8e8] border-2 border-white flex items-center justify-center text-white text-xs font-black">👦</div>
                <div className="w-10 h-10 rounded-full bg-[#f975a3] border-2 border-white flex items-center justify-center text-white text-xs font-black">🎨</div>
              </div>
              <span>10k+ Happy Kids</span>
            </div>
          </div>
        </div>

        {/* Right Column: Photo Stack with Sticker Borders */}
        <div className="relative flex items-center justify-center py-10">
          <div className="relative w-72 h-80 bg-white p-4 rounded-3xl shadow-2xl border-4 border-[#3d2530] transform rotate-6 z-20">
            <img 
              src="https://images.unsplash.com/photo-1596464019199-ef038b30e013?w=800&auto=format&fit=crop&q=80" 
              alt="Child painting" 
              className="w-full h-64 object-cover rounded-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#ff8c42] text-white px-3 py-1 rounded-full font-black text-xs border-2 border-[#3d2530] rotate-6">
              ⭐ #1 Toy Award
            </div>
          </div>
          <div className="absolute w-72 h-80 bg-[#5ba8e8] p-4 rounded-3xl shadow-xl border-4 border-[#3d2530] transform -rotate-6 z-10 scale-95 opacity-90">
            <div className="w-full h-64 bg-white/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
