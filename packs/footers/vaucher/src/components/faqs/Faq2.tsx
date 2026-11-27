import React from 'react';
import { Compass } from 'lucide-react';

export function Faq2() {
  const faqs = [
    { q: "What is the Geneva Seal?", a: "An official certification issued exclusively to watch movements crafted within Geneva, guaranteeing exceptional finish and performance." },
    { q: "Can I request custom dial engravings?", a: "Bespoke monogramming and crest engraving are available upon request for Master Edition pieces." },
    { q: "What is the warranty period?", a: "All Vaucher & Fils timepieces include an international 5-year master warranty." },
    { q: "How do I book a private atelier viewing?", a: "Contact our Geneva salon via telephone or through our private appointment inquiry form." }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">FAQ 02 · TWO-COLUMN FAQ</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Atelier Knowledge Base</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border border-[#d0d0cc] p-6 space-y-3">
            <h3 className="text-base font-light tracking-wide text-[#232a30]">{faq.q}</h3>
            <p className="font-mono text-xs text-[#232a30]/70 tracking-wider leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
