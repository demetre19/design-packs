import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm1() {
  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-3xl mx-auto border border-black p-8 md:p-12">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-8">
          <span>EDITORIAL INQUIRY FORM</span>
          <span>PARIS STUDIO</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight font-serif-editorial mb-6">
          CONNECT WITH THE CURATOR<span className="text-zinc-400">*</span>
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 font-bold">01. Full Name</label>
              <input type="text" placeholder="MARCUS VANE" className="w-full border border-black p-3 text-xs font-mono uppercase outline-none focus:bg-zinc-50" />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 font-bold">02. Electronic Mail</label>
              <input type="email" placeholder="MARCUS@STUDIO.COM" className="w-full border border-black p-3 text-xs font-mono uppercase outline-none focus:bg-zinc-50" />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 font-bold">03. Nature of Inquiry</label>
            <select className="w-full border border-black p-3 text-xs font-mono uppercase outline-none bg-white">
              <option>Bespoke Garment Commission</option>
              <option>Exhibition Access &amp; Salon</option>
              <option>Press &amp; Editorial Syndication</option>
              <option>General Archival Request</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 font-bold">04. Detailed Message</label>
            <textarea rows={4} placeholder="ENTER YOUR INQUIRY DETAILS..." className="w-full border border-black p-3 text-xs font-mono uppercase outline-none focus:bg-zinc-50"></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white py-4 text-xs uppercase tracking-widest font-mono hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 font-bold">
            Transmit Inquiry <ArrowUpRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
