import React from 'react';
import { ArrowRight } from 'lucide-react';

export function ContactForm2() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-[#16181d] border border-[#272a33] p-10 clip-corner-lg">
          <div className="text-center mb-8">
            <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-2">// DIRECT ACCESS</span>
            <h2 className="font-display font-extrabold text-3xl text-white">SECURE INQUIRY CHANNEL</h2>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6 font-mono-spec text-xs">
            <div>
              <label className="text-neutral-400 block mb-2">FULL LEGAL NAME</label>
              <input type="text" placeholder="ENTER NAME" className="w-full bg-[#101114] border border-[#272a33] p-3 text-white focus:border-[#ff5a1f] outline-none clip-corner" />
            </div>
            <div>
              <label className="text-neutral-400 block mb-2">SECURE EMAIL ADDRESS</label>
              <input type="email" placeholder="ENTER EMAIL" className="w-full bg-[#101114] border border-[#272a33] p-3 text-white focus:border-[#ff5a1f] outline-none clip-corner" />
            </div>
            <div>
              <label className="text-neutral-400 block mb-2">MESSAGE OR SPECIFICATION INQUIRY</label>
              <textarea rows={4} placeholder="ENTER INQUIRY DETAILS" className="w-full bg-[#101114] border border-[#272a33] p-3 text-white focus:border-[#ff5a1f] outline-none clip-corner resize-none"></textarea>
            </div>
            <button className="w-full bg-[#ff5a1f] text-black font-extrabold py-4 clip-corner hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <span>TRANSMIT SECURE MESSAGE</span>
              <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
