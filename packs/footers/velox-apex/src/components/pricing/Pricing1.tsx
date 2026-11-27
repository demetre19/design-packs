import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Pricing1() {
  const tiers = [
    { name: 'ROAD SPEC', price: '$34,500', desc: 'Street legal hyper-naked configuration with dual ABS and comfort suspension.' },
    { name: 'TRACK PREDATOR', price: '$48,900', featured: true, desc: 'Full carbon winglets, slick tire compound, telemetry ECU, and titanium exhaust.' },
    { name: 'FACTORY RACE', price: '$72,000', desc: 'Unlimited power output, custom rider ergonomics, and direct pit-crew support.' },
  ];

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// ALLOCATION TIERS</div>
          <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none">
            INVEST IN <span className="text-[#ff2e00]">SPEED</span>
          </h2>
        </div>

        {/* 3-tier cards with gigantic prices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((t, i) => (
            <div 
              key={i} 
              className={`border-2 border-black p-8 flex flex-col justify-between ${t.featured ? 'bg-black text-white relative' : 'bg-white text-black'}`}
            >
              {t.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff2e00] text-black font-mono text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                  // MOST POPULAR ALLOCATION
                </div>
              )}
              <div>
                <div className={`font-mono text-[10px] mb-2 uppercase font-bold ${t.featured ? 'text-[#ff2e00]' : 'text-neutral-500'}`}>
                  // TIER 0{i + 1} // {t.name}
                </div>
                {/* Gigantic price */}
                <div className="text-5xl sm:text-6xl font-black tracking-tighter my-6">
                  {t.price}
                </div>
                <p className={`font-mono text-xs leading-relaxed mb-8 ${t.featured ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {t.desc}
                </p>
                <ul className="space-y-2 font-mono text-xs mb-8">
                  <li className="flex items-center gap-2">✓ Solid State Battery</li>
                  <li className="flex items-center gap-2">✓ Carbon Monocoque</li>
                  <li className="flex items-center gap-2">✓ Neural Telemetry Sync</li>
                </ul>
              </div>
              <button className={`w-full py-4 font-black uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer ${t.featured ? 'bg-[#ff2e00] text-black hover:bg-white' : 'bg-black text-white hover:bg-[#ff2e00] hover:text-black'}`}>
                <span>RESERVE ALLOCATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
