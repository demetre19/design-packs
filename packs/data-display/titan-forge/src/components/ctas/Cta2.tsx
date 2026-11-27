import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta2() {
  return (
    <section className="bg-[#f25c05] text-black py-20 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-block border border-black bg-black text-white px-3 py-1 font-mono text-[10px] uppercase mb-6">
          ORANGE INVERSION BAND // CTA 02
        </div>

        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-8 max-w-5xl mx-auto text-white">
          ABSOLUTE INDUSTRIAL POWER IS ONE DEPLOYMENT AWAY.
        </h2>

        <p className="font-mono text-xs md:text-sm text-black font-bold uppercase tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed">
          Connect your mining infrastructure to the Titan Forge decentralized extraction mesh now.
        </p>

        <button className="bg-black text-white px-10 py-5 font-mono text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors inline-flex items-center space-x-2">
          <span>Secure Enterprise License</span>
          <ArrowRight className="w-4 h-4 text-[#f25c05]" />
        </button>
      </div>
    </section>
  );
}
