import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Shield, Zap } from 'lucide-react';

export function Navbar1() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white border-b border-black">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Condensed White Wordmark */}
        <div className="flex items-center gap-3">
          <span className="bg-[#ff2e00] text-black font-black px-2 py-0.5 text-xs tracking-tighter">VX-01</span>
          <span className="font-black tracking-tighter text-xl uppercase italic">VELOX // APEX</span>
        </div>

        {/* Tiny Mono Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-widest text-neutral-400">
          <a href="#machines" className="hover:text-[#ff2e00] transition-colors">// MACHINES</a>
          <a href="#telemetry" className="hover:text-[#ff2e00] transition-colors">// TELEMETRY</a>
          <a href="#engineering" className="hover:text-[#ff2e00] transition-colors">// ENGINEERING</a>
          <a href="#heritage" className="hover:text-[#ff2e00] transition-colors">// HERITAGE</a>
        </nav>

        {/* Red Accent Zone */}
        <div className="flex items-center gap-4">
          <button className="bg-[#ff2e00] text-black font-black px-4 py-2 text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-1.5 cursor-pointer">
            <span>CONFIGURATOR</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-1 hover:text-[#ff2e00]"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-neutral-800 px-4 py-6 font-mono text-xs space-y-4">
          <a href="#machines" className="block text-neutral-300 hover:text-[#ff2e00]">// MACHINES</a>
          <a href="#telemetry" className="block text-neutral-300 hover:text-[#ff2e00]">// TELEMETRY</a>
          <a href="#engineering" className="block text-neutral-300 hover:text-[#ff2e00]">// ENGINEERING</a>
          <a href="#heritage" className="block text-neutral-300 hover:text-[#ff2e00]">// HERITAGE</a>
        </div>
      )}
    </header>
  );
}
