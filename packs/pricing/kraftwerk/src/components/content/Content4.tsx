import React, { useState } from 'react';

interface CalloutPoint {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  label: string;
  spec: string;
  detail: string;
  pinX: number; // % on image
  pinY: number; // % on image
  linePoints: string; // SVG coordinates on 1000x600 canvas
  boxPos: string;
}

const CALLOUTS: CalloutPoint[] = [
  {
    id: 'A',
    label: 'CARBON BULKHEAD MONOCOQUE',
    spec: '48,500 NM/DEG',
    detail: 'Autoclaved T1000G weave structural firewall separating fuel cell bay.',
    pinX: 43,
    pinY: 32,
    linePoints: '465,235 340,84 220,84',
    boxPos: 'md:top-4 md:left-4 md:w-[21%]',
  },
  {
    id: 'B',
    label: 'INBOARD PUSHROD DAMPER',
    spec: '95 MM TRAVEL',
    detail: 'Horizontal titanium bellcrank transfers wheel bump load above transaxle.',
    pinX: 58,
    pinY: 42,
    linePoints: '540,272 700,84 780,84',
    boxPos: 'md:top-4 md:right-4 md:w-[21%]',
  },
  {
    id: 'C',
    label: 'STRUCTURAL TRANSAXLE CASE',
    spec: '7-SPD MAGNESIUM',
    detail: 'Sand-cast magnesium casing carries rear lower wishbone pickup points.',
    pinX: 69,
    pinY: 60,
    linePoints: '595,340 720,312 780,312',
    boxPos: 'md:top-[42%] md:right-4 md:w-[21%]',
  },
  {
    id: 'D',
    label: 'VENTILATED C/SIC ROTOR HUB',
    spec: '390 MM // 6-POT',
    detail: 'Center-lock titanium hub with directional internal cooling vanes.',
    pinX: 31,
    pinY: 68,
    linePoints: '405,370 285,500 220,500',
    boxPos: 'md:bottom-4 md:left-4 md:w-[21%]',
  },
  {
    id: 'E',
    label: 'LOWER TUBULAR WISHBONE',
    spec: 'TI-6AL-4V ROD',
    detail: 'Aerodynamic-section wishbone arms calibrated for zero anti-squat.',
    pinX: 54,
    pinY: 74,
    linePoints: '520,392 695,500 780,500',
    boxPos: 'md:bottom-4 md:right-4 md:w-[21%]',
  },
];

export function Content4() {
  const [activeId, setActiveId] = useState<'A' | 'B' | 'C' | 'D' | 'E'>('B');

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono text-[#111111] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Masthead */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[#111111] pb-3 mb-8 text-[9px] uppercase tracking-[0.25em]">
          <span>CONTENT-04 // EXPLODED CHASSIS CALLOUT DIAGRAM // PLATE 044-B</span>
          <span className="font-bold">SELECT PIN [A–E] FOR INSPECTION</span>
        </div>

        {/* Desktop Exploded Canvas with SVG Leader Lines */}
        <div className="relative md:h-[600px] border border-[#111111] bg-[#f4f4f0] p-4 md:p-0">
          {/* SVG Leader Line Overlay (Desktop) */}
          <svg
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-20"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {CALLOUTS.map((c) => {
              const isSelected = activeId === c.id;
              return (
                <polyline
                  key={c.id}
                  points={c.linePoints}
                  fill="none"
                  stroke="#111111"
                  strokeWidth={isSelected ? '2' : '1'}
                  strokeDasharray={isSelected ? undefined : '3 3'}
                />
              );
            })}
          </svg>

          {/* Central Technical Plate */}
          <div className="relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[50%] z-10 border-2 border-[#111111] bg-[#111111]">
            <div className="flex justify-between items-center px-2 py-1 bg-[#111111] text-[#e8e8e6] text-[8px] tracking-widest uppercase">
              <span>PLATE: K99-REAR-SUBFRAME</span>
              <span>SCALE 1:8</span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
                alt="Exposed carbon-titanium rear chassis and pushrod suspension assembly"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125"
              />

              {/* Registration Pins on Plate */}
              {CALLOUTS.map((c) => {
                const isSelected = activeId === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveId(c.id)}
                    style={{ left: `${c.pinX}%`, top: `${c.pinY}%` }}
                    aria-label={`Inspect callout ${c.id}: ${c.label}`}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-[#111111] text-[9px] font-black flex items-center justify-center cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-[#111111] text-[#e8e8e6]'
                        : 'bg-[#e8e8e6] text-[#111111] hover:bg-[#ffffff]'
                    }`}
                  >
                    {c.id}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Flying Annotation Callouts */}
          <div className="mt-4 md:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-3 md:block">
            {CALLOUTS.map((c) => {
              const isSelected = activeId === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveId(c.id)}
                  className={`md:absolute ${c.boxPos} z-30 text-left border border-[#111111] p-3 cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-[#111111] text-[#e8e8e6]'
                      : 'bg-[#e8e8e6] text-[#111111] hover:bg-[#ffffff]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[8px] tracking-widest border-b border-current pb-1 mb-1.5">
                    <span className="font-black">PIN [{c.id}]</span>
                    <span className="tabular-nums font-bold">{c.spec}</span>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-tight leading-tight">
                    {c.label}
                  </div>
                  <p
                    className={`text-[9px] leading-snug mt-1 uppercase ${
                      isSelected ? 'text-[#cccccc]' : 'text-[#555555]'
                    }`}
                  >
                    {c.detail}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
