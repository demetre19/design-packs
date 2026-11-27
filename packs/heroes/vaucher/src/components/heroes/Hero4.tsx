import React from 'react';
import { Watch, ShieldCheck } from 'lucide-react';

export function Hero4() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">FULL-WIDTH INSTRUMENT ATELIER</span>
            <h1 className="text-3xl md:text-5xl font-light tracking-[0.06em] text-[#232a30]">
              Perpetual Mechanics & Fine Anglage
            </h1>
          </div>
          <div className="font-mono text-xs text-[#232a30]/60 tracking-widest">
            REF. 9900-X · GENEVA 2026
          </div>
        </div>

        {/* Hero with full-width instrument photo and tick ruler */}
        <div className="relative border border-[#d0d0cc] bg-[#1c2128] text-white p-8 md:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-geneva-stripe opacity-30" />
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2e5e8e]" />
              <span className="font-mono text-[10px] tracking-widest">GENEVA SEAL CERTIFIED</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-light tracking-widest">Mastery of the Escapement</h2>
            <p className="text-xs font-mono text-white/70 tracking-wider leading-relaxed">
              Silicon hairspring paired with variable inertia balance wheel ensures absolute immunity to magnetic interference and temperature fluctuations.
            </p>
            <button className="bg-[#2e5e8e] text-white font-mono text-xs tracking-[0.25em] px-6 py-3 hover:bg-white hover:text-[#232a30] transition-colors">
              VIEW DOSSIER
            </button>
          </div>
        </div>

        {/* Tick-mark ruler along bottom */}
        <div className="w-full h-3 bg-[#d0d0cc]/40 flex justify-between px-2">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className={`w-[1px] ${i % 10 === 0 ? 'h-3 bg-[#232a30]' : i % 5 === 0 ? 'h-2 bg-[#232a30]/70' : 'h-1 bg-[#232a30]/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
