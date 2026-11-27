/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Activity } from 'lucide-react';

export function Stat3() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm">
        <div className="flex items-center justify-between pb-6 border-b border-[#e2e8f0] mb-8">
          <div className="flex items-center gap-2.5">
            <Activity className="w-4 h-4 text-[#0f4c45]" />
            <span className="font-semibold text-xs uppercase tracking-widest text-[#0a0e12]">Global Telemetry Strip</span>
          </div>
          <span className="text-[11px] font-mono text-[#0f4c45] bg-[#f6f8fa] border border-[#e2e8f0] px-3 py-1 rounded-full">
            ALL NODES ACTIVE
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-[#f6f8fa] rounded-xl border border-[#e2e8f0]">
            <div className="font-mono text-2xl font-semibold text-[#0a0e12] mb-1">0.04ms</div>
            <div className="text-[11px] text-[#5b6b76] uppercase">Zurich Ping</div>
          </div>
          <div className="p-4 bg-[#f6f8fa] rounded-xl border border-[#e2e8f0]">
            <div className="font-mono text-2xl font-semibold text-[#0a0e12] mb-1">0.08ms</div>
            <div className="text-[11px] text-[#5b6b76] uppercase">Geneva Ping</div>
          </div>
          <div className="p-4 bg-[#f6f8fa] rounded-xl border border-[#e2e8f0]">
            <div className="font-mono text-2xl font-semibold text-[#0a0e12] mb-1">0.12ms</div>
            <div className="text-[11px] text-[#5b6b76] uppercase">Frankfurt Ping</div>
          </div>
          <div className="p-4 bg-[#f6f8fa] rounded-xl border border-[#e2e8f0]">
            <div className="font-mono text-2xl font-semibold text-[#0a0e12] mb-1">99.999%</div>
            <div className="text-[11px] text-[#5b6b76] uppercase">Uptime Ratio</div>
          </div>
        </div>
      </div>
    </section>
  );
}
