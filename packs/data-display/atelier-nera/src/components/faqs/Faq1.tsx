import React from 'react';

export function Faq1() {
  const faqs = [
    { q: "what is atelier nera's engagement model?", a: "We operate on a curated commission basis, accepting up to three clients per quarter to ensure absolute creative focus." },
    { q: "do you handle both brand identity and digital engineering?", a: "Yes. We design and build end-to-end bespoke digital systems and physical monographs without outsourcing." },
    { q: "what is the typical timeline for a monograph project?", a: "Engagements typically span between six to twelve weeks from initial research to final deployment." },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="text-[9px] tracking-widest uppercase text-black/50 mb-12">frequently asked questions</div>
      <div className="divide-y divide-black/10">
        {faqs.map((faq, idx) => (
          <div key={idx} className="py-8 space-y-4">
            <div className="flex justify-between items-center cursor-pointer">
              <h4 className="font-light text-xl lowercase">{faq.q}</h4>
              <span className="text-lg font-light text-black/40">+</span>
            </div>
            <p className="font-light text-xs text-black/70 leading-relaxed max-w-2xl">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
