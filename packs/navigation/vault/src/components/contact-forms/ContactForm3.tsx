import React from 'react';

export function ContactForm3() {
  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-6 mb-8 border-b border-black pb-4">
          <span className="text-6xl font-black font-serif-editorial text-zinc-400">03</span>
          <div>
            <span className="text-[9px] uppercase tracking-widest font-mono text-zinc-500 block">MINIMAL FORM</span>
            <h2 className="text-3xl font-black uppercase tracking-tight">ARCHIVAL INQUIRY</h2>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 font-bold">Name / Institution</label>
            <input type="text" placeholder="NAME OR INSTITUTION" className="w-full border border-black p-3 text-xs font-mono uppercase outline-none" />
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 font-bold">Email</label>
            <input type="email" placeholder="EMAIL ADDRESS" className="w-full border border-black p-3 text-xs font-mono uppercase outline-none" />
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest mb-2 font-bold">Request</label>
            <textarea rows={4} placeholder="YOUR REQUEST..." className="w-full border border-black p-3 text-xs font-mono uppercase outline-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white py-3 text-xs uppercase tracking-widest font-mono hover:bg-zinc-800 transition-colors font-bold">
            Submit Request*
          </button>
        </form>
      </div>
    </section>
  );
}
