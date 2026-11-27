import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Shield, Gauge } from 'lucide-react';

export function Hero1() {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 4;

  return (
    <section className="relative min-h-[85vh] bg-[#101114] bg-carbon flex flex-col justify-between border-b border-[#272a33] overflow-hidden">
      {/* Oversized Watermark Model Name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="font-extrabold text-[18vw] tracking-tighter text-white/[0.04] uppercase">
          APEX-V12
        </span>
      </div>

      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 pt-12 relative z-10 w-full flex justify-between items-start">
        <div>
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest uppercase block">
            // FLAGSHIP SUPERBIKE
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-7xl text-white tracking-tighter mt-2">
            APEX V12<span className="text-[#ff5a1f]">R</span>
          </h1>
        </div>

        {/* Numbered Pagination */}
        <div className="flex items-center gap-4 bg-[#16181d] border border-[#272a33] px-4 py-2 clip-corner">
          <span className="font-mono-spec text-xs text-white">0{activeSlide}</span>
          <span className="font-mono-spec text-xs text-neutral-600">/</span>
          <span className="font-mono-spec text-xs text-neutral-500">0{totalSlides}</span>
          <div className="flex gap-1 ml-2">
            <button 
              onClick={() => setActiveSlide(prev => prev > 1 ? prev - 1 : totalSlides)}
              className="p-1 hover:text-[#ff5a1f] transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={() => setActiveSlide(prev => prev < totalSlides ? prev + 1 : 1)}
              className="p-1 hover:text-[#ff5a1f] transition-colors cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Cinematic Center Stage Graphic */}
      <div className="relative z-10 max-w-4xl mx-auto my-8 px-4 w-full text-center">
        <div className="relative bg-gradient-to-b from-[#16181d] to-[#101114] border border-[#272a33] p-12 clip-corner-lg shadow-2xl">
          <div className="absolute top-4 left-4 font-mono-spec text-[10px] text-neutral-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff5a1f] clip-corner" /> STAGE // 01 DYNAMIK TEST
          </div>
          <div className="absolute top-4 right-4 font-mono-spec text-[10px] text-[#ff5a1f]">
            AI RECON // 99.8%
          </div>

          <div className="py-16 md:py-24 flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-[#ff5a1f]/10 border border-[#ff5a1f] clip-corner flex items-center justify-center mb-6">
              <Zap size={48} className="text-[#ff5a1f] animate-pulse" />
            </div>
            <h2 className="font-display font-extrabold text-2xl md:text-4xl text-white">18,500 RPM SOLID-STATE ROTOR</h2>
            <p className="font-mono-spec text-xs text-neutral-400 max-w-md mt-3">
              Liquid nitrogen jacket cooling coupled with dual-inverter silicon carbide architecture.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="bg-[#ff5a1f] text-black font-extrabold text-xs px-8 py-3.5 clip-corner hover:bg-white transition-colors cursor-pointer flex items-center gap-2">
                <span>RESERVE BUILD</span>
                <ArrowRight size={14} />
              </button>
              <button className="bg-transparent border border-[#272a33] text-white font-mono-spec text-xs px-6 py-3.5 clip-corner hover:border-[#ff5a1f] transition-colors cursor-pointer">
                VIEW TELEMETRY
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spec Readout Strip */}
      <div className="bg-[#16181d] border-t border-[#272a33] py-4 px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <span className="font-mono-spec text-[10px] text-neutral-500 block">PEAK POWER</span>
            <span className="font-mono-spec text-lg font-bold text-white">117 kW <span className="text-[#ff5a1f] text-xs">/ 157 HP</span></span>
          </div>
          <div>
            <span className="font-mono-spec text-[10px] text-neutral-500 block">TORQUE OUTPUT</span>
            <span className="font-mono-spec text-lg font-bold text-white">13.1 kgm <span className="text-[#ff5a1f] text-xs">/ 128 NM</span></span>
          </div>
          <div>
            <span className="font-mono-spec text-[10px] text-neutral-500 block">WET WEIGHT</span>
            <span className="font-mono-spec text-lg font-bold text-white">182.5 kg <span className="text-[#ff5a1f] text-xs">/ DRY</span></span>
          </div>
          <div>
            <span className="font-mono-spec text-[10px] text-neutral-500 block">0-100 KM/H ACCEL</span>
            <span className="font-mono-spec text-lg font-bold text-white">2.14 SEC <span className="text-[#ff5a1f] text-xs">/ LAUNCH</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
