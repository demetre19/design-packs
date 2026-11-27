/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export function Pricing1() {
  const tiers = [
    {
      name: "Institutional Node",
      price: "$12,500",
      period: "per annum",
      desc: "Standard acoustic timing reference for regional banking hubs.",
      features: [
        "Single atomic clock reference",
        "±0.5ns synchronization accuracy",
        "Standard titanium chassis",
        "24/7 telemetry monitoring",
        "5-year hardware warranty"
      ],
      popular: false
    },
    {
      name: "Sovereign Vault",
      price: "$38,000",
      period: "per annum",
      desc: "Dual-redundant primary standard for central banks and sovereign reserves.",
      features: [
        "Dual cesium fountain references",
        "±0.05ns synchronization accuracy",
        "Grade-5 milled titanium chassis",
        "Encrypted hardware PUF signing",
        "Dedicated Zurich support engineer",
        "25-year MTBF guarantee"
      ],
      popular: true
    },
    {
      name: "Global Network",
      price: "Custom",
      period: "tailored tier",
      desc: "Distributed multi-node synchronisation for cross-continental clearing houses.",
      features: [
        "Unlimited synchronized nodes",
        "Sub-nanosecond global fabric",
        "Custom metallurgical milling",
        "On-premise air-gapped support",
        "Direct atomic feed access"
      ],
      popular: false
    }
  ];

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            Institutional Licensing
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12]">
            Transparent tiers for sovereign infrastructure.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl p-8 shadow-sm flex flex-col justify-between relative ${
                t.popular ? 'border-2 border-[#0f4c45]' : 'border border-[#e2e8f0]'
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0f4c45] text-white text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-full">
                  Recommended Tier
                </div>
              )}
              <div>
                <h3 className="text-xl font-medium text-[#0a0e12] mb-2">{t.name}</h3>
                <p className="text-xs text-[#5b6b76] mb-6">{t.desc}</p>
                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#f1f4f8]">
                  <span className="text-4xl font-semibold text-[#0a0e12] tracking-tight">{t.price}</span>
                  <span className="text-xs text-[#5b6b76]">{t.period}</span>
                </div>
                <div className="space-y-3 mb-8">
                  {t.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs text-[#5b6b76]">
                      <Check className="w-4 h-4 text-[#0f4c45] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="#commission"
                className={`w-full py-3 rounded-full text-xs font-medium tracking-wide flex items-center justify-center gap-2 transition-colors ${
                  t.popular 
                    ? 'bg-[#0f4c45] text-white hover:bg-[#0c3d37]' 
                    : 'bg-[#f6f8fa] border border-[#e2e8f0] text-[#0a0e12] hover:bg-[#eef2f6]'
                }`}
              >
                <span>Commission Tier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
