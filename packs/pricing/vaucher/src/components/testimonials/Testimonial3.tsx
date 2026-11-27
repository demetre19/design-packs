import React from 'react';
import { Compass } from 'lucide-react';

export function Testimonial3() {
  const reviews = [
    { text: "Uncompromising engineering standards.", author: "ARTHUR P.", loc: "ZÜRICH" },
    { text: "The balance wheel stability is peerless.", author: "BEATRICE D.", loc: "GENEVA" },
    { text: "Quiet luxury in its purest mechanical form.", author: "MARCUS V.", loc: "LONDON" }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">TESTIMONIAL 03 · 3-COLUMN PANELS</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Collector Impressions</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-white border border-[#d0d0cc] p-8 space-y-6 flex flex-col justify-between">
            <p className="font-mono text-xs text-[#232a30]/80 tracking-wider leading-relaxed">
              &ldquo;{rev.text}&rdquo;
            </p>
            <div className="pt-4 border-t border-[#d0d0cc]/50">
              <div className="font-mono text-xs text-[#232a30] font-semibold">{rev.author}</div>
              <div className="font-mono text-[10px] text-[#2e5e8e] tracking-widest mt-0.5">{rev.loc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
