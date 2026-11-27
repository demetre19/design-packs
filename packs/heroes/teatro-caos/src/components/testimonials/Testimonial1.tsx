import React from 'react';

export function Testimonial1() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">CRITICA // MANIFESTO QUOTES</h2>
        <span className="font-mono-num text-xs uppercase">RASSEGNA STAMPA 2026</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="border border-white p-6 flex flex-col justify-between bg-white text-black">
          <div className="font-mono-num text-[10px] uppercase border-b border-black pb-2">IL GIORNO // 29.03.2026</div>
          <blockquote className="my-6">
            <p className="font-display text-3xl sm:text-4xl tracking-tighter leading-none mb-4">
              "UN PUGNO ALLO STOMACO DELLO SPETTATORE. IL TEATRO DEL CAOS RIDEFINISCE IL LIMITE DEL PALCO."
            </p>
          </blockquote>
          <div className="border-t border-black pt-2 flex items-center gap-3">
            <img src="https://picsum.photos/seed/critic1/100/100" className="w-10 h-10 collage-img border border-black" alt="critic" />
            <div>
              <div className="font-mono-num font-bold text-xs">ROBERTO MANTOVANI</div>
              <div className="font-mono-num text-[10px] text-zinc-700">CRITICO TEATRALE</div>
            </div>
          </div>
        </div>

        <div className="border border-white p-6 flex flex-col justify-between bg-zinc-950 text-white">
          <div className="font-mono-num text-[10px] uppercase border-b border-white pb-2">CORRIERE DELL'ARTE // 01.04.2026</div>
          <blockquote className="my-6">
            <p className="font-display text-3xl sm:text-4xl tracking-tighter leading-none mb-4">
              "BRUTALE, RIGOROSO, NECESSARIO. NESSUNA CONCESSIONE AL BENESSERE BORGHESE."
            </p>
          </blockquote>
          <div className="border-t border-white pt-2 flex items-center gap-3">
            <img src="https://picsum.photos/seed/critic2/100/100" className="w-10 h-10 collage-img border border-white" alt="critic" />
            <div>
              <div className="font-mono-num font-bold text-xs">CATERINA BIANCHI</div>
              <div className="font-mono-num text-[10px] text-zinc-400">RIVISTA SCENA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
