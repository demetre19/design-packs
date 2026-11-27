import React from 'react';

interface RadialNode {
  bearing: string;
  code: string;
  label: string;
  metric: string;
  posClass: string;
}

export function Content15() {
  const nodes: RadialNode[] = [
    {
      bearing: '000° N',
      code: 'NODE-01',
      label: 'ORBITAL RELAY UPLINK',
      metric: '99.99% LOCK',
      posClass: 'lg:top-0 lg:left-1/2 lg:-translate-x-1/2',
    },
    {
      bearing: '060° NE',
      code: 'NODE-02',
      label: 'SEISMIC HYDROPHONE',
      metric: '120 HZ BAND',
      posClass: 'lg:top-20 lg:right-[11%]',
    },
    {
      bearing: '120° SE',
      code: 'NODE-03',
      label: 'HYDRAULIC SURGE BANK',
      metric: '14,000 PSI',
      posClass: 'lg:bottom-20 lg:right-[11%]',
    },
    {
      bearing: '180° S',
      code: 'NODE-04',
      label: 'THERMAL CRUCIBLE BUS',
      metric: '1,450 °C',
      posClass: 'lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2',
    },
    {
      bearing: '240° SW',
      code: 'NODE-05',
      label: 'AUTONOMOUS HAUL MESH',
      metric: '1,280 UNITS',
      posClass: 'lg:bottom-20 lg:left-[11%]',
    },
    {
      bearing: '300° NW',
      code: 'NODE-06',
      label: 'SPECTROSCOPY GATEWAY',
      metric: '0.04 MS',
      posClass: 'lg:top-20 lg:left-[11%]',
    },
  ];

  return (
    <section className="bg-black text-white py-20 border-b-4 border-[#f25c05] font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3 mb-12 font-mono text-[10px] uppercase tracking-widest">
          <span className="text-[#f25c05] font-bold">VAULT 15 // RADIAL TELEMETRY ROTUNDA</span>
          <span className="text-neutral-400">360° PERIMETER ARCHITECTURE</span>
        </div>

        {/* Radial / Circular Composition Inside Full Black Band */}
        <div className="relative lg:h-[620px] flex flex-col items-center justify-center">
          {/* Concentric Orbital Rings & Radial Spokes (Desktop) */}
          <div
            className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            {/* Outer Ring */}
            <div className="w-[620px] h-[620px] rounded-full border border-neutral-800 relative flex items-center justify-center">
              {/* Middle Dashed Ring */}
              <div className="w-[430px] h-[430px] rounded-full border border-dashed border-neutral-700 flex items-center justify-center">
                {/* Inner Orange Hairline Ring */}
                <div className="w-[250px] h-[250px] rounded-full border border-[#f25c05]/50" />
              </div>

              {/* Radial Spokes */}
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-neutral-800" />
              <div className="absolute inset-y-0 left-1/2 w-[1px] bg-neutral-800" />
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-neutral-800 rotate-60" />
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-neutral-800 -rotate-60" />
            </div>
          </div>

          {/* Central Vault Hub */}
          <div className="relative z-20 w-52 h-52 rounded-full bg-black border-4 border-[#f25c05] flex flex-col items-center justify-center text-center p-6 mb-10 lg:mb-0">
            <span className="font-mono text-[10px] text-[#f25c05] uppercase tracking-widest mb-1">
              00 // VAULT CORE
            </span>
            <h2 className="font-black text-2xl uppercase tracking-tighter leading-none mb-2">
              TITAN MESH HUB
            </h2>
            <span className="font-mono text-[10px] text-neutral-400 uppercase tabular-nums">
              360° SYNC ACTIVE
            </span>
          </div>

          {/* Six Perimeter Orbital Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto lg:block">
            {nodes.map((node) => (
              <div
                key={node.code}
                className={`lg:absolute ${node.posClass} lg:w-56 bg-neutral-950 border-2 border-neutral-700 hover:border-[#f25c05] transition-colors p-4 z-30`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] mb-1.5">
                  <span className="text-[#f25c05] font-bold">{node.bearing}</span>
                  <span className="text-neutral-500">{node.code}</span>
                </div>
                <div className="font-black text-sm uppercase tracking-tight leading-snug mb-1">
                  {node.label}
                </div>
                <div className="font-mono text-xs font-bold text-white tabular-nums border-t border-neutral-800 pt-1.5 mt-2 flex items-center justify-between">
                  <span className="text-[9px] text-neutral-500 uppercase">TELEMETRY</span>
                  <span>{node.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
