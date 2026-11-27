import React from 'react';

export function FeatureGrid1() {
  const cards = [
    { title: "BRUTALIST TAILORING", cat: "TREND 01", dark: true, img: "https://picsum.photos/seed/feat1/500/600.webp", desc: "Rigid box shoulders and extended hemlines crafted in heavyweight Japanese wool." },
    { title: "MONOCHROME SILK", cat: "TREND 02", dark: false, img: "https://picsum.photos/seed/feat2/500/600.webp", desc: "Weightless Habotai silk treated with matte enzyme wash for ink-black depth." },
    { title: "RAW EDGES", cat: "TREND 03", dark: false, img: "https://picsum.photos/seed/feat3/500/600.webp", desc: "Unfinished seams and exposed selvedge honoring the honest construction of garments." },
    { title: "ARCHITECTURAL LEATHER", cat: "TREND 04", dark: true, img: "https://picsum.photos/seed/feat4/500/600.webp", desc: "Vegetable-tanned calfskin molded into rigid cylindrical silhouettes." }
  ];

  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>FEATURE GRID // TRENDS</span>
          <span>SS26 ANALYSIS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div key={i} className={`border border-black p-4 flex flex-col justify-between ${card.dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
              <div>
                <div className="flex justify-between items-center text-[9px] font-mono uppercase mb-4 opacity-70">
                  <span>{card.cat}</span>
                  <span>[0{i+1}]</span>
                </div>
                <div className={`border p-1 mb-4 ${card.dark ? 'border-zinc-700 bg-zinc-900' : 'border-black bg-zinc-100'}`}>
                  <img src={card.img} alt={card.title} className="w-full h-64 object-cover grayscale" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2">{card.title}</h3>
                <p className={`text-xs font-mono leading-relaxed opacity-80 mb-6`}>{card.desc}</p>
              </div>
              <a href="#" className={`text-[10px] font-mono uppercase tracking-widest inline-block border-b pb-0.5 ${card.dark ? 'border-white hover:opacity-60' : 'border-black hover:opacity-60'}`}>
                Read Analysis*
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
