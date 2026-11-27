import React, { useState } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export function ContactForm2() {
  const [sent, setSent] = useState(false);

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-4xl mx-auto border-2 border-[#111] bg-white p-8 md:p-12 relative">
        <span className="absolute -top-2 -left-2 font-bold">+</span>
        <span className="absolute -top-2 -right-2 font-bold">+</span>
        <span className="absolute -bottom-2 -left-2 font-bold">+</span>
        <span className="absolute -bottom-2 -right-2 font-bold">+</span>

        <div className="text-center mb-8">
          <div className="inline-block bg-[#111] text-[#e8e8e6] text-[9px] px-3 py-1 uppercase tracking-widest mb-3">
            FORM REF: CF-02 // DIRECT INQUIRY
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">
            ENGINEERING DESK TRANSMISSION
          </h2>
          <p className="text-[10px] text-[#666] uppercase mt-2">All fields are encrypted and routed directly to Stuttgart engineering.</p>
        </div>

        {sent ? (
          <div className="p-6 bg-[#f4f4f0] border border-[#111] text-center space-y-3">
            <span className="font-bold text-xs uppercase">[TRANSMISSION RECEIVED]</span>
            <p className="text-[10px] text-[#555]">Your inquiry has been logged in the secure register.</p>
            <button onClick={() => setSent(false)} className="px-4 py-2 bg-[#111] text-[#e8e8e6] text-[9px] uppercase font-bold cursor-pointer">
              NEW MESSAGE
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 text-[10px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#666] mb-1 font-bold">NAME / CALLSIGN</label>
                <input type="text" required placeholder="E.G. PILOT 01" className="w-full p-3 border border-[#111] bg-[#fcfcfc] uppercase focus:outline-none" />
              </div>
              <div>
                <label className="block text-[#666] mb-1 font-bold">SECURE CONTACT</label>
                <input type="text" required placeholder="EMAIL OR PHONE" className="w-full p-3 border border-[#111] bg-[#fcfcfc] uppercase focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-[#666] mb-1 font-bold">INQUIRY SUBJECT</label>
              <input type="text" required placeholder="CHASSIS SPECIFICATION / PARTS" className="w-full p-3 border border-[#111] bg-[#fcfcfc] uppercase focus:outline-none" />
            </div>
            <div>
              <label className="block text-[#666] mb-1 font-bold">MESSAGE DOSSIER</label>
              <textarea rows={4} required placeholder="ENTER TECHNICAL DETAILS..." className="w-full p-3 border border-[#111] bg-[#fcfcfc] uppercase focus:outline-none" />
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-[#111] text-[#e8e8e6] font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-[#333] transition-colors cursor-pointer"
            >
              <span>TRANSMIT INQUIRY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
