import React from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';

export function Hero1() {
  return (
    <section className="relative w-full bg-white text-black py-16 overflow-hidden border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Registration marks */}
        <Plus className="absolute -top-4 -left-4 w-4 h-4 text-black" />
        <Plus className="absolute -top-4 -right-4 w-4 h-4 text-black" />

        {/* Tiny mono caption offset */}
        <div className="flex justify-between items-end mb-4 font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
          <span>// SYS.REF: 994-APEX</span>
          <span>LOCATION: TOKYO TEST DOCK</span>
          <span className="text-[#ff2e00] font-bold">STATUS: ACTIVE RECORD</span>
        </div>

        {/* Gigantic cropped headline overlapping full-bleed image plate */}
        <div className="relative z-10">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] select-none">
            UNCOMPROMISED <span className="text-[#ff2e00]">VELOCITY</span>
          </h1>
        </div>

        {/* Full-bleed image plate */}
        <div className="relative mt-[-3rem] sm:mt-[-5rem] z-0 border-2 border-black bg-neutral-900 h-[400px] sm:h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1600&q=80" 
            alt="Velox Apex Hyperbike"
            className="w-full h-full object-cover mix-blend-luminosity filter contrast-125 opacity-90 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          
          {/* Floating micro captions over image */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end font-mono text-xs text-white gap-4">
            <div>
              <div className="text-[#ff2e00] font-bold">// SPECIFICATION</div>
              <div className="text-neutral-300">0-100 KM/H IN 2.1 SECONDS</div>
            </div>
            <div className="bg-white text-black px-4 py-2 font-black uppercase tracking-wider flex items-center gap-2 hover:bg-[#ff2e00] hover:text-white transition-colors cursor-pointer">
              <span>EXPLORE SPEC</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
