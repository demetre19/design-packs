import React, { useState } from 'react';
import { X } from 'lucide-react';

export function Modal2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">BIO PERFORMER // MODALE</h2>
        <span className="font-mono-num text-xs uppercase">CREDITI ARTISTICI</span>
      </div>
      <div className="border border-white p-8 text-center bg-zinc-950">
        <button onClick={() => setIsOpen(true)} className="border border-white bg-white text-black font-display px-6 py-3 text-sm hover:bg-zinc-200">
          VISUALIZZA BIO MARCO VANELLI
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-black border-2 border-white max-w-lg w-full p-6 relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 bg-white text-black p-1">
              <X className="w-5 h-5" />
            </button>
            <div className="flex gap-4 items-center border-b border-white pb-4 mb-4">
              <img src="https://picsum.photos/seed/bioface/200/200" className="w-20 h-20 collage-img border border-white" alt="bio" />
              <div>
                <span className="text-[10px] font-mono-num text-zinc-400 uppercase">FONDATORE & DIRETTORE</span>
                <h3 className="font-display text-3xl">MARCO VANELLI</h3>
              </div>
            </div>
            <p className="font-mono-num text-xs uppercase text-zinc-300 leading-relaxed mb-6">
              REGISTA E PERFOMER. HA FONDATO IL TEATRO DEL CAOS NEL 2024 CON L'OBIETTIVO DI RIPORTARE IL CORPO AL CENTRO DEL DIBATTITO ARTISTICO CONTEMPORANEO.
            </p>
            <button onClick={() => setIsOpen(false)} className="w-full bg-white text-black font-display py-2 text-sm">
              CHIUDI SCHEDA
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
