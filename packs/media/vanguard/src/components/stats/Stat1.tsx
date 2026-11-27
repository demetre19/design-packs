import React from 'react';

export function Stat1() {
  const stats = [
    { label: 'PEAK MACH RATING', val: 'M 4.8', unit: 'MACH' },
    { label: 'STRATOSPHERIC ALTITUDE', val: 'FL650', unit: 'FEET' },
    { label: 'MAX G-LOAD FACTOR', val: '+9.2 G', unit: 'GRAVITY' },
    { label: 'SCRAMJET ISP', val: '1,450', unit: 'SECONDS' },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">STATS // 01</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
            INSTRUMENT READOUT <span className="text-[#ff3d00]">ROWS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[#20232a] border border-[#3a3e4c] p-6 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] space-y-2"
            >
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest">{s.label}</div>
              <div className="text-3xl font-black font-sans text-[#ff3d00]">{s.val}</div>
              <div className="text-[10px] text-zinc-500 font-bold">UNIT: {s.unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
