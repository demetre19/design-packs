import React from 'react';
import { Layers, Search } from 'lucide-react';

export default function Navbar3() {
  return (
    <header className="w-full bg-[#fffdf5] border-b-3 border-[#111111]">
      {/* Stacked big wordmark over bordered link row */}
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-3 text-center border-b-2 border-[#111111]">
        <div className="inline-block bg-[#ffd92e] border-2 border-[#111111] px-3 py-1 font-mono text-xs font-bold uppercase mb-2 shadow-hard-sm">
          ✳ NEO-BRUTALIST DIGITAL FORGE
        </div>
        <h2 className="font-grotesk font-black text-4xl sm:text-5xl uppercase tracking-tighter">
          RISO & REVOLT STUDIO
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold">
          <span className="w-3 h-3 bg-[#ff6b5e] border border-[#111111] inline-block"></span>
          <span>LOCATION: BERLIN / TOKYO</span>
          <span className="text-[#111111]/40">|</span>
          <span>STATUS: OPEN FOR Q2</span>
        </div>

        <nav className="flex items-center gap-2 font-mono text-xs font-bold uppercase">
          <a href="#projects" className="px-3 py-1 bg-[#fff] border-2 border-[#111111] shadow-hard-sm hover:translate-y-0.5 transition-transform">Projects</a>
          <a href="#lab" className="px-3 py-1 bg-[#fff] border-2 border-[#111111] shadow-hard-sm hover:translate-y-0.5 transition-transform">Lab</a>
          <a href="#shop" className="px-3 py-1 bg-[#ffd92e] border-2 border-[#111111] shadow-hard-sm hover:translate-y-0.5 transition-transform">Shop</a>
          <a href="#contact" className="px-3 py-1 bg-[#ff6b5e] text-white border-2 border-[#111111] shadow-hard-sm hover:translate-y-0.5 transition-transform">Contact</a>
        </nav>
      </div>
    </header>
  );
}
