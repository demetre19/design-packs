import React, { useState } from 'react';

interface RadialNode {
  deg: number;
  code: string;
  label: string;
  value: string;
  note: string;
  xPercent: number;
  yPercent: number;
}

const RADIAL_NODES: RadialNode[] = [
  { deg: 0, code: 'N.01', label: 'SOLID CORE', value: '998V', note: 'Ceramic electrolyte stack', xPercent: 50, yPercent: 14 },
  { deg: 60, code: 'N.02', label: 'AERO LOAD', value: '340KG', note: 'Biplane carbon foils', xPercent: 81.2, yPercent: 32 },
  { deg: 120, code: 'N.03', label: 'TORQUE', value: '305NM', note: 'Dual axial-flux rotors', xPercent: 81.2, yPercent: 68 },
  { deg: 180, code: 'N.04', label: 'DRY MASS', value: '198KG', note: 'T1100G carbon monocoque', xPercent: 50, yPercent: 86 },
  { deg: 240, code: 'N.05', label: 'LEAN LIMIT', value: '64°', note: 'Forged swingarm trail', xPercent: 18.8, yPercent: 68 },
  { deg: 300, code: 'N.06', label: 'ECU LOOP', value: '5KHZ', note: 'Neural slip prediction', xPercent: 18.8, yPercent: 32 },
];

export function Content15() {
  const [activeCode, setActiveCode] = useState<string>('N.01');
  const activeNode = RADIAL_NODES.find((n) => n.code === activeCode) || RADIAL_NODES[0];

  return (
    <section className="w-full bg-black text-white py-20 border-b-2 border-black overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 border-b border-neutral-800 pb-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#ff2e00] font-bold">
              360° RADIAL ARCHITECTURE / NON-ORTHOGONAL VAULT
            </div>
            <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mt-1">
              INVERTED <span className="text-[#ff2e00]">VAULT</span>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-neutral-400 uppercase mt-2 sm:mt-0">
            ACTIVE NODE: {activeNode.code} · {activeNode.deg}° AZIMUTH
          </div>
        </div>

        {/* Desktop Radial Orbital Diagram */}
        <div className="hidden md:block relative w-full max-w-[780px] h-[620px] mx-auto">
          {/* Concentric Rings & Radial Spokes SVG */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <circle cx="50" cy="50" r="18" fill="none" stroke="#ff2e00" strokeWidth="0.35" />
            <circle cx="50" cy="50" r="36" fill="none" stroke="#404040" strokeWidth="0.3" strokeDasharray="1.5 1.5" />
            <circle cx="50" cy="50" r="46" fill="none" stroke="#262626" strokeWidth="0.25" />

            {RADIAL_NODES.map((node) => {
              const isSelected = node.code === activeCode;
              return (
                <line
                  key={node.code}
                  x1="50"
                  y1="50"
                  x2={node.xPercent}
                  y2={node.yPercent}
                  stroke={isSelected ? '#ff2e00' : '#404040'}
                  strokeWidth={isSelected ? '0.45' : '0.2'}
                />
              );
            })}
          </svg>

          {/* Central Core Emblem */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-black border-2 border-[#ff2e00] flex flex-col items-center justify-center text-center p-4 z-20">
            <span className="font-mono text-[9px] text-[#ff2e00] tracking-[0.25em] uppercase">
              {activeNode.code} · {activeNode.deg}°
            </span>
            <span className="text-4xl font-black tracking-tighter leading-none my-1 tabular-nums">
              {activeNode.value}
            </span>
            <span className="font-mono text-[10px] text-neutral-300 uppercase">
              {activeNode.note}
            </span>
          </div>

          {/* 6 Radial Perimeter Nodes */}
          {RADIAL_NODES.map((node) => {
            const isSelected = node.code === activeCode;
            return (
              <button
                key={node.code}
                type="button"
                onClick={() => setActiveCode(node.code)}
                style={{ left: `${node.xPercent}%`, top: `${node.yPercent}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-40 p-3 border text-left cursor-pointer transition-colors z-30 ${
                  isSelected
                    ? 'bg-[#ff2e00] text-black border-[#ff2e00]'
                    : 'bg-neutral-950 text-white border-neutral-700 hover:border-white'
                }`}
              >
                <div className="flex justify-between font-mono text-[9px] font-bold">
                  <span>{node.code}</span>
                  <span>{node.deg}°</span>
                </div>
                <div className="font-black text-base uppercase tracking-tight leading-tight mt-0.5">
                  {node.label}
                </div>
                <div className={`font-mono text-xs font-black tabular-nums ${isSelected ? 'text-black' : 'text-[#ff2e00]'}`}>
                  {node.value}
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile Compact Radial Ring Fallback */}
        <div className="md:hidden space-y-3">
          <div className="border-2 border-[#ff2e00] p-6 text-center bg-neutral-950 mb-4">
            <div className="font-mono text-[10px] text-[#ff2e00]">{activeNode.code} · {activeNode.deg}°</div>
            <div className="text-5xl font-black tabular-nums my-1">{activeNode.value}</div>
            <div className="font-mono text-xs text-neutral-300">{activeNode.note}</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {RADIAL_NODES.map((node) => (
              <button
                key={node.code}
                type="button"
                onClick={() => setActiveCode(node.code)}
                className={`p-3 border text-left cursor-pointer ${
                  node.code === activeCode
                    ? 'bg-[#ff2e00] text-black border-[#ff2e00]'
                    : 'bg-neutral-950 text-white border-neutral-800'
                }`}
              >
                <div className="font-mono text-[9px] font-bold">{node.code} · {node.deg}°</div>
                <div className="font-black text-sm uppercase">{node.label}</div>
                <div className="font-mono text-xs font-bold">{node.value}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
