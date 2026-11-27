/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function FeatureGrid3() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            Acoustic & Structural Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12]">
            Precision in alternating equilibrium.
          </h2>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#e2e8f0] rounded-2xl p-6 md:p-10 shadow-sm">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono tracking-widest text-[#0f4c45] uppercase">MODULE_01 // RESONANCE</span>
            <h3 className="text-2xl font-medium text-[#0a0e12]">Sub-Hertz Acoustic Dampening</h3>
            <p className="text-sm text-[#5b6b76] leading-relaxed">
              Proprietary elastomeric suspension rings isolate internal timing crystals from ambient seismic noise and structural vibrations down to 0.05 Hz.
            </p>
          </div>
          <div className="lg:col-span-6 h-64 rounded-xl bg-gradient-to-br from-[#0a0e12] to-[#152028] flex items-center justify-center p-6 text-white font-mono text-xs tracking-wider">
            [DAMPING COEFFICIENT: 99.98%]
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#e2e8f0] rounded-2xl p-6 md:p-10 shadow-sm">
          <div className="lg:col-span-6 order-2 lg:order-1 h-64 rounded-xl bg-gradient-to-br from-[#0f4c45] to-[#0a0e12] flex items-center justify-center p-6 text-white font-mono text-xs tracking-wider">
            [CRYPTOGRAPHIC TIMESTAMP: OK]
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
            <span className="text-xs font-mono tracking-widest text-[#0f4c45] uppercase">MODULE_02 // TELEMETRY</span>
            <h3 className="text-2xl font-medium text-[#0a0e12]">Hardware Cryptographic Signatures</h3>
            <p className="text-sm text-[#5b6b76] leading-relaxed">
              Every telemetry packet is signed at the silicon level using physically unclonable functions (PUF) embedded directly within the quartz substrate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
