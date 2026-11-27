import React, { useState } from 'react';
import { Zap } from 'lucide-react';

interface OrbitalNode {
  id: string;
  deg: string;
  title: string;
  metric: string;
  detail: string;
  /* CSS positioning for circular desktop ring (0..100%) */
  posClass: string;
}

const ORBITAL_NODES: OrbitalNode[] = [
  {
    id: 'N1',
    deg: '000°',
    title: 'STATOR RING',
    metric: '18,500 RPM',
    detail: 'Dual-sided Halbach array rotor with carbon-fiber retention sleeve.',
    posClass: 'lg:top-2 lg:left-1/2 lg:-translate-x-1/2',
  },
  {
    id: 'N2',
    deg: '060°',
    title: 'SiC INVERTER',
    metric: '99.4% EFF',
    detail: '24 kHz silicon-carbide phase bridge running on 800V DC bus.',
    posClass: 'lg:top-[22%] lg:right-4',
  },
  {
    id: 'N3',
    deg: '120°',
    title: 'OIL COOLER',
    metric: '12.0 L/MIN',
    detail: 'Dielectric ester bath extracting 14.8 kW peak stator heat.',
    posClass: 'lg:bottom-[22%] lg:right-4',
  },
  {
    id: 'N4',
    deg: '180°',
    title: 'CELL PACK',
    metric: '21.4 KWH',
    detail: 'Structural 7075-T6 billet belly pack charged to 80% in 12m.',
    posClass: 'lg:bottom-2 lg:left-1/2 lg:-translate-x-1/2',
  },
  {
    id: 'N5',
    deg: '240°',
    title: 'REGEN BLEND',
    metric: '94.0 KW',
    detail: 'Five-stage handlebar rotary map capturing braking energy.',
    posClass: 'lg:bottom-[22%] lg:left-4',
  },
  {
    id: 'N6',
    deg: '300°',
    title: 'IMU ARBITER',
    metric: '1,000 HZ',
    detail: 'Six-axis lean and slip sensor holding 7% target traction.',
    posClass: 'lg:top-[22%] lg:left-4',
  },
];

export function Content15() {
  const [selectedId, setSelectedId] = useState<string>('N1');
  const active = ORBITAL_NODES.find((n) => n.id === selectedId) || ORBITAL_NODES[0];

  return (
    <section className="py-24 bg-[#050607] border-b border-[#272a33] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">
            VAULT 15 // RADIAL POWERTRAIN TOPOLOGY
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mt-2">
            THE 800V ORBITAL CORE
          </h2>
        </div>

        {/* Circular Radial Vault Composition */}
        <div className="relative max-w-4xl mx-auto lg:h-[620px] flex flex-col items-center justify-center">
          {/* Concentric Hairline Measurement Rings (Desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute w-[560px] h-[560px] rounded-full border border-[#272a33]"
          />
          <div
            aria-hidden="true"
            className="hidden lg:block absolute w-[410px] h-[410px] rounded-full border border-dashed border-[#272a33]"
          />
          <div
            aria-hidden="true"
            className="hidden lg:block absolute w-[260px] h-[260px] rounded-full border border-[#ff5a1f]/40"
          />

          {/* 6 Radial Spoke Lines at 0°, 60°, 120°, 180°, 240°, 300° */}
          <svg
            viewBox="0 0 600 600"
            className="hidden lg:block absolute w-[600px] h-[600px] pointer-events-none z-10"
            aria-hidden="true"
          >
            {[
              { id: 'N1', x2: 300, y2: 42 },
              { id: 'N2', x2: 523, y2: 171 },
              { id: 'N3', x2: 523, y2: 429 },
              { id: 'N4', x2: 300, y2: 558 },
              { id: 'N5', x2: 77, y2: 429 },
              { id: 'N6', x2: 77, y2: 171 },
            ].map((spoke) => {
              const isSelected = spoke.id === selectedId;
              return (
                <line
                  key={spoke.id}
                  x1="300"
                  y1="300"
                  x2={spoke.x2}
                  y2={spoke.y2}
                  stroke={isSelected ? '#ff5a1f' : '#272a33'}
                  strokeWidth={isSelected ? '1.5' : '1'}
                  strokeDasharray={isSelected ? 'none' : '3 3'}
                />
              );
            })}
          </svg>

          {/* Central Rotor Hub Readout */}
          <div className="relative z-20 w-56 h-56 rounded-full bg-[#0c0e12] border-2 border-[#ff5a1f] flex flex-col items-center justify-center text-center p-5 mb-8 lg:mb-0">
            <Zap size={20} className="text-[#ff5a1f] mb-2" />
            <span className="font-mono-spec text-[9px] text-neutral-400">
              {active.deg} // NODE {active.id}
            </span>
            <h3 className="font-display font-extrabold text-lg text-white mt-1">
              {active.title}
            </h3>
            <div className="font-mono-spec text-base font-bold text-[#ff5a1f] mt-1">
              {active.metric}
            </div>
            <p className="font-mono-spec text-[9px] text-neutral-400 mt-2 leading-snug">
              {active.detail}
            </p>
          </div>

          {/* 6 Orbital Nodes arranged along the circular arc */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:block">
            {ORBITAL_NODES.map((node) => {
              const isSelected = node.id === selectedId;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedId(node.id)}
                  className={`text-left lg:absolute z-20 lg:w-48 p-3.5 border transition-colors cursor-pointer ${node.posClass} ${
                    isSelected
                      ? 'bg-[#16181d] border-[#ff5a1f] text-white'
                      : 'bg-[#0a0b0e] border-[#272a33] text-neutral-300 hover:border-neutral-500'
                  }`}
                >
                  <div className="flex justify-between font-mono-spec text-[9px] mb-1">
                    <span className="text-[#ff5a1f] font-bold">{node.deg}</span>
                    <span className="text-neutral-500">{node.id}</span>
                  </div>
                  <div className="font-display font-extrabold text-xs tracking-wide text-white">
                    {node.title}
                  </div>
                  <div className="font-mono-spec text-[11px] text-[#ff5a1f] mt-1">
                    {node.metric}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
