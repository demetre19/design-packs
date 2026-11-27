import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export function Pricing1() {
  const tiers = [
    { code: 'TIER-01', name: 'STANDARD TRACK SPEC', price: '$245,000', specs: ['Base Monocoque Chassis', 'Standard Aero Package', '4.0L Turbo V8 Engine', 'Analogue Telemetry Suite'] },
    { code: 'TIER-02', name: 'HOMOLOGATION CLUB', price: '$385,000', specs: ['Carbon-Titanium Monocoque', 'Active Aero Venturi Wing', 'Pushrod Suspension System', 'Encrypted Cloud Telemetry', 'Factory Track Support'] },
    { code: 'TIER-03', name: 'WORKS FACTORY EDITION', price: '$590,000', specs: ['Full Carbon Body Panels', 'Unlimited ECU Mapping', 'Private Stuttgart Testing', 'Dedicated Racing Engineer', 'Custom FIA Homologation'] },
  ];

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-[#111] pb-3 mb-6 text-[10px] uppercase font-bold">
          <span>[HOMOLOGATION TIER ACQUISITION MATRIX]</span>
          <span>REF: PR-01</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-[#111] divide-y md:divide-y-0 md:divide-x divide-[#111] bg-white">
          {tiers.map((t, i) => (
            <div key={i} className={`p-6 flex flex-col justify-between ${i === 1 ? 'bg-[#f4f4f0]' : ''}`}>
              <div>
                <div className="flex justify-between text-[9px] text-[#666] border-b border-[#111] pb-2 mb-4">
                  <span>{t.code}</span>
                  <span>STATUS: AVAILABLE</span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2">{t.name}</h3>
                <div className="text-3xl font-black my-4">{t.price}</div>
                <ul className="space-y-2 text-[10px] text-[#444] border-t border-[#111] pt-4 mb-6">
                  {t.specs.map((s, si) => (
                    <li key={si} className="flex items-center space-x-2">
                      <span>→</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => alert(`Selecting ${t.name}... Opening order dossier.`)}
                className="w-full py-3 bg-[#111] text-[#e8e8e6] font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-[#333] transition-colors cursor-pointer"
              >
                <span>REQUEST ALLOCATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
