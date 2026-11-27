import React, { useState } from 'react';
import { X, Ticket } from 'lucide-react';

export function Modal3() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">CONFERMA TICKET // STUB</h2>
        <span className="font-mono-num text-xs uppercase">RICEVUTA</span>
      </div>
      <div className="border border-white p-8 text-center bg-zinc-950">
        <button onClick={() => setIsOpen(true)} className="bg-white text-black font-display px-6 py-3 text-sm hover:bg-zinc-200">
          MOSTRA STUB DI PRENOTAZIONE
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white text-black border-2 border-black max-w-md w-full p-6 relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 bg-black text-white p-1">
              <X className="w-5 h-5" />
            </button>
            <div className="border-b-2 border-black pb-3 mb-4">
              <span className="font-mono-num text-[10px] uppercase font-bold text-zinc-700">TICKET CONFERMATO // 042</span>
              <h3 className="font-display text-5xl tracking-tighter">TEATRO DEL CAOS</h3>
            </div>
            <div className="space-y-2 font-mono-num text-xs uppercase mb-6 border-b border-black pb-4">
              <div className="flex justify-between"><span>SPETTACOLO:</span> <b>ATTO I // IL CORPO</b></div>
              <div className="flex justify-between"><span>DATA:</span> <b>28 MAR 2026</b></div>
              <div className="flex justify-between"><span>POSTO:</span> <b>PLATEA 12</b></div>
              <div className="flex justify-between"><span>CODICE:</span> <b>TC-2026-99</b></div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-full bg-black text-white font-display py-3 text-sm hover:bg-zinc-800 flex items-center justify-center gap-1">
              <Ticket className="w-4 h-4" /> STAMPA O SALVA STUB
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
