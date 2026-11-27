import React from 'react';

export function Stat1() {
  const stats = [
    { label: 'PEAK POWER', val: '117', unit: 'kW' },
    { label: 'TORQUE OUTPUT', val: '13.1', unit: 'kgm' },
    { label: 'WET WEIGHT', val: '182.5', unit: 'kg' },
    { label: '0-100 ACCEL', val: '2.14', unit: 'SEC' },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// READOUT MATRIX</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">TECHNICAL METRICS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div key={idx} className="bg-[#16181d] border border-[#272a33] p-8 clip-corner">
              <span className="font-mono-spec text-[10px] text-neutral-500 block mb-2">{item.label}</span>
              <div className="font-mono-spec font-bold text-4xl text-white">
                {item.val} <span className="text-xs text-[#ff5a1f]">{item.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
