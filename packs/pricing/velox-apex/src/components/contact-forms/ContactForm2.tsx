import React from 'react';
import { ArrowRight } from 'lucide-react';

export function ContactForm2() {
  return (
    <section className="w-full bg-neutral-100 text-black py-24 border-b-2 border-black flex items-center justify-center">
      {/* Small precise form floating in large white field */}
      <div className="w-full max-w-xl mx-4 border-2 border-black bg-white p-8 md:p-12 shadow-2xl relative">
        <div className="absolute top-0 right-0 bg-[#ff2e00] text-black font-mono text-[10px] font-bold px-3 py-1 uppercase">
          SECURE GATEWAY
        </div>

        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// PRIVATE DISPATCH</div>
        <h2 className="text-3xl font-black uppercase tracking-tight mb-6">
          DIRECT TELEMETRY INQUIRY
        </h2>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-mono text-xs">
          <div>
            <label className="block text-neutral-500 mb-1 uppercase">PILOT IDENTIFIER</label>
            <input 
              type="text" 
              placeholder="CALLSIGN OR NAME" 
              className="w-full border-2 border-black p-3 bg-white focus:outline-none focus:border-[#ff2e00]"
            />
          </div>

          <div>
            <label className="block text-neutral-500 mb-1 uppercase">MESSAGE DISPATCH</label>
            <textarea 
              rows={3} 
              placeholder="ENTER SPECIFICATION QUERY..." 
              className="w-full border-2 border-black p-3 bg-white focus:outline-none focus:border-[#ff2e00]"
            />
          </div>

          <button className="w-full bg-[#ff2e00] text-black font-black py-3 uppercase text-xs tracking-wider hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer">
            <span>TRANSMIT DISPATCH</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
