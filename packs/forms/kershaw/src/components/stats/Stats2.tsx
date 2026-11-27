import React from 'react';

export function Stats2() {
  const stats = [
    { num: '01', val: '8,400 RPM', label: 'MAX ROTATION' },
    { num: '02', val: '612 NM', label: 'PEAK TORQUE' },
    { num: '03', val: '2.84 BAR', label: 'BOOST PRESSURE' },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 02. WATERMARK METRICS</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mt-2">
            PERFORMANCE <span className="text-[#ffd500]">WATERMARKS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="bg-[#14161a] border border-[#262c36] p-8 relative overflow-hidden flex flex-col justify-between h-56">
              <span className="absolute right-2 top-0 text-8xl font-black text-zinc-900/60 pointer-events-none select-none">
                {s.num}
              </span>
              <span className="text-xs text-[#ffd500] font-bold relative z-10">CHANNEL // {s.num}</span>
              <div className="relative z-10">
                <span className="text-3xl font-black text-white block mb-1">{s.val}</span>
                <span className="text-xs text-zinc-400 uppercase tracking-wider">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
