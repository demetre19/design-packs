import React, { useState } from 'react';

interface Callout {
  id: string;
  fig: string;
  label: string;
  spec: string;
  detail: string;
  plateX: number;
  plateY: number;
  elbowX: number;
  elbowY: number;
  anchorX: number;
  anchorY: number;
  align: 'left' | 'right';
}

const CALLOUTS: Callout[] = [
  {
    id: 'overcoil',
    fig: 'FIG. 01',
    label: 'Breguet Terminal Overcoil',
    spec: 'Ø 11.4mm // SILICON-GOLD COMPOSITE',
    detail: 'Concentric breathing curve eliminates lateral poise error across vertical positions.',
    plateX: 465,
    plateY: 165,
    elbowX: 300,
    elbowY: 95,
    anchorX: 250,
    anchorY: 95,
    align: 'left',
  },
  {
    id: 'cage',
    fig: 'FIG. 02',
    label: '60-Second Titanium Carriage',
    spec: 'MASS: 0.29g // 63 HAND-BEVELED PARTS',
    detail: 'Grade-5 skeletonized upper bridge reduces rotational inertia by 41% versus steel.',
    plateX: 555,
    plateY: 225,
    elbowX: 730,
    elbowY: 120,
    anchorX: 765,
    anchorY: 120,
    align: 'right',
  },
  {
    id: 'jewel',
    fig: 'FIG. 03',
    label: 'Gold-Chaton Ruby Bearing',
    spec: '18K CHATON // 3 BLUED FIXING SCREWS',
    detail: 'Synthetic corundum cap jewel oiled with Moebius 9010 for minimal pivot friction.',
    plateX: 440,
    plateY: 280,
    elbowX: 285,
    elbowY: 280,
    anchorX: 250,
    anchorY: 280,
    align: 'left',
  },
  {
    id: 'barrel',
    fig: 'FIG. 04',
    label: 'Twin-Coaxial Mainspring',
    spec: '120H RESERVE // CONSTANT-TORQUE SLIP',
    detail: 'Series-coupled barrels deliver uniform amplitude across the first 96 hours.',
    plateX: 580,
    plateY: 315,
    elbowX: 735,
    elbowY: 315,
    anchorX: 765,
    anchorY: 315,
    align: 'right',
  },
  {
    id: 'balance',
    fig: 'FIG. 05',
    label: 'Variable-Inertia Timing Rim',
    spec: '21,600 VPH // 4 PT950 MASSES',
    detail: 'Recessed platinum weights sit flush inside rim slots to prevent aerodynamic drag.',
    plateX: 500,
    plateY: 365,
    elbowX: 590,
    elbowY: 455,
    anchorX: 765,
    anchorY: 455,
    align: 'right',
  },
];

