/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Shield, Clock, Cpu } from 'lucide-react';

export function Hero5() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-4 block">
              Institutional Telemetry Division
            </span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#0a0e12] leading-[1.15] mb-6">
              Sub-nanosecond precision for global institutional networks.
            </h1>
            <p className="text-[#5b6b76] text-base mb-8 leading-relaxed">
              Veritas hardware modules integrate seamlessly into existing server racks, offering hardened cryptographic timing and acoustic noise isolation.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#secure"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0f4c45] text-white text-xs font-medium tracking-wide hover:bg-[#0c3d37] transition-colors"
              >
                <span>Initialize Secure Link</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full h-80 md:h-96 rounded-2xl bg-gradient-to-br from-[#0a0e12] to-[#16232d] border border-[#e2e8f0] p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
              <div className="flex justify-between items-center relative z-10">
                <span className="text-[11px] font-mono tracking-widest text-[#8fa3b0] uppercase">CHASSIS_01 // ACTIVE</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0f4c45] animate-pulse" />
              </div>
              <div className="relative z-10">
                <div className="text-white font-mono text-xl tracking-wider mb-1">UTC(KRONOS) +0.000041ms</div>
                <div className="text-xs text-[#8fa3b0]">Calibrated against atomic cesium fountain primary standard.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat strip bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-[#e2e8f0]">
          <div className="bg-white border border-[#e2e8f0] rounded-xl p-6">
            <div className="flex items-center gap-2 text-xs font-medium text-[#5b6b76] uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4 text-[#0f4c45]" />
              <span>Timing Precision</span>
            </div>
            <div className="text-2xl font-semibold text-[#0a0e12] font-mono">±0.1 nanoseconds</div>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-xl p-6">
            <div className="flex items-center gap-2 text-xs font-medium text-[#5b6b76] uppercase tracking-wider mb-2">
              <Shield className="w-4 h-4 text-[#0f4c45]" />
              <span>Sovereign Security</span>
            </div>
            <div className="text-2xl font-semibold text-[#0a0e12] font-mono">FIPS 140-3 Level 4</div>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-xl p-6">
            <div className="flex items-center gap-2 text-xs font-medium text-[#5b6b76] uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4 text-[#0f4c45]" />
              <span>Hardware Lifecycle</span>
            </div>
            <div className="text-2xl font-semibold text-[#0a0e12] font-mono">25-Year MTBF</div>
          </div>
        </div>
      </div>
    </section>
  );
}
