import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Footer3() {
  return (
    <footer className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Newsletter signup strip */}
        <div className="bg-[#ffd92e] border-3 border-[#111111] shadow-hard-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs font-bold mb-1">// WEEKLY DISPATCH</div>
            <h3 className="font-grotesk font-black text-2xl uppercase">JOIN 14,000+ DESIGNERS & BUILDERS.</h3>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL..." 
              className="bg-white border-2 border-[#111111] px-4 py-3 font-mono text-xs w-full md:w-72 focus:outline-none shadow-hard-sm"
            />
            <button className="btn-brutal bg-[#111111] text-[#ffd92e] font-grotesk font-black text-xs px-6 py-3 whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between font-mono text-xs pt-8 border-t-2 border-[#111111]">
          <div>RISO & REVOLT STUDIO // BERLIN & TOKYO</div>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#work" className="hover:underline">WORKS</a>
            <a href="#manifesto" className="hover:underline">MANIFESTO</a>
            <a href="#contact" className="hover:underline">CONTACT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
