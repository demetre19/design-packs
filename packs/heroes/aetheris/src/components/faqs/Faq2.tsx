import React, { useState } from 'react';

export function Faq2() {
  const [activeTab, setActiveTab] = useState(0);

  const faqs = [
    { q: 'Vault Security Standards', a: 'Subterranean strongrooms are protected by multi-factor biometric verification and continuous atmospheric monitoring.' },
    { q: 'Allocation Priority', a: 'Fellowship members receive first refusal on all limited-edition complications and bespoke calibers.' },
    { q: 'Servicing and Maintenance', a: 'Every timekeeper includes lifetime acoustic tuning and biannual oil viscosity testing at our Geneva atelier.' },
    { q: 'Provenance Registration', a: 'Ownership records are immutably bound to secure digital ledgers backed by physical titanium passport cards.' }
  ];

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">TWO-COLUMN FAQ</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">Patronage Guidelines</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#13171c] border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#d4b06a] block mb-2">QUERY // 0{i + 1}</span>
                <h3 className="font-serif text-lg text-[#ece8e1] mb-3">{f.q}</h3>
                <p className="font-sans text-xs text-[#7a8494] leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
