/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowUpRight, Menu } from 'lucide-react';

export const Navbar1: React.FC = () => {
  return (
    <nav className="w-full bg-black text-white border-b border-white/20 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <span className="text-xl font-extrabold tracking-tighter uppercase">KONTUR</span>
        <div className="hidden md:flex items-center space-x-4 text-[11px] font-mono tracking-widest opacity-70">
          <span>[SYMPOSIUM 2026]</span>
          <span>[BASEL / ZÜRICH]</span>
        </div>
      </div>
      <div className="flex items-center space-x-8 text-xs font-mono tracking-wider">
        <a href="#schedule" className="hover:opacity-100 opacity-60 transition-opacity">PROGRAM</a>
        <a href="#speakers" className="hover:opacity-100 opacity-60 transition-opacity">SPEAKERS</a>
        <a href="#tickets" className="hover:opacity-100 opacity-60 transition-opacity flex items-center gap-1">
          REGISTER <ArrowUpRight className="w-3 h-3" />
        </a>
        <button className="md:hidden opacity-80 hover:opacity-100">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};
