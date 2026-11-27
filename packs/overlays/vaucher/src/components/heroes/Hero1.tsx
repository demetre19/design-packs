import React from 'react';
import { Compass, ArrowRight, Shield } from 'lucide-react';

export function Hero1() {
  return (
    <section className="relative py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        {/* Micro-label */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1c2128]/5 border border-[#d0d0cc]">
          <Compass className="w-3.5 h-3.5 text-[#2e5e8e]" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#232a30]">
            REF. 8842-CH · CALIBRE 320 MANUFACTURE
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.08em] text-[#232a30] leading-tight">
          Horological Instrument Precision in Absolute Equilibrium
        </h1>

        <p className="text-sm tracking-widest text-[#232a30]/70 max-w-xl mx-auto font-light leading-relaxed">
          Hand-finished in Geneva with 60 micro-tick graduations, blued-steel indicators, and unwavering mechanical integrity.
        </p>

        {/* Quiet pill CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="w-full sm:w-auto bg-[#2e5e8e] text-white font-mono text-xs tracking-[0.25em] px-8 py-3 hover:bg-[#232a30] transition-colors flex items-center justify-center space-x-2">
            <span>EXPLORE ATELIER</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-[#232a30]/30 text-[#232a30] font-mono text-xs tracking-[0.25em] px-8 py-3 hover:border-[#2e5e8e] hover:text-[#2e5e8e] transition-colors">
            DOWNLOAD CERTIFICATE
          </button>
        </div>
      </div>

      {/* Large screw-corner media plate with radial detail */}
      <div className="mt-16 screw-corner border border-[#d0d0cc] bg-[#1c2128] text-white p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border border-white/10 flex items-center justify-center pointer-events-none">
          <div className="w-72 h-72 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border border-[#2e5e8e]/40" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="space-y-4">
            <span className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.3em]">EXHIBITION CASEBACK</span>
            <h3 className="text-2xl font-light tracking-widest">Caliber 320 Automatic Movement</h3>
            <p className="text-xs font-mono text-white/70 tracking-wider leading-relaxed">
              Comprising 312 individual components, adjusted in six isometric positions to within -1/+2 seconds per diem tolerance.
            </p>
            <div className="flex items-center space-x-6 pt-2 font-mono text-[11px] text-white/90">
              <div><span className="text-[#2e5e8e]">DIAMETER:</span> 30.5 MM</div>
              <div><span className="text-[#2e5e8e]">FREQUENCY:</span> 28,800 VPH</div>
            </div>
          </div>
          <div className="h-64 bg-[#232a30] border border-white/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-geneva-stripe opacity-40" />
            <div className="text-center space-y-2 relative z-10">
              <Shield className="w-10 h-10 text-[#2e5e8e] mx-auto opacity-80" />
              <div className="font-mono text-xs tracking-[0.3em] text-white/80">VAUCHER SPECIFICATION</div>
              <div className="font-mono text-[10px] text-white/40">SERIAL NO. 00489/2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
