import React from 'react';

export function Content15() {
  const radialNodes = [
    {
      angle: '0° / TDC',
      title: 'CRANK VELOCITY',
      val: '8,400 RPM',
      posClass: 'lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:text-center',
    },
    {
      angle: '60° / INTAKE',
      title: 'MASS AIRFLOW',
      val: '0.842 KG/S',
      posClass: 'lg:top-28 lg:right-4 lg:text-right',
    },
    {
      angle: '120° / BOOST',
      title: 'MANIFOLD ABS',
      val: '2.84 BAR',
      posClass: 'lg:bottom-28 lg:right-4 lg:text-right',
    },
    {
      angle: '180° / BDC',
      title: 'BRAKE TORQUE',
      val: '612 NM',
      posClass: 'lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:text-center',
    },
    {
      angle: '240° / EXHAUST',
      title: 'TURBINE EGT',
      val: '890.4°C',
      posClass: 'lg:bottom-28 lg:left-4 lg:text-left',
    },
    {
      angle: '300° / SUMP',
      title: 'OIL THERMAL',
      val: '94.2°C',
      posClass: 'lg:top-28 lg:left-4 lg:text-left',
    },
  ];

  return (
    <section className="relative bg-[#040406] text-white py-20 px-6 border-t-4 border-b-4 border-[#ffd500] font-mono overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 text-[10px] tracking-[0.28em] text-zinc-400">
          <span className="text-[#ffd500] font-extrabold">// INVERTED TELEMETRY VAULT · 360° CRANK-ANGLE DIAL</span>
          <span>CELL 04 ISOLATION CHAMBER · RUN 07/40</span>
        </div>

        {/* Radial Orbital Stage */}
        <div className="relative lg:h-[640px] flex flex-col lg:block gap-6">
          {/* Concentric Circular SVG Calibration Rings */}
          <div className="lg:absolute lg:inset-0 flex items-center justify-center pointer-events-none">
            <svg viewBox="0 0 560 560" className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px]">
              {/* Outer Degree Tick Ring */}
              <circle cx="280" cy="280" r="245" fill="none" stroke="#262c36" strokeWidth="1" />
              <circle cx="280" cy="280" r="205" fill="none" stroke="#1e222b" strokeDasharray="3 5" strokeWidth="1.5" />
              {/* Phosphor Redline Arc */}
              <path
                d="M 280 55 A 225 225 0 0 1 485 188"
                fill="none"
                stroke="#ffd500"
                strokeWidth="4"
              />
              {/* Radial Spokes to 6 Polar Anchors */}
              {[0, 60, 120, 180, 240, 300].map((deg) => {
                const rad = ((deg - 90) * Math.PI) / 180;
                const x1 = 280 + Math.cos(rad) * 105;
                const y1 = 280 + Math.sin(rad) * 105;
                const x2 = 280 + Math.cos(rad) * 235;
                const y2 = 280 + Math.sin(rad) * 235;
                return (
                  <g key={deg}>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ffd500" strokeOpacity="0.4" strokeWidth="1" />
                    <circle cx={x2} cy={y2} r="4" fill="#ffd500" />
                  </g>
                );
              })}
              {/* Center Core Ring */}
              <circle cx="280" cy="280" r="105" fill="#0c0d0f" stroke="#ffd500" strokeWidth="2" />
              <circle cx="280" cy="280" r="90" fill="none" stroke="#262c36" strokeWidth="1" />
            </svg>

            {/* Center Core Readout */}
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-[10px] tracking-[0.25em] text-[#ffd500] font-bold">CORE ASSEMBLY</span>
              <div className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none my-1">
                KD-998
              </div>
              <span className="text-[10px] text-zinc-400 tabular-nums">718.5 KW // SEALED</span>
            </div>
          </div>

          {/* 6 Radial Polar Nodes Arranged Along the Circular Orbit */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:block lg:static gap-4 relative z-10">
            {radialNodes.map((node) => (
              <div
                key={node.angle}
                className={`lg:absolute ${node.posClass} lg:w-52 bg-[#0c0d0f]/95 border border-[#262c36] px-4 py-3`}
              >
                <span className="text-[9px] text-[#ffd500] font-bold tracking-widest block">
                  {node.angle}
                </span>
                <div className="text-[11px] text-zinc-400 uppercase mt-0.5">{node.title}</div>
                <div className="font-display text-2xl font-extrabold text-white tabular-nums mt-0.5">
                  {node.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
