/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Activity, ShieldCheck, Cpu } from 'lucide-react';

export function Hero2() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-4 block">
            Sovereign Instrument Architecture
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#0a0e12] leading-[1.15] mb-6">
            Designed for silent operation under extreme environmental parameters.
          </h1>
          <p className="text-[#5b6b76] text-base mb-8 font-normal leading-relaxed">
            Every Veritas unit is milled from a single block of aerospace-grade titanium, housing dual-redundant quantum oscillators calibrated to UTC.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#explore"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0f4c45] text-white text-xs font-medium tracking-wide hover:bg-[#0c3d37] transition-colors"
            >
              <span>Explore Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Spec-card panel right */}
        <div className="lg:col-span-5 bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-medium tracking-widest text-[#5b6b76] uppercase pb-4 border-b border-[#e2e8f0] mb-4 flex items-center justify-between">
            <span>System Telemetry</span>
            <Activity className="w-4 h-4 text-[#0f4c45]" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-[#f1f4f8]">
              <span className="text-xs text-[#5b6b76]">Oscillator Drift</span>
              <span className="font-mono text-xs text-[#0a0e12] font-semibold">0.001 ppb/day</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#f1f4f8]">
              <span className="text-xs text-[#5b6b76]">Thermal Variance</span>
              <span className="font-mono text-xs text-[#0a0e12] font-semibold">-40°C to +85°C</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#f1f4f8]">
              <span className="text-xs text-[#5b6b76]">Encryption Level</span>
              <span className="font-mono text-xs text-[#0a0e12] font-semibold">AES-256-GCM Hardware</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-xs text-[#5b6b76]">Compliance Status</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#0f4c45] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                ISO-9001 Level 4
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
