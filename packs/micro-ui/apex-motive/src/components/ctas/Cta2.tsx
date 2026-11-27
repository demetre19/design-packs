import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export function Cta2() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#16181d] border border-[#272a33] p-12 clip-corner-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-2">// LIMITED SERIES 04</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mb-4">
              SECURE YOUR BUILD SLOT TODAY
            </h2>
            <p className="font-mono-spec text-xs text-neutral-400 max-w-lg leading-relaxed">
              Only 50 production units allocated for Batch 04. Custom carbon weave and bespoke telemetry calibration included.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-lg-end">
            <button className="bg-[#ff5a1f] text-black font-extrabold text-xs px-8 py-4 clip-corner hover:bg-white transition-colors cursor-pointer inline-flex items-center gap-2">
              <span>START CONFIGURATOR</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
