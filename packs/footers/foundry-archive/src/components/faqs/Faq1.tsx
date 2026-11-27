import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Faq1() {
  const faqs = [
    { q: "What is the historical provenance of the Bodoni Époque revival?", a: "Every glyph is traced directly from original lead punches cast by Giambattista Bodoni in Parma, preserved in the Biblioteca Palatina and scanned in Basel, 1957." },
    { q: "Are WOFF2 and EOT formats included in foundry licenses?", a: "Yes. All professional acquisition tiers include fully optimized WOFF2, WOFF, and OTF binaries with complete OpenType feature tables." },
    { q: "Can academic institutions request physical punch inspection?", a: "Accredited fellows may submit a research dossier to schedule supervised access to Cabinet 12 in our Basel reading room." }
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">01. ARCHIVAL Q&A IN DENSE COLUMNS</h2>
          <span className="text-xs text-neutral-500">FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-neutral-950 border border-neutral-800 p-8 text-xs">
          {faqs.map((f, i) => (
            <div key={i} className="border-r border-neutral-800 last:border-r-0 pr-6 pl-2 first:pl-0">
              <div className="text-[10px] text-neutral-500 uppercase mb-2">QUERY #{String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-bold text-white mb-3">{f.q}</h3>
              <p className="font-sans text-neutral-400 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
