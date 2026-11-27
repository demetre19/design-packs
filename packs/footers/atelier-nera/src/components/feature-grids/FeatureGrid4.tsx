import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FeatureGrid4() {
  const steps = [
    { phase: "01", name: "research", text: "Deep contextual inquiry into brand heritage and architectural constraints." },
    { phase: "02", name: "reduction", text: "Strip away superfluous motifs to discover core functional truth." },
    { phase: "03", name: "crystallization", text: "Finalizing typography, grid structures, and interactive cadence." },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="text-[9px] tracking-widest uppercase text-black/50 mb-16">methodology &amp; workflow</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {steps.map((s, idx) => (
          <div key={idx} className="space-y-4 relative">
            <div className="flex items-center justify-between">
              <span className="font-light text-2xl tracking-tight text-black/40">{s.phase}.</span>
              {idx < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-black/30 hidden md:block" />
              )}
            </div>
            <h4 className="font-light text-lg lowercase tracking-tight">{s.name}</h4>
            <p className="font-light text-xs text-black/70 leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
