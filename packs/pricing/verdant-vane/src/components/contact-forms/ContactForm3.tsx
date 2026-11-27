import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function ContactForm3() {
  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6">
      <div className="max-w-4xl mx-auto bg-[#1d4f47] text-[#faf6f0] rounded-[32px] p-10 md:p-16 text-center relative overflow-hidden shadow-xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2a7a6d] text-[#faf6f0] text-xs uppercase tracking-widest font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Quarterly Dispatch</span>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-4">
          Receive insights on clinical wellness.
        </h2>

        <p className="text-[#faf6f0]/80 font-light max-w-xl mx-auto mb-10 text-sm md:text-base">
          Join 4,000+ physicians, architects, and founders exploring the intersection of medical science and warm boutique design.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto flex flex-col md:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your professional email"
            className="flex-1 px-5 py-3.5 rounded-full bg-[#faf6f0] text-[#122420] text-sm focus:outline-none placeholder-[#122420]/50"
          />
          <button
            type="submit"
            className="px-7 py-3.5 rounded-full bg-[#2a7a6d] text-[#faf6f0] text-sm font-medium hover:bg-[#236358] transition-all flex items-center justify-center gap-2 flex-shrink-0 shadow-md"
          >
            <span>Subscribe</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
