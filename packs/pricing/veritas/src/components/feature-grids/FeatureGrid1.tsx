/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Cpu, Shield, Zap, Activity, Lock, Sliders } from 'lucide-react';

export function FeatureGrid1() {
  const features = [
    {
      icon: Cpu,
      title: "Quantum Quartz Reference",
      description: "Dual-oven controlled crystal oscillators calibrated to atomic timescales with sub-nanosecond drift tolerances."
    },
    {
      icon: Shield,
      title: "Encrypted Telemetry Hub",
      description: "End-to-end hardware-isolated channels ensuring zero interception risk across institutional networks."
    },
    {
      icon: Zap,
      title: "Zero-Latency Routing",
      description: "Optimized signal pathways delivering deterministic throughput across distributed sovereign nodes."
    }
  ];

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            Core Architecture Features
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12]">
            Engineered for uncompromised institutional fidelity.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#f6f8fa] border border-[#e2e8f0] flex items-center justify-center text-[#0f4c45] mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium text-[#0a0e12] mb-3">{feat.title}</h3>
                  <p className="text-sm text-[#5b6b76] leading-relaxed">{feat.description}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#f1f4f8] flex items-center justify-between text-xs text-[#5b6b76]">
                  <span>SPEC // 0{idx + 1}</span>
                  <span className="font-mono text-[#0f4c45] font-semibold">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
