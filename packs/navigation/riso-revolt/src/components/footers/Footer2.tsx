import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer2() {
  return (
    <footer className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border-3 border-[#111111] shadow-hard-xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-grotesk font-black text-2xl uppercase mb-2">RISO & REVOLT</div>
            <p className="font-mono text-xs text-[#111111]/70">Engineered joy through print and code.</p>
          </div>
          <div className="font-mono text-xs space-y-2">
            <div className="font-bold text-[#ff6b5e]">// SOCIALS</div>
            <div><a href="#" className="hover:underline flex items-center gap-1">Instagram <ArrowUpRight size={12} /></a></div>
            <div><a href="#" className="hover:underline flex items-center gap-1">Twitter / X <ArrowUpRight size={12} /></a></div>
            <div><a href="#" className="hover:underline flex items-center gap-1">GitHub Lab <ArrowUpRight size={12} /></a></div>
          </div>
          <div className="font-mono text-xs space-y-2">
            <div className="font-bold text-[#ff6b5e]">// CONTACT</div>
            <div>hello@risorevolt.studio</div>
            <div>Berlin & Tokyo</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
