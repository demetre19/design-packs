/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Faq3 = () => {
  const items = [
    { num: "01", q: "Can I customize the primary color?", a: "The system enforces pure black, pure white, and signal red (#e30613) to maintain strict Swiss design integrity." },
    { num: "02", q: "Are components framework-agnostic?", a: "Provided as self-contained React and Tailwind modules ready for immediate deployment." },
    { num: "03", q: "How do I access updates?", a: "All licenses include continuous access to new system releases and spec sheets." }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">FAQ 03 // NUMBERED LIST FAQ</span>
        </div>

        <div className="border border-[#0a0a0a] divide-y divide-[#0a0a0a]">
          {items.map((item, idx) => (
            <div key={idx} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center space-x-4 md:w-1/3">
                <span className="text-xl font-black font-mono text-[#e30613]">{item.num}.</span>
                <h3 className="text-lg font-bold uppercase tracking-tight">{item.q}</h3>
              </div>
              <div className="md:w-2/3 text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
