import React from 'react';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

export function Hero1() {
  return (
    <section className="w-full bg-[#fdf3e7] py-16 px-6 relative overflow-hidden">
      {/* Decorative confetti dots */}
      <div className="absolute top-10 left-12 w-4 h-4 rounded-full bg-[#ff8c42] animate-bounce"></div>
      <div className="absolute top-20 right-16 w-5 h-5 rounded-full bg-[#f975a3] animate-pulse"></div>
      <div className="absolute bottom-10 left-1/4 w-3 h-3 rounded-full bg-[#5ba8e8]"></div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6 relative z-10">
        {/* Lowercase Pill Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f975a3]/20 text-[#f975a3] font-black text-sm uppercase tracking-wider border-2 border-[#f975a3]/30">
          <Sparkles className="w-4 h-4" /> spark joyful imagination everyday
        </div>

        {/* Huge Friendly Heading with Squiggle Underline */}
        <h1 className="text-5xl md:text-7xl font-black text-[#3d2530] tracking-tight leading-tight">
          Where curious kids build <span className="relative inline-block text-[#ff8c42]">
            magic
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#ff8c42]/30 rounded-full transform -rotate-1"></span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[#3d2530]/80 max-w-2xl font-medium">
          MellowSprout is the ultimate creative wonderland combining hands-on craft kits, playful workshops, and joyful discovery for children.
        </p>

        {/* Candy CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <button className="px-8 py-4 rounded-full bg-[#ff8c42] text-white font-extrabold text-lg shadow-xl shadow-[#ff8c42]/30 hover:bg-[#ff7a28] active:translate-y-0.5 transition-all border-b-4 border-[#d66a20] flex items-center gap-3">
            Explore Play Kits <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 rounded-full bg-white text-[#3d2530] font-extrabold text-lg shadow-lg hover:bg-[#f975a3] hover:text-white active:translate-y-0.5 transition-all border-2 border-[#3d2530]/10 flex items-center gap-2">
            <Star className="w-5 h-5 text-[#ff8c42]" /> Book Free Class
          </button>
        </div>

        {/* Blob-framed Photo Plate */}
        <div className="mt-12 relative w-full max-w-3xl">
          <div className="absolute -inset-4 bg-[#5ba8e8]/30 rounded-[40px] transform rotate-2"></div>
          <div className="absolute -inset-4 bg-[#f975a3]/20 rounded-[40px] transform -rotate-1"></div>
          <div className="relative bg-white p-4 rounded-[32px] shadow-2xl border-4 border-[#3d2530] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1000&auto=format&fit=crop&q=80" 
              alt="Happy kids crafting" 
              className="w-full h-80 object-cover rounded-2xl"
            />
            <div className="absolute bottom-6 left-6 bg-[#ff8c42] text-white px-4 py-2 rounded-2xl font-black text-sm shadow-lg border-2 border-[#3d2530] rotate-[-3deg]">
              🎨 100+ Hands-on Activities!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
