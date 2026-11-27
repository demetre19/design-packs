/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function Faq2() {
  const faqs = [
    { q: "What is the certified drift rate?", a: "Less than 0.001 ppb per day under continuous operation." },
    { q: "How are keys secured?", a: "Silicon PUF hardware encryption embedded in the substrate." },
    { q: "What is the delivery timeline?", a: "3 to 4 weeks including 72-hour Zurich calibration." },
    { q: "Are units compliant with ISO?", a: "Fully compliant with ISO-9001 Level 4 standards." }
  ];

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            Two-Column FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12]">
            Essential specifications.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((f, idx) => (
            <div key={idx} className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm">
              <h3 className="text-base font-medium text-[#0a0e12] mb-2">{f.q}</h3>
              <p className="text-xs text-[#5b6b76] leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
