import React from 'react';

export function Hero2() {
  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x-2 divide-white">
      {/* Date set enormous in condensed numerals beside photo strips */}
      <div className="lg:col-span-5 p-6 flex flex-col justify-between bg-white text-black">
        <div className="text-[10px] font-mono-num uppercase tracking-widest border-b border-black pb-2">
          STAGIONE TEATRALE 2026 // EVENTO 01
        </div>
        <div className="py-6">
          <div className="font-display text-8xl sm:text-9xl tracking-tighter leading-none">
            28.03
          </div>
          <div className="font-display text-3xl tracking-tight mt-2">ORE 21:00 // TEATRO ROMANO</div>
        </div>
        <div className="border-t border-black pt-4 flex flex-col gap-2 font-mono-num text-xs">
          <div>PRIMA NAZIONALE ABSOLUTA</div>
          <div className="text-[10px] text-zinc-700">IN COLLABORAZIONE CON FONDAZIONE ARTE CONTEMPORANEA</div>
        </div>
      </div>

      {/* Photo strips & manifesto title */}
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x-2 divide-white">
        <div className="p-4 flex flex-col justify-between">
          <div className="overflow-hidden border border-white mb-4">
            <img src="https://picsum.photos/seed/hero2a/500/600" className="w-full h-72 collage-img" alt="actor portrait" />
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-tight">MANIFESTO ZERO</h2>
            <p className="text-[10px] font-mono-num uppercase text-zinc-400 mt-1">INTERPRETAZIONE DI GIOVANNA BRENTA</p>
          </div>
        </div>

        <div className="p-4 flex flex-col justify-between">
          <div className="overflow-hidden border border-white mb-4">
            <img src="https://picsum.photos/seed/hero2b/500/600" className="w-full h-72 collage-img" alt="stage setup" />
          </div>
          <div className="space-y-2">
            <div className="text-[10px] font-mono-num uppercase bg-white text-black px-2 py-0.5 inline-block">POSTI LIMITATI</div>
            <p className="text-xs font-mono-num text-zinc-300">UN'ESPERIENZA SENSORIALE SENZA COMPROMESSI.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
