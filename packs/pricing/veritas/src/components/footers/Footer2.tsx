/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function Footer2() {
  return (
    <footer className="bg-[#f6f8fa] border-t border-[#e2e8f0] py-12 px-6 text-center">
      <div className="max-w-xl mx-auto space-y-4">
        <span className="font-medium text-xs tracking-widest uppercase text-[#0a0e12]">Veritas Instruments AG</span>
        <p className="text-xs text-[#5b6b76]">
          Absolute acoustic precision and sovereign timing infrastructure for central banks.
        </p>
        <div className="flex items-center justify-center gap-6 text-xs text-[#5b6b76] pt-2">
          <a href="#instruments" className="hover:text-[#0a0e12]">Instruments</a>
          <a href="#telemetry" className="hover:text-[#0a0e12]">Telemetry</a>
          <a href="#compliance" className="hover:text-[#0a0e12]">Compliance</a>
          <a href="#contact" className="hover:text-[#0a0e12]">Contact</a>
        </div>
        <div className="text-[11px] text-[#5b6b76] pt-4 border-t border-[#e2e8f0]">
          &copy; {new Date().getFullYear()} Veritas Instruments AG. Zurich & Geneva.
        </div>
      </div>
    </footer>
  );
}
