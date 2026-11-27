import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Hero5() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Huge black type mass left */}
        <div className="lg:col-span-8">
          <div className="font-mono text-xs text-[#ff2e00] font-bold mb-3 uppercase">
            // SPLIT ARCHITECTURE HERO
          </div>
          <h1 className="text-6xl sm:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
            PURE <br />
            <span className="text-white bg-black px-4 inline-block">KINETIC</span>
          </h1>
          <p className="font-mono text-xs text-neutral-600 max-w-lg leading-relaxed">
            Unrelenting acceleration. Designed for professional pilots and apex hunters seeking the ultimate adrenaline vector.
          </p>
        </div>

        {/* Small precise spec register far right */}
        <div className="lg:col-span-4 border-2 border-black p-6 bg-white space-y-4">
          <div className="flex justify-between items-center border-b border-black pb-3">
            <span className="font-mono text-[10px] text-neutral-500">// REGISTER</span>
            <span className="font-mono text-xs font-bold text-[#ff2e00]">VX-999</span>
          </div>
          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between">
              <span className="text-neutral-500">CHASSIS</span>
              <span className="font-bold">CARBON MONO</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">POWER</span>
              <span className="font-bold">215 HP</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">BATTERY</span>
              <span className="font-bold">998V SOLID</span>
            </div>
          </div>
          <button className="w-full bg-black text-white hover:bg-[#ff2e00] hover:text-black font-black py-3 uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer">
            <span>DISPATCH SPEC</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
