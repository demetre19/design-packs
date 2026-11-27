import React from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';

export default function Footer1() {
  return (
    <footer className="w-full bg-[#111111] text-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="bg-[#ffd92e] text-[#111111] font-grotesk font-black text-xl px-3 py-1 inline-block mb-4 shadow-hard-sm">
            R&R STUDIO
          </div>
          <p className="font-mono text-xs sm:text-sm text-[#fffdf5]/80 max-w-md leading-relaxed">
            Unapologetic tactile risograph print editions and ultra-responsive brutalist web interfaces. Forged in Berlin & Tokyo.
          </p>
        </div>

        <div className="font-mono text-xs space-y-3">
          <div className="font-bold uppercase text-[#ffd92e] mb-4">// NAVIGATION</div>
          <div><a href="#work" className="hover:underline">01. Works</a></div>
          <div><a href="#services" className="hover:underline">02. Services</a></div>
          <div><a href="#manifesto" className="hover:underline">03. Manifesto</a></div>
          <div><a href="#contact" className="hover:underline">04. Contact</a></div>
        </div>

        <div className="font-mono text-xs space-y-3">
          <div className="font-bold uppercase text-[#ffd92e] mb-4">// LOCATIONS</div>
          <div>BERLIN: KÖPENICKER STR. 12</div>
          <div>TOKYO: SHIBUYA-KU DESIGN LAB</div>
          <div className="text-[#ffd92e] font-bold mt-2">STATUS: Q2 SLOTS OPEN</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-[#fffdf5]/20 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-[#fffdf5]/60">
        <div>© 2026 RISO & REVOLT STUDIO. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#privacy" className="hover:underline">PRIVACY PROTOCOL</a>
          <a href="#terms" className="hover:underline">TERMS OF FORGE</a>
        </div>
      </div>
    </footer>
  );
}
