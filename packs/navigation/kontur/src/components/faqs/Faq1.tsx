/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Faq1: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    { q: 'WHAT IS THE DRESS CODE FOR THE SYMPOSIUM?', a: 'Strictly black and white attire in alignment with the Swiss typographic standard.' },
    { q: 'ARE REFUNDS AVAILABLE FOR TICKET PURCHASES?', a: 'Tickets are transferrable to other registered designers up to 7 days before the event.' },
    { q: 'WILL ARCHIVAL SPECIMEN BOOKS BE SHIPPED?', a: 'Yes, professional and fellowship tier holders receive physical books post-symposium.' },
  ];

  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-6">[01 // INDEXED ACCORDION]</div>
      <div className="border border-white/20 divide-y divide-white/20">
        {faqs.map((faq, idx) => (
          <div key={idx} className="p-6">
            <button 
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full flex justify-between items-center text-left"
            >
              <div className="flex items-baseline space-x-6">
                <span className="text-xl font-mono font-black opacity-40">0{idx + 1}</span>
                <span className="text-lg font-bold tracking-tight uppercase">{faq.q}</span>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
            </button>
            {open === idx && (
              <div className="mt-4 pl-10 text-xs font-mono tracking-wider opacity-80 leading-relaxed border-t border-white/10 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
