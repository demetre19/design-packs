import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm2() {
  return (
    <section className="w-full border-b border-black grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-black text-white p-12 lg:p-20 flex flex-col justify-between">
        <div>
          <span className="text-[9px] uppercase tracking-widest font-mono text-zinc-400 block mb-4">SPLIT INQUIRY // 02</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight font-serif-editorial mb-6">
            DIRECT<br />DESK<span className="text-zinc-500">*</span>
          </h2>
          <p className="text-xs font-mono text-zinc-300 leading-relaxed max-w-md">
            For private commissions, editorial syndication, and museum acquisitions. Our curators respond within 24 hours.
          </p>
        </div>
        <div className="mt-12 text-xs font-mono text-zinc-400">
          <p>PARIS: +33 1 42 68 55 00</p>
          <p>TOKYO: +81 3 5410 8800</p>
        </div>
      </div>
      <div className="bg-white p-8 lg:p-16 flex items-center justify-center">
        <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md space-y-6">
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 font-bold">Your Name</label>
            <input type="text" placeholder="FULL NAME" className="w-full border border-black p-3 text-xs font-mono uppercase outline-none focus:bg-zinc-50" />
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 font-bold">Email Address</label>
            <input type="email" placeholder="EMAIL@DOMAIN.COM" className="w-full border border-black p-3 text-xs font-mono uppercase outline-none focus:bg-zinc-50" />
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 font-bold">Message</label>
            <textarea rows={3} placeholder="TYPE YOUR MESSAGE..." className="w-full border border-black p-3 text-xs font-mono uppercase outline-none focus:bg-zinc-50"></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white py-3 text-xs uppercase tracking-widest font-mono hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 font-bold">
            Send Message <ArrowUpRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
