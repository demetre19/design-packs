import React from 'react';

export default function Stat2() {
  const stats = [
    { num: "01", val: "15+", label: "GLOBAL DESIGN AWARDS" },
    { num: "02", val: "300GSM", label: "ARCHIVAL PAPER STANDARD" },
    { num: "03", val: "48H", label: "AVERAGE SPRINT TURNAROUND" }
  ];

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-[#ffd92e] border-3 border-[#111111] shadow-hard-lg p-8 bg-halftone relative">
            <div className="absolute top-3 right-3 bg-white font-mono text-[10px] font-black px-2 py-0.5 border border-[#111111]">
              {s.num}
            </div>
            <div className="font-grotesk font-black text-5xl mb-3">{s.val}</div>
            <div className="font-mono text-xs font-bold uppercase">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
