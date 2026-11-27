import React from 'react';

export default function Stat1() {
  const stats = [
    { num: "1,420+", label: "RISO EDITIONS PRINTED" },
    { num: "100%", label: "BESPOKE REACT CODE" },
    { num: "52.5°N", label: "BERLIN LAB LATITUDE" },
    { num: "340%", label: "AVERAGE CLIENT GROWTH" }
  ];

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white border-3 border-[#111111] shadow-hard-lg p-6 text-center flex flex-col justify-between">
              <div className="font-grotesk font-black text-4xl sm:text-5xl text-[#ff6b5e] mb-2">{s.num}</div>
              <div className="font-mono text-xs font-bold uppercase text-[#111111]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
