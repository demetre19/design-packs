import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export function ContactForm3() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-[#16181d] border border-[#272a33] p-10 clip-corner-lg text-center">
          <div className="w-12 h-12 bg-[#ff5a1f]/10 border border-[#ff5a1f] clip-corner mx-auto flex items-center justify-center mb-4">
            <Zap size={24} className="text-[#ff5a1f]" />
          </div>
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-2">// TELEMETRY FEED</span>
          <h2 className="font-display font-extrabold text-3xl text-white mb-4">SUBSCRIBE TO CONFIDENTIAL LOGS</h2>
          <p className="font-mono-spec text-xs text-neutral-400 max-w-md mx-auto mb-8">
            Get early access to limited batch production windows and track telemetry updates directly from our engineering team.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input type="email" placeholder="ENTER SECURE EMAIL" className="bg-[#101114] border border-[#272a33] px-4 py-3 font-mono-spec text-xs text-white focus:outline-none focus:border-[#ff5a1f] clip-corner flex-grow" />
            <button className="bg-[#ff5a1f] text-black font-extrabold text-xs px-8 py-3 clip-corner hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <span>SUBSCRIBE</span>
              <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
