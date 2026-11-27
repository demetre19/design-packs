import React from 'react';
import { Send, FileText } from 'lucide-react';

export function ContactForm3() {
  return (
    <section className="w-full bg-[#1b3a5c] text-white py-12 px-6 border-b border-white/25 font-mono">
      <div className="max-w-6xl mx-auto border border-white/30 p-6 bg-[#142d48] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="text-[10px] text-cyan-300">DRAWING SUBSCRIPTION STRIP // CF-03</span>
          <h3 className="text-lg font-bold uppercase">Subscribe to Technical Journal & DWG Updates</h3>
          <p className="text-xs text-cyan-100">Receive monthly architectural plates and structural calculation whitepapers.</p>
        </div>

        <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="ENTER EMAIL ADDRESS" className="bg-[#11263d] border border-white/30 px-4 py-2.5 text-xs text-white placeholder-white/40 focus:border-cyan-300 outline-none w-full md:w-64" />
          <button className="border border-cyan-400 bg-cyan-400 text-[#1b3a5c] px-5 py-2.5 font-bold text-xs uppercase hover:bg-white transition-colors cursor-pointer whitespace-nowrap">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}
