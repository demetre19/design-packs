import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer4() {
  return (
    <footer className="w-full bg-white text-black border-b border-black py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-[9px] uppercase tracking-widest font-mono text-zinc-500 block mb-4">NEWSLETTER FOOTER // DISPATCH</span>
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter font-serif-editorial mb-8">
          SUBSCRIBE<span className="text-zinc-400">*</span>
        </h2>
        <p className="text-xs md:text-sm font-mono text-zinc-700 max-w-md mx-auto mb-8">
          Receive private quarterly monographs and invitations to secret salon exhibits directly in your inbox.
        </p>
        <div className="max-w-md mx-auto flex border border-black mb-12">
          <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" className="p-3 text-xs font-mono w-full outline-none bg-transparent" />
          <button className="bg-black text-white px-6 text-xs font-mono uppercase hover:bg-zinc-800 transition-colors flex items-center gap-1">
            Join <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="border-t border-black pt-6 flex justify-between items-center text-[10px] font-mono uppercase text-zinc-500 max-w-4xl mx-auto">
          <span>VAULT* EDITORIAL</span>
          <span>PARIS // TOKYO // NEW YORK</span>
          <span>EST. 2024</span>
        </div>
      </div>
    </footer>
  );
}
