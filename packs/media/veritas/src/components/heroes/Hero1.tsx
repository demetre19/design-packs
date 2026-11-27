/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export function Hero1() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-4">
          Institutional Reference Instrument 01
        </span>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[#0a0e12] max-w-4xl leading-[1.1] mb-6">
          Absolute acoustic precision engineered for sovereign archives.
        </h1>
        <p className="text-[#5b6b76] text-base md:text-lg max-w-2xl mb-10 font-normal leading-relaxed">
          Veritas instruments deliver sub-microsecond synchronization and zero-tolerance acoustic calibration for Tier-1 institutions worldwide.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#request"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0f4c45] text-white text-xs font-medium tracking-wide hover:bg-[#0c3d37] transition-colors"
          >
            <span>Commission Specification</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#e2e8f0] text-[#0a0e12] text-xs font-medium tracking-wide hover:bg-[#f1f4f8] transition-colors"
          >
            <Play className="w-3.5 h-3.5 text-[#0f4c45]" />
            <span>View Telemetry Stream</span>
          </a>
        </div>

        {/* Wide media plate */}
        <div className="w-full bg-white border border-[#e2e8f0] rounded-2xl p-4 md:p-6 shadow-sm">
          <div className="w-full h-72 md:h-96 rounded-xl bg-gradient-to-br from-[#0a0e12] via-[#1a232a] to-[#0f4c45] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative text-center px-4">
              <span className="text-[11px] tracking-[0.25em] text-[#8fa3b0] uppercase block mb-2">Live Oscilloscope Telemetry</span>
              <div className="text-white font-mono text-2xl md:text-4xl tracking-widest font-light">
                99.99998% SYNC // 0.04ms LATENCY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
