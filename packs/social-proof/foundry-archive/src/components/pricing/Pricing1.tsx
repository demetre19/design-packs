import React from 'react';
import { Shield, Check, FileText } from 'lucide-react';

export function Pricing1() {
  const tiers = [
    { title: "STUDENT FELLOW", price: "$45", period: "one-time", desc: "For individual typographers and academic researchers.", features: ["Single Desktop License", "Basic Specimen PDFs", "Standard Support"] },
    { title: "FOUNDRY LICENSE", price: "$180", period: "one-time", desc: "For professional design studios and commercial publishing.", features: ["Full Family (21 Weights)", "Webfont WOFF2 / EOT", "Archival Plate Access", "Priority Support"] },
    { title: "INSTITUTIONAL VAULT", price: "$650", period: "annual", desc: "For universities, libraries, and museum archives.", features: ["Unlimited Workstations", "Source Punch Vectors", "Curatorial Consultations", "Physical Specimen Box"] }
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">01. ACQUISITION PLATES</h2>
          <span className="text-xs text-neutral-500">MEMBERSHIP TIERS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={i} className="bg-neutral-950 border border-neutral-800 p-8 flex flex-col justify-between">
              <div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2">TIER #{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">{t.title}</h3>
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-4xl font-bold text-white">{t.price}</span>
                  <span className="text-xs text-neutral-500">/ {t.period}</span>
                </div>
                <p className="text-xs text-neutral-400 font-sans mb-6">{t.desc}</p>
                <div className="space-y-3 mb-8 text-xs text-neutral-300">
                  {t.features.map((f, j) => (
                    <div key={j} className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full bg-white text-neutral-900 py-3 text-xs font-bold hover:bg-neutral-200 transition-colors">
                ACQUIRE LICENSE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
