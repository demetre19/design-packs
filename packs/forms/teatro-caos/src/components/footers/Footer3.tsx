import React from 'react';

export function Footer3() {
  return (
    <footer className="w-full bg-black text-white border-t-2 border-white max-w-6xl mx-auto p-6">
      <div className="border-b border-white pb-6 mb-6 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-display text-4xl tracking-tighter">TEATRO DEL CAOS</div>
          <p className="font-mono-num text-[10px] uppercase text-zinc-400 mt-1">ASSOCIAZIONE CULTURALE SPERIMENTALE</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-[10px] font-mono-num uppercase">
          <div>
            <span className="text-zinc-500 block mb-1">INDICE</span>
            <a href="#" className="block hover:underline">REPERTOIRE</a>
            <a href="#" className="block hover:underline">ENSEMBLE</a>
          </div>
          <div>
            <span className="text-zinc-500 block mb-1">STAGIONE</span>
            <a href="#" className="block hover:underline">BIGLIETTI</a>
            <a href="#" className="block hover:underline">CALENDARIO</a>
          </div>
          <div>
            <span className="text-zinc-500 block mb-1">STAMPA</span>
            <a href="#" className="block hover:underline">RASSEGNA</a>
            <a href="#" className="block hover:underline">COMUNICATI</a>
          </div>
          <div>
            <span className="text-zinc-500 block mb-1">LEGALE</span>
            <a href="#" className="block hover:underline">PRIVACY</a>
            <a href="#" className="block hover:underline">NOTE LEGALI</a>
          </div>
        </div>
      </div>
      <div className="text-[9px] font-mono-num uppercase text-zinc-500 text-center">
        CF 97881230154 // P.IVA 12345678901 // TUTTI I DIRITTI RISERVATI
      </div>
    </footer>
  );
}
