import React from 'react';

export function Faq2() {
  const items = [
    { q: "geographic location", a: "Primary studios in Milan and Paris. We collaborate globally with remote-first infrastructure." },
    { q: "pricing structure", a: "Transparent rate tables and fixed-scope tier packages available upon request." },
    { q: "copyright & ownership", a: "All intellectual property and source code are transferred to the client upon completion." },
    { q: "maintenance & support", a: "Optional annual retainers for ongoing creative direction and system updates." },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="text-[9px] tracking-widest uppercase text-black/50 mb-12">inquiries &amp; practice</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {items.map((item, idx) => (
          <div key={idx} className="border-t border-black/10 pt-6 space-y-3">
            <h4 className="font-light text-lg lowercase">{item.q}</h4>
            <p className="font-light text-xs text-black/60 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
