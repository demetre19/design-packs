import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm3() {
  return (
    <section className="w-full bg-black text-white py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// NEWSLETTER STRIP</div>
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
          SUBSCRIBE TO <span className="text-[#ff2e00]">TELEMETRY FLASH</span>
        </h2>

        {/* Newsletter strip with giant input target */}
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row gap-4 mb-4">
          <input 
            type="email" 
            placeholder="ENTER SECURE EMAIL..." 
            className="flex-1 border-2 border-neutral-700 p-5 bg-neutral-900 text-white font-mono text-sm focus:outline-none focus:border-[#ff2e00]"
          />
          <button className="bg-[#ff2e00] text-black font-black px-8 py-5 uppercase text-xs tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer">
            <span>SUBSCRIBE</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </form>

        {/* Tiny legal mono */}
        <p className="font-mono text-[10px] text-neutral-500 uppercase">
          [LEGAL: BY SUBSCRIBING YOU AGREE TO RECEIVE ENCRYPTED TRACK DISPATCHES AND ALLOCATION DROPS. NO SPAM.]
        </p>
      </div>
    </section>
  );
}
