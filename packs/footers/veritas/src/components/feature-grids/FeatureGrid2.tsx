/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function FeatureGrid2() {
  const steps = [
    {
      num: "01",
      title: "Atomic Calibration",
      text: "Every module undergoes 72 hours of thermal cycling against cesium atomic fountain clocks in our Zurich facility."
    },
    {
      num: "02",
      title: "Hardened Sealing",
      text: "Hermetically sealed titanium chassis filled with inert dry nitrogen gas to prevent atmospheric degradation."
    },
    {
      num: "03",
      title: "Sovereign Deployment",
      text: "Direct integration into tier-1 central bank vaults and high-frequency institutional trading architectures."
    }
  ];

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            Methodology & Standards
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12]">
            The three-stage verification process.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm">
              <div className="font-mono text-3xl font-light text-[#0f4c45] mb-6">{s.num}</div>
              <h3 className="text-lg font-medium text-[#0a0e12] mb-3">{s.title}</h3>
              <p className="text-sm text-[#5b6b76] leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
