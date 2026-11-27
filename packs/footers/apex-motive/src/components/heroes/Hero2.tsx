import React from 'react';
import { ArrowRight, Cpu, Zap, Activity } from 'lucide-react';

export function Hero2() {
  return (
    <section className="relative min-h-[85vh] bg-[#101114] flex items-center border-b border-[#272a33] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Headline + CTA */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 bg-[#16181d] border border-[#272a33] px-3 py-1.5 clip-corner mb-6">
            <span className="w-2 h-2 bg-[#ff5a1f] clip-corner animate-ping" />
            <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest">NEXT-GEN ELECTRIC ARCHITECTURE</span>
          </div>
          
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white tracking-tighter leading-none">
            UNCOMPROMISED <br />
            <span className="text-[#ff5a1f]">MACHINE POWER</span>
          </h1>

          <p className="font-mono-spec text-sm text-neutral-400 mt-6 max-w-xl leading-relaxed">
            Engineered with aerospace-grade carbon monocoque chassis and direct-oil-cooled stator coils. Delivering brutal acceleration curves with zero thermal throttling.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-[#ff5a1f] text-black font-extrabold text-xs px-8 py-4 clip-corner hover:bg-white transition-colors cursor-pointer flex items-center gap-2">
              <span>INITIALIZE CONFIGURATOR</span>
              <ArrowRight size={14} />
            </button>
            <button className="bg-[#16181d] border border-[#272a33] text-white font-mono-spec text-xs px-6 py-4 clip-corner hover:border-[#ff5a1f] transition-colors cursor-pointer">
              DOWNLOAD SPEC SHEET
            </button>
          </div>
        </div>

        {/* Right Column: Docked Spec Panel */}
        <div className="lg:col-span-5">
          <div className="bg-[#16181d] border border-[#272a33] p-8 clip-corner-lg relative">
            <div className="absolute -top-3 right-6 bg-[#ff5a1f] text-black font-mono-spec text-[10px] font-bold px-3 py-0.5 clip-corner">
              LIVE TELEMETRY
            </div>

            <div className="space-y-6">
              <div className="border-b border-[#272a33] pb-4">
                <span className="font-mono-spec text-[10px] text-neutral-500 block">MOTOR TOPOLOGY</span>
                <span className="font-mono-spec text-base font-bold text-white flex items-center justify-between mt-1">
                  <span>AXIAL FLUX PM</span>
                  <Cpu size={16} className="text-[#ff5a1f]" />
                </span>
              </div>

              <div className="border-b border-[#272a33] pb-4">
                <span className="font-mono-spec text-[10px] text-neutral-500 block">BATTERY CAPACITY</span>
                <span className="font-mono-spec text-base font-bold text-white flex items-center justify-between mt-1">
                  <span>21.4 kWh (800V)</span>
                  <Zap size={16} className="text-[#ff5a1f]" />
                </span>
              </div>

              <div className="border-b border-[#272a33] pb-4">
                <span className="font-mono-spec text-[10px] text-neutral-500 block">AERO DOWNFORCE</span>
                <span className="font-mono-spec text-base font-bold text-white flex items-center justify-between mt-1">
                  <span>48.2 kg @ 250 KM/H</span>
                  <Activity size={16} className="text-[#ff5a1f]" />
                </span>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs font-mono-spec text-neutral-400">
                <span>SYSTEM FIRMWARE</span>
                <span className="text-[#ff5a1f]">v4.8.2-RELEASE</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
