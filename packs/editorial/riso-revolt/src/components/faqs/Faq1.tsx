import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Faq1() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What is risograph printing and why do you use it?", a: "Risograph is a high-speed digital printing system that uses soy-based inks and stencil masters. It creates unique textures and vivid fluorescent colors impossible on standard offset or digital printers." },
    { q: "How long does a complete design sprint take?", a: "Standard sprints take between 2 to 4 weeks from initial research and color separation tests to final digital deployment." },
    { q: "Do you provide source code for web applications?", a: "Yes. Every web project is delivered as a fully production-ready React & Tailwind codebase owned entirely by you." }
  ];

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#ffd92e] border-2 border-[#111111] font-mono text-xs font-black px-3 py-1 shadow-hard-sm">
            KNOWLEDGE BASE
          </div>
          <h2 className="font-grotesk font-black text-4xl uppercase mt-3">FREQUENTLY ASKED QUESTIONS.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-white border-3 border-[#111111] shadow-hard-lg">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left font-grotesk font-black text-xl uppercase"
                >
                  <span>{faq.q}</span>
                  <div className="w-8 h-8 bg-[#ffd92e] border-2 border-[#111111] flex items-center justify-center shadow-hard-sm shrink-0 ml-4">
                    {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 font-mono text-xs sm:text-sm text-[#111111]/80 border-t-2 border-[#111111] pt-4 bg-[#fffdf5]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
