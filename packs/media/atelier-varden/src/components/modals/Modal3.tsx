import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export function Modal3() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="w-full bg-[#fafaf8] py-16 border-b border-[#e2e0d8] text-center font-sans">
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#b5482e] text-[#fafaf8] px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-[#9a3c25]"
        >
          Open Slide-Over Panel
        </button>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#fafaf8] py-16 border-b border-[#e2e0d8] font-sans flex justify-center px-6">
      <div className="w-full max-w-xl bg-[#f0efeb] border border-[#e2e0d8] p-8 space-y-6 relative">
        <div className="flex justify-between items-center pb-4 border-b border-[#e2e0d8]">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">SLIDE-OVER REGISTER</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-stone-500 hover:text-[#16171a]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 font-mono text-xs">
          <div className="p-4 bg-[#fafaf8] border border-[#e2e0d8] flex justify-between items-center">
            <span>01. Villa Varden Nord</span>
            <span className="text-[#b5482e]">380 M²</span>
          </div>
          <div className="p-4 bg-[#fafaf8] border border-[#e2e0d8] flex justify-between items-center">
            <span>02. Engadin Stone Pavilion</span>
            <span className="text-[#b5482e]">240 M²</span>
          </div>
          <div className="p-4 bg-[#fafaf8] border border-[#e2e0d8] flex justify-between items-center">
            <span>03. Kamakura Horizon House</span>
            <span className="text-[#b5482e]">410 M²</span>
          </div>
        </div>

        <div className="pt-4 border-t border-[#e2e0d8] flex justify-between items-center">
          <span className="text-xs font-mono text-stone-500">3 SELECT PROJECTS LOADED</span>
          <button 
            onClick={() => setIsOpen(false)} 
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#b5482e]"
          >
            <span>Close Panel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
