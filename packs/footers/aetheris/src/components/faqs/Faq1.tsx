import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function Faq1() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'How are timepieces allocated to patrons?', a: 'Allocation follows our strict Patronage Fellowship index, prioritizing long-term collectors and family offices.' },
    { q: 'What security measures protect the subterranean vaults?', a: 'Our vaults feature biometric multi-signature access, seismic isolation foundations, and quantum encrypted digital ledgers.' },
    { q: 'Can I commission a completely custom complication?', a: 'Yes. Our master watchmakers in Geneva collaborate with a select group of patrons annually on bespoke creations.' },
    { q: 'Where are Aetheris private salons located?', a: 'We maintain private salons in Geneva, London, Tokyo, and Zurich by appointment only.' }
  ];

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">FREQUENT INQUIRIES</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">Frequently Addressed Protocol</h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-white/10 py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="font-serif text-lg text-[#ece8e1]">{f.q}</span>
                  <span className="text-[#d4b06a]">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="font-sans text-xs text-[#7a8494] mt-4 leading-relaxed max-w-2xl">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
