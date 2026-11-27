import React from 'react';

export function FeatureGrid2() {
  const items = [
    { num: "01", title: "THE MONOLITH COAT", sub: "Heavyweight double-faced wool", price: "€1,850" },
    { num: "02", title: "GABARDINE TROUSER", sub: "High-waist pleated drape", price: "€720" },
    { num: "03", title: "STRUCTURED BLAZER", sub: "Padded architectural shoulder", price: "€1,420" },
    { num: "04", title: "INK POPLIN SHIRT", sub: "Raw edge collar construction", price: "€450" }
  ];

  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>COLLECTION INDEX</span>
          <span>4 ITEMS // V-09</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex gap-6 items-start border-b border-black pb-8">
              <span className="text-6xl font-black font-serif-editorial leading-none text-zinc-400">
                {item.num}
              </span>
              <div className="flex-1">
                <div className="border border-black p-1 bg-black mb-4">
                  <img src={`https://picsum.photos/seed/colgrid${i}/500/350.webp`} alt={item.title} className="w-full h-48 object-cover grayscale" />
                </div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-black uppercase tracking-tight">{item.title}</h3>
                  <span className="text-xs font-mono font-bold">{item.price}</span>
                </div>
                <p className="text-xs font-mono text-zinc-600 uppercase mb-3">{item.sub}</p>
                <a href="#" className="text-[10px] font-mono uppercase tracking-widest hover:underline font-bold">
                  Inspect Spec*
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
