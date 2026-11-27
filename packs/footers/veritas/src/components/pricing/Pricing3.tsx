/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto bg-white border border-[#e2e8f0] rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            Single Comprehensive Plan
          </span>
          <h2 className="text-3xl font-medium text-[#0a0e12] mb-4">Veritas Sovereign Reference Tier</h2>
          <p className="text-sm text-[#5b6b76]">Everything required for full institutional acoustic and timing compliance.</p>
        </div>

        <div className="flex items-baseline justify-center gap-2 mb-10 pb-8 border-b border-[#f1f4f8]">
          <span className="text-5xl font-semibold text-[#0a0e12]">$24,000</span>
          <span className="text-xs text-[#5b6b76]">/ annum flat fee</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[
            "Atomic cesium fountain reference standard",
            "Sub-nanosecond global network sync",
            "Grade-5 aerospace titanium chassis",
            "Hardware PUF cryptographic signing",
            "24/7 autonomous telemetry stream",
            "Dedicated Zurich support engineer"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs text-[#5b6b76] bg-[#f6f8fa] p-3.5 rounded-xl border border-[#e2e8f0]">
              <Check className="w-4 h-4 text-[#0f4c45] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#commission"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0f4c45] text-white text-xs font-medium tracking-wide hover:bg-[#0c3d37] transition-colors"
          >
            <span>Commission Sovereign Tier</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
