import React from 'react';

export function Hero3() {
  return (
    <section className="w-full bg-[#0b0d10] py-24 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <span className="text-[10px] font-mono tracking-[0.4em] text-[#d4b06a] uppercase mb-6">EDITORIAL MASTERPIECE</span>
        
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#ece8e1] text-center tracking-wider mb-8 leading-none">
          The Art of Silence
        </h1>

        <div className="w-24 h-[1px] bg-[#d4b06a] mb-8" />

        <p className="font-serif italic text-xl text-[#7a8494] text-center max-w-2xl mb-12">
          "True luxury speaks in whispers perceptible only to those who understand the relentless pursuit of perfection."
        </p>

        <div className="flex items-center gap-6 text-xs font-mono text-[#ece8e1]">
          <span>◆ GENEVA</span>
          <span>◆ LONDON</span>
          <span>◆ TOKYO</span>
          <span>◆ ZURICH</span>
        </div>
      </div>
    </section>
  );
}
