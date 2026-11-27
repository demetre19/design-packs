/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass } from 'lucide-react';

export function Navbar3() {
  return (
    <nav className="w-full bg-[#f6f8fa] border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#0f4c45]" />
          <span className="font-semibold text-xs tracking-widest uppercase text-[#0a0e12]">Veritas Laboratories</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-medium text-[#5b6b76] pt-1">
          <a href="#series-a" className="hover:text-[#0a0e12] transition-colors">Series 01 Reference</a>
          <a href="#series-b" className="hover:text-[#0a0e12] transition-colors">Series 02 Transducer</a>
          <a href="#telemetry" className="hover:text-[#0a0e12] transition-colors">Global Telemetry</a>
          <a href="#vault" className="hover:text-[#0a0e12] transition-colors">Institutional Vault</a>
          <a href="#inquiries" className="hover:text-[#0a0e12] transition-colors">Inquiries</a>
        </div>
      </div>
    </nav>
  );
}
