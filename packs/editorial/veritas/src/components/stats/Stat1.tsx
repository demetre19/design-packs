/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function Stat1() {
  const stats = [
    { value: "±0.05ns", label: "Synchronization Drift", sub: "Atomic Fountain Standard" },
    { value: "25 Years", label: "Hardware MTBF", sub: "Grade-5 Titanium Alloy" },
    { value: "100%", label: "Air-Gapped Isolation", sub: "Silicon PUF Security" },
    { value: "42+ Govs", label: "Sovereign Deployments", sub: "Central Banks & Vaults" }
  ];

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#e2e8f0] gap-8 md:gap-0">
          {stats.map((s, idx) => (
            <div key={idx} className={`px-4 ${idx === 0 ? 'pl-0' : ''} ${idx === stats.length - 1 ? 'pr-0' : ''}`}>
              <div className="font-mono text-3xl md:text-4xl font-semibold text-[#0a0e12] mb-1">{s.value}</div>
              <div className="text-xs font-semibold text-[#0a0e12] uppercase tracking-wider mb-1">{s.label}</div>
              <div className="text-[11px] text-[#5b6b76]">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
