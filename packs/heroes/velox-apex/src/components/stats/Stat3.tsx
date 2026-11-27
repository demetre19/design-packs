import React from 'react';

export function Stat3() {
  const items = [
    { num: '01', title: 'BATTERY DENSITY', val: '420 Wh/kg' },
    { num: '02', title: 'CHASSIS WEIGHT', val: '14.2 kg' },
    { num: '03', title: 'BRAKE ROTOR', val: '390 mm' },
    { num: '04', title: 'LEAN LIMIT', val: '64 deg' },
  ];

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// REGISTER STATS WITH OVERSIZED INDEX COLUMN</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
          SPEC <span className="text-[#ff2e00]">INDEX REGISTER</span>
        </h2>

        {/* Register stats with oversized index column */}
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="border-2 border-black p-6 bg-white flex items-center justify-between group hover:bg-neutral-50">
              <div className="flex items-center gap-8">
                <span className="text-4xl sm:text-6xl font-black text-neutral-300 group-hover:text-[#ff2e00] transition-colors">
                  {item.num}
                </span>
                <span className="font-bold text-lg sm:text-2xl uppercase text-black">{item.title}</span>
              </div>
              <div className="bg-black text-white px-6 py-3 font-mono text-xs font-black">
                {item.val}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
