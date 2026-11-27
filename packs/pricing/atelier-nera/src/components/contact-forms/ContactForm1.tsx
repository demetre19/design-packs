import React from 'react';
import { ArrowRight } from 'lucide-react';

export function ContactForm1() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="max-w-2xl mx-auto space-y-12">
        <div>
          <span className="text-[9px] tracking-widest uppercase text-black/50 block mb-3">commission inquiry</span>
          <h2 className="font-light text-3xl md:text-5xl tracking-tighter lowercase">
            start a conversation.
          </h2>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-wider text-black/60 block">your name</label>
            <input type="text" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm font-light lowercase focus:border-black outline-none" placeholder="e.g. helena vance" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-wider text-black/60 block">email address</label>
            <input type="email" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm font-light lowercase focus:border-black outline-none" placeholder="e.g. helena@galerie.it" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-wider text-black/60 block">project scope &amp; timeline</label>
            <textarea rows={4} className="w-full bg-transparent border-b border-black/20 pb-2 text-sm font-light lowercase focus:border-black outline-none resize-none" placeholder="describe your vision..." />
          </div>
          <div className="pt-4">
            <button type="submit" className="px-8 py-3 bg-black text-white text-xs font-light lowercase inline-flex items-center gap-2 hover:bg-black/80 transition-colors">
              submit inquiry <ArrowRight className="w-3 h-3 stroke-[1.5]" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