export function Content4() {
  const [activeId, setActiveId] = useState<string>('cage');

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-6 border-b border-white/10 mb-10">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#d4b06a] uppercase block mb-2">
              TECHNICAL SCHEMATIC // CALIBER ATH-9901
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">
              Exploded Escapement Architecture
            </h2>
          </div>
          <span className="text-[10px] font-mono text-[#7a8494]">SCALE 14:1 // PROJECTION ORTHOGRAPHIC</span>
        </div>

        {/* Desktop Exploded Diagram Canvas with SVG Leader Lines */}
        <div className="hidden lg:block relative w-full h-[540px] bg-[#13171c]/40 border border-white/10 overflow-hidden">
          {/* Corner Crosshairs */}
          <div className="absolute top-3 left-3 text-[10px] font-mono text-[#7a8494]">+ X:000 Y:000</div>
          <div className="absolute top-3 right-3 text-[10px] font-mono text-[#7a8494]">+ PLATE ATH-9901</div>
          <div className="absolute bottom-3 left-3 text-[10px] font-mono text-[#d4b06a]">SELECT FIG. TO ISOLATE LEADER</div>
          <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#7a8494]">TOLERANCE ±0.002MM</div>

          {/* SVG Precision Plate & Leader Lines (1000x540 viewBox) */}
          <svg
            viewBox="0 0 1000 540"
            className="w-full h-full absolute inset-0"
            aria-label="Exploded caliber ATH-9901 diagram with leader lines"
          >
            {/* Subtle Technical Grid Axes */}
            <line x1="500" y1="30" x2="500" y2="510" stroke="rgba(236,232,225,0.07)" strokeDasharray="3 5" />
            <line x1="220" y1="270" x2="780" y2="270" stroke="rgba(236,232,225,0.07)" strokeDasharray="3 5" />

            {/* Central Escapement Plate Composition */}
            <circle cx="500" cy="270" r="165" fill="#0b0d10" stroke="rgba(236,232,225,0.18)" strokeWidth="1" />
            <circle cx="500" cy="270" r="148" fill="none" stroke="rgba(212,176,106,0.3)" strokeWidth="1" strokeDasharray="2 6" />
            <circle cx="500" cy="270" r="112" fill="#13171c" stroke="rgba(236,232,225,0.16)" strokeWidth="1" />
            <circle cx="500" cy="270" r="76" fill="none" stroke="#d4b06a" strokeWidth="1" strokeOpacity="0.55" />
            <circle cx="500" cy="270" r="44" fill="#0b0d10" stroke="rgba(236,232,225,0.25)" strokeWidth="1" />

            {/* Tourbillon Upper Bridge Arms */}
            <path d="M 388 270 L 456 270 M 544 270 L 612 270" stroke="rgba(236,232,225,0.4)" strokeWidth="1.5" />
            <path d="M 500 158 L 500 226 M 500 314 L 500 382" stroke="rgba(212,176,106,0.45)" strokeWidth="1" />
            {/* Hairspring Spiral */}
            <path
              d="M 500 270 m -12 0 a 12 12 0 1 0 24 0 a 18 18 0 1 0 -36 0 a 26 26 0 1 0 52 0"
              fill="none"
              stroke="#d4b06a"
              strokeWidth="1"
              strokeOpacity="0.8"
            />
            {/* Ruby Jewel Bearing */}
            <circle cx="500" cy="270" r="6" fill="#d4b06a" fillOpacity="0.25" stroke="#d4b06a" strokeWidth="1.2" />

            {/* Drawn Leader Lines to Exact Endpoints */}
            {CALLOUTS.map((c) => {
              const isActive = activeId === c.id;
              return (
                <g key={c.id}>
                  <polyline
                    points={`${c.plateX},${c.plateY} ${c.elbowX},${c.elbowY} ${c.anchorX},${c.anchorY}`}
                    fill="none"
                    stroke={isActive ? '#d4b06a' : 'rgba(236,232,225,0.28)'}
                    strokeWidth={isActive ? '1.5' : '1'}
                  />
                  <circle
                    cx={c.plateX}
                    cy={c.plateY}
                    r={isActive ? 4.5 : 3}
                    fill={isActive ? '#d4b06a' : '#0b0d10'}
                    stroke="#d4b06a"
                    strokeWidth="1.2"
                  />
                </g>
              );
            })}
          </svg>

          {/* Positioned Annotation Labels */}
          {CALLOUTS.map((c) => {
            const isActive = activeId === c.id;
            const leftPct = c.align === 'left' ? '2%' : '77%';
            const topPct = `${(c.anchorY / 540) * 100 - 7}%`;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveId(c.id)}
                style={{ left: leftPct, top: topPct, width: '21%' }}
                className={`absolute text-left p-3 border transition-colors ${
                  isActive
                    ? 'bg-[#13171c] border-[#d4b06a]'
                    : 'bg-[#0b0d10]/90 border-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className="text-[#d4b06a]">{c.fig}</span>
                  <span className="text-[#7a8494]">({c.plateX},{c.plateY})</span>
                </div>
                <div className="font-serif text-base text-[#ece8e1] leading-snug mb-1">{c.label}</div>
                <div className="font-mono text-[10px] text-[#7a8494] mb-1.5">{c.spec}</div>
                <p className="font-sans text-[11px] text-[#7a8494] leading-snug">{c.detail}</p>
              </button>
            );
          })}
        </div>

        {/* Mobile/Tablet Structured Fallback */}
        <div className="lg:hidden flex flex-col gap-4">
          <div className="bg-[#13171c] border border-white/10 p-6 flex justify-center">
            <svg viewBox="0 0 360 360" className="w-64 h-64" aria-label="Caliber ATH-9901 schematic">
              <circle cx="180" cy="180" r="145" fill="#0b0d10" stroke="rgba(236,232,225,0.2)" />
              <circle cx="180" cy="180" r="105" fill="#13171c" stroke="rgba(212,176,106,0.4)" strokeDasharray="2 5" />
              <circle cx="180" cy="180" r="56" fill="none" stroke="#d4b06a" />
              <circle cx="180" cy="180" r="7" fill="#d4b06a" />
            </svg>
          </div>
          {CALLOUTS.map((c) => (
            <div key={c.id} className="border border-white/10 bg-[#13171c] p-4">
              <div className="flex justify-between text-[10px] font-mono text-[#d4b06a] mb-1">
                <span>{c.fig}</span>
                <span>{c.spec}</span>
              </div>
              <h3 className="font-serif text-lg text-[#ece8e1] mb-1">{c.label}</h3>
              <p className="font-sans text-xs text-[#7a8494]">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
