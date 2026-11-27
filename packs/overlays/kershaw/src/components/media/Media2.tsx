import React from 'react';

export function Media2() {
  const items = [
    { run: 'RUN 07', title: 'V8 TWIN-TURBO SPINDLE' },
    { run: 'RUN 06', title: 'HYBRID CELL ROTOR' },
    { run: 'RUN 05', title: 'TITANIUM VALVE TRAY' },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 02. RUN GALLERY GRID</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mt-2">
            TELEMETRY <span className="text-[#ffd500]">VISUAL REGISTERS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-[#14161a] border border-[#262c36] p-6 h-64 flex flex-col justify-between hover:border-[#ffd500] transition-colors relative overflow-hidden">
              <span className="text-xs text-[#ffd500] font-bold">{item.run}</span>
              <div>
                <h3 className="text-base font-bold uppercase tracking-wider text-white mb-2">{item.title}</h3>
                <span className="text-[10px] text-zinc-500">OPTICAL SENSOR FEED // ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
