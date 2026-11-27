import React from 'react';

export function Faq3() {
  const faqs = [
    { q: 'COMMISSION AVAILABILITY', a: 'Currently booking Q3/Q4 2026 institutional commissions.' },
    { q: 'PRESS & LECTURES', a: 'Inquiries regarding academic lectures and monograph reviews should be sent to press@studio-sterling.com.' },
    { q: 'ARCHIVAL ACCESS', a: 'Physical copies of out-of-print monographs can be reviewed at our London and Zurich reading rooms by appointment.' },
  ];

  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">SINGLE-COLUMN HAIRLINE FAQ</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">FAQ 03</span>
        </div>
        <div className="border border-black divide-y divide-black">
          {faqs.map((f, idx) => (
            <div key={idx} className="p-6 bg-white">
              <h3 className="font-black text-xs uppercase tracking-tight mb-2 text-neutral-900">{f.q}</h3>
              <p className="text-[11px] uppercase tracking-wider text-neutral-700 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
