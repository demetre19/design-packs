import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta3() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <span className="text-[9px] tracking-widest uppercase text-black/50 block mb-2">direct line</span>
          <h3 className="font-light text-2xl md:text-3xl lowercase tracking-tight">studio@ateliernera.com</h3>
        </div>
        <a href="mailto:studio@ateliernera.com" className="inline-flex items-center gap-3 px-8 py-3 bg-black text-white text-xs font-light lowercase hover:bg-black/80 transition-colors">
          send email <ArrowRight className="w-3 h-3 stroke-[1.5]" />
        </a>
      </div>
    </section>
  );
}
