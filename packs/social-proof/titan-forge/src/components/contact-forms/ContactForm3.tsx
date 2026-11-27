import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export function ContactForm3() {
  return (
    <section className="bg-black text-white py-16 border-b-4 border-[#f25c05] font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center space-x-2 font-mono text-[10px] text-[#f25c05] uppercase tracking-widest mb-4">
          <Terminal className="w-4 h-4" />
          <span>TELEMETRY DISPATCH FEED // FORM 03</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              SUBSCRIBE TO <span className="text-[#f25c05]">TACTICAL</span> DISPATCHES.
            </h2>
            <p className="font-mono text-xs text-neutral-400 uppercase tracking-wide">
              Receive weekly updates on autonomous excavator telemetry, ISO-9001 updates, and global extraction site benchmarks.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="ENTER SECURE EMAIL ADDRESS..." 
                className="flex-1 bg-neutral-900 border-2 border-neutral-700 p-4 font-mono text-xs text-white uppercase focus:outline-none focus:border-[#f25c05]"
              />
              <button className="bg-[#f25c05] text-black px-8 py-4 font-mono text-xs font-black uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
