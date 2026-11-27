import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm3() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#f0efeb] border border-[#e2e0d8] p-10 lg:p-14 space-y-8">
          <div className="space-y-3 text-center max-w-lg mx-auto">
            <div className="inline-flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">QUARTERLY MONOGRAPHS</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-[#16171a]">Subscribe to Architectural Notes</h2>
            <p className="text-stone-600 text-xs">Receive our limited quarterly dispatch on tectonic theory and material studies.</p>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your electronic mail..." 
              className="flex-1 bg-[#fafaf8] border border-[#e2e0d8] p-3.5 text-xs font-mono text-[#16171a] focus:outline-none focus:border-[#b5482e]"
            />
            <button 
              type="submit" 
              className="bg-[#b5482e] text-[#fafaf8] px-6 py-3.5 text-xs font-mono uppercase tracking-widest hover:bg-[#9a3c25] transition-colors flex items-center justify-center space-x-2"
            >
              <span>Subscribe</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
