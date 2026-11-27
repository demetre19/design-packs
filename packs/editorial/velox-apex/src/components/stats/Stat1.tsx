import React from 'react';

export function Stat1() {
  const stats = [
    { num: '2.1', unit: 'SEC', label: '0-100 KM/H ACCELERATION' },
    { num: '310', unit: 'KM/H', label: 'TERMINAL TOP SPEED' },
    { num: '340', unit: 'KG', label: 'AERO DOWNFORCE AT V_MAX' },
    { num: '998', unit: 'V', label: 'SOLID STATE ACCUMULATOR' },
  ];

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// GIGANTIC NUMERAL METRICS</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
          RAW <span className="text-[#ff2e00]">TELEMETRY</span>
        </h2>

        {/* Gigantic numerals with tiny mono unit annotations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, idx) => (
            <div key={idx} className="border-2 border-black p-6 bg-white flex flex-col justify-between">
              <div className="font-mono text-[10px] text-neutral-500 mb-4 uppercase">// METRIC 0{idx + 1}</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl sm:text-7xl font-black tracking-tighter text-black">
                  {s.num}
                </span>
                <span className="font-mono text-xs font-bold text-[#ff2e00]">
                  {s.unit}
                </span>
              </div>
              <div className="font-mono text-xs text-neutral-600 font-bold uppercase border-t border-black pt-3">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
