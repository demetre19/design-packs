/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Clock, Shield, ArrowLeft } from 'lucide-react';

export function Blog4() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto bg-white border border-[#e2e8f0] rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="mb-8">
          <a href="#back" className="inline-flex items-center gap-2 text-xs font-medium text-[#5b6b76] hover:text-[#0a0e12] transition-colors mb-6">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Archive Index</span>
          </a>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#5b6b76] mb-4">
            <span className="px-3 py-1 rounded-full bg-[#f6f8fa] border border-[#e2e8f0] text-[#0f4c45] font-semibold">MONOGRAPH 04</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 12 min read</span>
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Peer Verified</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12] mb-6 leading-tight">
            Sub-Nanosecond Synchronization in Distributed Financial Ledgers
          </h1>
          <div className="flex items-center gap-3 pt-6 border-t border-[#f1f4f8]">
            <div className="w-10 h-10 rounded-full bg-[#0a0e12] text-white flex items-center justify-center font-semibold text-xs">
              AV
            </div>
            <div>
              <div className="text-xs font-semibold text-[#0a0e12]">Dr. Alistair Vance</div>
              <div className="text-[11px] text-[#5b6b76]">Director of Research, Veritas Laboratories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
