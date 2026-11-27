/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Blog1() {
  const articles = [
    {
      tag: "MONOGRAPH 01",
      date: "October 24, 2026",
      title: "Sub-Nanosecond Synchronization in Distributed Financial Ledgers",
      desc: "An examination of atomic clock drift and compensation algorithms in sovereign clearing networks."
    },
    {
      tag: "MONOGRAPH 02",
      date: "November 02, 2026",
      title: "Metallurgical Integrity of Grade-5 Titanium in Sealed Chassis",
      desc: "Thermal expansion coefficients and acoustic shielding under extreme seismic stress."
    },
    {
      tag: "MONOGRAPH 03",
      date: "November 18, 2026",
      title: "Physically Unclonable Functions in Hardware Telemetry Signatures",
      desc: "Silicon-level cryptographic verification for high-security central bank vaults."
    }
  ];

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            Editorial Research & Monographs
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12]">
            Published technical insights.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art, idx) => (
            <div key={idx} className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-full h-48 bg-gradient-to-br from-[#0a0e12] to-[#16232d] flex items-center justify-center text-white font-mono text-xs tracking-widest p-4 text-center">
                  [VERITAS MONOGRAPH 0{idx + 1}]
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#5b6b76] mb-3">
                    <span className="text-[#0f4c45] font-semibold">{art.tag}</span>
                    <span>{art.date}</span>
                  </div>
                  <h3 className="text-lg font-medium text-[#0a0e12] mb-3 leading-snug">{art.title}</h3>
                  <p className="text-xs text-[#5b6b76] leading-relaxed">{art.desc}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#read" className="inline-flex items-center gap-2 text-xs font-medium text-[#0f4c45] hover:text-[#0c3d37] transition-colors">
                  <span>Read Full Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
