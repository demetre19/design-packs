/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Navbar3: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 px-6 py-3 flex flex-col md:flex-row justify-between items-start md:items-center text-[11px] font-mono tracking-widest gap-2">
      <div className="flex items-center space-x-6">
        <span className="font-extrabold text-sm tracking-tighter">KT-26</span>
        <span className="opacity-60">LOC: 47.5596° N, 7.5886° E</span>
      </div>
      <div className="flex items-center space-x-8 opacity-70">
        <a href="#manifesto" className="hover:opacity-100">MANIFESTO</a>
        <a href="#catalog" className="hover:opacity-100">CATALOG</a>
        <a href="#colophon" className="hover:opacity-100">COLOPHON</a>
      </div>
      <div className="opacity-50 hidden lg:block">
        SYS.VER // 2.4.0
      </div>
    </div>
  );
};
