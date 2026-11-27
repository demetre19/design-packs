/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export function Pricing2() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            Flexible Deployment Terms
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12] mb-6">
            Institutional billing intervals.
          </h2>
          
          {/* Toggle */}
          <div className="inline-flex items-center p-1 bg-white border border-[#e2e8f0] rounded-full">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                !annual ? 'bg-[#0f4c45] text-white' : 'text-[#5b6b76] hover:text-[#0a0e12]'
              }`}
            >
              Quarterly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                annual ? 'bg-[#0f4c45] text-white' : 'text-[#5b6b76] hover:text-[#0a0e12]'
              }`}
            >
              Annual Billing (15% savings)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#0f4c45] uppercase block mb-2">TIER_A</span>
              <h3 className="text-2xl font-medium text-[#0a0e12] mb-2">Standard Telemetry</h3>
              <p className="text-xs text-[#5b6b76] mb-6">Ideal for regional research institutions and regional banking nodes.</p>
              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#f1f4f8]">
                <span className="text-4xl font-semibold text-[#0a0e12]">{annual ? "$10,500" : "$12,500"}</span>
                <span className="text-xs text-[#5b6b76]">/ year</span>
              </div>
              <ul className="space-y-3 mb-8 text-xs text-[#5b6b76]">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0f4c45]" /> Single cesium reference standard</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0f4c45]" /> Standard titanium enclosure</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0f4c45]" /> 24/7 automated monitoring feed</li>
              </ul>
            </div>
            <a href="#select" className="w-full py-3 rounded-full bg-[#f6f8fa] border border-[#e2e8f0] text-[#0a0e12] hover:bg-[#eef2f6] text-xs font-medium flex items-center justify-center gap-2 transition-colors">
              <span>Select Tier A</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white border-2 border-[#0f4c45] rounded-2xl p-8 shadow-sm flex flex-col justify-between relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0f4c45] text-white text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-full">
              Sovereign Standard
            </div>
            <div>
              <span className="text-xs font-mono tracking-widest text-[#0f4c45] uppercase block mb-2">TIER_B</span>
              <h3 className="text-2xl font-medium text-[#0a0e12] mb-2">Sovereign Vault</h3>
              <p className="text-xs text-[#5b6b76] mb-6">Designed for central banks and prime institutional treasuries.</p>
              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#f1f4f8]">
                <span className="text-4xl font-semibold text-[#0a0e12]">{annual ? "$32,000" : "$38,000"}</span>
                <span className="text-xs text-[#5b6b76]">/ year</span>
              </div>
              <ul className="space-y-3 mb-8 text-xs text-[#5b6b76]">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0f4c45]" /> Dual cesium fountain references</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0f4c45]" /> Grade-5 milled titanium chassis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0f4c45]" /> Encrypted hardware PUF signing</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0f4c45]" /> Dedicated Zurich support engineer</li>
              </ul>
            </div>
            <a href="#select" className="w-full py-3 rounded-full bg-[#0f4c45] text-white hover:bg-[#0c3d37] text-xs font-medium flex items-center justify-center gap-2 transition-colors">
              <span>Select Sovereign Vault</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
