import React from 'react';

export function Faq3() {
  const faqs = [
    { q: "WHAT CONSTITUTES AN ARCHIVAL EDITION*", a: "Each volume is numbered and stamped by hand in our Paris studio." },
    { q: "ARE INTERNATIONAL ORDERS INSURED*", a: "All shipments are fully insured against loss or transit damage." },
    { q: "HOW TO SUBMIT EDITORIAL PORTFOLIOS*", a: "Portfolios can be submitted digitally via our direct inquiry desk." }
  ];

  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>SINGLE COLUMN // ASTERISK MARKERS</span>
          <span>FAQ ARCHIVE</span>
        </div>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="border border-black p-6">
              <h3 className="text-xl font-black uppercase tracking-tight mb-2 font-serif-editorial">{f.q}</h3>
              <p className="text-xs font-mono leading-relaxed text-zinc-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
