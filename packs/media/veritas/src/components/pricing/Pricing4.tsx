/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, X } from 'lucide-react';

export function Pricing4() {
  const rows = [
    { feature: "Atomic Clock Reference", standard: "Single Standard", sovereign: "Dual Cesium Fountain", global: "Multi-Node Mesh" },
    { feature: "Synchronization Drift", standard: "±0.5 ns / day", sovereign: "±0.05 ns / day", global: "<0.01 ns / day" },
    { feature: "Chassis Material", standard: "Anodized Aluminum", sovereign: "Grade-5 Titanium", global: "Custom Beryllium Alloy" },
    { feature: "Hardware Cryptography", standard: "AES-256", sovereign: "PUF Silicon Signature", global: "Quantum Key Distribution" },
    { feature: "Support SLA", standard: "Standard 48-hr", sovereign: "Dedicated Zurich Eng", global: "24/7 On-Site Escrow" }
  ];

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            Technical Specification Matrix
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12]">
            Detailed tier comparison.
          </h2>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-4 bg-[#f6f8fa] border-b border-[#e2e8f0] p-4 md:p-6 text-xs font-medium text-[#0a0e12]">
            <div>Feature / Parameter</div>
            <div className="text-center">Institutional Node</div>
            <div className="text-center text-[#0f4c45]">Sovereign Vault</div>
            <div className="text-center">Global Network</div>
          </div>

          <div className="divide-y divide-[#e2e8f0]">
            {rows.map((r, idx) => (
              <div key={idx} className="grid grid-cols-4 p-4 md:p-6 text-xs items-center">
                <div className="font-medium text-[#0a0e12]">{r.feature}</div>
                <div className="text-center text-[#5b6b76]">{r.standard}</div>
                <div className="text-center text-[#0f4c45] font-semibold">{r.sovereign}</div>
                <div className="text-center text-[#5b6b76]">{r.global}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
