import React from 'react';

export function Faq2() {
  const faqs = [
    { q: "DOVE SI TROVA LA SEDE PRINCIPALE?", a: "LA SEDE PRINCIPALE È A MILANO IN VIA SPERIMENTALE 04, PRESSO GLI SPAZI INDUSTRIALI DISMESSI." },
    { q: "QUANTO DURA UNO SPETTACOLO MEDIO?", a: "LA DURATA VARIA DAI 90 AI 110 MINUTI SENZA INTERVALLO, SECONDO LA RIGIDA IMPOSTAZIONE DEL MANIFESTO." },
    { q: "È POSSIBILE FOTOGRAFARE DURANTE GLI ATTI?", a: "PER RISPETTO DEI PERFORMER E DEL SILENZIO SCENICO, È RIGOROSAMENTE VIETATO SCATTARE FOTO O RIPRESE DURANTE LA RAPPRESENTAZIONE." },
    { q: "COME DIVENTARE SOSTENITORE?", a: "SCRIVICI DIRETTAMENTE O ACQUISTA IL TIER DI SUPPORTO DEDICATO NELLA SEZIONE BIGLIETTERIA." },
  ];

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">FAQ // DUE COLONNE DENSE</h2>
        <span className="font-mono-num text-xs uppercase">CHIARIMENTI</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {faqs.map((f, i) => (
          <div key={i} className="border border-white p-4 flex flex-col justify-between bg-zinc-950">
            <div>
              <span className="font-mono-num text-[10px] text-zinc-500 block mb-1">0{i+1} // DOMANDA</span>
              <h3 className="font-display text-2xl tracking-tight mb-2">{f.q}</h3>
              <p className="font-mono-num text-xs uppercase text-zinc-300 leading-relaxed">{f.a}</p>
            </div>
            <div className="border-t border-white/20 pt-2 mt-4 text-[9px] font-mono-num text-zinc-500 uppercase">
              TEATRO DEL CAOS INFO
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
