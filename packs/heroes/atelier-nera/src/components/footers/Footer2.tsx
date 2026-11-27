import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Footer2() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 py-20 border-t border-black/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <span className="text-[9px] tracking-widest uppercase text-black/50 block mb-2">direct correspondence</span>
          <a href="mailto:studio@ateliernera.com" className="font-light text-2xl md:text-3xl lowercase tracking-tight hover:underline">
            studio@ateliernera.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-xs font-light lowercase">
          <span>inquire for Q3/Q4</span>
          <ArrowRight className="w-3 h-3 stroke-[1.5]" />
        </div>
      </div>
    </footer>
  );
}
