import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Pricing1() {
  const tiers = [
    {
      name: "Preliminary Study",
      code: "TIER 01",
      price: "$24,000",
      desc: "Initial site analysis, zoning audit, and conceptual volumetric sketches.",
      features: ["Topographic survey review", "3 volumetric massing studies", "Material mood board", "1-day on-site consultation"]
    },
    {
      name: "Complete Architectural Design",
      code: "TIER 02 [FLAGSHIP]",
      price: "$110,000",
      desc: "Full architectural blueprint package, interior detailing, and engineering coordination.",
      features: ["Complete construction docs", "Interior joinery & kitchen design", "Lighting register plans", "Permit application package", "Bi-weekly site supervision"],
      highlight: true
    },
    {
      name: "Turnkey Development",
      code: "TIER 03",
      price: "Custom",
      desc: "End-to-end realization from foundation casting to final interior styling.",
      features: ["Full general contracting", "Bespoke furniture curation", "Landscape implementation", "Lifetime structural warranty", "Dedicated project atelier"],
      highlight: false
    }
  ];

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">COMMISSION STRUCTURE</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Architectural Service Tiers</h2>
          <p className="text-stone-600 text-sm">Transparent fee schedules tailored for residential and cultural commissions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((t, i) => (
            <div 
              key={i} 
              className={`bg-[#f0efeb] p-8 flex flex-col justify-between relative border ${t.highlight ? 'border-[#b5482e] ring-1 ring-[#b5482e]' : 'border-[#e2e0d8]'}`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-8 bg-[#b5482e] text-[#fafaf8] text-[10px] font-mono px-3 py-1 uppercase tracking-widest">
                  Flagship Commission
                </div>
              )}
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-[#e2e0d8]">
                  <span className="text-xs font-mono uppercase text-stone-500">{t.code}</span>
                  <span className="text-xl font-medium text-[#16171a]">{t.price}</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#16171a] mb-2">{t.name}</h3>
                  <p className="text-stone-600 text-xs leading-relaxed">{t.desc}</p>
                </div>
                <ul className="space-y-3 pt-4 border-t border-[#e2e0d8]">
                  {t.features.map((f, fi) => (
                    <li key={fi} className="text-xs font-mono text-stone-600 flex items-center space-x-2">
                      <span className="w-[3px] h-[3px] bg-[#b5482e]"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <a 
                  href="#inquire" 
                  className={`w-full py-3 px-4 text-xs font-mono uppercase tracking-widest flex items-center justify-center space-x-2 transition-colors ${t.highlight ? 'bg-[#b5482e] text-[#fafaf8] hover:bg-[#9a3c25]' : 'bg-[#fafaf8] text-[#16171a] border border-[#e2e0d8] hover:border-[#16171a]'}`}
                >
                  <span>Select Commission</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
