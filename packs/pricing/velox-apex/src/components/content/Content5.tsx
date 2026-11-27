import React from 'react';

export function Content5() {
  const legacyFailures = [
    { idx: 'A.01', title: 'THERMAL DISSIPATION LOSS', detail: '68% of fuel enthalpy rejected as exhaust & radiator heat before reaching the crank.' },
    { idx: 'A.02', title: 'RECIPROCATING MASS LAG', detail: '420 ms throttle-to-wheel delay across cam actuation, intake plenum, and 6-speed gearbox.' },
    { idx: 'A.03', title: 'GYROSCOPIC CRANKSHAFT DRAG', detail: '18,400 moving tolerances resisting rapid directional change at apex entry.' },
  ];

  const veloxSupremacy = [
    { label: 'ELECTROMECHANICAL EFFICIENCY', pct: '99%', value: '99.4%' },
    { label: 'THROTTLE RESPONSE LATENCY', pct: '100%', value: '0.2 MS' },
    { label: 'TORQUE AVAILABILITY @ 0 RPM', pct: '100%', value: '305 NM' },
  ];

  return (
    <section className="w-full border-b-2 border-black relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        {/* Center Seam Collision Anchor */}
        <div
          aria-hidden="true"
          className="hidden lg:flex flex-col items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none"
        >
          <div className="bg-[#ff2e00] text-black border-2 border-black px-5 py-3 font-black text-5xl tracking-tighter leading-none">
            VS
          </div>
          <div className="bg-black text-white font-mono text-[10px] tracking-[0.25em] px-2 py-1 uppercase border border-black mt-1">
            01 // 02
          </div>
        </div>

        {/* ZONE A — WHITE PAPER: Rigid Stepped Prose List + Rotated Margin Word */}
        <div className="bg-white text-black p-8 sm:p-12 lg:pr-20 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex gap-6 relative">
          <div className="hidden sm:flex items-center justify-center [writing-mode:vertical-lr] rotate-180 font-black text-5xl tracking-tighter uppercase text-neutral-200 select-none shrink-0">
            COMBUSTION
          </div>

          <div className="flex-1">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500 mb-2">
              THESIS 01 / LEGACY MECHANICAL LIMIT
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.88] mb-10">
              THERMAL <br />FRICTION
            </h2>

            <ol className="space-y-6 border-t-2 border-black pt-6">
              {legacyFailures.map((item) => (
                <li key={item.idx} className="border-b border-neutral-300 pb-5">
                  <div className="font-mono text-[10px] font-bold text-neutral-400 mb-1">
                    {item.idx}
                  </div>
                  <h3 className="font-black text-lg uppercase tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[11px] text-neutral-600 leading-relaxed">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ZONE B — BLACK INVERSION: Proportional Bar Gauges + Dominant Callouts */}
        <div className="bg-black text-white p-8 sm:p-12 lg:pl-20 flex flex-col justify-between relative">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#ff2e00] font-bold mb-2">
              ANTITHESIS 02 / VELOX SOLID-STATE ARCHITECTURE
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.88] mb-10">
              DIRECT <span className="text-[#ff2e00]">KINETICS</span>
            </h2>

            {/* Completely different internal layout: proportional meter bars */}
            <div className="space-y-7">
              {veloxSupremacy.map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between items-baseline font-mono text-[11px] mb-2">
                    <span className="text-neutral-300 uppercase tracking-wider">{bar.label}</span>
                    <span className="text-2xl font-sans font-black text-[#ff2e00] tabular-nums">
                      {bar.value}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-neutral-900 border border-neutral-700">
                    <div
                      className="h-full bg-[#ff2e00]"
                      style={{ width: bar.pct }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-neutral-800 flex items-end justify-between gap-4">
            <div className="text-6xl sm:text-7xl font-black tracking-tighter leading-none text-white tabular-nums">
              0<span className="text-[#ff2e00]">.</span>0
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 text-right max-w-[200px]">
              CLUTCH SHIFTS REQUIRED FROM STANDSTILL TO 310 KM/H TERMINAL SPEED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
