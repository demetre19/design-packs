import React from 'react';

export function Stat3() {
  const rows = [
    { param: 'MOTOR ARCHITECTURE', val: 'AXIAL FLUX PERMANENT MAGNET' },
    { param: 'BATTERY VOLTAGE', val: '800V DC NOMINAL' },
    { param: 'COOLING SYSTEM', val: 'DIRECT OIL DIELECTRIC STATOR JACKET' },
    { param: 'CHASSIS MATERIAL', val: 'AUTOCLAVED T1000 CARBON MONOCOQUE' },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// SPEC TABLE STATS</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">SPECIFICATION REGISTRY</h2>
        </div>

        <div className="bg-[#16181d] border border-[#272a33] clip-corner divide-y divide-[#272a33]">
          {rows.map((row, idx) => (
            <div key={idx} className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center font-mono-spec text-xs">
              <span className="text-neutral-500 font-bold">{row.param}</span>
              <span className="text-white font-bold mt-1 md:mt-0 text-right">{row.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
