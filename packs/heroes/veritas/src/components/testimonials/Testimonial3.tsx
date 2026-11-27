/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function Testimonial3() {
  const list = [
    {
      quote: "Absolute zero-drift timing precision for sovereign institutional clearing.",
      author: "Dr. Alistair Vance",
      firm: "Sovereign Monetary Authority"
    },
    {
      quote: "Uncompromising titanium chassis construction built for multi-decade durability.",
      author: "Helena Rostova",
      firm: "Zurich Quantitative Trust"
    },
    {
      quote: "Seamless integration into central bank vault telemetry frameworks.",
      author: "Siddharth Nair",
      firm: "Geneva Clearing Corporation"
    }
  ];

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            Institutional Feedback Grid
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12]">
            Trusted by global financial authorities.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {list.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm flex flex-col justify-between">
              <blockquote className="text-sm text-[#0a0e12] leading-relaxed mb-8">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-[#f1f4f8]">
                <div className="font-semibold text-xs text-[#0a0e12]">{item.author}</div>
                <div className="text-[11px] text-[#5b6b76] mt-0.5">{item.firm}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
