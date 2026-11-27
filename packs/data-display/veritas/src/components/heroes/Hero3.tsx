/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Hero3() {
  return (
    <section className="bg-[#f6f8fa] py-24 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-medium tracking-[0.25em] text-[#5b6b76] uppercase block mb-6">
          Editorial Edition // Monograph 04
        </span>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-[#0a0e12] max-w-5xl leading-[1.05] mb-12">
          The geometry of silence in sovereign financial infrastructure.
        </h1>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-[#e2e8f0]">
          <p className="text-[#5b6b76] text-base max-w-xl leading-relaxed">
            Uncompromising acoustic shielding and cryptographically sealed timing pulses designed for central banks and private institutional treasuries.
          </p>
          <a
            href="#inquire"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0f4c45] text-white text-xs font-medium tracking-wide hover:bg-[#0c3d37] transition-colors shrink-0"
          >
            <span>Request Monograph</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
