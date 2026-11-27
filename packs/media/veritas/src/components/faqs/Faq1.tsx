/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function Faq1() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "What is the certified drift rate of Veritas Series 01 oscillators?", a: "Veritas Series 01 quartz oscillators maintain a certified drift rate of less than 0.001 ppb per day when operated within our recommended thermal envelope." },
    { q: "How are hardware cryptographic signatures verified?", a: "Every telemetry packet is signed via silicon-level Physically Unclonable Functions (PUF) embedded directly within the quartz crystal substrate." },
    { q: "What is the standard delivery timeline for sovereign vault tiers?", a: "Due to the 72-hour thermal cycling and calibration process in our Zurich laboratory, standard commissioning and delivery takes between 3 to 4 weeks." },
    { q: "Are Veritas instruments compliant with central banking standards?", a: "Yes. All units are fully compliant with ISO-9001 Level 4 specifications and FIPS 140-3 Level 4 hardware cryptographic standards." }
  ];

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-3 block">
            Institutional Clarifications
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12]">
            Frequently asked questions.
          </h2>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-2xl divide-y divide-[#e2e8f0] shadow-sm">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="p-6">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <span className="text-base font-medium text-[#0a0e12]">{f.q}</span>
                  <div className="w-7 h-7 rounded-full bg-[#f6f8fa] border border-[#e2e8f0] flex items-center justify-center text-[#0a0e12] shrink-0">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>
                {isOpen && (
                  <p className="text-xs text-[#5b6b76] mt-4 leading-relaxed pr-12">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
