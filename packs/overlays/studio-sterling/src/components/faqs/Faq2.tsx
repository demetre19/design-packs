import React from 'react';

export function Faq2() {
  const qas = [
    { num: '1', q: 'How are retainer agreements structured?', a: 'Billed quarterly with guaranteed 24-hour response times and dedicated quarterly deliverables.' },
    { num: '2', q: 'Can you collaborate with existing in-house teams?', a: 'Yes. We frequently embed as lead directors alongside internal architectural design teams.' },
    { num: '3', q: 'What is your approach to typography?', a: 'Rooted in strict Swiss grid principles, negative space balance, and uncompromising legibility.' },
    { num: '4', q: 'Are bespoke typefaces exclusive?', a: 'All commissioned typefaces include full perpetual exclusive licensing for the client.' },
  ];

  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">DOCUMENT Q&A MATRIX</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">FAQ 02</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qas.map((item, idx) => (
            <div key={idx} className="border border-black p-5 bg-neutral-50 flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full text-xs font-bold shrink-0">{item.num}</span>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-tight mb-2">{item.q}</h3>
                <p className="text-[11px] uppercase tracking-wider text-neutral-700 leading-tight">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
