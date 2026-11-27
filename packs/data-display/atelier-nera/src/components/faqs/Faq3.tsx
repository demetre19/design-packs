import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Faq3() {
  const faqs = [
    "how do we begin a commission?",
    "what are the payment milestones?",
    "can we review past monographs?",
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="text-[9px] tracking-widest uppercase text-black/50 mb-12">quick answers</div>
      <div className="space-y-4">
        {faqs.map((f, idx) => (
          <div key={idx} className="p-6 border border-black/10 flex items-center justify-between group cursor-pointer hover:border-black transition-colors">
            <span className="font-light text-base lowercase">{f}</span>
            <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1 transition-transform" />
          </div>
        ))}
      </div>
    </section>
  );
}
