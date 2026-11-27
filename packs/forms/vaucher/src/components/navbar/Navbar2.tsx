import React from 'react';
import { Sliders, ShieldCheck } from 'lucide-react';

export function Navbar2() {
  return (
    <header className="w-full bg-[#f4f4f2] border-b border-[#d0d0cc] relative">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Sliders className="w-4 h-4 text-[#2e5e8e]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] font-medium text-[#232a30]">
            Vaucher <span className="text-[#2e5e8e]">·</span> Cal. 240
          </span>
        </div>

        <nav className="hidden lg:flex items-center space-x-10">
          {['Collection', 'Manufacture', 'Poinçon', 'Service', 'Journal'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.25em] text-[#232a30]/80 hover:text-[#2e5e8e] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 bg-[#1c2128]/5 border border-[#d0d0cc]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2e5e8e]" />
            <span className="font-mono text-[10px] tracking-widest text-[#232a30]">CERTIFIED</span>
          </div>
          <button className="bg-[#1c2128] text-white text-[11px] font-mono tracking-[0.2em] px-4 py-2 hover:bg-[#2e5e8e] transition-colors">
            APPOINTMENT
          </button>
        </div>
      </div>

      {/* Tick-mark ruler bottom edge */}
      <div className="w-full h-1.5 bg-[#d0d0cc] flex justify-between px-2 overflow-hidden opacity-70">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className={`w-[1px] ${i % 5 === 0 ? 'h-1.5 bg-[#232a30]' : 'h-1 bg-[#232a30]/40'}`}
          />
        ))}
      </div>
    </header>
  );
}
