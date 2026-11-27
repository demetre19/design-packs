/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Navbar2 = () => {
  return (
    <header className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 border-x border-[#0a0a0a]">
        {/* Wide empty left column */}
        <div className="md:col-span-4 p-6 border-b md:border-b-0 md:border-r border-[#0a0a0a] flex items-center justify-between md:justify-start space-x-4">
          <div className="w-2.5 h-2.5 bg-[#e30613]"></div>
          <div>
            <span className="font-bold text-base tracking-tight block">HAUS DER FORM</span>
            <span className="text-[9px] font-mono text-[#0a0a0a]/60 uppercase tracking-[0.2em]">Zürich / Est. 1958</span>
          </div>
        </div>

        {/* Navigation center & right */}
        <div className="md:col-span-8 flex flex-col md:flex-row items-stretch justify-between">
          <nav className="flex flex-wrap items-center divide-x divide-[#0a0a0a] border-b md:border-b-0 border-[#0a0a0a]">
            <a href="#manifesto" className="px-6 py-5 text-xs font-mono uppercase tracking-widest hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors flex items-center">
              <span className="text-[#e30613] mr-2">01.</span>Manifesto
            </a>
            <a href="#grid" className="px-6 py-5 text-xs font-mono uppercase tracking-widest hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors flex items-center">
              <span className="text-[#e30613] mr-2">02.</span>Grid System
            </a>
            <a href="#specimen" className="px-6 py-5 text-xs font-mono uppercase tracking-widest hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors flex items-center">
              <span className="text-[#e30613] mr-2">03.</span>Specimens
            </a>
          </nav>
          <div className="flex items-center px-6 py-4 md:py-0">
            <a href="#access" className="w-full md:w-auto text-center text-xs font-mono uppercase tracking-widest py-3 px-5 border border-[#0a0a0a] hover:bg-[#e30613] hover:text-[#ffffff] hover:border-[#e30613] transition-colors">
              Access →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
