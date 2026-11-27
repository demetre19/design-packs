/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

export function Navbar1() {
  return (
    <nav className="w-full bg-[#f6f8fa] border-b border-[#e2e8f0] px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0a0e12] flex items-center justify-center text-white">
            <Shield className="w-4 h-4" />
          </div>
          <span className="font-medium text-[#0a0e12] tracking-tight text-lg">VERITAS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-[#5b6b76]">
          <a href="#instruments" className="hover:text-[#0a0e12] transition-colors">Instruments</a>
          <a href="#telemetry" className="hover:text-[#0a0e12] transition-colors">Telemetry</a>
          <a href="#institution" className="hover:text-[#0a0e12] transition-colors">Institution</a>
          <a href="#archive" className="hover:text-[#0a0e12] transition-colors">Archive</a>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f4c45] text-white text-xs font-medium tracking-wide hover:bg-[#0c3d37] transition-colors"
          >
            <span>Request Access</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
