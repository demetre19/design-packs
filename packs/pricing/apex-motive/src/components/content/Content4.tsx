import React, { useState } from 'react';
import { Crosshair } from 'lucide-react';

interface CalloutPoint {
  id: string;
  label: string;
  spec: string;
  note: string;
  /* Target coords on bike inside 1120x540 viewBox */
  tx: number;
  ty: number;
  /* Elbow and box-edge endpoint inside 1120x540 viewBox */
  mx: number;
  my: number;
  lx: number;
  ly: number;
  posClass: string;
}

const CALLOUTS: CalloutPoint[] = [
  {
    id: 'C-01',
    label: 'STEERING HEAD & AERO COWL',
    spec: '23.5° RAKE // 48.2 KGF',
    note: 'Active electro-mechanical winglets adjust downforce across 18° sweep.',
    tx: 425,
    ty: 185,
    mx: 315,
    my: 72,
    lx: 232,
    ly: 72,
    posClass: 'lg:top-4 lg:left-2',
  },
  {
    id: 'C-02',
    label: 'T1000G CARBON MONOCOQUE',
    spec: '7.2 KG // AUTOCLAVED',
    note: 'Hollow-core structural shell houses the 800V DC bus conduits.',
    tx: 560,
    ty: 180,
    mx: 760,
    my: 66,
    lx: 880,
    ly: 66,
    posClass: 'lg:top-2 lg:right-4',
  },
  {
    id: 'C-03',
    label: 'BREMBO GP4-RR 330MM DISC',
    spec: '12 MS BITE // CARBON-CERAMIC',
    note: 'Ventilated track rotor paired with titanium four-piston monobloc.',
    tx: 385,
    ty: 340,
    mx: 285,
    my: 270,
    lx: 224,
    ly: 270,
    posClass: 'lg:top-1/2 lg:-translate-y-1/2 lg:left-0',
  },
  {
    id: 'C-04',
    label: 'AXIAL FLUX STATOR CORE',
    spec: '117 KW // 18,500 RPM',
    note: 'Direct dielectric oil bath holds coil peak below 85 °C.',
    tx: 580,
    ty: 295,
    mx: 785,
    my: 270,
    lx: 896,
    ly: 270,
    posClass: 'lg:top-1/2 lg:-translate-y-1/2 lg:right-0',
  },
  {
    id: 'C-05',
    label: '800V SOLID-STATE CELL BAY',
    spec: '21.4 KWH // 500 WH/KG',
    note: 'Stressed 7075-T6 billet belly container lowers CG by 28 mm.',
    tx: 510,
    ty: 325,
    mx: 375,
    my: 468,
    lx: 240,
    ly: 468,
    posClass: 'lg:bottom-2 lg:left-4',
  },
  {
    id: 'C-06',
    label: 'ÖHLINS TTX36 SWINGARM PIVOT',
    spec: '10 MS DAMPING // MAGNESIUM',
    note: 'Semi-active electronic valve adjusts rebound off rear wheel speed delta.',
    tx: 700,
    ty: 320,
    mx: 785,
    my: 468,
    lx: 880,
    ly: 468,
    posClass: 'lg:bottom-2 lg:right-4',
  },
];

