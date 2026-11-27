import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Footer4() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="mb-12">
        <span className="text-[9px] tracking-widest uppercase text-black/50 block mb-4">monograph dispatch</span>
        <h2 className="font-light text-4xl md:text-6xl tracking-tighter lowercase">
          stay in touch.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 max-w-xl mb-16">
        <input 
          type="email" 
          placeholder="enter your email address..." 
          className="flex-1 bg-transparent border border-black/20 px-4 py-3 text-xs font-light lowercase focus:border-black outline-none placeholder:text-black/40"
        />
        <button className="px-8 py-3 bg-black text-white text-xs font-light lowercase flex items-center justify-center gap-2 hover:bg-black/80 transition-colors">
          subscribe <ArrowRight className="w-3 h-3 stroke-[1.5]" />
        </button>
      </div>
      <div className="flex justify-between items-center pt-8 border-t border-black/10 text-xs font-light text-black/50">
        <span>atelier nera</span>
        <span>milan &amp; paris</span>
      </div>
    </footer>
  );
}
