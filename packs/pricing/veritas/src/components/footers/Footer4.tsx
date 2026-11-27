/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function Footer4() {
  return (
    <footer className="bg-[#f6f8fa] border-t border-[#e2e8f0] py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <div className="text-4xl md:text-7xl font-semibold tracking-tight text-[#0a0e12] uppercase mb-4">
            VERITAS INSTRUMENTS
          </div>
          <p className="text-xs text-[#5b6b76] uppercase tracking-[0.2em]">Zurich // Geneva // Frankfurt</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#e2e8f0] text-xs text-[#5b6b76]">
          <div>
            <div className="font-semibold text-[#0a0e12] mb-2 uppercase tracking-wider">Zurich Headquarters</div>
            <p>Gotthardstrasse 42<br />8002 Zurich, Switzerland<br />inquiries@veritas-inst.ch</p>
          </div>
          <div>
            <div className="font-semibold text-[#0a0e12] mb-2 uppercase tracking-wider">Geneva Laboratories</div>
            <p>Rue du Rhône 88<br />1204 Geneva, Switzerland<br />telemetry@veritas-inst.ch</p>
          </div>
          <div>
            <div className="font-semibold text-[#0a0e12] mb-2 uppercase tracking-wider">Institutional Desk</div>
            <p>Secure Voice Line:<br />+41 44 900 8800<br />PGP Fingerprint: 8F2A 4C9E</p>
          </div>
        </div>

        <div className="pt-8 border-t border-[#e2e8f0] flex items-center justify-between text-xs text-[#5b6b76]">
          <div>&copy; {new Date().getFullYear()} Veritas Instruments AG.</div>
          <div>Sovereign Acoustic Telemetry Systems</div>
        </div>
      </div>
    </footer>
  );
}
