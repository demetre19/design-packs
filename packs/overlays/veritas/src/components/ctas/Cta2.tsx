/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta2() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto bg-white border border-[#e2e8f0] rounded-2xl p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#0f4c45] uppercase">ZURICH // GENEVA DESK</span>
          <h2 className="text-3xl font-medium tracking-tight text-[#0a0e12]">Ready to deploy sovereign timing hardware?</h2>
          <p className="text-xs text-[#5b6b76] leading-relaxed">
            Schedule a confidential consultation with our lead calibration engineers for custom enterprise deployments.
          </p>
        </div>
        <div className="lg:col-span-5 flex lg:justify-end">
          <a
            href="#consult"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0f4c45] text-white text-xs font-medium tracking-wide hover:bg-[#0c3d37] transition-colors"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
