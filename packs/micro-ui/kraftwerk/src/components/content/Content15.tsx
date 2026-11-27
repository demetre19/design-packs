import React from 'react';

interface RadialNode {
  deg: string;
  code: string;
  label: string;
  value: string;
  posClass: string;
}

const RADIAL_NODES: RadialNode[] = [
  {
    deg: '000°',
    code: 'N-01',
    label: 'APEX TORQUE',
    value: '820 NM',
    posClass: 'lg:top-2 lg:left-1/2 lg:-translate-x-1/2',
  },
  {
    deg: '060°',
    code: 'N-02',
    label: 'TURBO BOOST',
    value: '2.40 BAR',
    posClass: 'lg:top-[18%] lg:right-4',
  },
  {
    deg: '120°',
    code: 'N-03',
    label: 'DRY MASS',
    value: '1,120 KG',
    posClass: 'lg:bottom-[18%] lg:right-4',
  },
  {
    deg: '180°',
    code: 'N-04',
    label: 'DOWNFORCE',
    value: '650 KG',
    posClass: 'lg:bottom-2 lg:left-1/2 lg:-translate-x-1/2',
  },
  {
    deg: '240°',
    code: 'N-05',
    label: 'RIGIDITY',
    value: '48.5 KNM',
    posClass: 'lg:bottom-[18%] lg:left-4',
  },
  {
    deg: '300°',
    code: 'N-06',
    label: 'CRANK LIMIT',
    value: '9,200 RPM',
    posClass: 'lg:top-[18%] lg:left-4',
  },
];

export function Content15() {
  return (
    <section className="w-full bg-[#111111] text-[#e8e8e6] border-b border-[#111111] font-mono py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Top Vault Masthead */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#444444] pb-3 mb-10 text-[9px] uppercase tracking-[0.28em] text-[#aaaaaa]">
          <span>CONTENT-15 // INVERTED VAULT // RADIAL POLAR TELEMETRY</span>
          <span className="text-[#e8e8e6] font-bold">GEOMETRY: 360° POLAR ARRAY</span>
        </div>

        {/* Radial Polar Composition */}
        <div className="relative lg:w-[900px] lg:h-[600px] mx-auto flex flex-col items-center justify-center">
          {/* Concentric Orbital Rings & Radial Spokes SVG (Desktop) */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 900 600"
            aria-hidden="true"
          >
            {/* Outer Orbital Ring */}
            <circle cx="450" cy="300" r="245" fill="none" stroke="#444444" strokeWidth="1" strokeDasharray="4 4" />
            {/* Middle Orbital Ring */}
            <circle cx="450" cy="300" r="170" fill="none" stroke="#e8e8e6" strokeWidth="1" opacity="0.55" />
            {/* Inner Core Ring */}
            <circle cx="450" cy="300" r="98" fill="none" stroke="#e8e8e6" strokeWidth="1.5" />

            {/* Cardinal Crosshair Axes */}
            <line x1="120" y1="300" x2="780" y2="300" stroke="#333333" strokeWidth="1" />
            <line x1="450" y1="20" x2="450" y2="580" stroke="#333333" strokeWidth="1" />

            {/* 6 Polar Spokes connecting Center Core to Radial Nodes */}
            <line x1="450" y1="300" x2="450" y2="55" stroke="#777777" strokeWidth="1" />
            <line x1="450" y1="300" x2="720" y2="155" stroke="#777777" strokeWidth="1" />
            <line x1="450" y1="300" x2="720" y2="445" stroke="#777777" strokeWidth="1" />
            <line x1="450" y1="300" x2="450" y2="545" stroke="#777777" strokeWidth="1" />
            <line x1="450" y1="300" x2="180" y2="445" stroke="#777777" strokeWidth="1" />
            <line x1="450" y1="300" x2="180" y2="155" stroke="#777777" strokeWidth="1" />
          </svg>

          {/* Central Circular Core Medallion */}
          <div className="relative z-20 w-44 h-44 rounded-full border-2 border-[#e8e8e6] bg-[#111111] flex flex-col items-center justify-center text-center p-4 mb-8 lg:mb-0">
            <span className="text-[8px] tracking-[0.28em] text-[#aaaaaa]">VAULT CORE</span>
            <span className="text-3xl font-black tracking-tighter leading-none my-1">
              K-99
            </span>
            <span className="text-[8px] tracking-[0.2em] border-t border-[#444444] pt-1 mt-1 text-[#cccccc]">
              POLAR INDEX 044
            </span>
          </div>

          {/* 6 Radial Orbital Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:absolute lg:inset-0 lg:pointer-events-none z-20">
            {RADIAL_NODES.map((node) => (
              <div
                key={node.code}
                className={`lg:absolute ${node.posClass} lg:w-44 lg:pointer-events-auto border border-[#e8e8e6] bg-[#1a1a1a] p-3 text-left`}
              >
                <div className="flex justify-between items-center text-[8px] text-[#aaaaaa] border-b border-[#333333] pb-1 mb-1.5">
                  <span>{node.code}</span>
                  <span className="tabular-nums">{node.deg}</span>
                </div>
                <div className="text-lg font-black tracking-tighter tabular-nums text-[#e8e8e6]">
                  {node.value}
                </div>
                <div className="text-[8px] tracking-[0.2em] text-[#bbbbbb] uppercase mt-0.5">
                  {node.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Vault Seal */}
        <div className="mt-10 pt-3 border-t border-[#444444] flex flex-wrap justify-between items-center text-[8px] uppercase tracking-[0.25em] text-[#888888]">
          <span>RADIAL VAULT SEALED // ZERO ORTHOGONAL DRIFT</span>
          <span>STUTTGART ARCHIVE // VGH-99</span>
        </div>
      </div>
    </section>
  );
}
