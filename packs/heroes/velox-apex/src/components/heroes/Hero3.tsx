import React from 'react';
import { Zap, ArrowUpRight } from 'lucide-react';

export function Hero3() {
  return (
    <section className="relative w-full bg-white text-black py-20 border-b-2 border-black overflow-hidden">
      {/* Red-black diagonal stripes background band */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[repeating-linear-gradient(-45deg,#ff2e00,#ff2e00_20px,#000_20px,#000_40px)]" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex items-center gap-2 font-mono text-xs text-[#ff2e00] font-bold mb-4">
          <Zap className="w-4 h-4" />
          <span>// MOTORTASK TRACK EDITION</span>
        </div>

        {/* Scale colliding title */}
        <h1 className="text-5xl sm:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
          SPEED HAS <br />
          <span className="bg-black text-white px-3 py-1 inline-block text-[#ff2e00]">NO MERCY</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="border-2 border-black bg-black h-[350px] overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1609630875174-b9b05e113e12?auto=format&fit=crop&w=1000&q=80" 
              alt="Track edition bike"
              className="w-full h-full object-cover opacity-85 filter contrast-150"
            />
            <div className="absolute top-4 left-4 bg-[#ff2e00] text-black font-mono text-[10px] font-bold px-2 py-1">
              LIVE FEED // CAM 04
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-mono text-sm leading-relaxed text-neutral-800">
              Built for riders who demand absolute telemetry precision. The Velox Apex combines aerospace-grade titanium chassis with instant-torque brushless electric propulsion.
            </p>
            <div className="flex items-center gap-4 font-mono text-xs">
              <div className="border-2 border-black p-4 flex-1">
                <div className="text-[#ff2e00] font-bold">TOP SPEED</div>
                <div className="text-2xl font-black">310 KM/H</div>
              </div>
              <div className="border-2 border-black p-4 flex-1">
                <div className="text-[#ff2e00] font-bold">RECHARGE</div>
                <div className="text-2xl font-black">80% IN 10M</div>
              </div>
            </div>
            <button className="bg-black text-white hover:bg-[#ff2e00] hover:text-black font-black px-6 py-4 uppercase text-xs tracking-widest flex items-center gap-2 transition-colors cursor-pointer w-full justify-center">
              <span>SCHEDULE TEST PILOT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
