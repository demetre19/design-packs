import React, { useState } from 'react';

export function computeRadialPosition(index: number, total: number, radiusPct: number) {
  if (total <= 0) {
    throw new Error('Total radial nodes must be positive');
  }
  const angleDeg = (index * 360) / total;
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  const xPct = Number((50 + radiusPct * Math.cos(rad)).toFixed(2));
  const yPct = Number((50 + radiusPct * Math.sin(rad)).toFixed(2));
  return { xPct, yPct, angleDeg };
}

interface VaultProtocolNode {
  id: string;
  code: string;
  title: string;
  metric: string;
  description: string;
}

const VAULT_NODES: VaultProtocolNode[] = [
  {
    id: 'seismic',
    code: '000°',
    title: 'Seismic Isolation',
    metric: '8.0 Mw DAMPED',
    description: 'Elastomeric bedrock bearings decouple the chamber from urban vibration.',
  },
  {
    id: 'nitrogen',
    code: '060°',
    title: 'Nitrogen Purge',
    metric: '< 0.4% OXYGEN',
    description: 'Continuous inert-gas flush halts dial oxidation and oil aging.',
  },
  {
    id: 'biometric',
    code: '120°',
    title: 'Tri-Modal Key',
    metric: 'PALM + IRIS + TI',
    description: 'Three independent biometric tokens required simultaneously at entry.',
  },
  {
    id: 'faraday',
    code: '180°',
    title: 'Faraday Shield',
    metric: '120 dB EMP',
    description: 'Dual copper-mu-metal lining blocks external electromagnetic pulse.',
  },
  {
    id: 'thermal',
    code: '240°',
    title: 'Thermal Lock',
    metric: '18.0°C ±0.2°',
    description: 'Geothermal loop sustains constant museum climate without grid power.',
  },
  {
    id: 'ledger',
    code: '300°',
    title: 'Air-Gapped Deed',
    metric: 'TITANIUM SEAL',
    description: 'Physical lineage deeds stored offline in notarized cantonal vaults.',
  },
];

export function Content15() {
  const [selectedId, setSelectedId] = useState<string>('biometric');
  const activeNode = VAULT_NODES.find((n) => n.id === selectedId) ?? VAULT_NODES[0];

  return (
    <section className="w-full bg-[#040507] py-24 px-6 border-b border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[10px] font-mono tracking-[0.35em] text-[#d4b06a] uppercase block mb-2">
            INVERTED OBSIDIAN CHAMBER // RADIAL ARCHITECTURE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#ece8e1]">
            Vault Chamber Ω: Six-Point Perimeter
          </h2>
        </div>

        {/* Desktop Circular Radial Composition */}
        <div className="hidden lg:block relative w-full h-[640px] mx-auto">
          {/* Concentric Circular Rings & Radial Spokes SVG */}
          <svg
            viewBox="0 0 640 640"
            className="w-[640px] h-[640px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          >
            <circle cx="320" cy="320" r="275" fill="none" stroke="rgba(236,232,225,0.12)" strokeDasharray="2 6" />
            <circle cx="320" cy="320" r="215" fill="none" stroke="rgba(212,176,106,0.35)" />
            <circle cx="320" cy="320" r="145" fill="none" stroke="rgba(236,232,225,0.14)" />
            {VAULT_NODES.map((node, idx) => {
              const rad = ((idx * 60 - 90) * Math.PI) / 180;
              const x1 = 320 + 145 * Math.cos(rad);
              const y1 = 320 + 145 * Math.sin(rad);
              const x2 = 320 + 215 * Math.cos(rad);
              const y2 = 320 + 215 * Math.sin(rad);
              const isSelected = node.id === selectedId;
              return (
                <line
                  key={node.id}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isSelected ? '#d4b06a' : 'rgba(236,232,225,0.22)'}
                  strokeWidth={isSelected ? '1.5' : '1'}
                />
              );
            })}
          </svg>

          {/* Central Circular Vault Core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[268px] h-[268px] rounded-full bg-[#0b0d10] border border-[#d4b06a]/60 p-6 flex flex-col items-center justify-center text-center z-10">
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#d4b06a] mb-1">
              NODE {activeNode.code} ◆ Ω
            </span>
            <h3 className="font-serif text-2xl text-[#ece8e1] mb-1">{activeNode.title}</h3>
            <span className="font-mono text-[10px] text-[#d4b06a] mb-3">{activeNode.metric}</span>
            <p className="font-sans text-[11px] text-[#7a8494] leading-relaxed">
              {activeNode.description}
            </p>
            <div className="mt-3 pt-2 border-t border-white/10 w-36 font-mono text-[9px] text-[#7a8494]">
              DEPTH -42M // LDN
            </div>
          </div>

          {/* 6 Radial Nodes Positioned Along Perimeter */}
          {VAULT_NODES.map((node, idx) => {
            const pos = computeRadialPosition(idx, VAULT_NODES.length, 38);
            const isSelected = node.id === selectedId;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedId(node.id)}
                style={{ left: `${pos.xPct}%`, top: `${pos.yPct}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-48 p-3.5 text-center border transition-colors z-20 ${
                  isSelected
                    ? 'bg-[#13171c] border-[#d4b06a]'
                    : 'bg-[#0b0d10] border-white/15 hover:border-[#d4b06a]/50'
                }`}
              >
                <div className="font-mono text-[10px] text-[#d4b06a] mb-0.5">
                  {node.code} // {node.metric}
                </div>
                <div className="font-serif text-lg text-[#ece8e1]">{node.title}</div>
              </button>
            );
          })}
        </div>

        {/* Mobile/Tablet Arc Composition Fallback */}
        <div className="lg:hidden flex flex-col items-center gap-6">
          <div className="w-64 h-64 rounded-full bg-[#0b0d10] border border-[#d4b06a] p-6 flex flex-col items-center justify-center text-center">
            <span className="font-mono text-[10px] text-[#d4b06a] mb-1">NODE {activeNode.code} ◆ Ω</span>
            <h3 className="font-serif text-xl text-[#ece8e1] mb-1">{activeNode.title}</h3>
            <span className="font-mono text-[10px] text-[#d4b06a] mb-2">{activeNode.metric}</span>
            <p className="font-sans text-[11px] text-[#7a8494]">{activeNode.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full">
            {VAULT_NODES.map((node) => (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedId(node.id)}
                className={`p-3 border text-left ${
                  node.id === selectedId
                    ? 'border-[#d4b06a] bg-[#13171c]'
                    : 'border-white/15 bg-[#0b0d10]'
                }`}
              >
                <span className="font-mono text-[10px] text-[#d4b06a] block">{node.code}</span>
                <span className="font-serif text-base text-[#ece8e1]">{node.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
