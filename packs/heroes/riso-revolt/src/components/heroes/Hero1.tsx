import React from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

export default function Hero1() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111] relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start relative">
          {/* Rotated Starburst Badge */}
          <div className="absolute -top-10 -left-6 bg-[#ffd92e] border-2 border-[#111111] p-3 shadow-hard-sm rotate-[-8deg] z-10 hidden sm:flex items-center gap-1 font-mono text-xs font-black">
            <Star size={14} fill="#111111" />
            <span>VOTE #1 DESIGN LAB 2026</span>
          </div>

          <div className="inline-block bg-[#111111] text-[#fffdf5] font-mono text-xs font-bold px-3 py-1 mb-4 shadow-hard-sm">
            [SYS.01 // MAIN HERO]
          </div>

          <h1 className="font-grotesk font-black text-5xl sm:text-7xl uppercase tracking-tighter leading-[0.95] mb-6">
            PUNK PRINT & DIGITAL JOY.
          </h1>

          <p className="font-mono text-sm sm:text-base text-[#111111]/80 max-w-xl mb-8 leading-relaxed">
            We forge unapologetic tactile risograph print editions and ultra-responsive brutalist web interfaces for brands that refuse to look like everyone else.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="btn-brutal bg-[#ffd92e] text-[#111111] font-grotesk font-black text-sm px-6 py-3.5 flex items-center gap-3">
              <span>EXPLORE EDITIONS</span>
              <ArrowRight size={18} strokeWidth={3} />
            </button>
            <button className="btn-brutal bg-[#fff] text-[#111111] font-grotesk font-black text-sm px-6 py-3.5">
              VIEW MANIFESTO
            </button>
          </div>
        </div>

        {/* Right Column: Bordered Photo Plate with Caption Bar */}
        <div className="lg:col-span-5">
          <div className="bg-white border-3 border-[#111111] shadow-hard-lg overflow-hidden">
            <div className="relative aspect-[4/3] bg-[#ffd92e] overflow-hidden border-b-3 border-[#111111]">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
                alt="Brutalist Design Art" 
                className="w-full h-full object-cover mix-blend-multiply contrast-125"
              />
              <div className="absolute top-3 left-3 bg-[#ff6b5e] text-white font-mono text-xs font-black px-2 py-1 border-2 border-[#111111] shadow-hard-sm">
                PLATE #04
              </div>
            </div>
            {/* Caption bar */}
            <div className="p-3 bg-[#fffdf5] flex items-center justify-between font-mono text-xs font-bold">
              <span>FIG. 01: RISO INK TEST</span>
              <span className="text-[#ff6b5e]">● LIVE FEED</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
