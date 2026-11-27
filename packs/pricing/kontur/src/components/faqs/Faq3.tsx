/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Faq3: React.FC = () => {
  const faqs = [
    { label: 'ACCREDITATION', answer: 'Press credentials are issued by the editorial board upon verification of published design monographs.' },
    { label: 'CATERING', answer: 'Minimalist lunches and black coffee served daily in the main courtyard between sessions.' },
    { label: 'ARCHIVES', answer: 'All conference proceedings are compiled into the annual Kontur Monograph distributed in November.' },
  ];

  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[03 // HAIRLINE FAQ]</div>
      <div className="max-w-2xl mx-auto border-t border-white/20 divide-y divide-white/20">
        {faqs.map((f, i) => (
          <div key={i} className="py-6 space-y-2">
            <div className="text-xs font-mono tracking-[0.2em] opacity-60">Q.0{i + 1} // {f.label}</div>
            <p className="text-sm font-mono tracking-wider opacity-90 leading-relaxed">{f.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
