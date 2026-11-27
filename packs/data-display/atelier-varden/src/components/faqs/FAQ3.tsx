import React from 'react';

export function FAQ3() {
  const items = [
    { num: "01", q: "Can we visit an active Atelier Varden construction site?", a: "Private site tours are available strictly by appointment for prospective clients who have completed an initial studio consultation." },
    { num: "02", q: "Do you collaborate with international interior designers?", a: "While we specialize in integrated interior architecture, we occasionally collaborate with bespoke curators selected by the client." },
    { num: "03", q: "What is your approach to sustainable energy systems?", a: "Geothermal heating, passive solar orientation, and high-mass thermal insulation are engineered natively into every structure." }
  ];

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">TERRACOTTA INDEXED FAQ</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Client Inquiries & Protocol</h2>
        </div>

        <div className="border border-[#e2e0d8] bg-[#f0efeb] divide-y divide-[#e2e0d8]">
          {items.map((item, i) => (
            <div key={i} className="p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500">{item.num} // INQUIRY</span>
              </div>
              <h3 className="text-xl font-medium text-[#16171a]">{item.q}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
