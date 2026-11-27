import React from 'react';
import { Layers, Terminal } from 'lucide-react';

export function Navbar3() {
  return (
    <header className="w-full bg-[#f5f4f0] border-b-2 border-black font-mono select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* Heavy logo block left */}
        <div className="bg-black text-white px-6 py-4 flex items-center justify-between md:w-1/3 border-b md:border-b-0 md:border-r-2 border-black">
          <div className="flex items-center space-x-3">
            <Layers className="w-6 h-6 text-[#f25c05]" />
            <span className="font-sans font-black text-lg tracking-tighter uppercase">TITAN // 03</span>
          </div>
          <span className="text-[10px] bg-[#f25c05] text-black px-1.5 py-0.5 font-bold">SEC-09</span>
        </div>

        {/* Thin links right */}
        <div className="flex-1 bg-[#f5f4f0] px-6 flex items-center justify-between py-3 md:py-0 text-xs">
          <div className="hidden sm:flex items-center space-x-6 text-neutral-700">
            <a href="#node1" className="hover:text-[#f25c05] font-bold uppercase transition-colors">/EXCAVATION</a>
            <a href="#node2" className="hover:text-[#f25c05] font-bold uppercase transition-colors">/SMELTING</a>
            <a href="#node3" className="hover:text-[#f25c05] font-bold uppercase transition-colors">/GRID-OPS</a>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[10px] text-neutral-500 hidden xl:inline">LAT: 34.0522° N</span>
            <button className="border-2 border-black px-3 py-1.5 hover:bg-black hover:text-white transition-colors font-bold uppercase flex items-center space-x-1">
              <Terminal className="w-3.5 h-3.5 text-[#f25c05]" />
              <span>Connect</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
