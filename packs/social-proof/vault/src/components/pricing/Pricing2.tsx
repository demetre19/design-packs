import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Pricing2() {
  return (
    <section className="w-full border-b border-black py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-zinc-800 pb-2 mb-12 text-zinc-400">
          <span>INVERTED BLACK PANEL // PRICING</span>
          <span>RESTRICTED ACCESS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 block mb-3">ANNUAL FELLOWSHIP</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight font-serif-editorial mb-6">
              THE PERMANENT<br />COLLECTION<span className="text-zinc-500">*</span>
            </h2>
            <p className="text-xs font-mono text-zinc-300 leading-relaxed max-w-md mb-8">
              A comprehensive subscription combining all physical quarterly hardbound editions, unlimited digital archives, invitations to private exhibitions, and bespoke studio monographs.
            </p>
            <div className="text-5xl font-black font-mono mb-6">
              €380 <span className="text-xs font-normal text-zinc-400">/ annual subscription</span>
            </div>
          </div>
          <div className="border border-zinc-700 p-8 bg-zinc-900">
            <h4 className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-6 border-b border-zinc-800 pb-3">Fellowship Inclusions</h4>
            <ul className="space-y-4 text-xs font-mono mb-8">
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>01. Quarterly Hardbound Editions</span>
                <span className="text-zinc-400">Included</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>02. Full Digital Archive Access</span>
                <span className="text-zinc-400">Included</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>03. Private Exhibition Invites</span>
                <span className="text-zinc-400">Priority</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>04. Annual Art Object Monograph</span>
                <span className="text-zinc-400">Included</span>
              </li>
            </ul>
            <button className="w-full bg-white text-black py-3 text-xs uppercase tracking-widest font-mono hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 font-bold">
              Secure Fellowship <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
