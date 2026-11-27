/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Testimonial2 = () => {
  const testimonials = [
    { num: "01", quote: "Absolute structural clarity. Every pixel is locked to the vertical rhythm.", author: "Max Bill Jr. // Typographic Society" },
    { num: "02", quote: "No ornamentation, pure function. Exactly what Swiss design stands for.", author: "Sophie Keller // Basel Academy" }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">TESTIMONIAL 02 // STRICT GRID COLUMNS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#0a0a0a] border border-[#0a0a0a]">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 md:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-black font-mono text-[#e30613]">{t.num}.</span>
                <p className="text-lg font-bold uppercase tracking-tight leading-snug">“{t.quote}”</p>
              </div>
              <div className="border-t border-[#0a0a0a]/20 pt-4 text-[10px] font-mono uppercase tracking-widest text-[#0a0a0a]/70">
                {t.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
