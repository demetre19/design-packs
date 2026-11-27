import React from 'react';

export function Navbar3() {
  return (
    <div className="w-full bg-[#fafaf8] border-b border-[#e2e0d8] font-sans">
      <div className="py-6 text-center border-b border-[#e2e0d8]">
        <div className="inline-flex items-center space-x-2 mb-2">
          <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">Architecture & Materiality</span>
        </div>
        <h1 className="text-2xl font-medium tracking-tight text-[#16171a]">ATELIER VARDEN</h1>
      </div>
      <div className="py-3 px-6 flex justify-center items-center space-x-12 text-xs font-mono tracking-widest uppercase text-[#16171a]">
        <a href="#projects" className="hover:text-[#b5482e] transition-colors">Projects</a>
        <span className="text-stone-300">/</span>
        <a href="#philosophy" className="hover:text-[#b5482e] transition-colors">Philosophy</a>
        <span className="text-stone-300">/</span>
        <a href="#research" className="hover:text-[#b5482e] transition-colors">Research</a>
        <span className="text-stone-300">/</span>
        <a href="#studio" className="hover:text-[#b5482e] transition-colors">Studio</a>
        <span className="text-stone-300">/</span>
        <a href="#contact" className="hover:text-[#b5482e] transition-colors">Contact</a>
      </div>
    </div>
  );
}
