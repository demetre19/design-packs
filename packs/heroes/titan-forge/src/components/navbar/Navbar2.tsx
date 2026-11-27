import React from 'react';
import { Cpu, ChevronRight } from 'lucide-react';

export function Navbar2() {
  return (
    <header className="w-full bg-[#f5f4f0] text-black border-b-4 border-black select-none">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-black text-white p-2 font-mono text-xs font-black">
            TF-02
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter uppercase font-sans leading-none">TITAN FORGE</h1>
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-0.5">Heavy Infrastructure Group</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-6 text-xs font-mono uppercase">
          <a href="#hardware" className="hover:bg-black hover:text-white px-3 py-1 transition-colors">Hardware</a>
          <a href="#automation" className="hover:bg-black hover:text-white px-3 py-1 transition-colors">Automation</a>
          <a href="#diagnostics" className="hover:bg-black hover:text-white px-3 py-1 transition-colors">Diagnostics</a>
          <a href="#command" className="hover:bg-black hover:text-white px-3 py-1 transition-colors">Command</a>
        </nav>

        <div className="flex items-center space-x-3 font-mono text-xs">
          <span className="hidden sm:inline text-neutral-400 text-[10px]">STATUS: <span className="text-[#f25c05] font-bold">ONLINE</span></span>
          <button className="bg-black text-white px-4 py-2 hover:bg-[#f25c05] hover:text-black transition-colors font-bold uppercase flex items-center space-x-1">
            <span>Terminal</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </header>
  );
}
