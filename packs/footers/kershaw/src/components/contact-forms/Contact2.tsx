import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Contact2() {
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-2xl mx-auto bg-[#14161a] border border-[#262c36] p-8 md:p-12">
        <div className="text-center mb-8">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 02. DIRECT TRANSMISSION</span>
          <h2 className="text-3xl font-extrabold uppercase tracking-tighter mt-2">TECHNICAL INQUIRY FORM.</h2>
        </div>

        {sent ? (
          <div className="text-center py-8 text-[#ffd500] font-bold">
            TRANSMISSION CONFIRMED // LOG 07 LOGGED
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
            <div>
              <label className="block text-xs text-zinc-400 mb-2">OPERATOR NAME</label>
              <input type="text" required className="w-full bg-[#0c0d0f] border border-[#262c36] p-3 text-xs text-white focus:border-[#ffd500] outline-none" />
            </div>
            <div>
              <label className="block text-xs text-zinc-400 mb-2">SECURE FREQUENCY / EMAIL</label>
              <input type="email" required className="w-full bg-[#0c0d0f] border border-[#262c36] p-3 text-xs text-white focus:border-[#ffd500] outline-none" />
            </div>
            <div>
              <label className="block text-xs text-zinc-400 mb-2">MESSAGE / PARAMETERS</label>
              <textarea rows={4} required className="w-full bg-[#0c0d0f] border border-[#262c36] p-3 text-xs text-white focus:border-[#ffd500] outline-none resize-none" />
            </div>
            <button type="submit" className="w-full bg-[#ffd500] text-black font-extrabold text-xs py-4 uppercase tracking-widest hover:bg-[#ffdf33] transition-colors flex items-center justify-center gap-2">
              <span>DISPATCH TRANSMISSION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
