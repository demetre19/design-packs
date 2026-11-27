import React, { useState } from 'react';
import { Menu, X, ArrowRight, Zap, Globe } from 'lucide-react';

export default function Navbar1() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-[#fffdf5] border-b-3 border-[#111111] py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo in black chip */}
        <div className="flex items-center gap-3">
          <div className="bg-[#111111] text-[#fffdf5] font-grotesk font-black text-xl px-3 py-1.5 shadow-hard-sm">
            R&R 01
          </div>
          <span className="font-mono text-xs uppercase tracking-widest hidden sm:inline-block">
            // RISO STUDIO
          </span>
        </div>

        {/* Mono Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider uppercase font-bold">
          <a href="#work" className="hover:text-[#ff6b5e] transition-colors">01. WORK</a>
          <a href="#services" className="hover:text-[#ff6b5e] transition-colors">02. SERVICES</a>
          <a href="#studio" className="hover:text-[#ff6b5e] transition-colors">03. STUDIO</a>
          <a href="#manifesto" className="hover:text-[#ff6b5e] transition-colors">04. MANIFESTO</a>
        </nav>

        {/* Acid CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="btn-brutal bg-[#ffd92e] text-[#111111] font-grotesk font-extrabold text-sm px-5 py-2.5 flex items-center gap-2">
            <span>GET IN TOUCH</span>
            <ArrowRight size={16} strokeWidth={3} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 bg-[#ffd92e] border-2 border-[#111111] shadow-hard-sm"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 pt-4 border-t-2 border-[#111111] flex flex-col gap-3 font-mono text-sm font-bold">
          <a href="#work" className="p-2 bg-[#fff] border-2 border-[#111111]">01. WORK</a>
          <a href="#services" className="p-2 bg-[#fff] border-2 border-[#111111]">02. SERVICES</a>
          <a href="#studio" className="p-2 bg-[#fff] border-2 border-[#111111]">03. STUDIO</a>
          <a href="#manifesto" className="p-2 bg-[#fff] border-2 border-[#111111]">04. MANIFESTO</a>
          <button className="w-full bg-[#ffd92e] border-2 border-[#111111] p-3 font-grotesk font-black shadow-hard-sm mt-2">
            GET IN TOUCH ⚡
          </button>
        </div>
      )}
    </header>
  );
}
