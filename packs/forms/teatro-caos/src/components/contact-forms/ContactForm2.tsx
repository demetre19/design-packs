import React from 'react';
import { Send } from 'lucide-react';

export function ContactForm2() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">CONTATTO DIRETTO // SPLIT</h2>
        <span className="font-mono-num text-xs uppercase">SEGRETERIA TEATRO</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-white">
        <div className="lg:col-span-5 relative overflow-hidden min-h-[300px]">
          <img src="https://picsum.photos/seed/contact2/600/800" className="w-full h-full collage-img" alt="contact side" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6">
            <span className="bg-white text-black font-display text-xs px-2 py-1 w-max">TEATRO DEL CAOS</span>
            <div className="font-display text-4xl tracking-tighter text-white">SCRIVICI DIRECTLY</div>
          </div>
        </div>
        <div className="lg:col-span-7 p-6 bg-zinc-950 flex flex-col justify-between">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-mono-num text-xs uppercase">
            <div>
              <label className="block text-[10px] text-zinc-400 mb-1">IL TUO NOME</label>
              <input type="text" className="w-full bg-black border border-white p-2 text-white focus:bg-white focus:text-black transition-colors" placeholder="NOME..." />
            </div>
            <div>
              <label className="block text-[10px] text-zinc-400 mb-1">INDIRIZZO EMAIL</label>
              <input type="email" className="w-full bg-black border border-white p-2 text-white focus:bg-white focus:text-black transition-colors" placeholder="EMAIL..." />
            </div>
            <div>
              <label className="block text-[10px] text-zinc-400 mb-1">MESSAGGIO O RICHIESTA ACCREDITO</label>
              <textarea rows={4} className="w-full bg-black border border-white p-2 text-white focus:bg-white focus:text-black transition-colors" placeholder="SCRIVI IL TUO MESSAGGIO..."></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-black font-display py-2.5 text-sm hover:bg-zinc-200 flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> INVIA MESSAGGIO
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
