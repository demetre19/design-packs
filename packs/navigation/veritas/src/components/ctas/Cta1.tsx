/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta1() {
  return (
    <section className="bg-[#f6f8fa] py-24 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto bg-white border border-[#e2e8f0] rounded-2xl p-12 md:p-16 shadow-sm text-center">
        <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-4 block">
          Initiate Commission
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0a0e12] mb-6">
          Secure your sovereign synchronization infrastructure today.
        </h2>
        <p className="text-sm text-[#5b6b76] max-w-xl mx-auto mb-10 leading-relaxed">
          Contact our Zurich engineering desk to discuss tailored quartz reference standards and hardware PUF integration for your institution.
        </p>
        <a
          href="#commission"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0f4c45] text-white text-xs font-medium tracking-wide hover:bg-[#0c3d37] transition-colors"
        >
          <span>Request Specification Handshake</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
