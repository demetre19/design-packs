import React from 'react';
import { Ticket } from 'lucide-react';

export function Pricing1() {
  const tiers = [
    { name: "RIDOTTO STUDENTI", price: "€12", desc: "ACCESSO A TUTTE LE REPLICHE DELLA STAGIONE CON DOCUMENTO VALIDO.", tag: "STUDENTI" },
    { name: "INTERO MANIFESTO", price: "€25", desc: "BIGLIETTO STANDARD PER LA SERATA DI PRIMA CON POSTO RISERVATO.", tag: "STANDARD", featured: true },
    { name: "SOSTENITORE DEL CAOS", price: "€60", desc: "INCLUDE CATALOGO STAMPATO A MANO, ACCESSO ALLE PROVE APERTE E POSTO VIP.", tag: "VIP" },
  ];

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">BIGLIETTERIA // MANIFESTO CELLS</h2>
        <span className="font-mono-num text-xs uppercase">STAGIONE 2026</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {tiers.map((t, i) => (
          <div key={i} className={`border border-white p-6 flex flex-col justify-between ${t.featured ? 'bg-white text-black' : 'bg-zinc-950 text-white'}`}>
            <div>
              <div className="flex justify-between items-center text-[10px] font-mono-num border-b pb-2 mb-4 border-current">
                <span>{t.tag}</span>
                <span>TIER 0{i+1}</span>
              </div>
              <h3 className="font-display text-3xl mb-2">{t.name}</h3>
              <div className="font-display text-6xl tracking-tighter my-4">{t.price}</div>
              <p className="text-xs font-mono-num leading-relaxed uppercase opacity-80">{t.desc}</p>
            </div>
            <div className="mt-8 pt-4 border-t border-current">
              <button className={`w-full py-2 font-display text-sm tracking-wider flex items-center justify-center gap-1 border border-current ${t.featured ? 'bg-black text-white hover:bg-zinc-800' : 'bg-white text-black hover:bg-zinc-200'}`}>
                <Ticket className="w-4 h-4" /> PRENOTA ORA
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
