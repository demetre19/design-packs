import React from 'react';
import { ArrowDownRight } from 'lucide-react';

export function Hero1() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start border-b border-black pb-4 mb-8 text-[11px] uppercase tracking-widest">
          <span>DOC-ID: 2026-ST-01</span>
          <span>CURRICULUM VITAE & WORKS</span>
          <span>LOCATION: LONDON / ZURICH</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
              RE-<br />SUME
            </h1>
            <p className="text-xs uppercase tracking-wider max-w-xl leading-relaxed border-l-2 border-black pl-4 py-1 mb-6">
              Marcus Sterling directs spatial typography, editorial systems, and brand architectures for cultural institutions and architectural practices worldwide. Practice established 2014.
            </p>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
              <a href="#work" className="border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors flex items-center gap-2">
                Explore Index <ArrowDownRight className="w-4 h-4" />
              </a>
              <span className="text-[10px] text-neutral-500">REF: 2014—2026</span>
            </div>
          </div>
          <div className="lg:col-span-4 border border-black p-2 bg-neutral-100">
            <div className="aspect-[4/5] bg-neutral-300 mb-2 overflow-hidden border border-black">
              <img 
                src="https://picsum.photos/seed/marcusprofile/600/750" 
                alt="Marcus Sterling Portrait" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            <div className="text-[10px] uppercase tracking-widest flex justify-between border-t border-black pt-2">
              <span>PLATE 01.1</span>
              <span>M. STERLING, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
