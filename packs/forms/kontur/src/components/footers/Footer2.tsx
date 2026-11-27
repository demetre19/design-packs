/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Footer2: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-8">[02 // VENUE & CONTACT DIRECTORY]</div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/20 pt-8 text-xs font-mono tracking-wider">
        <div className="space-y-2">
          <span className="text-white font-bold block mb-3">[BASEL HQ]</span>
          <p className="opacity-70">Petersplatz 13<br />4051 Basel, Switzerland</p>
        </div>
        <div className="space-y-2">
          <span className="text-white font-bold block mb-3">[ZÜRICH ANNEX]</span>
          <p className="opacity-70">Ausstellungsstr. 60<br />8005 Zürich, Switzerland</p>
        </div>
        <div className="space-y-2">
          <span className="text-white font-bold block mb-3">[PRESS INQUIRIES]</span>
          <p className="opacity-70">press@kontur-symposium.ch<br />+41 61 267 00 00</p>
        </div>
        <div className="space-y-2">
          <span className="text-white font-bold block mb-3">[EDITION]</span>
          <p className="opacity-70">ISSN 2810-9421<br />Vol. 42 / October 2026</p>
        </div>
      </div>
    </footer>
  );
};