export function Content4() {
  const [activeId, setActiveId] = useState<string>('C-04');
  const activeCallout = CALLOUTS.find((c) => c.id === activeId) || CALLOUTS[0];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b border-[#272a33] pb-5">
          <div>
            <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">
              BLUEPRINT 04 // EXPLODED CHASSIS TELEMETRY PLATE
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mt-1">
              APEX-V12 R ASSEMBLY SCHEMATIC
            </h2>
          </div>
          <div className="font-mono-spec text-[11px] text-neutral-400 flex items-center gap-2">
            <Crosshair size={13} className="text-[#ff5a1f]" />
            <span>TARGET NODE: <strong className="text-white">{activeCallout.id}</strong></span>
          </div>
        </div>

        {/* Exploded Diagram Stage */}
        <div className="relative bg-[#13151a] border border-[#272a33] min-h-[500px] lg:h-[540px] p-4 lg:p-0 overflow-hidden">
          {/* Background Engineering Coordinate Grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(to right, #272a33 1px, transparent 1px), linear-gradient(to bottom, #272a33 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Central Visual Plate + Drawn SVG Leader Lines (Exact 1120x540 match) */}
          <svg
            viewBox="0 0 1120 540"
            preserveAspectRatio="none"
            className="w-full h-[260px] lg:h-full relative z-10"
            aria-label="APEX-V12 R Exploded Chassis Schematic"
          >
            <defs>
              <radialGradient id="stageGlow" cx="50%" cy="55%" r="45%">
                <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.18" />
                <stop offset="70%" stopColor="#16181d" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#101114" stopOpacity="0" />
              </radialGradient>
            </defs>

            <ellipse cx="560" cy="285" rx="300" ry="165" fill="url(#stageGlow)" />

            {/* Stylized Superbike Wireframe Silhouette centered at x=560 */}
            <circle cx="385" cy="340" r="64" fill="none" stroke="#363a45" strokeWidth="3" />
            <circle cx="385" cy="340" r="44" fill="none" stroke="#272a33" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="735" cy="340" r="66" fill="none" stroke="#363a45" strokeWidth="3" />
            <circle cx="735" cy="340" r="46" fill="none" stroke="#272a33" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Fork, Swingarm, Monocoque & Core Battery/Motor */}
            <path
              d="M385 340 L425 185 L565 178 L685 212 L735 340 L608 328 L508 328 L442 275 Z"
              fill="#16181d"
              fillOpacity="0.88"
              stroke="#525866"
              strokeWidth="2"
            />
            {/* Aero Cowl & Seat Line */}
            <path
              d="M402 212 L442 158 L552 156 L662 202 L746 182"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.65"
              strokeWidth="2"
            />
            {/* Axial Flux Core Highlight */}
            <rect x="550" y="266" width="60" height="58" fill="#101114" stroke="#ff5a1f" strokeWidth="1.75" />
            <circle cx="580" cy="295" r="17" fill="none" stroke="#ff5a1f" strokeWidth="1.5" />
            {/* 800V Battery Bay */}
            <polygon points="468,278 545,278 545,330 494,330" fill="#1a1d24" stroke="#525866" strokeWidth="1.5" />

            {/* Leader Lines flying from target dots directly into callout borders */}
            {CALLOUTS.map((pt) => {
              const active = pt.id === activeId;
              return (
                <g key={pt.id}>
                  <polyline
                    points={`${pt.tx},${pt.ty} ${pt.mx},${pt.my} ${pt.lx},${pt.ly}`}
                    fill="none"
                    stroke={active ? '#ff5a1f' : '#4a4f5c'}
                    strokeWidth={active ? '1.75' : '1'}
                    strokeDasharray={active ? 'none' : '4 4'}
                    className="hidden lg:inline"
                  />
                  <circle
                    cx={pt.lx}
                    cy={pt.ly}
                    r={active ? 3.5 : 2.5}
                    fill={active ? '#ff5a1f' : '#525866'}
                    className="hidden lg:inline"
                  />
                  <circle
                    cx={pt.tx}
                    cy={pt.ty}
                    r={active ? 6.5 : 4.5}
                    fill={active ? '#ff5a1f' : '#101114'}
                    stroke="#ff5a1f"
                    strokeWidth="1.5"
                    className="cursor-pointer"
                    onClick={() => setActiveId(pt.id)}
                  />
                </g>
              );
            })}
          </svg>

          {/* Flying Callout Anchors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 lg:mt-0 lg:block">
            {CALLOUTS.map((pt) => {
              const active = pt.id === activeId;
              return (
                <button
                  key={pt.id}
                  type="button"
                  onClick={() => setActiveId(pt.id)}
                  className={`text-left lg:absolute z-20 lg:w-56 p-3 border transition-colors cursor-pointer ${pt.posClass} ${
                    active
                      ? 'bg-[#16181d] border-[#ff5a1f] text-white'
                      : 'bg-[#101114]/95 border-[#272a33] text-neutral-300 hover:border-neutral-500'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono-spec text-[10px] mb-1">
                    <span className="text-[#ff5a1f] font-bold">{pt.id}</span>
                    <span className="text-neutral-500">{pt.spec}</span>
                  </div>
                  <div className="font-display font-extrabold text-xs tracking-wide text-white">
                    {pt.label}
                  </div>
                  <p className="font-mono-spec text-[10px] text-neutral-400 mt-1 leading-snug">
                    {pt.note}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Calibration Bar */}
        <div className="border-x border-b border-[#272a33] bg-[#16181d] px-4 py-3 flex flex-wrap justify-between items-center gap-4 font-mono-spec text-[11px]">
          <span className="text-[#ff5a1f] font-bold">ACTIVE SUBSYSTEM // {activeCallout.label}</span>
          <span className="text-neutral-300">{activeCallout.spec}</span>
          <span className="text-neutral-500">SCALE 1:12 // ORTHOGRAPHIC CAD REF</span>
        </div>
      </div>
    </section>
  );
}
