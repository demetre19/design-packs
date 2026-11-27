import React from 'react';
import { Compass } from 'lucide-react';

export function Faq3() {
  const faqs = [
    { ref: "FAQ. 01", q: "What materials are used for balance springs?", a: "Proprietary silicon alloy offering total resistance to magnetic fields." },
    { ref: "FAQ. 02", q: "How is water resistance tested?", a: "Each case undergoes pneumatic and immersion testing up to 3 ATM." },
    { ref: "FAQ. 03", q: "Where are spare parts manufactured?", a: "100% in-house at our Geneva Rue du Rhône manufacturing facilities." }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">FAQ 03 · REFERENCE-NUMBERED FAQ</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Technical Inquiries</h2>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border border-[#d0d0cc] p-6 space-y-2">
            <div className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.3em]">{faq.ref}</div>
            <h3 className="text-lg font-light tracking-wide text-[#232a30]">{faq.q}</h3>
            <p className="font-mono text-xs text-[#232a30]/70 tracking-wider">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
