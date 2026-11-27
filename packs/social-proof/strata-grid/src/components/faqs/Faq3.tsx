import React from 'react';

export function Faq3() {
  const items = [
    { num: "01", q: "How are substation nodes synchronized?", a: "Atomic clock hardware sync ensures sub-millisecond phasor measurement across all regional clusters." },
    { num: "02", q: "What is the failover latency?", a: "Autonomous substation microkernel agents reroute power in 120 microseconds during grid faults." },
    { num: "03", q: "Is sovereign cloud deployment supported?", a: "Yes, full air-gapped sovereign installations are available for national utility providers." }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">NUMBERED FAQ REGISTER</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Key operational questions.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[FAQ-03 // NUMBERED]</span>
        </div>

        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <div key={i} className="bg-[#f2f3f5] p-6 border border-[#0d0e10]/15 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between rounded-[2px]">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#2743f0] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0 rounded-[2px]">
                  {item.num}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-sans font-semibold uppercase text-sm">{item.q}</h3>
                  <p className="font-mono text-xs text-[#0d0e10]/70">{item.a}</p>
                </div>
              </div>
              <span className="font-mono text-[10px] text-[#2743f0] font-bold uppercase shrink-0">VERIFIED</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
