import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm3() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-4xl mx-auto bg-white border border-[#0d0e10]/15 p-10 flex flex-col md:flex-row items-center justify-between gap-8 rounded-[2px]">
        <div className="flex flex-col gap-3 max-w-lg">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#2743f0]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">DISPATCH BULLETIN // CF-03</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight uppercase">Subscribe to infrastructure telemetry updates.</h2>
          <p className="text-[#0d0e10]/70 text-xs">Receive weekly telemetry benchmarks, zero-day advisories, and microgrid research papers.</p>
        </div>

        {subscribed ? (
          <div className="font-mono text-xs uppercase text-[#2743f0] font-bold p-4 bg-[#f2f3f5] border border-[#2743f0]/30 rounded-[2px]">
            Subscription Logged Successfully
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex w-full md:w-auto items-center">
            <input 
              type="email" 
              required 
              placeholder="operator@grid.io" 
              className="bg-[#f2f3f5] border border-[#0d0e10]/15 border-r-0 p-3 font-mono text-xs outline-none focus:border-[#2743f0] rounded-l-[2px] w-full md:w-64" 
            />
            <button type="submit" className="bg-[#2743f0] text-white px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#1d32c4] transition-colors flex items-center gap-2 rounded-r-[2px] shrink-0">
              <span>Join</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
