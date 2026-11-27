/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Blog3() {
  const archives = [
    { title: "Atomic Clock Drift Compensation in Distributed Ledgers", date: "Nov 24, 2026", category: "Monograph" },
    { title: "Metallurgical Specifications of Grade-5 Titanium Chassis", date: "Nov 15, 2026", category: "Engineering" },
    { title: "Physically Unclonable Functions in Hardware Telemetry", date: "Nov 02, 2026", category: "Security" },
    { title: "Sub-Hertz Acoustic Shielding for Sovereign Vaults", date: "Oct 19, 2026", category: "Acoustics" }
  ];

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            Archive Index
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12]">
            Complete technical publications.
          </h2>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-sm divide-y divide-[#e2e8f0]">
          {archives.map((item, idx) => (
            <div key={idx} className="p-6 flex items-center justify-between gap-4 hover:bg-[#f6f8fa] transition-colors cursor-pointer">
              <div className="space-y-1">
                <div className="flex items-center gap-3 text-[11px] font-mono text-[#5b6b76]">
                  <span className="text-[#0f4c45] font-semibold">{item.category}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-base font-medium text-[#0a0e12]">{item.title}</h3>
              </div>
              <ArrowRight className="w-4 h-4 text-[#5b6b76] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
