import React from 'react';
import { Send, FileText } from 'lucide-react';

export function ContactForm3() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-2xl mx-auto border border-neutral-800 bg-neutral-950 p-8 sm:p-12 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Contact 03 // Wide-Tracked Labels</span>
          <h2 className="text-3xl font-bold tracking-tight text-white">Foundry Desk Support</h2>
        </div>

        <div className="space-y-6 font-mono text-xs">
          <div className="space-y-2">
            <label className="text-neutral-400 block tracking-widest uppercase text-[10px]">Your Professional Designation</label>
            <input type="text" placeholder="e.g. Creative Director" className="w-full bg-black border border-neutral-800 p-3 text-white placeholder-neutral-400 focus:outline-none focus:border-white" />
          </div>
          <div className="space-y-2">
            <label className="text-neutral-400 block tracking-widest uppercase text-[10px]">Electronic Mail</label>
            <input type="email" placeholder="name@domain.ch" className="w-full bg-black border border-neutral-800 p-3 text-white placeholder-neutral-400 focus:outline-none focus:border-white" />
          </div>
          <div className="space-y-2">
            <label className="text-neutral-400 block tracking-widest uppercase text-[10px]">Inquiry Details</label>
            <textarea rows={4} placeholder="Specify questions regarding OpenType features or licensing terms..." className="w-full bg-black border border-neutral-800 p-3 text-white placeholder-neutral-400 focus:outline-none focus:border-white"></textarea>
          </div>
          <button className="w-full bg-white text-black py-3 uppercase tracking-widest hover:bg-neutral-200">
            Dispatch Inquiry
          </button>
        </div>
      </div>
    </section>
  );
}
