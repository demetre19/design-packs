import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Contact3: React.FC = () => {
  return (
    <section className="bg-[#14161a] text-[#f7f6f3] py-20 border-b border-[#f7f6f3]/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-3">
          <span className="font-mono text-xs text-[#ffc72c] uppercase tracking-widest">// MONOGRAPH SUBSCRIPTION</span>
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase">SUBSCRIBE TO TECTONIC RESEARCH</h3>
          <p className="text-xs text-[#f7f6f3]/70 font-sans">
            Receive monthly monographs and cantilever structural whitepapers.
          </p>
        </div>

        <div className="lg:col-span-6 flex">
          <input
            type="email"
            placeholder="ENTER YOUR PROFESSIONAL EMAIL"
            className="w-full bg-[#f7f6f3]/10 border border-[#f7f6f3]/20 px-6 py-4 text-xs font-mono text-[#f7f6f3] focus:outline-none focus:border-[#ffc72c]"
          />
          <button className="bg-[#ffc72c] text-[#14161a] px-8 font-bold text-xs uppercase hover:bg-[#f7f6f3] transition-colors flex items-center gap-2 flex-shrink-0">
            Subscribe <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
