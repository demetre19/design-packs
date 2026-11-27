import React from 'react';
import { Wrench } from 'lucide-react';

interface Callout {
  id: string;
  label: string;
  spec: string;
  note: string;
  boxClass: string;
  line: { x1: number; y1: number; x2: number; y2: number; x3: number; y3: number };
}

export function Content4() {
  const callouts: Callout[] = [
    {
      id: 'A1',
      label: '01 // DUAL-ROD ACTUATOR',
      spec: '14,000 PSI CHROME BORE',
      note: 'Hardened nitride piston rod resists abrasive silica dust.',
      boxClass: 'lg:absolute lg:top-6 lg:left-6 lg:w-60',
      line: { x1: 245, y1: 88, x2: 335, y2: 88, x3: 418, y3: 155 },
    },
    {
      id: 'A2',
      label: '02 // UPPER SWIVEL YOKE',
      spec: 'FORGED 4340 CHROMOLY',
      note: 'Zero-backlash spherical bearings rated to 180 metric tons.',
      boxClass: 'lg:absolute lg:top-6 lg:right-6 lg:w-60',
      line: { x1: 755, y1: 88, x2: 665, y2: 88, x3: 595, y3: 190 },
    },
    {
      id: 'A3',
      label: '03 // ARMORED FLEX LINES',
      spec: 'TRIPLE-BRAID STEEL',
      note: 'Burst-tested to 42,000 PSI with quick-disconnect manifold.',
      boxClass: 'lg:absolute lg:bottom-10 lg:left-6 lg:w-60',
      line: { x1: 245, y1: 445, x2: 315, y2: 445, x3: 472, y3: 328 },
    },
    {
      id: 'A4',
      label: '04 // ROTARY CUTTER HEAD',
      spec: '36 TUNGSTEN PICKS',
      note: 'Replaceable conical carbide bits shatter basalt at 42 RPM.',
      boxClass: 'lg:absolute lg:bottom-10 lg:right-6 lg:w-60',
      line: { x1: 755, y1: 445, x2: 695, y2: 445, x3: 642, y3: 392 },
    },
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black pb-3 mb-8 font-mono text-[10px] uppercase tracking-widest">
          <span>ASSEMBLY PLATE 04 // TF-900 EXCAVATOR BOOM</span>
          <span className="tabular-nums">DWG NO: TF-900-EXP-04 // SCALE 1:24</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            EXPLODED <span className="text-[#f25c05]">ASSEMBLY</span>.
          </h2>
          <span className="font-mono text-[10px] uppercase bg-black text-white px-3 py-1.5">
            4 CRITICAL LOAD POINTS ANNOTATED
          </span>
        </div>

        {/* Exploded Diagram Canvas */}
        <div className="relative bg-white border-4 border-black p-4 md:p-8 lg:h-[580px] flex flex-col justify-center">
          {/* Technical Hairline Crosshair Grid */}
          <div
            className="hidden lg:block absolute inset-x-8 top-1/2 h-[1px] bg-neutral-200 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="hidden lg:block absolute inset-y-8 left-1/2 w-[1px] bg-neutral-200 pointer-events-none"
            aria-hidden="true"
          />

          {/* Central Machinery Visual Plate */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-lg z-10 border-2 border-black bg-[#f5f4f0]">
            <img
              src="https://images.unsplash.com/photo-1523848309072-c199db53f137?auto=format&fit=crop&w=1200&q=80"
              alt="Titan Forge TF-900 hydraulic excavator boom and rotary crusher head technical plate"
              referrerPolicy="no-referrer"
              className="w-full h-72 md:h-96 object-cover contrast-125 grayscale"
            />
            <div className="bg-black text-white px-3 py-1.5 font-mono text-[10px] uppercase flex justify-between items-center">
              <span>FIG 4.1 // ROTARY CRUSHER SUB-ASSEMBLY</span>
              <Wrench className="w-3.5 h-3.5 text-[#f25c05]" />
            </div>
          </div>

          {/* Drawn SVG Leader Lines (Desktop Overlay) */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20"
            viewBox="0 0 1000 580"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {callouts.map((c) => (
              <g key={c.id}>
                <polyline
                  points={`${c.line.x1},${c.line.y1} ${c.line.x2},${c.line.y2} ${c.line.x3},${c.line.y3}`}
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                />
                <rect
                  x={c.line.x3 - 5}
                  y={c.line.y3 - 5}
                  width="10"
                  height="10"
                  fill="#f25c05"
                  stroke="#000000"
                  strokeWidth="2"
                />
              </g>
            ))}
          </svg>

          {/* Flying Peripheral Annotation Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 lg:mt-0 lg:block z-30">
            {callouts.map((c) => (
              <div
                key={c.id}
                className={`${c.boxClass} bg-[#f5f4f0] border-2 border-black p-3.5 font-mono`}
              >
                <div className="flex items-center justify-between text-[10px] font-bold uppercase mb-1">
                  <span className="text-[#f25c05]">{c.label}</span>
                  <span className="bg-black text-white px-1.5 py-0.5 text-[9px]">{c.id}</span>
                </div>
                <div className="font-sans font-black text-sm uppercase tracking-tight mb-1">
                  {c.spec}
                </div>
                <p className="text-[11px] text-neutral-700 leading-snug">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
