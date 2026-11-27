/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero4() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            Acoustic Bandwidth Reference
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#0a0e12] mb-6">
            Precision instrumentation without compromise.
          </h1>
          <p className="text-[#5b6b76] text-base mb-8">
            Engineered in Geneva and Zurich for uncompromising institutional deployments.
          </p>
          <a
            href="#specs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0f4c45] text-white text-xs font-medium tracking-wide hover:bg-[#0c3d37] transition-colors"
          >
            <span>View Series Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="w-full h-80 md:h-[450px] rounded-2xl overflow-hidden relative border border-[#e2e8f0]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0e12] via-[#152028] to-[#0f4c45] flex items-center justify-center p-8">
            <div className="absolute top-6 left-6 bg-[#0a0e12]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-[11px] text-white tracking-widest uppercase">
              Plate 04 // Dual-Cavity Resonator
            </div>
            <div className="text-center">
              <div className="text-white/60 font-mono text-xs tracking-widest mb-2">VERITAS ACOUSTIC CHASSIS</div>
              <div className="text-white text-3xl md:text-5xl font-light tracking-tight">Zero Resonance Architecture</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
