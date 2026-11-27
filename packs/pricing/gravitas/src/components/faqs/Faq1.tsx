import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Faq1() {
  const faqs = [
    { q: 'What licensing tier is required for client commercial work?', a: 'Studio Pro ($180) covers up to 10 active workstations and commercial client deliverables.' },
    { q: 'Are variable font axis files included in all purchases?', a: 'Yes. All twelve optical weights and variable OTF files are included immediately upon checkout.' },
    { q: 'Can I embed Gravitas on high-traffic web domains using WOFF2?', a: 'Yes, Studio and Enterprise licenses include unlimited WOFF2 web font embedding rights.' },
    { q: 'Do you offer educational discounts for design students?', a: 'Individual student licenses are available at 50% discount upon verification of institutional ID.' },
  ];

  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">FAQ 01 // Weight-Indexed Accordion</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Frequently Asked Questions</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">QUESTIONS SET HEAVIER THAN ANSWERS</span>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-neutral-800 bg-neutral-950 p-6 space-y-3">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-xl font-bold tracking-tight text-white">{faq.q}</h3>
                <ChevronDown className="w-4 h-4 text-neutral-400" />
              </div>
              <p className="text-sm font-light text-neutral-400 leading-relaxed pt-2 border-t border-neutral-900">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
