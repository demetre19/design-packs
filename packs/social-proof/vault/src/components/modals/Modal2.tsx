import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export function Modal2() {
  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-2xl mx-auto bg-black text-white border border-zinc-700 p-8 shadow-2xl relative">
        <button className="absolute top-4 right-4 p-1 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition-colors">
          <X className="w-4 h-4 text-white" />
        </button>
        <span className="text-[9px] uppercase tracking-widest font-mono text-zinc-400 block mb-2">SUBSCRIPTION MODAL // 02</span>
        <h3 className="text-4xl font-black uppercase tracking-tight font-serif-editorial mb-4">
          JOIN THE VAULT<span className="text-zinc-500">*</span>
        </h3>
        <p className="text-xs font-mono text-zinc-300 leading-relaxed mb-6">
          Receive our quarterly monograph editions, private salon invitations, and unreleased studio dispatches.
        </p>
        <div className="flex border border-zinc-700 mb-6">
          <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" className="p-3 text-xs font-mono w-full outline-none bg-zinc-900 text-white" />
          <button className="bg-white text-black px-6 text-xs font-mono uppercase hover:bg-zinc-200 transition-colors flex items-center gap-1 font-bold">
            Join <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <span className="text-[10px] font-mono uppercase text-zinc-500 block">No spam. Absolute confidentiality.</span>
      </div>
    </section>
  );
}
