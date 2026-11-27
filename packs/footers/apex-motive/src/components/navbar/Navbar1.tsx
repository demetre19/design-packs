import React from 'react';
import { Zap, ArrowRight, Shield } from 'lucide-react';

export function Navbar1() {
  return (
    <header className="w-full bg-[#101114]/90 backdrop-blur-md border-b border-[#272a33] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Wordmark */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#ff5a1f] clip-corner flex items-center justify-center font-bold text-black text-xl">
            A
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tighter text-white block">APEX MOTIVE</span>
            <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">SYSTEM // 01</span>
          </div>
        </div>

        {/* Condensed Links */}
        <nav className="hidden md:flex items-center gap-8 font-display text-xs tracking-wider text-neutral-300">
          <a href="#models" className="hover:text-[#ff5a1f] transition-colors flex items-center gap-1">
            <span className="text-[#ff5a1f]">/</span> MODELS
          </a>
          <a href="#performance" className="hover:text-[#ff5a1f] transition-colors flex items-center gap-1">
            <span className="text-[#ff5a1f]">/</span> SPECS
          </a>
          <a href="#telemetry" className="hover:text-[#ff5a1f] transition-colors flex items-center gap-1">
            <span className="text-[#ff5a1f]">/</span> TELEMETRY
          </a>
          <a href="#heritage" className="hover:text-[#ff5a1f] transition-colors flex items-center gap-1">
            <span className="text-[#ff5a1f]">/</span> HERITAGE
          </a>
        </nav>

        {/* Orange CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block font-mono-spec text-xs text-neutral-400">
            LAT: <span className="text-white">37.7749° N</span>
          </div>
          <button className="bg-[#ff5a1f] text-black font-extrabold text-xs px-6 py-3 clip-corner hover:bg-white transition-colors flex items-center gap-2 cursor-pointer">
            <span>CONFIGURATOR</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}
