/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Faq2 = () => {
  const faqs = [
    { num: "01", q: "LICENSING SCOPE", a: "All components include perpetual multi-user digital licensing for institutional and commercial applications." },
    { num: "02", q: "TYPOGRAPHIC SPEC", a: "Optimized for Helvetica-style grotesque proportions with precise em-quad scaling." },
    { num: "03", q: "GRID RESPONSIVENESS", a: "Fluid column structures built entirely on mathematical ratios and strict 12-column breakpoints." },
    { num: "04", q: "ARCHIVAL ACCESS", a: "Full access to the Zürich design museum artifact repositories and historical specimens." }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">FAQ 02 // TWO-COLUMN RULED FAQ</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#0a0a0a] border border-[#0a0a0a]">
          {faqs.map((f, idx) => (
            <div key={idx} className={`p-8 ${idx > 1 ? 'border-t border-[#0a0a0a]' : ''} space-y-4`}>
              <div className="flex items-center space-x-2">
                <span className="text-[#e30613] font-mono font-bold text-sm">{f.num}.</span>
                <h3 className="text-lg font-bold uppercase tracking-tight">{f.q}</h3>
              </div>
              <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80 pl-6">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
