/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export const Navbar1 = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between border-x border-[#0a0a0a] relative">
        <div className="absolute -top-1 -left-1 text-[10px]">+</div>
        <div className="absolute -top-1 -right-1 text-[10px]">+</div>
        
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-[#e30613] rounded-none"></div>
          <span className="font-bold text-lg tracking-tight">HAUS DER FORM</span>
          <span className="text-[9px] text-[#e30613] uppercase tracking-[0.2em] font-mono hidden md:inline">/ ZRH.01</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono uppercase tracking-widest">
          <a href="#institute" className="hover:text-[#e30613] transition-colors flex items-center"><span className="text-[#e30613] mr-1">01.</span>Institute</a>
          <a href="#archive" className="hover:text-[#e30613] transition-colors flex items-center"><span className="text-[#e30613] mr-1">02.</span>Archive</a>
          <a href="#symposium" className="hover:text-[#e30613] transition-colors flex items-center"><span className="text-[#e30613] mr-1">03.</span>Symposium</a>
          <a href="#publications" className="hover:text-[#e30613] transition-colors flex items-center"><span className="text-[#e30613] mr-1">04.</span>Editions</a>
        </nav>

        {/* Action */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-[9px] font-mono text-[#0a0a0a]/60 uppercase">SYS.v4.4</span>
          <a href="#contact" className="px-4 py-2 bg-[#0a0a0a] text-[#ffffff] text-xs font-mono uppercase tracking-widest hover:bg-[#e30613] transition-colors rounded-none flex items-center space-x-2">
            <span>Inquire</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-[#0a0a0a]">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-b border-[#0a0a0a] bg-[#ffffff] px-6 py-6 space-y-4 font-mono text-xs uppercase tracking-widest">
          <a href="#institute" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-[#0a0a0a]/10 hover:text-[#e30613]"><span className="text-[#e30613] mr-2">01.</span>Institute</a>
          <a href="#archive" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-[#0a0a0a]/10 hover:text-[#e30613]"><span className="text-[#e30613] mr-2">02.</span>Archive</a>
          <a href="#symposium" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-[#0a0a0a]/10 hover:text-[#e30613]"><span className="text-[#e30613] mr-2">03.</span>Symposium</a>
          <a href="#publications" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-[#e30613]"><span className="text-[#e30613] mr-2">04.</span>Editions</a>
        </div>
      )}
    </header>
  );
};
