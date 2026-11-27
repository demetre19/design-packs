/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield } from 'lucide-react';

export function Footer1() {
  return (
    <footer className="bg-[#f6f8fa] border-t border-[#e2e8f0] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#0a0e12] flex items-center justify-center text-white">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium text-[#0a0e12] tracking-tight text-sm">VERITAS INSTRUMENTS</span>
          </div>
          <p className="text-xs text-[#5b6b76] max-w-sm leading-relaxed">
            Absolute acoustic precision and sovereign timing infrastructure engineered in Geneva and Zurich for central banks and institutional vaults.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold text-[#0a0e12] uppercase tracking-wider mb-4">Instruments</div>
          <ul className="space-y-2.5 text-xs text-[#5b6b76]">
            <li><a href="#series-01" className="hover:text-[#0a0e12] transition-colors">Series 01 Reference</a></li>
            <li><a href="#series-02" className="hover:text-[#0a0e12] transition-colors">Series 02 Transducer</a></li>
            <li><a href="#vault-mod" className="hover:text-[#0a0e12] transition-colors">Vault Module</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold text-[#0a0e12] uppercase tracking-wider mb-4">Institution</div>
          <ul className="space-y-2.5 text-xs text-[#5b6b76]">
            <li><a href="#laboratories" className="hover:text-[#0a0e12] transition-colors">Laboratories</a></li>
            <li><a href="#compliance" className="hover:text-[#0a0e12] transition-colors">ISO Standards</a></li>
            <li><a href="#careers" className="hover:text-[#0a0e12] transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold text-[#0a0e12] uppercase tracking-wider mb-4">Security</div>
          <ul className="space-y-2.5 text-xs text-[#5b6b76]">
            <li><a href="#puf" className="hover:text-[#0a0e12] transition-colors">PUF Encryption</a></li>
            <li><a href="#audit" className="hover:text-[#0a0e12] transition-colors">Third-Party Audit</a></li>
            <li><a href="#escrow" className="hover:text-[#0a0e12] transition-colors">Key Escrow</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between text-xs text-[#5b6b76] gap-4">
        <div>&copy; {new Date().getFullYear()} Veritas Instruments AG. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-[#0a0e12]">Privacy Policy</a>
          <a href="#terms" className="hover:text-[#0a0e12]">Terms of Commission</a>
        </div>
      </div>
    </footer>
  );
}
