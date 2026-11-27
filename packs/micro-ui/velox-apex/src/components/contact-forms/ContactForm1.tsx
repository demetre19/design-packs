import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm1() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black flex flex-col md:flex-row">
      {/* Oversized vertical CONTACT word */}
      <div className="bg-black text-white px-4 py-12 font-black text-6xl md:text-8xl tracking-tighter uppercase flex items-center justify-center [writing-mode:vertical-lr] rotate-180 select-none">
        CONTACT // DISPATCH
      </div>

      <div className="flex-1 p-8 md:p-12">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// ALLOCATION REQUEST FORM</div>
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
          SECURE YOUR <span className="text-[#ff2e00]">MACHINE</span>
        </h2>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6 max-w-xl font-mono text-xs">
          <div>
            <label className="block text-neutral-500 mb-2 uppercase">// PILOT FULL NAME</label>
            <input 
              type="text" 
              placeholder="E.G. HIROSHI TANAKA" 
              className="w-full border-2 border-black p-4 bg-white text-black font-mono text-xs focus:outline-none focus:border-[#ff2e00]"
            />
          </div>

          <div>
            <label className="block text-neutral-500 mb-2 uppercase">// SECURE EMAIL</label>
            <input 
              type="email" 
              placeholder="PILOT@VELOXAPEX.SYS" 
              className="w-full border-2 border-black p-4 bg-white text-black font-mono text-xs focus:outline-none focus:border-[#ff2e00]"
            />
          </div>

          <div>
            <label className="block text-neutral-500 mb-2 uppercase">// ALLOCATION TIER</label>
            <select className="w-full border-2 border-black p-4 bg-white text-black font-mono text-xs focus:outline-none focus:border-[#ff2e00]">
              <option>TRACK PREDATOR ($48,900)</option>
              <option>ROAD SPEC ($34,500)</option>
              <option>FACTORY RACE EDITION ($72,000)</option>
            </select>
          </div>

          <button className="w-full bg-black text-white hover:bg-[#ff2e00] hover:text-black font-black py-4 uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer">
            <span>DISPATCH ALLOCATION REQUEST</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
