import React, { useState } from 'react';
import { X, Sliders } from 'lucide-react';

export function Modal3() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono text-center">
        <button onClick={() => setIsOpen(true)} className="bg-[#ffd500] text-black font-extrabold text-xs px-6 py-3 uppercase tracking-wider">
          OPEN CONFIGURATOR PANEL
        </button>
      </section>
    );
  }

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-md mx-auto bg-[#14161a] border border-[#262c36] p-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#22262f] mb-4">
          <div className="flex items-center gap-2 text-[#ffd500]">
            <Sliders className="w-4 h-4" />
            <span className="text-xs font-extrabold uppercase">SLIDE-OVER CONFIGURATOR</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white"><X className="w-4 h-4" /></button>
        </div>
        <div className="space-y-4 text-xs text-zinc-300 mb-6 font-sans">
          <div className="flex justify-between p-3 bg-[#0c0d0f] border border-[#262c36]">
            <span>BOOST LIMIT</span>
            <span className="text-[#ffd500] font-mono font-bold">2.84 BAR</span>
          </div>
          <div className="flex justify-between p-3 bg-[#0c0d0f] border border-[#262c36]">
            <span>COOLING FLOW</span>
            <span className="text-white font-mono font-bold">120 L/MIN</span>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="w-full bg-[#ffd500] text-black font-extrabold text-xs py-3 uppercase tracking-wider hover:bg-[#ffdf33]">
          APPLY CONFIGURATION
        </button>
      </div>
    </section>
  );
}
