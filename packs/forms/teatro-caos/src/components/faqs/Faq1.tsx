import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function Faq1() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "COME ACQUISTARE I BIGLIETTI PER LE PRIME?", a: "I BIGLIETTI POSSONO ESSERE ACQUISTATI ONLINE TRAMITE LA SEZIONE BIGLIETTERIA O DIRETTAMENTE AL BOTTEGHINO DEL TEATRO UN'ORA PRIMa DELLO SPETTACOLO." },
    { q: "È PREVISTO UN CODICE DI ABBIGLIAMENTO?", a: "NESSUN CODICE DI ABBIGLIAMENTO IMPOSTO. IL TEATRO DEL CAOS ACCOGLIE IL PUBBLICO NELLA MASSIMA LIBERTÀ ESPRESSIVA." },
    { q: "COME FUNZIONANO GLI ACCREDITI STAMPA?", a: "INVIARE RICHIESTA TRAMITE IL MODULO DEDICATO ALMENO 48 ORE PRIMA DELLA DATA DELLA REPLICA RICHIESTA." },
    { q: "È POSSIBILE ASSISTERE ALLE PROVE APERTE?", a: "LE PROVE APERTE SONO RISERVATE AI SOSTENITORI E AI POSSESSORI DEL BIGLIETTO VIP O ABBONAMENTO STAGIONALE." },
  ];

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">FAQ // ACCORDION INTERATTIVO</h2>
        <span className="font-mono-num text-xs uppercase">INFORMAZIONI</span>
      </div>
      <div className="space-y-2">
        {faqs.map((f, i) => (
          <div key={i} className="border border-white bg-zinc-950">
            <button 
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full p-4 text-left flex justify-between items-center font-display text-2xl tracking-tight hover:bg-white hover:text-black transition-colors"
            >
              <span>0{i+1} // {f.q}</span>
              {openIdx === i ? <Minus className="w-5 h-5 flex-shrink-0" /> : <Plus className="w-5 h-5 flex-shrink-0" />}
            </button>
            {openIdx === i && (
              <div className="p-4 border-t border-white/30 font-mono-num text-xs uppercase text-zinc-300 leading-relaxed bg-black">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
