import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar2() {
  return (
    <header className="w-full bg-[#fffdf5] border-b-3 border-[#111111]">
      {/* Marquee Ticker Strip Above */}
      <div className="bg-[#ffd92e] border-b-2 border-[#111111] overflow-hidden py-1.5 whitespace-nowrap">
        <div className="animate-marquee inline-flex gap-8 font-mono text-xs font-black uppercase tracking-widest text-[#111111]">
          <span>⚡ NEW PRINT DROP #09 AVAILABLE NOW</span>
          <span>•</span>
          <span>BERLIN & TOKYO DESIGN LAB</span>
          <span>•</span>
          <span>ENGINEERED JOY SINCE 2021</span>
          <span>•</span>
          <span>⚡ NEW PRINT DROP #09 AVAILABLE NOW</span>
          <span>•</span>
          <span>BERLIN & TOKYO DESIGN LAB</span>
        </div>
      </div>

      {/* Split Header */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#ff6b5e] border-2 border-[#111111] shadow-hard-sm flex items-center justify-center font-grotesk font-black text-lg text-[#fffdf5]">
            R
          </div>
          <div>
            <h1 className="font-grotesk font-black text-lg tracking-tight leading-none">RISO & REVOLT</h1>
            <p className="font-mono text-[10px] text-[#111111]/70 tracking-widest mt-0.5">EST. 2021 // EDITION LAB</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 font-mono text-xs font-bold uppercase">
          <a href="#editions" className="hover:bg-[#111111] hover:text-[#fffdf5] px-3 py-1.5 border border-transparent hover:border-[#111111] transition-all">Editions</a>
          <a href="#archive" className="hover:bg-[#111111] hover:text-[#fffdf5] px-3 py-1.5 border border-transparent hover:border-[#111111] transition-all">Archive</a>
          <a href="#about" className="hover:bg-[#111111] hover:text-[#fffdf5] px-3 py-1.5 border border-transparent hover:border-[#111111] transition-all">About</a>
          <a href="#contact" className="hover:bg-[#111111] hover:text-[#fffdf5] px-3 py-1.5 border border-transparent hover:border-[#111111] transition-all">Contact</a>
        </div>

        <button className="btn-brutal bg-[#ff6b5e] text-[#fffdf5] font-grotesk font-black text-xs px-4 py-2 flex items-center gap-2">
          <span>BOOK AUDIT</span>
          <ArrowRight size={14} strokeWidth={3} />
        </button>
      </div>
    </header>
  );
}
