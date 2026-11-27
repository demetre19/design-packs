import React from 'react';

interface InterlockNode {
  id: string;
  side: 'left' | 'right';
  tag: string;
  title: string;
  metric: string;
  detail: string;
}

const INTERLOCK_NODES: InterlockNode[] = [
  {
    id: 'L-01',
    side: 'left',
    tag: 'FRONT SPLITTER // 01',
    title: 'BOUNDARY LAYER LIP',
    metric: '195 KG @ 250 KM/H',
    detail: 'Curved titanium skid plate prevents stall under maximum braking pitch.',
  },
  {
    id: 'R-01',
    side: 'right',
    tag: 'STEERING RACK // 02',
    title: 'ELECTRO-HYDRAULIC RATIO',
    metric: '11.4 : 1 LOCK',
    detail: 'Zero-backlash torsion bar sensor feeds real-time slip angle data.',
  },
  {
    id: 'L-02',
    side: 'left',
    tag: 'SIDE POD DUCT // 03',
    title: 'RADIATOR PLENUM PRESSURE',
    metric: '1.8 BAR INLET',
    detail: 'Internal carbon louvers vent hot core air upward ahead of rear axle.',
  },
  {
    id: 'R-02',
    side: 'right',
    tag: 'GEARBOX CASING // 04',
    title: 'SEAMLESS 7-SPEED DOG RING',
    metric: '28 MS SHIFT TIME',
    detail: 'Structural cast magnesium housing carries rear wishbone pickup loads.',
  },
  {
    id: 'L-03',
    side: 'left',
    tag: 'UNDERBODY STRAKE // 05',
    title: 'VORTEX GENERATOR TUNNEL',
    metric: '-42 KPA SUCTION',
    detail: 'Twin carbon fences isolate tire wake turbulence from diffuser expansion.',
  },
  {
    id: 'R-03',
    side: 'right',
    tag: 'REAR WING PYLON // 06',
    title: 'SWAN-NECK CANTILEVER',
    metric: '455 KG LOAD',
    detail: 'Top-mounted CNC aluminum uprights preserve clean underside suction.',
  },
];

export function Content3() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono text-[#111111] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[#111111] pb-3 mb-10 text-[9px] uppercase tracking-[0.25em]">
          <span>CONTENT-03 // CENTRAL SPINE INTERLOCK // LOAD PATH SEQUENCE</span>
          <span className="font-bold">AXIS: 0.00 MM CENTERLINE</span>
        </div>

        {/* Continuous Central Spine Composition */}
        <div className="relative py-4">
          {/* Continuous Vertical Centerline Rule */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-[#111111]"
            aria-hidden="true"
          />

          {/* Top & Bottom Centerline Crosshair Anchors */}
          <div
            className="hidden md:flex absolute left-1/2 -top-3 -translate-x-1/2 bg-[#e8e8e6] px-1 text-[10px] font-bold"
            aria-hidden="true"
          >
            + CL
          </div>

          <div className="space-y-6 md:space-y-0">
            {INTERLOCK_NODES.map((node, index) => {
              const isLeft = node.side === 'left';
              return (
                <div
                  key={node.id}
                  className={`relative md:w-[54%] ${
                    isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  } ${index > 0 ? 'md:-mt-4' : ''}`}
                >
                  {/* Interlocking Collar Tab Bridging Center Spine */}
                  <div
                    className={`hidden md:flex items-center absolute top-6 z-20 ${
                      isLeft ? '-right-[18px] flex-row' : '-left-[18px] flex-row-reverse'
                    }`}
                  >
                    <span className="w-6 h-[2px] bg-[#111111]" />
                    <span className="px-1.5 py-0.5 bg-[#111111] text-[#e8e8e6] text-[8px] font-bold tracking-widest">
                      {node.id}
                    </span>
                  </div>

                  {/* Asymmetric Tooth Block */}
                  <div
                    className={`border border-[#111111] bg-[#f4f4f0] p-4 relative ${
                      isLeft
                        ? 'md:border-r-2 md:mr-2 text-left'
                        : 'md:border-l-2 md:ml-2 bg-[#ffffff]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.2em] text-[#555555] border-b border-[#111111] pb-1.5 mb-2.5">
                      <span>{node.tag}</span>
                      <span className="font-bold text-[#111111] tabular-nums">{node.metric}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-black uppercase tracking-tight">
                      {node.title}
                    </h3>
                    <p className="text-[10px] text-[#444444] uppercase leading-relaxed mt-1">
                      {node.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Spine Alignment Verification */}
        <div className="mt-8 pt-3 border-t border-[#111111] flex justify-between text-[9px] uppercase tracking-widest text-[#555555]">
          <span>SYMMETRY: ZIPPERED OFFSET (-16 PX OVERLAP)</span>
          <span>REF: SPINE-KW-03</span>
        </div>
      </div>
    </section>
  );
}
