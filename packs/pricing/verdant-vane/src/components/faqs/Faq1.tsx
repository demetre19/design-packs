import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function Faq1() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What is boutique clinical brand architecture?", a: "We design comprehensive visual, spatial, and strategic ecosystems specifically tailored for high-end longevity clinics and holistic medical practices, ensuring absolute trust and warmth." },
    { q: "How long does a typical engagement last?", a: "Engagements range from our 4-week Boutique Audit to 3-month clinical ecosystem transformations and annual enterprise retainers." },
    { q: "Do you assist with physical interior design?", a: "Yes. Our somatic spatial architecture practice specializes in acoustic warmth, lighting design, and patient journey choreography to lower cortisol upon entry." },
    { q: "How do we begin our collaboration?", a: "We begin with a confidential introductory consultation with our founder, Dr. Elena Vance, to assess your practice goals and alignment." }
  ];

  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Common Inquiries
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            Frequently asked questions.
          </h2>
        </div>

        <div className="bg-[#e8f0ec] rounded-[32px] p-8 md:p-12 shadow-sm divide-y divide-[#122420]/10">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6 first:pt-0 last:pb-0">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left gap-4 group"
              >
                <span className="font-serif text-xl text-[#122420] group-hover:text-[#2a7a6d] transition-colors">{faq.q}</span>
                <div className="w-8 h-8 rounded-full bg-[#faf6f0] flex items-center justify-center text-[#1d4f47] flex-shrink-0 shadow-sm">
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openIndex === i && (
                <p className="mt-4 text-[#122420]/80 font-light text-sm leading-relaxed pr-12">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
