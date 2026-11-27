/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Faq1 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { num: "01", q: "WHAT IS THE SWISS INTERNATIONAL TYPOGRAPHIC ORDER?", a: "A rigorous design system rooted in mathematical grid alignments, neo-grotesque sans-serif letterforms, and absolute binary contrast." },
    { num: "02", q: "HOW IS SIGNAL RED (#E30613) APPLIED?", a: "Signal red is used exclusively with surgical restraint for index markers, optical focus points, and critical indicators." },
    { num: "03", q: "ARE THERE ANY ROUNDED CORNERS OR GRADIENTS?", a: "No. All containers adhere to strict 0px border-radius and solid flat color blocks." }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">FAQ 01 // RULED ROWS WITH RED INDEX NUMBERS</span>
        </div>

        <div className="border border-[#0a0a0a] divide-y divide-[#0a0a0a]">
          {faqs.map((f, idx) => (
            <div key={idx} className="p-6">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left font-bold uppercase tracking-tight text-lg"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-[#e30613] font-mono font-bold text-sm">{f.num}.</span>
                  <span>{f.q}</span>
                </div>
                {openIndex === idx ? <ChevronUp className="w-5 h-5 text-[#e30613]" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openIndex === idx && (
                <div className="mt-4 pt-4 border-t border-[#0a0a0a]/20 text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80 pl-8">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
