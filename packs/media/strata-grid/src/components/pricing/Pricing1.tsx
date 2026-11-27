import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export function Pricing1() {
  const tiers = [
    {
      name: "Substation Node",
      price: "$2,400",
      period: "per node / mo",
      desc: "Ideal for regional substations and microgrid testing environments.",
      features: ["Up to 10 active substations", "10,000 Hz telemetry logging", "Standard AES-256 encryption", "Community register access", "99.9% uptime SLA"],
      popular: false,
      index: "01"
    },
    {
      name: "Enterprise Grid OS",
      price: "$8,900",
      period: "per cluster / mo",
      desc: "Engineered for multi-megawatt industrial utilities and autonomous dispatch.",
      features: ["Unlimited substation nodes", "Sub-millisecond phasor sync", "Post-quantum mesh security", "Dedicated telemetry pipeline", "99.999% uptime SLA"],
      popular: true,
      index: "02"
    },
    {
      name: "Planetary Fleet",
      price: "CUSTOM",
      period: "annual dispatch",
      desc: "For national grid operators requiring sovereign isolated cloud infrastructure.",
      features: ["Sovereignty deployment", "Custom hardware acceleration", "24/7 dedicated site engineers", "Custom protocol adapters", "Custom financial settlement"],
      popular: false,
      index: "03"
    }
  ];

  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">LICENSING & PRICING</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Transparent tiered infrastructure licensing.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[PRC-01 // TIERS]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div 
              key={i} 
              className={`bg-white p-8 flex flex-col justify-between gap-8 relative rounded-[2px] border ${
                t.popular ? 'border-[#2743f0] ring-2 ring-[#2743f0]/20' : 'border-[#0d0e10]/10'
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-8 bg-[#2743f0] text-white px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest rounded-[2px]">
                  MOST POPULAR DEPLOYMENT
                </div>
              )}
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#0d0e10]/70">{t.name}</span>
                  <span className="font-mono text-xs text-[#0d0e10]/40">[{t.index}]</span>
                </div>
                <div>
                  <div className="text-4xl font-semibold font-mono tracking-tight">{t.price}</div>
                  <div className="font-mono text-[10px] text-[#0d0e10]/60 uppercase tracking-wider mt-1">{t.period}</div>
                </div>
                <p className="text-[#0d0e10]/70 text-xs leading-relaxed">{t.desc}</p>
                <div className="border-t border-[#0d0e10]/10 pt-6 flex flex-col gap-3 font-mono text-xs">
                  {t.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#2743f0] shrink-0" />
                      <span className="text-[#0d0e10]/80 font-sans">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a 
                href="#subscribe" 
                className={`w-full py-3 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded-[2px] transition-colors ${
                  t.popular ? 'bg-[#2743f0] text-white hover:bg-[#1d32c4]' : 'bg-[#f2f3f5] text-[#0d0e10] hover:bg-[#0d0e10] hover:text-white'
                }`}
              >
                <span>Initialize License</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
