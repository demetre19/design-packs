import React from 'react';

export function Faq2() {
  const faqs = [
    { q: 'WHAT IS THE WARRANTY ON SOLID-STATE CELLS?', a: 'All solid-state accumulators are backed by an 8-year or 100,000km performance retention guarantee.' },
    { q: 'CAN I CUSTOMIZE RIDER ERGONOMICS?', a: 'Yes. Factory race allocations include custom laser-scanned rearsets and handlebar positioning.' },
    { q: 'WHAT ARE THE SHIPPING PROTOCOLS?', a: 'Machines are delivered in reinforced titanium flight cases directly to your designated track or residence.' },
  ];

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Big-title left column */}
        <div className="lg:col-span-5">
          <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// TWO-COLUMN FAQ</div>
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            FREQUENT <br />
            <span className="text-[#ff2e00]">DISPATCHES</span>
          </h2>
          <p className="font-mono text-xs text-neutral-600">
            Everything you need to know about reserving, configuring, and piloting a Velox Apex hyper-machine.
          </p>
        </div>

        {/* Right column FAQ items */}
        <div className="lg:col-span-7 space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-2 border-black p-6 bg-white space-y-3">
              <div className="font-mono text-[10px] text-[#ff2e00] font-bold">// INQUIRY 0{idx + 1}</div>
              <h3 className="font-black text-lg uppercase">{faq.q}</h3>
              <p className="font-mono text-xs text-neutral-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
