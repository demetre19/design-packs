import React from 'react';
import { Send, FileText } from 'lucide-react';

export function ContactForm1() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto border border-neutral-800 bg-neutral-950 p-8 sm:p-12 space-y-8">
        <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
          <div className="flex items-center space-x-3">
            <FileText className="w-4 h-4 text-neutral-400" />
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Specimen Order Slip // License Inquiry</span>
          </div>
          <span className="text-xs font-mono text-white">FORM-03</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-light tracking-tight text-white">Custom Foundry Licensing</h2>
          <p className="text-xs font-light text-neutral-400">Request custom weight cuts, broadcasting extensions, or enterprise server licenses.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
          <div className="space-y-2">
            <label className="text-neutral-400 block uppercase">Requester Name</label>
            <input type="text" placeholder="e.g. Elena Voss" className="w-full bg-black border border-neutral-800 p-3 text-white placeholder-neutral-400 focus:outline-none focus:border-white" />
          </div>
          <div className="space-y-2">
            <label className="text-neutral-400 block uppercase">Professional Email</label>
            <input type="email" placeholder="e.g. elena@atelier.ch" className="w-full bg-black border border-neutral-800 p-3 text-white placeholder-neutral-400 focus:outline-none focus:border-white" />
          </div>
        </div>

        <div className="space-y-2 font-mono text-xs">
          <label className="text-neutral-400 block uppercase">Select License Class</label>
          <select className="w-full bg-black border border-neutral-800 p-3 text-white focus:outline-none focus:border-white">
            <option>Studio Pro (Up to 10 Workstations - $180)</option>
            <option>Enterprise Worldwide Master ($540)</option>
            <option>Broadcast & Streaming Extension</option>
          </select>
        </div>

        <div className="space-y-2 font-mono text-xs">
          <label className="text-neutral-400 block uppercase">Project Scope & Specifications</label>
          <textarea rows={4} placeholder="Describe your publishing requirements, platforms, and expected impression volume..." className="w-full bg-black border border-neutral-800 p-3 text-white placeholder-neutral-400 focus:outline-none focus:border-white"></textarea>
        </div>

        <button className="w-full bg-white text-black py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2">
          <span>Submit Specimen Inquiry</span>
          <Send className="w-3 h-3" />
        </button>
      </div>
    </section>
  );
}
