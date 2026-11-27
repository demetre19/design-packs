import React from 'react';
import { Ticket } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">SPOTLIGHT PERFORMANCE</h2>
        <span className="font-mono-num text-xs uppercase">PRIMA ASSOLUTA</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-white">
        <div className="lg:col-span-5 relative overflow-hidden min-h-[300px]">
          <img src="https://picsum.photos/seed/pricing3/600/600" className="w-full h-full collage-img" alt="spotlight" />
          <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-[9px] font-mono-num border border-white">
            EVENTO SPECIALE
          </div>
        </div>
        <div className="lg:col-span-7 p-6 flex flex-col justify-between bg-zinc-950">
          <div>
            <div className="flex justify-between items-center text-[10px] font-mono-num border-b border-white pb-2 mb-4">
              <span>TEATRO ANTICO ROMA</span>
              <span>28.03.2026</span>
            </div>
            <h3 className="font-display text-5xl tracking-tighter mb-2">NOTTE DI CAOS E POESIA</h3>
            <p className="text-xs font-mono-num text-zinc-300 uppercase leading-relaxed mb-4">
              UNICA REPLICA STRAORDINARIA CON LA PARTECIPAZIONE STRAORDINARIA DI TUTTO IL COLLETTIVO ARTISTICO.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/30 pt-4">
            <div>
              <span className="text-[10px] font-mono-num text-zinc-400 block">INGRESSO UNICO</span>
              <span className="font-display text-4xl">€30</span>
            </div>
            <button className="w-full sm:w-auto bg-white text-black font-display px-6 py-3 text-sm hover:bg-zinc-200 flex items-center justify-center gap-2">
              <Ticket className="w-4 h-4" /> PRENOTA POSTO SPOTLIGHT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
