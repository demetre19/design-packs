import React from 'react';
import { Ticket, ArrowRight } from 'lucide-react';

export function Cta1() {
  return (
    <section className="w-full bg-white text-black border-b-2 border-white max-w-6xl mx-auto p-6 sm:p-12 text-center">
      <span className="font-mono-num text-xs uppercase tracking-widest border border-black px-2 py-1 inline-block mb-4">
        STAGIONE 2026 // PRENOTAZIONI APERTE
      </span>
      <h2 className="font-display text-6xl sm:text-8xl md:text-9xl tracking-tighter leading-none mb-6">
        VIVI IL CAOS IN SCENA
      </h2>
      <p className="font-mono-num text-xs sm:text-sm uppercase max-w-xl mx-auto mb-8 text-zinc-800">
        I POSTI SONO LIMITATI PER GARANTIRE L'INTIMITÀ DELLO SPAZIO SPERIMENTALE. ASSICURA IL TUO INGRESSO ORA.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-black text-white font-display px-8 py-4 text-lg hover:bg-zinc-800 flex items-center justify-center gap-2">
          <Ticket className="w-5 h-5" /> ACQUISTA BIGLIETTO
        </button>
        <button className="border-2 border-black bg-white text-black font-display px-8 py-4 text-lg hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
          SCOPRI IL PROGRAMMA <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
