import React from 'react';
import { Ticket, Send } from 'lucide-react';

export function ContactForm1() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">MODULO DI PRENOTAZIONE // SLIP</h2>
        <span className="font-mono-num text-xs uppercase">BIGLIETTERIA UFFICIALE</span>
      </div>
      <div className="border border-white p-6 bg-zinc-950 max-w-2xl mx-auto">
        <div className="border-b border-white pb-3 mb-6 flex justify-between items-center text-xs font-mono-num">
          <span>CEDOLA DI PRENOTAZIONE N. 2026-04</span>
          <span>TEATRO DEL CAOS</span>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-mono-num text-xs uppercase">
          <div>
            <label className="block text-[10px] text-zinc-400 mb-1">01 // NOME E COGNOME</label>
            <input type="text" className="w-full bg-black border border-white p-2 text-white uppercase focus:bg-white focus:text-black transition-colors" placeholder="INSERISCI NOME..." />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] text-zinc-400 mb-1">02 // SPETTACOLO SCELTO</label>
              <select className="w-full bg-black border border-white p-2 text-white uppercase focus:bg-white focus:text-black transition-colors">
                <option>ATTO I // IL CORPO MECCANICO</option>
                <option>ATTO II // L'ABISSO VERTICALE</option>
                <option>ATTO III // STUDI SULLA RABBIA</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] text-zinc-400 mb-1">03 // NUMERO POSTI</label>
              <input type="number" min="1" defaultValue="1" className="w-full bg-black border border-white p-2 text-white uppercase focus:bg-white focus:text-black transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-[10px] text-zinc-400 mb-1">04 // NOTE O ESIGENZE SPECIALI</label>
            <textarea rows={3} className="w-full bg-black border border-white p-2 text-white uppercase focus:bg-white focus:text-black transition-colors" placeholder="EVENTUALI NOTE..."></textarea>
          </div>
          <button type="submit" className="w-full bg-white text-black font-display py-3 text-sm tracking-wider hover:bg-zinc-200 flex items-center justify-center gap-2">
            <Ticket className="w-4 h-4" /> CONFERMA E PRENOTA
          </button>
        </form>
      </div>
    </section>
  );
}
