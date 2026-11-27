import React from 'react';

export function Media2() {
  const photos = [
    { title: "PROVA 01", img: "https://picsum.photos/seed/gal1/400/400" },
    { title: "STUDIO SILENZIO", img: "https://picsum.photos/seed/gal2/400/400" },
    { title: "SCENA FINALE", img: "https://picsum.photos/seed/gal3/400/400" },
    { title: "DIRETTORE", img: "https://picsum.photos/seed/gal4/400/400" },
  ];

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">GALLERIA FOTOGRAFICA // PUZZLE</h2>
        <span className="font-mono-num text-xs uppercase">SCatti DI SCENA</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {photos.map((p, i) => (
          <div key={i} className="border border-white p-2 relative group overflow-hidden">
            <div className="overflow-hidden border border-white h-48">
              <img src={p.img} className="w-full h-full collage-img group-hover:scale-105 transition-transform" alt={p.title} />
            </div>
            <div className="mt-2 flex justify-between items-center text-[10px] font-mono-num uppercase">
              <span>{p.title}</span>
              <span className="text-zinc-500">0{i+1}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
