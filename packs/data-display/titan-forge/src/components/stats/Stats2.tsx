import React from 'react';

export function Stats2() {
  const stats = [
    { num: "450K", label: "DAILY TONNAGE CAPACITY", annotation: "SPEC: ORE EXTRACTION PER SITE // ISO-9001" },
    { num: "0.04MS", label: "FIBER BACKBONE LATENCY", annotation: "SPEC: DECENTRALIZED EDGE MESH // ZERO DROP" },
    { num: "1,450°C", label: "SMELTING THERMAL TOLERANCE", annotation: "SPEC: INDUCTION CELL-X // CERAMIC LINING" }
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          HEAVY NUMERALS // STATS 02
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          TECHNICAL <span className="text-[#f25c05]">PERFORMANCE</span> READOUTS.
        </h2>

        <div className="space-y-6">
          {stats.map((s, idx) => (
            <div key={idx} className="border-2 border-black bg-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between">
              <div>
                <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-1">{s.label}</span>
                <div className="text-5xl md:text-6xl font-black font-mono tracking-tighter text-black">{s.num}</div>
              </div>
              <div className="mt-4 md:mt-0 font-mono text-[10px] text-neutral-600 bg-neutral-100 border border-black px-4 py-2 uppercase">
                {s.annotation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
