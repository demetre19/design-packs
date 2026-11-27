import React, { useState } from 'react';
import { Crosshair } from 'lucide-react';

export function Content4() {
  const [activePin, setActivePin] = useState<string>('A1');

  const callouts = [
    {
      id: 'A1',
      label: 'A1 // CARBON PLENUM',
      metric: '41.6°C IAT',
      desc: 'Dual-chamber resonance intake equalizes cylinder pressure wave timing.',
      posClass: 'lg:top-6 lg:left-0 lg:w-64',
      target: { x: 420, y: 155 },
      linePoints: '240,64 345,64 420,155',
    },
    {
      id: 'B2',
      label: 'B2 // TWIN-SCROLL TURBINE',
      metric: '142,000 RPM',
      desc: 'Ceramic-coated Inconel volute housing feeding 2.84 BAR peak boost.',
      posClass: 'lg:top-10 lg:right-0 lg:w-64',
      target: { x: 585, y: 180 },
      linePoints: '760,82 655,82 585,180',
    },
    {
      id: 'C3',
      label: 'C3 // TITANIUM VALVETRAIN',
      metric: '8,400 RPM',
      desc: 'Pneumatic-return Ti-6Al-4V valve assembly verified zero-float.',
      posClass: 'lg:bottom-20 lg:left-0 lg:w-64',
      target: { x: 445, y: 265 },
      linePoints: '240,350 360,350 445,265',
    },
    {
      id: 'D4',
      label: 'D4 // DRY-SUMP SCAVENGE',
      metric: '6.45 BAR OIL',
      desc: 'Five-stage billet rotor pump maintains film integrity at 3.5G.',
      posClass: 'lg:bottom-16 lg:right-0 lg:w-64',
      target: { x: 545, y: 315 },
      linePoints: '760,365 635,365 545,315',
    },
    {
      id: 'E5',
      label: 'E5 // DYNO SPLINE COUPLING',
      metric: '612 NM SHAFT',
      desc: 'Zero-backlash torque transducer outputting 1,000 Hz load samples.',
      posClass: 'lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-72',
      target: { x: 500, y: 255 },
      linePoints: '500,382 500,255',
    },
  ];

  return (
    <section className="relative bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-[#22262f] pb-4 gap-4">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#ffd500] uppercase">
              // SCHEMATIC PLATE KD-998-EXPLODED · REV 4.2
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight mt-1">
              EXPLODED ASSEMBLY <span className="text-[#ffd500]">DIAGNOSTIC PLATE</span>
            </h2>
          </div>
          <span className="text-[11px] text-zinc-400">
            ACTIVE NODE: <strong className="text-[#ffd500]">{activePin}</strong> · SELECT CALLOUT TO TRACE
          </span>
        </div>

        {/* Exploded Diagram Canvas with Precision Leader Lines */}
        <div className="relative lg:h-[520px] flex flex-col lg:block gap-6">
          {/* SVG Leader Lines + Central Engine Block Cross-Section Plate */}
          <div className="relative lg:absolute lg:inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 1000 480"
              className="w-full h-72 lg:h-full select-none"
              role="img"
              aria-label="Exploded KD-998 V8 engine schematic with telemetry leader lines"
            >
              <defs>
                <radialGradient id="stageGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1e222b" />
                  <stop offset="65%" stopColor="#121419" />
                  <stop offset="100%" stopColor="#0c0d0f" />
                </radialGradient>
                <pattern id="grid40" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1b1e26" strokeWidth="1" />
                </pattern>
              </defs>

              <rect x="0" y="0" width="1000" height="480" fill="url(#grid40)" opacity="0.6" />
              <circle cx="500" cy="235" r="175" fill="url(#stageGlow)" stroke="#262c36" strokeWidth="1" />
              <circle cx="500" cy="235" r="145" fill="none" stroke="#22262f" strokeDasharray="4 6" strokeWidth="1" />

              {/* Engine Core Technical Geometry */}
              <g transform="translate(500, 235)">
                {/* V8 Cylinder Banks */}
                <polygon points="-75,-95 -20,-40 -35,55 -95,0" fill="#14161a" stroke="#4b5563" strokeWidth="1.5" />
                <polygon points="75,-95 20,-40 35,55 95,0" fill="#14161a" stroke="#4b5563" strokeWidth="1.5" />
                {/* Plenum Bridge */}
                <rect x="-55" y="-100" width="110" height="34" fill="#1b1e25" stroke="#ffd500" strokeWidth="1.5" />
                {/* Crankcase & Dry Sump */}
                <polygon points="-50,40 50,40 38,96 -38,96" fill="#0f1115" stroke="#6b7280" strokeWidth="1.5" />
                {/* Twin Turbine Housings */}
                <circle cx="88" cy="-48" r="24" fill="#14161a" stroke="#ffd500" strokeWidth="1.5" />
                <circle cx="88" cy="-48" r="10" fill="none" stroke="#ffd500" strokeWidth="1" />
                <circle cx="-88" cy="-48" r="24" fill="#14161a" stroke="#52525b" strokeWidth="1.5" />
                {/* Center Rotor / Torque Spline */}
                <circle cx="0" cy="20" r="28" fill="#0c0d0f" stroke="#ffd500" strokeWidth="2" />
                <circle cx="0" cy="20" r="12" fill="#ffd500" fillOpacity="0.2" stroke="#ffd500" strokeWidth="1" />
                <line x1="-18" y1="20" x2="18" y2="20" stroke="#ffd500" strokeWidth="1" />
                <line x1="0" y1="2" x2="0" y2="38" stroke="#ffd500" strokeWidth="1" />
              </g>

              {/* Drawn Leader Lines (Desktop coordinates aligned to callouts) */}
              {callouts.map((c) => {
                const isActive = activePin === c.id;
                return (
                  <g key={c.id} className="hidden lg:block">
                    <polyline
                      points={c.linePoints}
                      fill="none"
                      stroke={isActive ? '#ffd500' : '#3f4654'}
                      strokeWidth={isActive ? '2' : '1'}
                    />
                    <circle
                      cx={c.target.x}
                      cy={c.target.y}
                      r={isActive ? '6' : '4'}
                      fill={isActive ? '#ffd500' : '#0c0d0f'}
                      stroke="#ffd500"
                      strokeWidth="1.5"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Flying Annotation Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:block lg:static gap-4 relative z-10">
            {callouts.map((c) => {
              const isActive = activePin === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActivePin(c.id)}
                  onMouseEnter={() => setActivePin(c.id)}
                  className={`lg:absolute ${c.posClass} text-left p-3.5 transition-colors border ${
                    isActive
                      ? 'bg-[#14161a] border-[#ffd500]'
                      : 'bg-[#0c0d0f]/95 border-[#262c36] hover:border-zinc-500'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className={`text-[10px] font-bold tracking-widest ${isActive ? 'text-[#ffd500]' : 'text-zinc-400'}`}>
                      {c.label}
                    </span>
                    <Crosshair className={`w-3.5 h-3.5 ${isActive ? 'text-[#ffd500]' : 'text-zinc-600'}`} />
                  </div>
                  <div className="text-sm font-extrabold text-white tabular-nums mb-1">{c.metric}</div>
                  <p className="text-[11px] font-sans text-zinc-400 leading-snug">{c.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
