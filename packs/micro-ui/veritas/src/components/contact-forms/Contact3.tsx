/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Contact3() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto bg-white border border-[#e2e8f0] rounded-2xl p-8 md:p-12 shadow-sm text-center">
        <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
          Quarterly Telemetry Bulletins
        </span>
        <h2 className="text-2xl md:text-3xl font-medium text-[#0a0e12] mb-4">
          Join the Veritas research dissemination list.
        </h2>
        <p className="text-xs text-[#5b6b76] max-w-lg mx-auto mb-8">
          Strictly for verified central bank personnel, academic researchers, and institutional treasury directors.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="institutional.email@domain.gov" 
            className="flex-1 bg-[#f6f8fa] border border-[#e2e8f0] rounded-full px-4 py-3 text-xs text-[#0a0e12] focus:outline-none focus:border-[#0f4c45]"
          />
          <button className="px-6 py-3 rounded-full bg-[#0f4c45] text-white text-xs font-medium hover:bg-[#0c3d37] transition-colors flex items-center justify-center gap-2 shrink-0">
            <span>Subscribe</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
