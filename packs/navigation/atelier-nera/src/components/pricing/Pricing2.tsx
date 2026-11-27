import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Pricing2() {
  const tiers = [
    { name: "essential", price: "€6,000", desc: "Single-page portfolio or minimalist editorial microsite.", features: ["custom typography", "responsive layout", "basic deployment"] },
    { name: "signature", price: "€14,500", desc: "Full bespoke multi-page digital monograph and brand system.", features: ["complete brand system", "interactive motion", "CMS integration", "priority delivery"] },
    { name: "atelier", price: "custom", desc: "End-to-end spatial, print, and digital transformation.", features: ["unlimited scope", "onsite curation", "dedicated director", "exclusive advisory"] },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="text-[9px] tracking-widest uppercase text-black/50 mb-16">engagement tiers</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {tiers.map((t, idx) => (
          <div key={idx} className="border border-black/10 p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-[9px] tracking-widest uppercase text-black/40 block">tier {idx + 1}</span>
              <h3 className="font-light text-2xl lowercase">{t.name}</h3>
              <div className="font-light text-3xl tracking-tight pt-2">{t.price}</div>
              <p className="font-light text-xs text-black/60 leading-relaxed pt-2">{t.desc}</p>
              <ul className="space-y-2 pt-4 border-t border-black/10 text-xs font-light text-black/70">
                {t.features.map((f, i) => (
                  <li key={i} className="lowercase">• {f}</li>
                ))}
              </ul>
            </div>
            <button className="w-full py-3 bg-black text-white text-xs font-light lowercase flex items-center justify-center gap-2 hover:bg-black/80 transition-colors">
              select tier <ArrowRight className="w-3 h-3 stroke-[1.5]" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
