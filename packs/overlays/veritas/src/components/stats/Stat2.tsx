/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function Stat2() {
  const metrics = [
    { label: "Quartz Oscillator Stability", val: "99.999%", width: "99%" },
    { label: "Thermal Dampening Efficiency", val: "99.8%", width: "98%" },
    { label: "Cryptographic Packet Integrity", val: "100%", width: "100%" }
  ];

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto bg-white border border-[#e2e8f0] rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
        <div className="text-center">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-2 block">
            Performance Metrics
          </span>
          <h2 className="text-2xl font-medium text-[#0a0e12]">System Reliability Index</h2>
        </div>

        <div className="space-y-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-[#0a0e12]">{m.label}</span>
                <span className="font-mono font-semibold text-[#0f4c45]">{m.val}</span>
              </div>
              <div className="w-full h-1.5 bg-[#f1f4f8] rounded-full overflow-hidden">
                <div className="h-full bg-[#0f4c45] rounded-full" style={{ width: m.width }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
