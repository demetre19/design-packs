import React from 'react';

export function FeatureGrid2() {
  const projects = [
    { title: "lumina pavilion", category: "architecture", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80" },
    { title: "kuro mono", category: "editorial object", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80" },
    { title: "silent interface", category: "digital system", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=80" },
    { title: "vessel series", category: "ceramic craft", img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=500&q=80" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="flex justify-between items-center text-[9px] tracking-widest uppercase text-black/50 mb-16">
        <span>selected works</span>
        <span>floating grid</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((p, idx) => (
          <div key={idx} className={`space-y-4 ${idx % 2 === 1 ? 'md:translate-y-12' : ''}`}>
            <div className="w-full h-72 bg-neutral-100 p-3 border border-black/10">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale contrast-125" />
            </div>
            <div className="flex justify-between items-baseline text-xs font-light">
              <span className="lowercase">{p.title}</span>
              <span className="text-black/50">{p.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
