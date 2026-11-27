import React from 'react';
import { ArrowUpRight, Disc } from 'lucide-react';

export function Footer4() {
  return (
    <footer className="w-full bg-black text-white border-t border-neutral-800 py-16 px-6">
      <div className="max-w-4xl mx-auto border border-neutral-800 bg-neutral-950 p-8 sm:p-12 space-y-8">
        <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Specimen Order Slip // Newsletter</span>
          <span className="text-xs font-mono text-white">FORM NO. 88-N</span>
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-light tracking-tight text-white">Subscribe to Type Dispatches</h3>
          <p className="text-xs font-light text-neutral-400">Receive early notices on new foundry cuts, optical revisions, and academic type essays.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Enter your professional email..." 
            className="flex-1 bg-black border border-neutral-800 px-4 py-3 text-xs font-mono text-white placeholder-neutral-400 focus:outline-none focus:border-white"
          />
          <button className="bg-white text-black px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-200 transition-colors">
            Register for Dispatches
          </button>
        </div>
        <div className="text-[10px] font-mono text-neutral-400 pt-2 flex justify-between">
          <span>NO SPAM. STRICTLY EDITORIAL & TYPE SPECIMENS.</span>
          <span>UNSUBSCRIBE ANYTIME</span>
        </div>
      </div>
    </footer>
  );
}
