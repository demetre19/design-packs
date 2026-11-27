import React, { useState } from 'react';
import { Shield, Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white border-b-4 border-[#f25c05] font-mono select-none">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#f25c05] flex items-center justify-center rounded-none text-black font-bold">
            <Shield className="w-5 h-5 text-black" />
          </div>
          <span className="text-lg font-black tracking-tighter uppercase font-sans">TITAN FORGE // 01</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-[11px] tracking-widest text-neutral-400">
          <a href="#systems" className="hover:text-[#f25c05] transition-colors uppercase">01. Systems</a>
          <a href="#extraction" className="hover:text-[#f25c05] transition-colors uppercase">02. Extraction</a>
          <a href="#telemetry" className="hover:text-[#f25c05] transition-colors uppercase">03. Telemetry</a>
          <a href="#archives" className="hover:text-[#f25c05] transition-colors uppercase">04. Archives</a>
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href="#deploy" 
            className="hidden sm:inline-flex items-center space-x-1 bg-[#f25c05] text-black px-4 py-2 text-xs font-black tracking-wider uppercase hover:bg-white transition-colors"
          >
            <span>Deploy Grid</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-[#f25c05]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-800 p-4 space-y-3 text-xs">
          <a href="#systems" className="block py-2 text-neutral-300 hover:text-[#f25c05]">01. SYSTEMS</a>
          <a href="#extraction" className="block py-2 text-neutral-300 hover:text-[#f25c05]">02. EXTRACTION</a>
          <a href="#telemetry" className="block py-2 text-neutral-300 hover:text-[#f25c05]">03. TELEMETRY</a>
          <a href="#archives" className="block py-2 text-neutral-300 hover:text-[#f25c05]">04. ARCHIVES</a>
        </div>
      )}
    </nav>
  );
}
