import React from 'react';
import { ArrowRight, Zap, Shield, Activity } from 'lucide-react';

export function Hero5() {
  return (
    <section className="relative min-h-[85vh] bg-[#101114] flex items-center border-b border-[#272a33]">
      {/* Vertical Index along Margin */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4">
        <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest uppercase [writing-mode:vertical-lr] rotate-180">
          APEX MOTIVE // 05
        </span>
        <div className="w-[1px] h-24 bg-[#ff5a1f]/40" />
        <span className="font-mono-spec text-[10px] text-neutral-500 [writing-mode:vertical-lr] rotate-180">
          INDEX-05
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-8 md:pl-16 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Type Left */}
        <div className="lg:col-span-6">
          <div className="font-mono-spec text-xs text-[#ff5a1f] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff5a1f] clip-corner" />
            <span>MODEL // ALPHA-SPEC</span>
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white tracking-tighter leading-none">
            AERODYNAMIC <br />
            <span className="text-[#ff5a1f]">PERFORMANCE</span>
          </h1>
          <p className="font-mono-spec text-sm text-neutral-400 mt-6 leading-relaxed">
            Carbon winglets engineered in wind-tunnel facilities to produce 65kg of downforce at terminal velocity. Absolute stability in high-speed apex cornering.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-[#ff5a1f] text-black font-extrabold text-xs px-8 py-4 clip-corner hover:bg-white transition-colors cursor-pointer flex items-center gap-2">
              <span>EXPLORE SPEC</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Product Stage Right */}
        <div className="lg:col-span-6">
          <div className="bg-[#16181d] border border-[#272a33] p-8 clip-corner-lg relative">
            <div className="absolute top-4 right-4 font-mono-spec text-[10px] text-[#ff5a1f] bg-[#ff5a1f]/10 px-3 py-1 clip-corner">
              WIND TUNNEL v2.4
            </div>
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <Activity size={56} className="text-[#ff5a1f] mb-4 animate-pulse" />
              <span className="font-display font-extrabold text-2xl text-white">DRAG COEFFICIENT: 0.24 Cd</span>
              <span className="font-mono-spec text-xs text-neutral-400 mt-2">Laminar airflow separation optimized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
