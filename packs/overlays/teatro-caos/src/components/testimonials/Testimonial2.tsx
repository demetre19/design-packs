import React from 'react';

export function Testimonial2() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">MURO DELLE CITAZIONI // COLLAGE</h2>
        <span className="font-mono-num text-xs uppercase">VOCI DALLA PLATEA</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="border border-white p-4 flex flex-col justify-between">
          <p className="font-mono-num text-xs uppercase leading-relaxed">
            "NON HO MAI VISTO NULLA DI SIMILE. IL SILENZIO IN SALA ERA TALE CHE SI SENTIVA IL BATTITO CARDIACO."
          </p>
          <div className="mt-4 pt-2 border-t border-white/30 text-[10px] font-mono-num text-zinc-400">
            — SPETTATORE ANONYMOUS
          </div>
        </div>

        <div className="border border-white p-4 flex flex-col justify-between bg-white text-black">
          <p className="font-mono-num text-xs uppercase leading-relaxed font-bold">
            "UN CAPOLAVORO DI SOTTRAZIONE. IL TEATRO DEL CAOS HA DISTRUTTO TUTTI I NOSTRI PRECONCETTI."
          </p>
          <div className="mt-4 pt-2 border-t border-black/30 text-[10px] font-mono-num">
            — FRANCESCA NERI, DRAMMATURGA
          </div>
        </div>

        <div className="border border-white p-4 flex flex-col justify-between">
          <p className="font-mono-num text-xs uppercase leading-relaxed">
            "ENERGIA PURA. LA REGIA DI VANELLI È UNA LAMA AFFILATA NEL CORPO SOCIALE."
          </p>
          <div className="mt-4 pt-2 border-t border-white/30 text-[10px] font-mono-num text-zinc-400">
            — ALESSANDRO FERRARI
          </div>
        </div>
      </div>
    </section>
  );
}
