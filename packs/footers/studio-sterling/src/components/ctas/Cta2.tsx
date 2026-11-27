import React from 'react';
import { Mail, Phone } from 'lucide-react';

export function Cta2() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-4xl mx-auto border border-black p-8 bg-neutral-50">
        <div className="text-center mb-8 border-b border-black pb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block mb-2">DOCUMENT CTA // 02</span>
          <h2 className="text-3xl font-black uppercase tracking-tighter">DIRECT ACCESS & INQUIRIES</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-xs uppercase tracking-wider">
          <div className="border border-black p-5 bg-white flex items-center gap-4">
            <Mail className="w-5 h-5 shrink-0" />
            <div>
              <span className="text-[10px] text-neutral-500 block">ELECTRONIC MAIL</span>
              <span className="font-bold">studio@marcussterling.com</span>
            </div>
          </div>
          <div className="border border-black p-5 bg-white flex items-center gap-4">
            <Phone className="w-5 h-5 shrink-0" />
            <div>
              <span className="text-[10px] text-neutral-500 block">TELEPHONE LINE</span>
              <span className="font-bold">+44 (0)20 7946 0912</span>
            </div>
          </div>
        </div>
        <button className="w-full bg-black text-white font-bold uppercase tracking-widest py-3 text-xs hover:bg-neutral-800 transition-colors">
          Open Commission Dossier
        </button>
      </div>
    </section>
  );
}
