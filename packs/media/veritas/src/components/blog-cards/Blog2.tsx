/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Blog2() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            Featured Monograph & Index
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12]">
            Advanced instrumentation research.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured large */}
          <div className="lg:col-span-7 bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between p-8">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#5b6b76] mb-4">
                <span className="text-[#0f4c45] font-semibold">FEATURED // MONOGRAPH 04</span>
                <span>November 20, 2026</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-[#0a0e12] mb-4 leading-snug">
                Atomic Standards in Sovereign Vaults: A 25-Year Reliability Study
              </h3>
              <p className="text-sm text-[#5b6b76] leading-relaxed mb-8">
                An exhaustive review of continuous cesium beam operation across central banking installations in Zurich, Geneva, and Frankfurt.
              </p>
            </div>
            <a href="#read" className="inline-flex items-center gap-2 text-xs font-medium text-[#0f4c45] hover:text-[#0c3d37] transition-colors">
              <span>Read Featured Monograph</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* List of small rows */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {[
              { tag: "RESEARCH", title: "Sub-Hertz Acoustic Dampening Metrics", date: "Nov 12" },
              { tag: "SECURITY", title: "PUF Cryptographic Signing in Silicon", date: "Nov 08" },
              { tag: "TELEMETRY", title: "Global Optical Fiber Backbone Sync", date: "Oct 29" }
            ].map((row, idx) => (
              <div key={idx} className="bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-sm flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-mono text-[#0f4c45] font-semibold mb-1">{row.tag} // {row.date}</div>
                  <h4 className="text-sm font-medium text-[#0a0e12] leading-snug">{row.title}</h4>
                </div>
                <ArrowRight className="w-4 h-4 text-[#5b6b76] shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
