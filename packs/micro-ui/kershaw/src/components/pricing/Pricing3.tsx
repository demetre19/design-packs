import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-3xl mx-auto bg-[#14161a] border border-[#ffd500] p-8 md:p-12 text-center relative shadow-[0_0_40px_rgba(255,213,0,0.1)]">
        <span className="text-xs text-[#ffd500] tracking-widest uppercase block mb-3">// 03. SINGLE PROGRAM LICENSE</span>
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mb-4">
          ENDURANCE <span className="text-[#ffd500]">CELL PASSPORT.</span>
        </h2>
        <p className="text-zinc-400 font-sans text-xs md:text-sm max-w-lg mx-auto mb-8">
          All-inclusive seasonal testing passport for championship racing teams. Unlimited dyno cell hours and full sensor telemetry suites.
        </p>

        <div className="text-5xl md:text-6xl font-black text-white mb-8">
          $48,000 <span className="text-xs font-mono text-[#ffd500] font-normal">/ SEASON</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-xs text-zinc-300 mb-10 max-w-lg mx-auto font-sans">
          <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ffd500]" /> <span>Unlimited Cell 04 access</span></div>
          <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ffd500]" /> <span>Dedicated lead engineer</span></div>
          <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ffd500]" /> <span>Custom turbo mapping</span></div>
          <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ffd500]" /> <span>Encrypted telemetry export</span></div>
        </div>

        <button className="bg-[#ffd500] text-black font-extrabold text-xs px-10 py-4 uppercase tracking-widest hover:bg-[#ffdf33] transition-colors inline-flex items-center gap-3">
          <span>SECURE SEASON PASSPORT</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
