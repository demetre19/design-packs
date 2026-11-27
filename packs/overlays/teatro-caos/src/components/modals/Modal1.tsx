import React, { useState } from 'react';
import { X, Ticket } from 'lucide-react';

export function Modal1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">MODALE SPETTACOLO // TRIGGER</h2>
        <span className="font-mono-num text-xs uppercase">INTERATTIVO</span>
      </div>
      <div className="border border-white p-8 text-center bg-zinc-950">
        <p className="font-mono-num text-xs uppercase text-zinc-400 mb-4">CLICCA IL PULSANTE PER APRIRE LA SCHEDA DI DETTAGLIO</p>
        <button onClick={() => setIsOpen(true)} className="bg-white text-black font-display px-6 py-3 text-sm hover:bg-zinc-200">
          APRI MODALE SPETTACOLO
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-black border-2 border-white max-w-xl w-full p-6 relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 bg-white text-black p-1 hover:bg-zinc-200">
              <X className="w-5 h-5" />
            </button>
            <div className="border-b border-white pb-3 mb-4">
              <span className="font-mono-num text-[10px] text-zinc-400 uppercase">SCHEDA PRODUZIONE 01</span>
              <h3 className="font-display text-4xl tracking-tighter mt-1">IL CORPO MECCANICO</h3>
            </div>
            <div className="relative h-48 border border-white mb-4 overflow-hidden">
              <img src="https://picsum.photos/seed/mod1/600/400" className="w-full h-full collage-img" alt="modal preview" />
            </div>
            <p className="font-mono-num text-xs uppercase text-zinc-300 leading-relaxed mb-6">
              REGIA DI MARCO VANELLI. UN VIAGGIO NELL'ACUSTICA DEL SILENZIO E NELLA RESISTENZA FISICA.
            </p>
            <div className="flex gap-2">
              <button onClick={() => setIsOpen(false)} className="flex-1 bg-white text-black font-display py-2 text-sm hover:bg-zinc-200 flex items-center justify-center gap-1">
                <Ticket className="w-4 h-4" /> PRENOTA BIGLIETTO
              </button>
              <button onClick={() => setIsOpen(false)} className="border border-white px-4 py-2 font-display text-sm hover:bg-white hover:text-black">
                CHIUDI
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
