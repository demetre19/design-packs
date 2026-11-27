import React from 'react';

export function FeatureGrid1() {
  const items = [
    { num: "01.", title: "brand identity", desc: "Minimalist visual systems, logotypes, and comprehensive typography guidelines.", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80" },
    { num: "02.", title: "digital platforms", desc: "Custom web applications engineered with pristine layouts and high performance.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80" },
    { num: "03.", title: "spatial curation", desc: "Physical exhibition spaces, gallery design, and print monographs.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="flex justify-between items-center text-[9px] tracking-widest uppercase text-black/50 mb-16">
        <span>services &amp; expertise</span>
        <span>04 elements</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map((item, idx) => (
          <div key={idx} className="space-y-6">
            <span className="font-light text-5xl tracking-tighter text-black/30 block">{item.num}</span>
            <h3 className="font-light text-xl lowercase tracking-tight">{item.title}</h3>
            <p className="font-light text-xs text-black/70 leading-relaxed">{item.desc}</p>
            <div className="w-full h-40 bg-neutral-100 p-2 border border-black/10">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
