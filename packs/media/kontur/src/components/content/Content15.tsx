/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Compass } from 'lucide-react';

export const Content15: React.FC = () => {
  const nodes = [
    { deg: '000°', title: 'ORIGIN', desc: 'Basel Municipal Grid 1962', posClass: 'lg:top-6 lg:left-1/2 lg:-translate-x-1/2 lg:text-center' },
    { deg: '060°', title: 'MASS', desc: 'Grotesque 900 Weight', posClass: 'lg:top-[128px] lg:right-8 lg:text-right' },
    { deg: '120°', title: 'BLEED', desc: 'Severed Edge Geometry', posClass: 'lg:bottom-[128px] lg:right-8 lg:text-right' },
    { deg: '180°', title: 'VOID', desc: 'Active Negative Ground', posClass: 'lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2 lg:text-center' },
    { deg: '240°', title: 'RULE', desc: 'Hairline Subdivision', posClass: 'lg:bottom-[128px] lg:left-8 lg:text-left' },
    { deg: '300°', title: 'SCALE', desc: '28:1 Contrast Ratio', posClass: 'lg:top-[128px] lg:left-8 lg:text-left' },
  ];

  return (
    <section className="w-full bg-white text-black border-b border-black px-6 py-12 md:px-10 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-black/25 pb-4 mb-8">
        <div>
          <div className="text-[10px] font-mono tracking-[0.22em] opacity-65 uppercase">
            CONTENT 15 // THE INVERTED VAULT — RADIAL GEOMETRY INTERRUPTION
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mt-1">
            360° ARCHIVAL COMPASS
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest opacity-70">
          <Compass className="w-4 h-4" />
          <span>INVERSE POLAR FIELD</span>
        </div>
      </div>

      {/* Desktop Radial Vault Composition */}
      <div className="relative max-w-5xl mx-auto h-[600px] hidden lg:block">
        {/* Concentric Hairline Circles & Radial Spokes SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 600"
          aria-hidden="true"
        >
          <circle cx="500" cy="300" r="245" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          <circle cx="500" cy="300" r="185" fill="none" stroke="rgba(0,0,0,0.45)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="500" cy="300" r="135" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
          {/* 6 Radial Spokes at 60° intervals */}
          <line x1="500" y1="55" x2="500" y2="545" stroke="rgba(0,0,0,0.18)" strokeWidth="1" />
          <line x1="288" y1="177" x2="712" y2="423" stroke="rgba(0,0,0,0.18)" strokeWidth="1" />
          <line x1="288" y1="423" x2="712" y2="177" stroke="rgba(0,0,0,0.18)" strokeWidth="1" />
        </svg>

        {/* Central Pure Black Circular Core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[230px] h-[230px] rounded-full bg-black text-white flex flex-col items-center justify-center overflow-hidden p-4 border-4 border-black shadow-2xl z-20">
          <span className="text-[10px] font-mono tracking-[0.22em] opacity-65">CORE // 360°</span>
          <div className="text-[76px] font-black tracking-[-0.08em] leading-[0.8] uppercase whitespace-nowrap my-1 select-none">
            VAULT
          </div>
          <span className="text-[9px] font-mono tracking-widest opacity-60">KONTUR BASEL</span>
        </div>

        {/* 6 Perimeter Arc Nodes */}
        {nodes.map((node) => (
          <div
            key={node.deg}
            className={`absolute w-[210px] bg-white/95 border border-black/30 p-3.5 z-10 ${node.posClass}`}
          >
            <div className="text-[10px] font-mono tracking-widest opacity-60 tabular-nums">
              {node.deg} // RADIAL NODE
            </div>
            <div className="text-lg font-black tracking-tighter uppercase mt-0.5">
              {node.title}
            </div>
            <div className="text-[11px] font-mono opacity-80 mt-0.5">
              {node.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Mobile/Tablet Concentric Fallback */}
      <div className="lg:hidden space-y-6">
        <div className="w-52 h-52 mx-auto rounded-full bg-black text-white flex flex-col items-center justify-center overflow-hidden p-4">
          <span className="text-[9px] font-mono tracking-widest opacity-65">CORE // 360°</span>
          <div className="text-6xl font-black tracking-[-0.08em] leading-none uppercase whitespace-nowrap">
            VAULT
          </div>
          <span className="text-[9px] font-mono tracking-widest opacity-60 mt-1">KONTUR BASEL</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {nodes.map((node) => (
            <div key={node.deg} className="border border-black/30 p-4">
              <div className="text-[10px] font-mono opacity-60">{node.deg} // RADIAL NODE</div>
              <div className="text-lg font-black uppercase">{node.title}</div>
              <div className="text-xs font-mono opacity-80">{node.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
