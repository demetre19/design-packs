import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function Faq1() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What is the certified daily rate tolerance of Vaucher calibers?", a: "Every Vaucher movement is adjusted to strict tolerances of -1 to +2 seconds per diem, surpassing standard COSC requirements." },
    { q: "How frequently must an annual calendar movement be serviced?", a: "We recommend professional ultrasonic cleansing, oil replacement, and positional timing checks every 4 to 5 years." },
    { q: "Are all components finished by hand in Geneva?", a: "Yes. Every bridge angle, screw head bevel, and perlage impression is executed by hand using traditional tools." }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">FAQ 01 · RULED ROWS WITH THIN PLUS MARKS</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Frequently Asked Specifications</h2>
      </div>

      <div className="divide-y divide-[#d0d0cc] border-y border-[#d0d0cc] bg-white">
        {faqs.map((faq, idx) => (
          <div key={idx} className="p-6">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-lg font-light tracking-wide text-[#232a30]">{faq.q}</span>
              <span className="text-[#2e5e8e]">
                {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {openIndex === idx && (
              <p className="font-mono text-xs text-[#232a30]/70 tracking-wider leading-relaxed pt-4">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
