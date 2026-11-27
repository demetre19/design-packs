import React from 'react';

export function Stat1() {
  const stats = [
    { num: '12+', label: 'Years in Practice' },
    { num: '34', label: 'Monographs Designed' },
    { num: '18', label: 'Exhibition Venues' },
    { num: '99%', label: 'Precision Rating' },
  ];

  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">METRICS & NUMERICAL ARCHIVE</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">STAT 01</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div key={idx} className="border border-black p-6 bg-neutral-50 flex flex-col justify-between">
              <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-4">METRIC 0{idx + 1}</div>
              <div className="text-5xl md:text-6xl font-black tracking-tighter mb-2 border-b border-black pb-2">{s.num}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-800">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
