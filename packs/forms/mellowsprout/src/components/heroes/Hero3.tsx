import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export function Hero3() {
  return (
    <section className="w-full bg-[#ff8c42] py-20 px-6 text-white relative overflow-hidden shadow-xl">
      {/* Confetti sprinkle dots */}
      <div className="absolute top-6 left-10 w-3 h-3 rounded-full bg-white opacity-80"></div>
      <div className="absolute top-16 right-20 w-4 h-4 rounded-full bg-[#f975a3]"></div>
      <div className="absolute bottom-10 left-1/3 w-5 h-5 rounded-full bg-[#5ba8e8]"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 rounded-full bg-[#6dbf67]"></div>

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-block px-5 py-2 rounded-full bg-white text-[#ff8c42] font-black uppercase tracking-wider text-sm shadow-md transform -rotate-2">
          🎉 The 2026 Carnival Play Festival
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none">
          BIG IDEAS <br />
          <span className="text-[#fdf3e7] underline decoration-[#5ba8e8] decoration-wavy">TINY HANDS</span>
        </h1>
        <p className="text-xl max-w-2xl mx-auto font-medium text-white/90">
          Unleash creativity with our award-winning carnival boxes delivered right to your doorstep every single month.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button className="px-9 py-4 rounded-full bg-white text-[#ff8c42] font-black text-lg shadow-2xl hover:bg-[#fdf3e7] transition-all transform hover:scale-105">
            Grab Your Box ✨
          </button>
          <button className="px-9 py-4 rounded-full bg-[#3d2530] text-white font-black text-lg shadow-2xl hover:bg-[#2c1a22] transition-all">
            Browse Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
