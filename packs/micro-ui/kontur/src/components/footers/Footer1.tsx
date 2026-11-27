/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Footer1: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white border-b border-white/20 overflow-hidden pt-12 pb-8 px-8 flex flex-col justify-between">
      <div className="flex justify-between items-start text-[11px] font-mono tracking-widest opacity-70 mb-8">
        <span>[KONTUR FOUNDRY 2026]</span>
        <span>ALL RIGHTS RESERVED</span>
      </div>

      <div className="overflow-hidden my-4 text-center">
        <h2 className="text-[18vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap">
          SYMPOSIUM
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/20 pt-6 text-xs font-mono tracking-wider opacity-70 gap-4">
        <div>BASEL // ZÜRICH // GENEVA</div>
        <div className="flex space-x-6">
          <a href="#privacy" className="hover:opacity-100">PRIVACY</a>
          <a href="#terms" className="hover:opacity-100">TERMS</a>
          <a href="#colophon" className="hover:opacity-100">COLOPHON</a>
        </div>
      </div>
    </footer>
  );
};
