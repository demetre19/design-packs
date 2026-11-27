/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Activity, ShieldCheck, Cpu } from 'lucide-react';

export function Modal3() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-xl mx-auto">
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm">
          <div className="flex items-center justify-between pb-6 border-b border-[#e2e8f0] mb-6">
            <div className="flex items-center gap-2.5">
              <Activity className="w-4 h-4 text-[#0f4c45]" />
              <span className="font-semibold text-xs uppercase tracking-widest text-[#0a0e12]">Slide-Over Telemetry Inspector</span>
            </div>
            <button className="text-[#5b6b76] hover:text-[#0a0e12]">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3.5 bg-[#f6f8fa] rounded-xl border border-[#e2e8f0] text-xs">
              <span className="text-[#5b6b76]">Module ID</span>
              <span className="font-mono font-semibold text-[#0a0e12]">VERITAS_CHASSIS_09</span>
            </div>
            <div className="flex items-center justify-between p-3.5 bg-[#f6f8fa] rounded-xl border border-[#e2e8f0] text-xs">
              <span className="text-[#5b6b76]">Oscillator Drift</span>
              <span className="font-mono font-semibold text-[#0f4c45]">0.0001 ppb</span>
            </div>
            <div className="flex items-center justify-between p-3.5 bg-[#f6f8fa] rounded-xl border border-[#e2e8f0] text-xs">
              <span className="text-[#5b6b76]">Thermal Status</span>
              <span className="font-mono font-semibold text-[#0a0e12]">+21.4°C (Stable)</span>
            </div>
            <div className="flex items-center justify-between p-3.5 bg-[#f6f8fa] rounded-xl border border-[#e2e8f0] text-xs">
              <span className="text-[#5b6b76]">PUF Signature</span>
              <span className="font-mono font-semibold text-[#0f4c45]">VERIFIED_SECURE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
