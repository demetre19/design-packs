import React from 'react';
import { Check, Radio } from 'lucide-react';

export function Pricing1() {
  const tiers = [
    { name: 'SORTIE RESEARCH', price: '$45,000', period: '/ FLIGHT TEST', desc: 'Standard atmospheric telemetry and wind-tunnel data package for sub-sonic & low supersonic research.', featured: false },
    { name: 'X-99 FLAGSHIP', price: '$180,000', period: '/ PROGRAM', desc: 'Full-suite hypersonic flight test access, scramjet telemetry channels, and dedicated Area 51 bay.', featured: true },
    { name: 'ENTERPRISE DEFENSE', price: 'CUSTOM', period: '/ CONTRACT', desc: 'Custom aerospace vehicle integration, secure military telemetry link, and dedicated flight crew.', featured: false },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">PROGRAM PRICING // 01</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase font-sans">
            FLIGHT TEST <span className="text-[#ff3d00]">TIERS</span>
          </h2>
          <p className="text-zinc-300 text-xs sm:text-sm">
            Uncompromising experimental aerospace access. Secure telemetry and airframe testing contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-[#20232a] border p-8 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] flex flex-col justify-between relative ${
                tier.featured ? 'border-[#ff3d00] ring-2 ring-[#ff3d00]/30 shadow-2xl' : 'border-[#3a3e4c]'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff3d00] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]">
                  FLAGSHIP PROGRAM
                </div>
              )}
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#ff3d00] tracking-widest">{tier.name}</span>
                  <div className="flex items-baseline space-x-2 mt-2">
                    <span className="text-4xl font-black font-sans tracking-tight">{tier.price}</span>
                    <span className="text-xs text-zinc-400">{tier.period}</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">{tier.desc}</p>
                <ul className="space-y-3 text-xs text-zinc-300 border-t border-[#3a3e4c] pt-6">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#ff3d00]" />
                    <span>Real-time telemetry stream</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#ff3d00]" />
                    <span>Wind tunnel CFD access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#ff3d00]" />
                    <span>Secure encrypted downlink</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#3a3e4c]">
                <button
                  className={`w-full py-3 text-xs font-black tracking-widest uppercase [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] transition-colors ${
                    tier.featured
                      ? 'bg-[#ff3d00] hover:bg-[#e03500] text-white'
                      : 'bg-[#16181d] hover:bg-[#282c35] border border-[#3a3e4c] text-zinc-200'
                  }`}
                >
                  SECURE CONTRACT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
