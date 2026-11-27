import React from 'react';

const RADIAL_NODES = [
  {
    deg: '000°',
    title: 'STAGNATION NOSE',
    val: '1,920 °C',
    posClass: 'lg:top-2 lg:left-1/2 lg:-translate-x-1/2',
  },
  {
    deg: '060°',
    title: 'INLET SHOCK CONE',
    val: '18.4:1 CR',
    posClass: 'lg:top-24 lg:right-4',
  },
  {
    deg: '120°',
    title: 'LH2 COOLANT LOOP',
    val: '42.6 BAR',
    posClass: 'lg:bottom-24 lg:right-4',
  },
  {
    deg: '180°',
    title: 'SERN NOZZLE EXIT',
    val: '3,420 M/S',
    posClass: 'lg:bottom-2 lg:left-1/2 lg:-translate-x-1/2',
  },
  {
    deg: '240°',
    title: 'ELEVON FLUTTER',
    val: '< 0.04 HZ',
    posClass: 'lg:bottom-24 lg:left-4',
  },
  {
    deg: '300°',
    title: 'FIBER INERTIAL IMU',
    val: '0.008 NM/H',
    posClass: 'lg:top-24 lg:left-4',
  },
];

export function Content15() {
  return (
    <section
      aria-label="Inverted Vault Radial Envelope"
      className="w-full bg-[#07080b] text-white font-mono border-b border-[#2a2d35] py-16 px-4 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#1f222a] pb-4 mb-10">
          <div>
            <span className="text-[10px] tracking-[0.28em] text-[#ff3d00] font-bold uppercase block">
              INVERTED VAULT // RADIAL TELEMETRY 15
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight mt-1">
              360° FLIGHT ENVELOPE POLAR MATRIX
            </h2>
          </div>
          <span className="text-[10px] text-zinc-400 tabular-nums">
            AZIMUTH LOCK: 000°–360° // CORE ACTIVE
          </span>
        </div>

        {/* Desktop Radial Orbital Composition */}
        <div className="hidden lg:flex relative h-[520px] items-center justify-center">
          {/* Concentric Radar & Polar Rings SVG */}
          <svg
            viewBox="0 0 520 520"
            className="w-[460px] h-[460px]"
            aria-hidden="true"
          >
            <circle cx="260" cy="260" r="230" fill="none" stroke="#1f222a" strokeWidth="1" />
            <circle cx="260" cy="260" r="175" fill="none" stroke="#2a2d35" strokeDasharray="4 4" strokeWidth="1" />
            <circle cx="260" cy="260" r="115" fill="none" stroke="#ff3d00" strokeOpacity="0.45" strokeWidth="1.2" />
            {/* Radial Spokes */}
            <line x1="260" y1="30" x2="260" y2="490" stroke="#1f222a" strokeWidth="1" />
            <line x1="60" y1="145" x2="460" y2="375" stroke="#1f222a" strokeWidth="1" />
            <line x1="460" y1="145" x2="60" y2="375" stroke="#1f222a" strokeWidth="1" />
            {/* Outer Polar Arc Highlight */}
            <path
              d="M 260 85 A 175 175 0 0 1 435 260"
              fill="none"
              stroke="#ff3d00"
              strokeWidth="2.5"
            />
          </svg>

          {/* Central Circular Core Hub */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-40 h-40 rounded-full bg-[#111318] border-2 border-[#ff3d00] flex flex-col items-center justify-center text-center p-4">
              <span className="text-[9px] text-zinc-400 tracking-widest">X-99 CORE</span>
              <span className="text-3xl font-black font-sans text-white mt-0.5 tabular-nums">
                M 4.84
              </span>
              <span className="text-[10px] text-[#ff3d00] font-bold mt-1">FL650 LOCK</span>
            </div>
          </div>

          {/* 6 Radial Nodes Positioned Along Polar Perimeter */}
          {RADIAL_NODES.map((node) => (
            <div
              key={node.deg}
              className={`absolute ${node.posClass} w-52 bg-[#111318] border border-[#2a2d35] p-3 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]`}
            >
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className="text-[#ff3d00] font-bold tabular-nums">{node.deg}</span>
                <span className="text-zinc-500">NODE</span>
              </div>
              <div className="text-[11px] font-bold text-zinc-200">{node.title}</div>
              <div className="text-base font-black font-sans text-white mt-0.5 tabular-nums">
                {node.val}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Radial Index Fallback */}
        <div className="lg:hidden space-y-4">
          <div className="border border-[#ff3d00] bg-[#111318] p-5 text-center">
            <div className="text-[10px] text-zinc-400">X-99 CORE POLAR LOCK</div>
            <div className="text-3xl font-black font-sans text-[#ff3d00]">M 4.84 // FL650</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {RADIAL_NODES.map((node) => (
              <div key={node.deg} className="bg-[#111318] border border-[#2a2d35] p-3 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-[#ff3d00] font-bold mr-2">{node.deg}</span>
                  <span className="text-xs font-bold">{node.title}</span>
                </div>
                <span className="text-xs font-black tabular-nums">{node.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
