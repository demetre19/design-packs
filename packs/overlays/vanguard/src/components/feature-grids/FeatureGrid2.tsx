import React from 'react';

export function FeatureGrid2() {
  const rows = [
    { num: '01', title: 'INERTIAL NAVIGATION SYSTEM', detail: 'Fiber-optic gyroscope array with sub-arcsecond precision drift correction.' },
    { num: '02', title: 'SCRAMJET AIR-INTAKE RAMP', detail: 'Variable geometry shock-cone compression for Mach 3 to 6 transition.' },
    { num: '03', title: 'CRYOGENIC FUEL MANAGEMENT', detail: 'Liquid hydrogen feed lines insulated with aerogel composite shielding.' },
    { num: '04', title: 'EJECTION CAPSULE MATRIX', detail: 'Zero-zero rocket catapult seat with automated stabilization chutes.' },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">FEATURE GRID // 02</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
            NUMBERED FEATURE <span className="text-[#ff3d00]">ROWS</span>
          </h2>
        </div>

        <div className="space-y-4">
          {rows.map((r) => (
            <div
              key={r.num}
              className="bg-[#20232a] border border-[#3a3e4c] p-6 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-center space-x-6">
                <span className="text-3xl font-black text-[#ff3d00] font-sans">{r.num}</span>
                <div>
                  <h3 className="text-base font-extrabold uppercase font-sans tracking-wide">{r.title}</h3>
                  <p className="text-xs text-zinc-300 mt-1">{r.detail}</p>
                </div>
              </div>
              <div className="bg-[#16181d] px-4 py-2 border border-[#2a2d35] text-xs text-[#ff3d00] font-bold text-right shrink-0">
                STATUS: NOMINAL
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
