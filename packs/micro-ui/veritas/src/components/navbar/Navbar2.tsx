/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Layers, ChevronDown } from 'lucide-react';

export function Navbar2() {
  return (
    <nav className="w-full bg-[#f6f8fa] border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-[#0f4c45]" />
            <span className="font-semibold text-[#0a0e12] tracking-wider text-sm">VERITAS SPEC</span>
          </div>
          <div className="h-4 w-[1px] bg-[#e2e8f0] hidden md:block" />
          <div className="hidden md:flex items-center gap-6 text-xs font-medium text-[#5b6b76]">
            <a href="#calibration" className="hover:text-[#0a0e12] transition-colors">Calibration</a>
            <a href="#acoustics" className="hover:text-[#0a0e12] transition-colors">Acoustics</a>
            <a href="#standards" className="hover:text-[#0a0e12] transition-colors">Standards</a>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a href="#login" className="text-[#5b6b76] hover:text-[#0a0e12] font-medium">Client Portal</a>
          <a href="#secure" className="px-3.5 py-1.5 rounded-full bg-[#0f4c45] text-white font-medium hover:bg-[#0c3d37] transition-colors">
            Secure Terminal
          </a>
        </div>
      </div>
    </nav>
  );
}
