import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function Faq1() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What age range are MellowSprout kits designed for?", a: "Our kits are specially crafted for children aged 3 to 10 years old, with activities tailored for varying developmental stages." },
    { q: "Are the play materials safe and non-toxic?", a: "Yes! 100% of our play dough, paints, and craft materials are organic, non-toxic, food-grade, and child-safe." },
    { q: "Can I cancel or pause my subscription anytime?", a: "Absolutely. You can pause, skip a month, or cancel your subscription with a single click from your parent portal." },
  ];

  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#5ba8e8]/20 text-[#2b7bc0] font-black text-sm uppercase">❓ got questions?</div>
          <h2 className="text-4xl font-black text-[#3d2530]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-[28px] shadow-lg border-2 border-[#3d2530]/10">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between font-black text-xl text-[#3d2530] text-left"
              >
                <span>{faq.q}</span>
                <div className="w-10 h-10 rounded-full bg-[#ff8c42] text-white flex items-center justify-center flex-shrink-0">
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              {openIndex === i && (
                <p className="mt-4 text-[#3d2530]/80 font-medium leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
