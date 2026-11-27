import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Pricing1() {
  const tiers = [
    { name: "DIGITAL ARCHIVE", price: "€12", period: "MONTHLY", desc: "Full access to all 9 digital issues, exclusive essays, and unreleased studio photography.", feat: ["Unlimited Digital Access", "Quarterly PDF Monograph", "Member-only Dispatch"] },
    { name: "PRINT SUBSCRIBER*", price: "€48", period: "QUARTERLY", desc: "Physical hardbound collector editions delivered directly to your studio or residence.", feat: ["Physical Collector Edition", "Digital Archive Included", "Invitation to Private Exhibitions", "Free Worldwide Shipping"] },
    { name: "PATRON STUDIO", price: "€240", period: "ANNUAL", desc: "Complete patronage including limited bespoke garments and private salon access.", feat: ["All Print & Digital Editions", "Annual Limited Art Object", "Private Salon Access in Paris", "Direct Curator Concierge"] }
  ];

  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>SUBSCRIPTION TIERS // EDITORIAL PLATES</span>
          <span>MEMBERSHIP 2026</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((t, i) => (
            <div key={i} className="border border-black p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[9px] font-mono uppercase mb-4 text-zinc-500">
                  <span>TIER 0{i+1}</span>
                  <span>{t.period}</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2 font-serif-editorial">{t.name}</h3>
                <div className="text-4xl font-black font-mono my-4 pb-4 border-b border-black">
                  {t.price} <span className="text-xs font-normal text-zinc-500">/ {t.period.toLowerCase()}</span>
                </div>
                <p className="text-xs font-mono leading-relaxed text-zinc-700 mb-6">{t.desc}</p>
                <ul className="space-y-2 mb-8 text-xs font-mono">
                  {t.feat.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black"></span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-black text-white py-3 text-xs uppercase tracking-widest font-mono hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                Subscribe Now <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
