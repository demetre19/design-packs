import React from 'react';

export function Stat2() {
  const stats = [
    { num: '01', val: '300 KM/H', label: 'TOP SPEED' },
    { num: '02', val: '18,500 RPM', label: 'ROTOR SPEED' },
    { num: '03', val: '12 MIN', label: '0-80% CHARGE' },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// PERFORMANCE INDICES</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">BENCHMARK NUMBERS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item) => (
            <div key={item.num} className="bg-[#16181d] border border-[#272a33] p-8 clip-corner relative overflow-hidden">
              <div className="absolute right-4 bottom-[-10px] font-extrabold text-[120px] text-white/[0.03] select-none pointer-events-none">
                {item.num}
              </div>
              <div className="relative z-10">
                <span className="font-mono-spec text-[10px] text-neutral-500 block mb-2">{item.label}</span>
                <div className="font-display font-extrabold text-4xl text-white text-[#ff5a1f]">
                  {item.val}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
