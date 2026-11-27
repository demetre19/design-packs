import React from 'react';

export function Faq2() {
  const faqs = [
    { q: "HOW ARE SUBSCRIPTIONS DELIVERED?", a: "Shipped via priority courier in rigid protective black packaging." },
    { q: "CAN I VISIT THE PARIS STUDIO?", a: "Visits are strictly by appointment for patron members." },
    { q: "WHAT IS THE REFUND POLICY?", a: "Due to limited edition print runs, all sales are final." },
    { q: "HOW DO I ACCESS THE DIGITAL PORTAL?", a: "Credentials are dispatched via email upon subscription confirmation." }
  ];

  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>DENSE EDITORIAL Q&amp;A // TWO COLUMNS</span>
          <span>INFORMATION DESK</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((f, i) => (
            <div key={i} className="border border-black p-6">
              <span className="text-[9px] font-mono uppercase text-zinc-500 block mb-2">Query 0{i+1}</span>
              <h3 className="text-xl font-black uppercase tracking-tight mb-3 font-serif-editorial">{f.q}</h3>
              <p className="text-xs font-mono leading-relaxed text-zinc-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
