/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sliders, ChevronDown, Cpu, Activity, Lock } from 'lucide-react';

export function Navbar4() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f6f8fa] border-b border-[#e2e8f0] relative">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sliders className="w-5 h-5 text-[#0f4c45]" />
          <span className="font-semibold text-[#0a0e12] tracking-wide text-sm">VERITAS DYNAMICS</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-[#5b6b76]">
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 hover:text-[#0a0e12] transition-colors py-2"
            >
              <span>Architecture</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-[#e2e8f0] rounded-xl shadow-sm p-3 grid gap-2 z-50">
                <a href="#core" className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#f6f8fa] transition-colors">
                  <Cpu className="w-4 h-4 text-[#0f4c45] mt-0.5" />
                  <div>
                    <div className="text-[#0a0e12] font-medium text-xs">Core Processor</div>
                    <div className="text-[11px] text-[#5b6b76]">Sub-nanosecond institutional clock</div>
                  </div>
                </a>
                <a href="#telemetry" className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#f6f8fa] transition-colors">
                  <Activity className="w-4 h-4 text-[#0f4c45] mt-0.5" />
                  <div>
                    <div className="text-[#0a0e12] font-medium text-xs">Live Telemetry</div>
                    <div className="text-[11px] text-[#5b6b76]">Real-time seismic & acoustic feeds</div>
                  </div>
                </a>
              </div>
            )}
          </div>
          <a href="#specifications" className="hover:text-[#0a0e12] transition-colors">Specifications</a>
          <a href="#compliance" className="hover:text-[#0a0e12] transition-colors">Compliance</a>
        </div>

        <div>
          <a href="#auth" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f4c45] text-white text-xs font-medium hover:bg-[#0c3d37] transition-colors">
            <Lock className="w-3.5 h-3.5" />
            <span>Member Login</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
