import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function Cta1() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#ffd92e] border-3 border-[#111111] shadow-hard-xl p-8 sm:p-14 text-center">
          <div className="inline-block bg-[#111111] text-[#ffd92e] font-mono text-xs font-black px-3 py-1 mb-4 shadow-hard-sm">
            [SYS.CTA // READY FOR ACTION]
          </div>
          <h2 className="font-grotesk font-black text-4xl sm:text-7xl uppercase tracking-tighter mb-6">
            READY TO FORGE SOMETHING ICONIC?
          </h2>
          <p className="font-mono text-sm sm:text-base text-[#111111]/80 max-w-2xl mx-auto mb-8">
            Secure your project slot today. We partner with ambitious teams to build legendary print and digital experiences.
          </p>
          <button className="btn-brutal bg-[#111111] text-[#ffd92e] font-grotesk font-black text-base px-8 py-4 inline-flex items-center gap-3">
            <Zap size={18} fill="#ffd92e" />
            <span>INITIATE PROJECT BRIEF</span>
            <ArrowRight size={18} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
}
