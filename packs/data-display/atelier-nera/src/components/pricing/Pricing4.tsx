import React from 'react';

export function Pricing4() {
  const packs = [
    { title: "audit & review", time: "1 week", price: "€2,500", desc: "Typography and interface audit with actionable reduction guide." },
    { title: "brand system", time: "3 weeks", price: "€7,800", desc: "Complete visual identity and typographic guidelines." },
    { title: "digital monograph", time: "6 weeks", price: "€16,000", desc: "Full web application design and engineered frontend." },
    { title: "spatial direction", time: "8 weeks", price: "€22,500", desc: "Exhibition design, physical collateral, and digital sync." },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="flex justify-between items-center text-[9px] tracking-widest uppercase text-black/50 mb-12">
        <span>packaged deliverables</span>
        <span>horizontal scroll</span>
      </div>
      <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-none">
        {packs.map((p, idx) => (
          <div key={idx} className="min-w-[280px] md:min-w-[340px] border border-black/10 p-6 flex flex-col justify-between space-y-8 bg-white">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-black/40">
                <span>pkg 0{idx + 1}</span>
                <span>{p.time}</span>
              </div>
              <h4 className="font-light text-xl lowercase">{p.title}</h4>
              <p className="font-light text-xs text-black/60 leading-relaxed">{p.desc}</p>
            </div>
            <div className="flex justify-between items-end pt-4 border-t border-black/10">
              <span className="font-light text-lg">{p.price}</span>
              <span className="text-[9px] uppercase tracking-wider text-black/50 underline cursor-pointer">inquire →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
