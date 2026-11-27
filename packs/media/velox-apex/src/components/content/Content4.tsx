import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface CalloutPoint {
  id: string;
  label: string;
  metric: string;
  detail: string;
  // Coordinates in the 1000x560 technical canvas
  boxPos: string;
  anchorX: number;
  anchorY: number;
  elbowX: number;
  elbowY: number;
  targetX: number;
  targetY: number;
}

const CALLOUTS: CalloutPoint[] = [
  {
    id: 'A1',
    label: 'AERO BIPLANE CANARD',
    metric: '340 KG DOWNFORCE',
    detail: 'Forged carbon airfoils integrated into upper nose fairing.',
    boxPos: 'lg:top-2 lg:left-0',
    anchorX: 195,
    anchorY: 75,
    elbowX: 260,
    elbowY: 75,
    targetX: 335,
    targetY: 225,
  },
  {
    id: 'A2',
    label: 'CARBON MONOCOQUE',
    metric: '11.4 KG DRY SHELL',
    detail: 'T1100G structural upper shell replacing alloy frame spars.',
    boxPos: 'lg:top-2 lg:right-0',
    anchorX: 790,
    anchorY: 75,
    elbowX: 660,
    elbowY: 75,
    targetX: 505,
    targetY: 165,
  },
  {
    id: 'A3',
    label: '390MM CERAMIC ROTOR',
    metric: '8-PISTON MONOBLOC',
    detail: 'Carbon-silicon carbide front discs rated to 1,100°C.',
    boxPos: 'lg:bottom-4 lg:left-0',
    anchorX: 195,
    anchorY: 465,
    elbowX: 255,
    elbowY: 465,
    targetX: 305,
    targetY: 390,
  },
  {
    id: 'A4',
    label: '998V SOLID-STATE CORE',
    metric: '68.5 KG / 420 WH/KG',
    detail: 'Dielectric-cooled battery stack acting as stressed member.',
    boxPos: 'lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2',
    anchorX: 500,
    anchorY: 470,
    elbowX: 480,
    elbowY: 430,
    targetX: 480,
    targetY: 315,
  },
  {
    id: 'A5',
    label: 'FORGED SWINGARM',
    metric: '64° MAX LEAN',
    detail: 'Hollow carbon-titanium rear linkage with zero lateral flex.',
    boxPos: 'lg:bottom-4 lg:right-0',
    anchorX: 795,
    anchorY: 465,
    elbowX: 720,
    elbowY: 465,
    targetX: 685,
    targetY: 345,
  },
];

export function Content4() {
  const [activeId, setActiveId] = useState<string>('A4');

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 border-b border-black pb-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#ff2e00] font-bold">
              ORTHOGRAPHIC PLATE V-999 // SCALE 1:8
            </div>
            <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mt-1">
              EXPLODED <span className="text-[#ff2e00]">SCHEMATIC</span>
            </h2>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mt-2 sm:mt-0">
            SELECT CALLOUT TO ISOLATE COORDINATE
          </div>
        </div>

        {/* Desktop Interactive Exploded Technical Plate */}
        <div className="relative border border-black bg-white p-4 lg:p-0 lg:h-[560px] overflow-hidden">
          <Plus className="w-3.5 h-3.5 absolute top-2 left-2 text-black z-30" />
          <Plus className="w-3.5 h-3.5 absolute top-2 right-2 text-black z-30" />
          <Plus className="w-3.5 h-3.5 absolute bottom-2 left-2 text-black z-30" />
          <Plus className="w-3.5 h-3.5 absolute bottom-2 right-2 text-black z-30" />

          {/* Central Plate */}
          <div className="lg:absolute lg:inset-x-44 lg:inset-y-16 flex items-center justify-center bg-white">
            <img
              src="/src/assets/images/velox_side_profile_1795617080875.jpg"
              alt="Velox Apex V-999 Orthographic Side Profile"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain filter contrast-125 grayscale"
            />
          </div>

          {/* SVG Drawn Leader Lines & Target Rings (Desktop) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 560"
            preserveAspectRatio="none"
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20"
          >
            {CALLOUTS.map((pt) => {
              const isSelected = activeId === pt.id;
              return (
                <g key={pt.id}>
                  <polyline
                    fill="none"
                    stroke={isSelected ? '#ff2e00' : '#000000'}
                    strokeWidth={isSelected ? '2' : '1'}
                    points={`${pt.anchorX},${pt.anchorY} ${pt.elbowX},${pt.elbowY} ${pt.targetX},${pt.targetY}`}
                  />
                  <circle
                    cx={pt.targetX}
                    cy={pt.targetY}
                    r={isSelected ? '9' : '5'}
                    fill="none"
                    stroke={isSelected ? '#ff2e00' : '#000000'}
                    strokeWidth="1.5"
                  />
                  <circle
                    cx={pt.targetX}
                    cy={pt.targetY}
                    r="2.5"
                    fill="#ff2e00"
                  />
                </g>
              );
            })}
          </svg>

          {/* Annotation Callout Blocks Positioned Around the Plate */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 lg:mt-0 lg:block">
            {CALLOUTS.map((pt) => {
              const isSelected = activeId === pt.id;
              return (
                <button
                  key={pt.id}
                  type="button"
                  onClick={() => setActiveId(pt.id)}
                  className={`lg:absolute ${pt.boxPos} lg:w-56 text-left border p-3 cursor-pointer z-30 transition-colors ${
                    isSelected
                      ? 'bg-black text-white border-[#ff2e00]'
                      : 'bg-white text-black border-black hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                    <span className="font-black text-[#ff2e00]">{pt.id}</span>
                    <span className={isSelected ? 'text-neutral-300' : 'text-neutral-500'}>
                      {pt.metric}
                    </span>
                  </div>
                  <div className="font-black text-xs uppercase tracking-tight">
                    {pt.label}
                  </div>
                  <p
                    className={`font-mono text-[10px] mt-1 leading-snug ${
                      isSelected ? 'text-neutral-300' : 'text-neutral-600'
                    }`}
                  >
                    {pt.detail}
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
