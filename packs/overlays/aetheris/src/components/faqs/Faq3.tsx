import React from 'react';

export function Faq3() {
  const faqs = [
    { num: 'I.', q: 'What is the required membership tier for custom complications?', a: 'Bespoke commissions require Sovereign or Imperial fellowship status.' },
    { num: 'II.', q: 'Are vaults insured against catastrophic events?', a: 'All vault contents carry full replacement valuation underwritten by global syndicates.' },
    { num: 'III.', q: 'Can non-members visit the London or Geneva salons?', a: 'Salons are strictly reserved for patrons and invited guests by prior appointment.' }
  ];

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">NUMERICAL FAQ</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">Oldstyle Numeral Inquiries</h2>
        </div>

        <div className="flex flex-col gap-8">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-white/10 pb-6 flex gap-6 items-start">
              <span className="font-serif text-2xl text-[#d4b06a] shrink-0 w-12">{f.num}</span>
              <div>
                <h3 className="font-serif text-xl text-[#ece8e1] mb-2">{f.q}</h3>
                <p className="font-sans text-xs text-[#7a8494] leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
