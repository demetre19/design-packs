import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Faq1() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How does Strata Grid achieve sub-millisecond substation failover?", a: "Strata replaces centralized SCADA polling with a decentralized microkernel consensus protocol executing directly on substation edge hardware, eliminating network round-trip latency.", index: "01" },
    { q: "What encryption standard secures telemetry streams?", a: "All telemetry packets are secured using post-quantum lattice cryptography (NIST PQC compliant), ensuring absolute resistance against quantum decryption interference.", index: "02" },
    { q: "How many active substation nodes can a single enterprise cluster manage?", a: "Enterprise clusters support unlimited substation nodes with deterministic phasor synchronization across regional distribution grids.", index: "03" },
    { q: "What is the guaranteed SLA uptime for Strata Grid OS?", a: "We guarantee a 99.999% uptime SLA backed by N+2 redundant mesh architecture and automated regional failover protocols.", index: "04" }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">FREQUENTLY ASKED SPECIFICATIONS</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Operational inquiries & answers.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[FAQ-01 // ACCORDION]</span>
        </div>

        <div className="border border-[#0d0e10]/15 divide-y divide-[#0d0e10]/10 rounded-[2px] bg-[#f2f3f5]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-white">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 flex justify-between items-center text-left font-mono text-xs uppercase tracking-wider font-semibold hover:text-[#2743f0] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#2743f0]">[{faq.index}]</span>
                    <span className="font-sans font-semibold text-sm">{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-[#2743f0]' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 font-mono text-xs text-[#0d0e10]/70 leading-relaxed border-t border-[#0d0e10]/10">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
