import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Footer4() {
  return (
    <footer className="w-full bg-black text-white border-t-2 border-white max-w-6xl mx-auto p-6">
      <div className="border-b-2 border-white pb-6 mb-6">
        <span className="font-mono-num text-[10px] uppercase tracking-widest text-zinc-400 block mb-2">
          NEWSLETTER UFFICIALE // MANIFESTO
        </span>
        <h3 className="font-display text-5xl tracking-tighter mb-4">
          RICEVI GLI AGGIORNAMENTI SULLE PREMIÈRE
        </h3>
        <div className="flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="INSERISCI IL TUO INDIRIZZO EMAIL..." 
            className="flex-1 bg-black border border-white p-3 text-xs font-mono-num text-white uppercase placeholder:text-zinc-600 focus:outline-none focus:bg-white focus:text-black transition-colors"
          />
          <button className="bg-white text-black font-display px-8 py-3 text-sm hover:bg-zinc-200 flex items-center justify-center gap-2">
            JOIN <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono-num uppercase text-zinc-500">
        <span>TEATRO DEL CAOS // MILANO & ROMA</span>
        <span>© 2026 TUTTI I DIRITTI RISERVATI</span>
      </div>
    </footer>
  );
}
