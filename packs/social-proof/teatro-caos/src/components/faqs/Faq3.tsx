import React from 'react';

export function Faq3() {
  const items = [
    { q: "ORARI DI APERTURA DEL BOTTEGHINO", a: "IL BOTTEGHINO APRE FISICAMENTE 60 MINUTI PRIMA DELL'INIZIO DI CIASCUN SPETTACOLO." },
    { q: "ACCESSIBILITÀ SPAZI TEATRALI", a: "TUTTI GLI SPAZI DEL TEATRO DEL CAOS SONO PRIVI DI BARRIERE ARCHITETTONICHE E ACCESSIBILI." },
    { q: "RIMBORSO BIGLIETTI", a: "I BIGLIETTI NON SONO RIMBORSABILI SALVO ANNULLAMENTO UFFICIALE DELLA REPLICA DA PARTE DELLA DIREZIONE." },
  ];

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">FAQ // DIVISORI A CAPELLO</h2>
        <span className="font-mono-num text-xs uppercase">REGOLAMENTO</span>
      </div>
      <div className="border border-white divide-y divide-white bg-zinc-950">
        {items.map((item, i) => (
          <div key={i} className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="font-display text-2xl tracking-tight">
              0{i+1} // {item.q}
            </div>
            <div className="md:col-span-2 font-mono-num text-xs uppercase text-zinc-300 leading-relaxed">
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
