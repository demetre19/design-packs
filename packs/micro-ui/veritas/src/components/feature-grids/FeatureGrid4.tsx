/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FeatureGrid4() {
  const items = [
    {
      label: "SEC_01",
      title: "Atomic Clocks",
      desc: "Secondary cesium beam standards for autonomous drift correction."
    },
    {
      label: "SEC_02",
      title: "Titanium Chassis",
      desc: "Grade-5 aerospace alloy milled to micron-level tolerances."
    },
    {
      label: "SEC_03",
      title: "Fiber Optic Bus",
      desc: "Low-latency dual redundant optical telemetry backbone."
    },
    {
      label: "SEC_04",
      title: "Vault Integration",
      desc: "Secure physical and digital key escrow protocols."
    }
  ];

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            System Specifications Grid
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12]">
            Comprehensive institutional modules.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#0f4c45] uppercase block mb-3">{item.label}</span>
                <h3 className="text-xl font-medium text-[#0a0e12] mb-3">{item.title}</h3>
                <p className="text-sm text-[#5b6b76] leading-relaxed mb-6">{item.desc}</p>
              </div>
              <a href="#details" className="inline-flex items-center gap-2 text-xs font-medium text-[#0f4c45] hover:text-[#0c3d37] transition-colors">
                <span>Access Spec Sheet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
