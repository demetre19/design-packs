import React from 'react';
import { ArrowUpRight, Disc } from 'lucide-react';

export function Footer3() {
  return (
    <footer className="w-full bg-black text-white border-t border-neutral-800 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-black tracking-tighter">GRAVITAS</span>
          <span className="text-neutral-700">/</span>
          <span className="text-xs font-mono text-neutral-400">SPECIMEN SYSTEM 44</span>
        </div>
        <div className="flex items-center space-x-6 text-xs font-mono text-neutral-400">
          <a href="#privacy" className="hover:text-white">Privacy EULA</a>
          <a href="#terms" className="hover:text-white">Licensing Terms</a>
          <a href="#contact" className="hover:text-white">Foundry Desk</a>
        </div>
        <div className="text-[10px] font-mono text-neutral-400">
          Ω Ψ Æ Œ
        </div>
      </div>
    </footer>
  );
}
