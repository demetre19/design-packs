import React from 'react';
import { Target, Compass } from 'lucide-react';

export function Hero3() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc] relative">
      {/* Asymmetric editorial with crosshair composition marks */}
      <div className="absolute top-12 left-6 text-[#2e5e8e]/40 font-mono text-xs">+ CAL. 240</div>
      <div className="absolute top-12 right-6 text-[#2e5e8e]/40 font-mono text-xs">+ REF. 5711</div>

      <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-flex items-center space-x-2 font-mono text-[10px] tracking-[0.3em] text-[#2e5e8e]">
          <Target className="w-3.5 h-3.5" />
          <span>CROSSHAIR CALIBRATION · 0.01 MM TOLERANCE</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-light tracking-[0.06em] text-[#232a30] leading-tight">
          The Geometry of Pure Time
        </h1>

        <p className="text-sm font-light tracking-widest text-[#232a30]/70 max-w-xl mx-auto leading-relaxed">
          Uncompromising minimalism rooted in centuries of Swiss horological tradition. Every bevel polished by hand using gentian wood and diamond paste.
        </p>

        <div className="flex justify-center space-x-4 pt-2">
          <button className="bg-[#2e5e8e] text-white font-mono text-xs tracking-[0.25em] px-8 py-3 hover:bg-[#232a30] transition-colors">
            DISCOVER THE MOVEMENT
          </button>
        </div>
      </div>
    </section>
  );
}
