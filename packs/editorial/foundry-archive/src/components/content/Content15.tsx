import React, { useState } from 'react';

interface VaultNode {
  id: string;
  bearing: string;
  year: string;
  title: string;
  summary: string;
  cabinet: string;
  angleDeg: number;
}

export function Content15() {
  const nodes: VaultNode[] = [
    {
      id: 'N-01',
      bearing: '000° N',
      year: '1757',
      title: 'Parma Steel Punches',
      summary: 'Giambattista Bodoni cuts the first 18pt Romain counterpunches for the Stamperia Reale.',
      cabinet: 'SHELF 01A',
      angleDeg: -90,
    },
    {
      id: 'N-02',
      bearing: '060° NE',
      year: '1734',
      title: 'Chiswell Antiqua',
      summary: 'William Caslon I issues the London broadsheet specimen preserving old-style bracket curves.',
      cabinet: 'SHELF 03C',
      angleDeg: -30,
    },
    {
      id: 'N-03',
      bearing: '120° SE',
      year: '1957',
      title: 'Basel Vault Seal',
      summary: 'Typographica Archiv opens in Basel with 3,142 cataloged lead and bronze matrices.',
      cabinet: 'SHELF 06B',
      angleDeg: 30,
    },
    {
      id: 'N-04',
      bearing: '180° S',
      year: '1961',
      title: 'Paris Optical Plates',
      summary: 'Jan Tschichold completes photometric scaling tables at the Imprimerie Nationale.',
      cabinet: 'SHELF 09B',
      angleDeg: 90,
    },
    {
      id: 'N-05',
      bearing: '240° SW',
      year: '1983',
      title: 'PostScript Extrema',
      summary: 'Zürich vector lab translates 1200 DPI glass negatives into 1000 UPM cubic splines.',
      cabinet: 'SHELF 11D',
      angleDeg: 150,
    },
    {
      id: 'N-06',
      bearing: '300° NW',
      year: '2026',
      title: 'Archival Checksum',
      summary: 'Six optical masters unified and sealed under cryptographic provenance registry.',
      cabinet: 'SHELF 12F',
      angleDeg: 210,
    },
  ];

  const [selectedId, setSelectedId] = useState<string>('N-03');
  const activeNode = nodes.find((n) => n.id === selectedId) || nodes[2];

  return (
    <section className="w-full bg-black text-neutral-100 py-20 px-6 font-mono border-y-2 border-neutral-700 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-4 mb-12 gap-2">
          <div>
            <div className="text-[10px] tracking-[0.25em] text-neutral-500 uppercase">
              SUBTERRANEAN ROTUNDA · RADIAL GEOMETRY
            </div>
            <h2 className="text-2xl font-serif font-bold text-white mt-1">
              The Inverted Vault — Concentric Archive Rotunda
            </h2>
          </div>
          <div className="text-[11px] text-neutral-400 tabular-nums">
            CHAMBER 12 · 360° ORBITAL INDEX
          </div>
        </div>

        {/* Desktop Circular Radial Rotunda */}
        <div className="relative mx-auto w-full max-w-4xl lg:h-[640px] flex flex-col lg:flex-row items-center justify-center">
          {/* Concentric circular rings & radial spokes on desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute inset-0 pointer-events-none"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-neutral-800" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-dashed border-neutral-800" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[230px] h-[230px] rounded-full border border-neutral-600" />

            {/* Radial spoke lines matching 896x640 stage proportions */}
            <svg viewBox="0 0 896 640" className="w-full h-full">
              {nodes.map((node) => {
                const rad = (node.angleDeg * Math.PI) / 180;
                const x2 = 448 + Math.cos(rad) * (896 * 0.35);
                const y2 = 320 + Math.sin(rad) * (640 * 0.4);
                const isActive = node.id === activeNode.id;
                return (
                  <line
                    key={node.id}
                    x1="448"
                    y1="320"
                    x2={x2}
                    y2={y2}
                    stroke={isActive ? '#ffffff' : '#262626'}
                    strokeWidth={isActive ? '1.5' : '1'}
                    strokeDasharray={isActive ? undefined : '3 4'}
                  />
                );
              })}
            </svg>
          </div>

          {/* Central Circular Core */}
          <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-56 h-56 rounded-full bg-black border-2 border-white flex flex-col items-center justify-center text-center p-5 z-20 mb-8 lg:mb-0">
            <span className="text-[9px] tracking-[0.22em] text-neutral-400 uppercase">
              {activeNode.bearing} · {activeNode.cabinet}
            </span>
            <div className="text-4xl font-serif font-bold text-white tabular-nums my-1">
              {activeNode.year}
            </div>
            <div className="text-xs font-bold text-neutral-200 mb-1.5">{activeNode.title}</div>
            <p className="text-[10px] font-sans text-neutral-400 leading-snug line-clamp-3">
              {activeNode.summary}
            </p>
          </div>

          {/* 6 Radial Orbital Nodes placed around the perimeter on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:block">
            {nodes.map((node) => {
              const isSelected = node.id === activeNode.id;
              const rad = (node.angleDeg * Math.PI) / 180;
              // Radial coordinates as percentages inside the 896x640 stage
              const leftPct = 50 + Math.cos(rad) * 35;
              const topPct = 50 + Math.sin(rad) * 40;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedId(node.id)}
                  style={{
                    left: `${leftPct}%`,
                    top: `${topPct}%`,
                  }}
                  className={`lg:absolute lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-48 text-left p-3.5 border transition-colors z-30 ${
                    isSelected
                      ? 'bg-neutral-100 text-neutral-950 border-white'
                      : 'bg-neutral-950 text-neutral-200 border-neutral-700 hover:border-neutral-400'
                  }`}
                >
                  <div className="flex justify-between items-center text-[9px] uppercase tracking-wider mb-1 opacity-75 tabular-nums">
                    <span>{node.bearing}</span>
                    <span>{node.id}</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-serif font-bold text-sm leading-tight">
                      {node.title}
                    </span>
                    <span className="text-xs font-bold tabular-nums shrink-0">{node.year}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-4 flex flex-col sm:flex-row justify-between text-[10px] text-neutral-500 gap-2">
          <span>SELECT ANY ORBITAL BEARING TO INSPECT VAULT SECTOR</span>
          <span className="tabular-nums">ACTIVE SECTOR: {activeNode.id} ({activeNode.year})</span>
        </div>
      </div>
    </section>
  );
}
