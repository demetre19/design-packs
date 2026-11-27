import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer4() {
  return (
    <footer className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 pb-12 border-b-3 border-[#111111]">
          <h2 className="font-grotesk font-black text-6xl sm:text-8xl uppercase tracking-tighter leading-none text-center">
            RISO & REVOLT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs">
          <div className="space-y-2">
            <div className="font-bold text-[#ff6b5e]">// BERLIN LAB</div>
            <div>Köpenicker Str. 12, 10997 Berlin</div>
            <div>berlin@risorevolt.studio</div>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-[#ffd92e] bg-[#111111] inline-block px-1">// TOKYO LAB</div>
            <div>Jingumae 5-chome, Shibuya-ku</div>
            <div>tokyo@risorevolt.studio</div>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-[#ff6b5e]">// DIRECT INQUIRIES</div>
            <div>Status: Q2 2026 Slots Open</div>
            <div>Phone: +49 (0) 30 555 019</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
