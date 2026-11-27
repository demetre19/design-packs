import React, { useState } from 'react';
import { Activity, Terminal, Shield, ArrowRight, Menu } from 'lucide-react';

export function Navbar1() {
  const [activeLink, setActiveLink] = useState('ENGINEERING');

  return (
    <header className="bg-[#0c0d0f] border-b border-[#22262f] px-6 py-4 flex items-center justify-between text-white font-mono">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-[#ffd500] rotate-45" />
        <span className="text-lg font-extrabold tracking-widest uppercase">KERSHAW // 01</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-wider">
        {['ENGINEERING', 'DYNO SPECS', 'TELEMETRY', 'TEST LOGS'].map((item) => (
          <button
            key={item}
            onClick={() => setActiveLink(item)}
            className={`transition-colors hover:text-[#ffd500] ${
              activeLink === item ? 'text-[#ffd500] underline underline-offset-8' : 'text-zinc-400'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <span className="text-[10px] text-zinc-500 hidden lg:inline">CH-04 ACTIVE</span>
        <button className="bg-[#ffd500] text-black text-xs font-black px-4 py-2 uppercase tracking-wider clip-corner hover:bg-[#ffdf33] transition-colors flex items-center gap-2">
          <span>INITIALIZE RUN</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
}
