import React from 'react';
import { Menu, Search, ArrowUpRight, Terminal } from 'lucide-react';

export function Navbar1() {
  return (
    <header className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none">
      <div className="grid grid-cols-12 divide-x divide-[#111111] text-[10px] uppercase tracking-widest">
        {/* Logo Cell */}
        <div className="col-span-3 p-3 flex items-center justify-between bg-[#111111] text-[#e8e8e6]">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4" />
            <span className="font-black tracking-tighter text-xs">KRAFTWERK // 01</span>
          </div>
          <span className="text-[8px] bg-[#e8e8e6] text-[#111111] px-1 py-0.5">REF: NB-01</span>
        </div>

        {/* Links Cells */}
        <div className="col-span-6 hidden md:flex items-center divide-x divide-[#111111]">
          <a href="#spec" className="flex-1 px-4 py-3 hover:bg-[#d8d8d4] text-center transition-colors">
            [01. SPECIFICATION]
          </a>
          <a href="#chassis" className="flex-1 px-4 py-3 hover:bg-[#d8d8d4] text-center transition-colors">
            [02. CHASSIS]
          </a>
          <a href="#homologation" className="flex-1 px-4 py-3 hover:bg-[#d8d8d4] text-center transition-colors">
            [03. HOMOLOGATION]
          </a>
        </div>

        {/* CTA Cell */}
        <div className="col-span-9 md:col-span-3 flex items-stretch">
          <button 
            onClick={() => alert('Accessing secure telemetry feed...')}
            className="flex-1 px-4 py-3 flex items-center justify-between hover:bg-[#111111] hover:text-[#e8e8e6] transition-colors cursor-pointer group"
          >
            <span className="font-bold">REQUEST DOSSIER</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
}
