/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Pricing1: React.FC = () => {
  const tiers = [
    { name: 'STUDENT', price: 'CHF 120', desc: 'Full symposium access, digital catalog, unassigned seating.' },
    { name: 'PROFESSIONAL', price: 'CHF 380', desc: 'All sessions, physical specimen box, workshop priority.' },
    { name: 'INSTITUTIONAL', price: 'CHF 950', desc: 'VIP access for 3 delegates, archival poster portfolio.' },
  ];

  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[01 // TICKET SPECIMENS]</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {tiers.map((t, idx) => (
          <div key={idx} className="border border-white/20 p-6 flex flex-col justify-between relative overflow-hidden min-h-[350px]">
            <div className="absolute top-4 right-4 text-xs font-mono tracking-widest opacity-60">
              {t.price}
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-widest opacity-50 mb-2">TIER 0{idx + 1}</div>
              <div className="overflow-hidden my-4">
                <h3 className="text-5xl font-black tracking-tighter uppercase whitespace-nowrap">
                  {t.name}
                </h3>
              </div>
              <p className="text-xs font-mono tracking-wider opacity-80 leading-relaxed mt-4">
                {t.desc}
              </p>
            </div>
            <button className="w-full mt-8 bg-white text-black py-3 text-xs font-mono tracking-widest font-bold flex items-center justify-center gap-2 hover:opacity-90">
              ACQUIRE TICKET <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
