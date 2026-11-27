import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Faq1() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'What is the maximum RPM capacity of Cell 04?', a: 'Cell 04 is engineered to support rotational velocities up to 12,000 RPM with optical laser interferometers and dynamic balancing.' },
    { q: 'How are telemetry streams exported?', a: 'All sensor channels export in real-time via encrypted JSON or direct CSV data feeds at 1,000 Hz sampling frequency.' },
    { q: 'Are resident engineers present during test runs?', a: 'Yes. Every allocated program includes senior Kershaw powertrain engineers to oversee thermal and torque calibration.' },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 01. TECHNICAL FAQ</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mt-2">
            FREQUENTLY <span className="text-[#ffd500]">ASKED QUESTIONS.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#14161a] border border-[#262c36]">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 flex items-center justify-between font-bold text-xs uppercase tracking-wider text-white hover:text-[#ffd500] transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-[#ffd500] transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 pt-0 text-zinc-400 font-sans text-xs border-t border-[#22262f] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
