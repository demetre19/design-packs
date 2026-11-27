import React from 'react';
import { Send, FileText } from 'lucide-react';

export function ContactForm2() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Contact 02 // Split Weight Cascade</span>
          <div className="space-y-1">
            <h1 className="text-5xl font-extralight tracking-tighter text-white">INQUIRY</h1>
            <h1 className="text-5xl font-normal tracking-tighter text-neutral-300">INQUIRY</h1>
            <h1 className="text-5xl font-black tracking-tighter text-neutral-600">INQUIRY</h1>
          </div>
          <p className="text-neutral-400 text-sm font-light leading-relaxed">
            Our Zurich foundry desk is available for custom typeface commissions, corporate licensing, and typographic consultation.
          </p>
        </div>

        <div className="lg:col-span-7 border border-neutral-800 bg-neutral-950 p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
            <div className="space-y-2">
              <label className="text-neutral-400 block">NAME</label>
              <input type="text" placeholder="Full Name" className="w-full bg-black border border-neutral-800 p-3 text-white placeholder-neutral-400 focus:outline-none focus:border-white" />
            </div>
            <div className="space-y-2">
              <label className="text-neutral-400 block">EMAIL</label>
              <input type="email" placeholder="Email Address" className="w-full bg-black border border-neutral-800 p-3 text-white placeholder-neutral-400 focus:outline-none focus:border-white" />
            </div>
          </div>
          <div className="space-y-2 font-mono text-xs">
            <label className="text-neutral-400 block">MESSAGE</label>
            <textarea rows={4} placeholder="Your inquiry..." className="w-full bg-black border border-neutral-800 p-3 text-white placeholder-neutral-400 focus:outline-none focus:border-white"></textarea>
          </div>
          <button className="w-full bg-white text-black py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-200">
            Send Message to Foundry
          </button>
        </div>
      </div>
    </section>
  );
}
