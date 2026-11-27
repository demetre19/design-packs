import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function ContactForm3() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#ffd92e] border-3 border-[#111111] shadow-hard-xl p-8 sm:p-12">
          <div className="flex items-center gap-2 font-mono text-xs font-black mb-3">
            <Zap size={16} fill="#111111" />
            <span>NEWSLETTER ARCHIVE</span>
          </div>
          <h2 className="font-grotesk font-black text-4xl sm:text-5xl uppercase mb-4 tracking-tight">
            SUBSCRIBE TO THE RISO DISPATCH.
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#111111]/80 mb-8 max-w-xl">
            Get monthly deep dives into risograph color separations, brutalist web engineering, and limited edition art drops.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL ADDRESS..." 
              className="bg-white border-3 border-[#111111] px-4 py-3.5 font-mono text-xs w-full focus:outline-none shadow-hard-sm"
            />
            <button className="btn-brutal bg-[#111111] text-[#ffd92e] font-grotesk font-black text-xs px-8 py-3.5 whitespace-nowrap">
              SUBSCRIBE ⚡
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
