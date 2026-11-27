import React from 'react';

export function Pricing1() {
  const rates = [
    { service: "monograph identity", desc: "Comprehensive brand guidelines, typography system & logotype.", price: "€8,500" },
    { service: "digital platform", desc: "Custom React application, editorial layout & responsive build.", price: "€14,200" },
    { service: "spatial exhibition", desc: "Gallery layout curation, signage systems & print catalog.", price: "€11,000" },
    { service: "advisory retainer", desc: "Monthly creative direction & design governance oversight.", price: "€4,500 / mo" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="flex justify-between items-center text-[9px] tracking-widest uppercase text-black/50 mb-12">
        <span>rate table / 2026</span>
        <span>editorial list</span>
      </div>
      <div className="divide-y divide-black/10">
        {rates.map((r, idx) => (
          <div key={idx} className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="md:w-1/3">
              <span className="font-light text-base lowercase">{r.service}</span>
            </div>
            <div className="md:w-1/2">
              <p className="font-light text-xs text-black/60">{r.desc}</p>
            </div>
            <div className="md:w-auto text-right">
              <span className="font-light text-sm">{r.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
