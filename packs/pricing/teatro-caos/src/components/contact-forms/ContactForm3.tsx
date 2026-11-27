import React from 'react';

export function ContactForm3() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">ACCREDITI STAMPA // MINIMAL</h2>
        <span className="font-mono-num text-xs uppercase">PRESS OFFICE</span>
      </div>
      <div className="border border-white p-6 max-w-xl mx-auto bg-zinc-950">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-mono-num text-xs uppercase">
          <div>
            <label className="block text-[10px] text-zinc-400 mb-1">TESTATA GIORNALISTICA O BLOG</label>
            <input type="text" className="w-full bg-black border border-white p-2 text-white focus:bg-white focus:text-black transition-colors" placeholder="NOME TESTATA..." />
          </div>
          <div>
            <label className="block text-[10px] text-zinc-400 mb-1">GIORNALISTA / ACCREDITATO</label>
            <input type="text" className="w-full bg-black border border-white p-2 text-white focus:bg-white focus:text-black transition-colors" placeholder="NOME E COGNOME..." />
          </div>
          <div>
            <label className="block text-[10px] text-zinc-400 mb-1">DATA REPLICA RICHIESTA</label>
            <input type="date" className="w-full bg-black border border-white p-2 text-white focus:bg-white focus:text-black transition-colors" />
          </div>
          <button type="submit" className="w-full bg-white text-black font-display py-2 text-sm hover:bg-zinc-200">
            RICHIEDI ACCREDITO STAMPA
          </button>
        </form>
      </div>
    </section>
  );
}
