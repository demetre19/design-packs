/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Footer3() {
  return (
    <footer className="bg-[#f6f8fa] border-t border-[#e2e8f0] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center pb-12 border-b border-[#e2e8f0]">
        <div className="md:col-span-6 space-y-2">
          <span className="text-xs font-mono tracking-widest text-[#0f4c45] uppercase">MONOGRAPH ALERTS</span>
          <h3 className="text-xl font-medium text-[#0a0e12]">Subscribe to institutional research updates.</h3>
          <p className="text-xs text-[#5b6b76]">Receive quarterly telemetry briefs and metallurgical bulletins directly.</p>
        </div>
        <div className="md:col-span-6 flex gap-2">
          <input 
            type="email" 
            placeholder="institutional.domain@bank.gov" 
            className="flex-1 bg-white border border-[#e2e8f0] rounded-full px-4 py-2.5 text-xs text-[#0a0e12] focus:outline-none focus:border-[#0f4c45]"
          />
          <button className="px-6 py-2.5 rounded-full bg-[#0f4c45] text-white text-xs font-medium hover:bg-[#0c3d37] transition-colors flex items-center gap-1.5 shrink-0">
            <span>Subscribe</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5b6b76]">
        <div>&copy; {new Date().getFullYear()} Veritas Instruments AG. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-[#0a0e12]">Privacy</a>
          <a href="#terms" className="hover:text-[#0a0e12]">Terms</a>
        </div>
      </div>
    </footer>
  );
}
