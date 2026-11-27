import React from 'react';
import { Check, Zap, ArrowRight } from 'lucide-react';

export function Pricing1() {
  const tiers = [
    { name: 'APEX V12 PURE', price: '$38,500', tag: 'BASE SPEC', specs: ['110 kW Power', '18.2 kWh Battery', 'Brembo Standard Brakes', 'Standard Carbon Bodywork'], popular: false },
    { name: 'APEX V12 R', price: '$48,500', tag: 'RECOMMENDED', specs: ['117 kW Power', '21.4 kWh Battery', 'Brembo GP4-RR Calipers', 'Full Aero Winglet Kit', 'Öhlins TTX36 Suspension'], popular: true },
    { name: 'APEX X TRACK EDITION', price: '$62,000', tag: 'TRACK SPEC', specs: ['135 kW Peak Power', 'Magnesium Forged Wheels', 'Telemetry Pro Live Stream', 'Titanium Race Exhaust Shell', 'Custom Rider Fit Geometry'], popular: false },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// CONFIGURATION TIERS</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">SELECT YOUR PLATFORM</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`bg-[#16181d] border p-8 clip-corner-lg relative flex flex-col justify-between ${tier.popular ? 'border-[#ff5a1f] shadow-[0_0_30px_rgba(255,90,31,0.15)]' : 'border-[#272a33]'}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff5a1f] text-black font-mono-spec text-[10px] font-bold px-4 py-1 clip-corner">
                  MOST POPULAR SPECIFICATION
                </div>
              )}

              <div>
                <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">{tier.tag}</span>
                <h3 className="font-display font-extrabold text-2xl text-white mt-1 mb-4">{tier.name}</h3>
                <div className="font-mono-spec text-4xl font-bold text-white mb-6">
                  {tier.price} <span className="text-xs text-neutral-500 font-normal">/ USD</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#272a33] mb-8">
                  {tier.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 font-mono-spec text-xs text-neutral-300">
                      <Check size={14} className="text-[#ff5a1f]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full py-4 font-extrabold text-xs clip-corner transition-colors flex items-center justify-center gap-2 cursor-pointer ${tier.popular ? 'bg-[#ff5a1f] text-black hover:bg-white' : 'bg-transparent border border-[#ff5a1f] text-[#ff5a1f] hover:bg-[#ff5a1f] hover:text-black'}`}>
                <span>CONFIGURE BUILD</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
