/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Navbar4: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 relative overflow-hidden px-6 py-6 flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="absolute -bottom-8 left-0 text-[10vw] font-black opacity-10 tracking-tighter leading-none select-none pointer-events-none uppercase">
        INDEX
      </div>
      <div className="relative z-10 font-black tracking-tighter text-2xl uppercase">
        KONTUR.
      </div>
      <div className="relative z-10 flex flex-wrap gap-6 mt-4 md:mt-0 text-xs font-mono tracking-widest opacity-80">
        <a href="#exhibition" className="hover:opacity-100">01 // EXHIBITION</a>
        <a href="#symposium" className="hover:opacity-100">02 // SYMPOSIUM</a>
        <a href="#workshops" className="hover:opacity-100">03 // WORKSHOPS</a>
      </div>
    </div>
  );
};
