import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Cta2() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border border-white p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-zinc-950">
        <div className="lg:col-span-5 relative overflow-hidden h-48 border border-white">
          <img src="https://picsum.photos/seed/cta2/600/300" className="w-full h-full collage-img" alt="cta collage" />
          <div className="absolute top-2 left-2 bg-white text-black px-2 py-0.5 text-[9px] font-mono-num uppercase font-bold">
            COLLAGE INTERLOCKED
          </div>
        </div>
        <div className="lg:col-span-7 space-y-4">
          <span className="font-mono-num text-[10px] text-zinc-400 uppercase tracking-widest">UNISCITI AL MANIFESTO</span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tighter">
            DIVENTA SOSTENITORE DEL TEATRO DEL CAOS
          </h2>
          <p className="font-mono-num text-xs uppercase text-zinc-300">
            ACCEDI ALLE PROVE APERTE, RICEVI I CATALOGHI STAMPATI A MANO E PARTECIPA AGLI INCONTRI CON LA DIREZIONE.
          </p>
          <button className="bg-white text-black font-display px-6 py-2.5 text-sm hover:bg-zinc-200 flex items-center gap-2">
            DIVENTA SOSTENITORE <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
