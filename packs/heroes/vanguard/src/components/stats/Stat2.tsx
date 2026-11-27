import React from 'react';

export function Stat2() {
  const stats = [
    { num: '01', label: 'SORTIES EXECUTED', val: '12 / 12' },
    { num: '02', label: 'WIND TUNNEL HOURS', val: '4,850 H' },
    { num: '03', label: 'MAX STAGNATION TEMP', val: '1,900 °C' },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">STATS // 02</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
            PERFORMANCE NUMBERS WITH <span className="text-[#ff3d00]">WATERMARK NUMERALS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div
              key={s.num}
              className="bg-[#20232a] border border-[#3a3e4c] p-8 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] relative overflow-hidden space-y-4"
            >
              <div className="absolute -bottom-4 -right-2 text-8xl font-black text-white/[0.04] font-sans pointer-events-none">
                {s.num}
              </div>
              <span className="text-xs font-black text-[#ff3d00] block">{s.num} // STAT</span>
              <div className="text-4xl font-black font-sans text-white">{s.val}</div>
              <div className="text-xs text-zinc-400 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
