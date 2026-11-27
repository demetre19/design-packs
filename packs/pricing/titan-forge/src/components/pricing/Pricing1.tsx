import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export function Pricing1() {
  const tiers = [
    {
      name: "TACTICAL NODE",
      price: "$4,500",
      period: "PER MONTH / SITE",
      features: ["Single Autonomous Excavator", "Standard Telemetry Feed", "10ms Latency Mesh", "99.5% Uptime SLA", "Email Support"],
      highlight: false
    },
    {
      name: "FLAGSHIP GRID",
      price: "$14,200",
      period: "PER MONTH / SITE",
      features: ["Up to 25 Heavy Units", "Real-Time Acoustic Stress AI", "0.04ms Fiber Backbone", "99.98% Uptime SLA", "24/7 Dedicated Engineers"],
      highlight: true
    },
    {
      name: "MEGA EXTRACTION",
      price: "CUSTOM",
      period: "ENTERPRISE SCALE",
      features: ["Unlimited Fleet Deployment", "Custom Smelting Integration", "Dedicated Satellite Relay", "Absolute Zero-Downtime SLA", "On-Site Titan Engineers"],
      highlight: false
    }
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          PRICING TIERS // SYSTEM 01
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          DEPLOYMENT <span className="text-[#f25c05]">LICENSES</span> & GRIDS.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`border-2 border-black flex flex-col justify-between ${tier.highlight ? 'bg-black text-white shadow-none' : 'bg-white text-black'}`}
            >
              <div>
                {/* Heavy black price block */}
                <div className={`p-6 border-b-2 ${tier.highlight ? 'border-[#f25c05] bg-neutral-900' : 'border-black bg-black text-white'}`}>
                  <span className="font-mono text-[10px] text-[#f25c05] uppercase tracking-widest block mb-1">TIER 0{idx+1}</span>
                  <h3 className="font-black text-xl uppercase tracking-tight mb-4">{tier.name}</h3>
                  <div className="text-4xl font-black font-mono tracking-tighter">{tier.price}</div>
                  <div className="font-mono text-[10px] text-neutral-400 mt-1 uppercase">{tier.period}</div>
                </div>

                {/* Tiny feature rows */}
                <div className="p-6 space-y-4 font-mono text-xs">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-3 pb-3 border-b border-neutral-200 last:border-0">
                      <div className={`w-4 h-4 flex items-center justify-center font-bold ${tier.highlight ? 'bg-[#f25c05] text-black' : 'bg-black text-white'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={tier.highlight ? 'text-neutral-300' : 'text-neutral-800'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0">
                <button className={`w-full py-3 font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors ${tier.highlight ? 'bg-[#f25c05] text-black hover:bg-white' : 'bg-black text-white hover:bg-[#f25c05] hover:text-black'}`}>
                  <span>Select License</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
