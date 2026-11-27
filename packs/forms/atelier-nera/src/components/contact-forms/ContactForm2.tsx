import React from 'react';
import { ArrowRight } from 'lucide-react';

export function ContactForm2() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-5 space-y-6">
          <span className="text-[9px] tracking-widest uppercase text-black/50">direct contact</span>
          <h2 className="font-light text-3xl md:text-5xl tracking-tighter lowercase leading-tight">
            collaborate with atelier nera.
          </h2>
          <p className="font-light text-xs text-black/70 leading-relaxed">
            We accept a limited number of commissions each quarter to preserve uncompromising quality and focused creative direction.
          </p>
          <div className="text-xs font-light text-black/50 pt-4">
            studio@ateliernera.com<br />
            via tortona 14, milan
          </div>
        </div>

        <div className="md:col-span-7 border border-black/10 p-8 md:p-10 space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-wider text-black/60 block">name</label>
            <input type="text" className="w-full bg-transparent border border-black/20 p-3 text-xs font-light lowercase focus:border-black outline-none" placeholder="your full name" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-wider text-black/60 block">email</label>
            <input type="email" className="w-full bg-transparent border border-black/20 p-3 text-xs font-light lowercase focus:border-black outline-none" placeholder="your@email.com" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-wider text-black/60 block">message</label>
            <textarea rows={3} className="w-full bg-transparent border border-black/20 p-3 text-xs font-light lowercase focus:border-black outline-none resize-none" placeholder="project details..." />
          </div>
          <button className="w-full py-3 bg-black text-white text-xs font-light lowercase flex items-center justify-center gap-2 hover:bg-black/80 transition-colors">
            send message <ArrowRight className="w-3 h-3 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
