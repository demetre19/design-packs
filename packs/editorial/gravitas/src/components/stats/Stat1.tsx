import React from 'react';

export function Stat1() {
  const stats = [
    { num: '846', label: 'GLYPH COUNT PER CUT' },
    { num: '12', label: 'DISCRETE WEIGHTS' },
    { num: '30+', label: 'OPEN-TYPE LIGATURES' },
    { num: '4', label: 'SUPERFAMILY FAMILIES' },
  ];

  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Stats 01 // Weight Monuments</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Foundry Metrics & Capacity</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">VERIFIED SPECIMEN DATA</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-neutral-800">
          {stats.map((st, idx) => (
            <div key={idx} className="border-r border-b border-neutral-800 p-8 bg-neutral-950 space-y-4">
              <div className="text-6xl font-black tracking-tighter text-white">{st.num}</div>
              <div className="text-xs font-mono text-neutral-400 tracking-widest uppercase">{st.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
