import React from 'react';

export function Faq2() {
  const pairs = [
    { q: "Deployment Timeline", a: "Standard enterprise clusters deploy in under 120 seconds via automated containerized scripts.", index: "01" },
    { q: "Legacy SCADA Integration", a: "Strata provides native protocol adapters for IEC 61850, DNP3, and IEEE 1547 legacy hardware.", index: "02" },
    { q: "Telemetry Retention", a: "Time-series database nodes retain 10,000 Hz high-frequency logs for up to 7 years immutably.", index: "03" },
    { q: "Compliance Certification", a: "Fully certified for ISO-27001, NIST SP 800-53, and NERC CIP critical infrastructure standards.", index: "04" }
  ];

  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">REGISTER FAQ MATRIX</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Technical specifications & answers.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[FAQ-02 // TWO COL]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pairs.map((item, i) => (
            <div key={i} className="bg-white p-8 border border-[#0d0e10]/15 flex flex-col gap-4 rounded-[2px]">
              <div className="flex justify-between items-center font-mono text-[10px] text-[#0d0e10]/50">
                <span className="text-[#2743f0] font-bold">SPECIFICATION // {item.index}</span>
                <span>VERIFIED</span>
              </div>
              <h3 className="font-sans font-semibold uppercase text-base">{item.q}</h3>
              <p className="font-mono text-xs text-[#0d0e10]/70 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
