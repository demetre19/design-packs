import React, { useState } from 'react';
import { Compass } from 'lucide-react';

interface RadialNode {
  id: string;
  angleDeg: number;
  label: string;
  metric: string;
  detail: string;
  posClass: string;
}

export const Content15: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('01');

  const nodes: RadialNode[] = [
    {
      id: '01',
      angleDeg: 0,
      label: 'AXIAL NORTH',
      metric: '000° // DATUM',
      detail: 'Primary laser baseline anchored to Alpine trigonometric station #14.',
      posClass: 'lg:top-4 lg:left-1/2 lg:-translate-x-1/2',
    },
    {
      id: '02',
      angleDeg: 60,
      label: 'SOLAR PITCH',
      metric: '060° // 14° FIN',
      detail: 'Diagonal precast louver pitch calibrated for summer zenith deflection.',
      posClass: 'lg:top-[22%] lg:right-4',
    },
    {
      id: '03',
      angleDeg: 120,
      label: 'SHEAR VECTOR',
      metric: '120° // 620 kN/m',
      detail: 'Lateral wind-load transfer along diagonal S690QL box-chord ribs.',
      posClass: 'lg:bottom-[22%] lg:right-4',
    },
    {
      id: '04',
      angleDeg: 180,
      label: 'BEDROCK KEY',
      metric: '180° // -14.20 m',
      detail: 'Granite anchor pier opposing cantilever overturning moment.',
      posClass: 'lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2',
    },
    {
      id: '05',
      angleDeg: 240,
      label: 'ACOUSTIC ISOLATOR',
      metric: '240° // 49 dB',
      detail: 'Elastomeric vibration break isolating gallery slabs from rail corridors.',
      posClass: 'lg:bottom-[22%] lg:left-4',
    },
    {
      id: '06',
      angleDeg: 300,
      label: 'OVERHANG TIP',
      metric: '300° // 18.0 m',
      detail: 'Free cantilever nose verified within ±0.02 mm deflection tolerance.',
      posClass: 'lg:top-[22%] lg:left-4',
    },
  ];

  const active = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <section className="bg-[#14161a] text-[#f7f6f3] py-28 border-b border-[#f7f6f3]/15 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#f7f6f3]/15 pb-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#ffc72c]">
              VAULT 15 // INVERTED RADIAL COMPASS GEOMETRY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mt-1">
              360° MERIDIAN AZIMUTH RING
            </h2>
          </div>
          <span className="font-mono text-xs text-[#f7f6f3]/65">
            SELECT PERIMETER NODE TO INSPECT VECTOR
          </span>
        </div>

        {/* Radial Circular Composition on Desktop / Clean Arc Stack on Mobile */}
        <div className="relative lg:h-[640px] flex flex-col lg:block items-center justify-center gap-6">
          {/* Concentric Circular Rings & Radial Spokes (Desktop) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 600 600"
            className="hidden lg:block lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-[560px] h-[560px] pointer-events-none z-0"
          >
            <circle cx="300" cy="300" r="270" fill="none" stroke="#f7f6f3" strokeOpacity="0.18" strokeDasharray="4 6" />
            <circle cx="300" cy="300" r="195" fill="none" stroke="#ffc72c" strokeOpacity="0.35" strokeWidth="1.2" />
            <circle cx="300" cy="300" r="110" fill="none" stroke="#f7f6f3" strokeOpacity="0.22" />
            {/* 6 radial spokes */}
            <line x1="300" y1="20" x2="300" y2="580" stroke="#f7f6f3" strokeOpacity="0.12" />
            <line x1="58" y1="160" x2="542" y2="440" stroke="#f7f6f3" strokeOpacity="0.12" />
            <line x1="542" y1="160" x2="58" y2="440" stroke="#f7f6f3" strokeOpacity="0.12" />
          </svg>

          {/* Central Compass Core */}
          <div className="w-56 h-56 lg:w-52 lg:h-52 rounded-full bg-[#14161a] border-2 border-[#ffc72c] p-6 text-center flex flex-col items-center justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20">
            <Compass className="w-6 h-6 text-[#ffc72c] mb-2" />
            <span className="font-mono text-[10px] text-[#ffc72c] uppercase tracking-widest">
              {active.metric}
            </span>
            <h3 className="text-sm font-extrabold uppercase mt-1">{active.label}</h3>
            <p className="text-[11px] text-[#f7f6f3]/75 mt-1.5 leading-snug">{active.detail}</p>
          </div>

          {/* Perimeter Radial Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:block lg:static">
            {nodes.map((node) => {
              const isSelected = node.id === selectedNode;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedNode(node.id)}
                  className={`lg:absolute ${node.posClass} lg:w-60 text-left p-4 border transition-colors z-30 ${
                    isSelected
                      ? 'bg-[#ffc72c] text-[#14161a] border-[#ffc72c]'
                      : 'bg-[#14161a] text-[#f7f6f3] border-[#f7f6f3]/25 hover:border-[#ffc72c]'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                    <span className="font-bold">{node.id} // {node.metric}</span>
                    <span>{node.angleDeg}°</span>
                  </div>
                  <div className="font-extrabold uppercase text-sm">{node.label}</div>
                  <p className={`text-[11px] mt-1 leading-relaxed lg:hidden ${isSelected ? 'text-[#14161a]/85' : 'text-[#f7f6f3]/70'}`}>
                    {node.detail}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
