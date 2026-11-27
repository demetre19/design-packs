import React from 'react';

export function Stats1() {
  const stats = [
    { label: 'PEAK ROTATIONAL VELOCITY', val: '8,400', unit: 'RPM' },
    { label: 'BRAKE TORQUE OUTPUT', val: '612', unit: 'NM' },
    { label: 'OIL TEMPERATURE', val: '94.2', unit: '°C' },
    { label: 'MANIFOLD BOOST PRESSURE', val: '2.84', unit: 'BAR' },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 01. SENSOR CHANNELS</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mt-2">
            REAL-TIME <span className="text-[#ffd500]">TELEMETRY ROWS.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {stats.map((s, i) => (
            <div key={i} className="bg-[#14161a] border border-[#262c36] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-zinc-400 font-bold uppercase">{s.label}</span>
              <div className="flex items-baseline gap-2 font-mono">
                <span className="text-3xl md:text-4xl font-black text-[#ffd500]">{s.val}</span>
                <span className="text-xs text-zinc-500 uppercase font-bold">{s.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
