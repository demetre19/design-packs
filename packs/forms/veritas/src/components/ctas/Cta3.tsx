/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta3() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto bg-white border border-[#e2e8f0] rounded-2xl p-8 md:p-12 shadow-sm text-center space-y-6">
        <span className="text-xs font-mono tracking-[0.25em] text-[#5b6b76] uppercase">
          VERITAS SPECIFICATION CATALOG // 2026 EDITION
        </span>
        <h2 className="text-2xl md:text-3xl font-medium text-[#0a0e12]">Download the complete institutional catalog.</h2>
        <div>
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#0f4c45] text-white text-xs font-medium tracking-wide hover:bg-[#0c3d37] transition-colors"
          >
            <span>Download Catalog PDF</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
