import React from 'react';

interface Callout {
  code: string;
  label: string;
  spec: string;
  detail: string;
  positionClass: string;
  dotLeft: string;
  dotTop: string;
}

const CALLOUTS: Callout[] = [
  {
    code: 'A1',
    label: 'CANTILEVERED ROOF PLANE',
    spec: '320 MM POST-TENSIONED SLAB',
    detail: 'Poured in a single continuous 14-hour operation with recessed zinc perimeter gravel stop.',
    positionClass: 'lg:col-start-1 lg:col-span-3 lg:row-start-1 self-start',
    dotLeft: '46%',
    dotTop: '30%',
  },
  {
    code: 'B2',
    label: 'CHARRED CEDAR CLADDING',
    spec: '24 MM YAKISUGI LOUVERS',
    detail: 'Vertical ventilation cavity behind untreated timber fins slows weathering at 1,840m altitude.',
    positionClass: 'lg:col-start-10 lg:col-span-3 lg:row-start-1 self-start',
    dotLeft: '34%',
    dotTop: '48%',
  },
  {
    code: 'C3',
    label: 'DRY-STACKED GNEISS PLINTH',
    spec: 'LOCAL ENGADIN QUARRY',
    detail: 'Hand-dressed stone retaining wall locks the lower foundation directly into the alpine ridge.',
    positionClass: 'lg:col-start-1 lg:col-span-3 lg:row-start-2 self-end',
    dotLeft: '24%',
    dotTop: '78%',
  },
  {
    code: 'D4',
    label: 'FLUSH BALUSTRADE & DECK',
    spec: '21.5 MM LAMINATED GLASS',
    detail: 'Zero-mullion structural glazing pocketed inside the concrete edge beam preserves sightlines.',
    positionClass: 'lg:col-start-10 lg:col-span-3 lg:row-start-2 self-end',
    dotLeft: '64%',
    dotTop: '62%',
  },
];

export function Content4() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e2e0d8] pb-5">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
                ASSEMBLY DIAGRAM — PLATE 04 / ENGADIN PAVILION
              </span>
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">
              Exploded Tectonic Anatomy
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums">
            SCALE 1:50 · 4 ANNOTATED NODES
          </span>
        </div>

        <div className="relative">
          {/* Desktop leader lines SVG bridging outer callout edges to exact plate coordinates */}
          <svg
            aria-hidden="true"
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20"
            viewBox="0 0 1152 560"
            preserveAspectRatio="none"
          >
            {/* A1: top-left box -> roof slab (x=548, y=168) */}
            <polyline points="274,56 365,56 548,168" fill="none" stroke="#b5482e" strokeWidth="1.15" />
            <circle cx="548" cy="168" r="3.5" fill="#b5482e" />

            {/* B2: top-right box -> cedar cladding (x=426, y=262) */}
            <polyline points="878,56 760,56 426,262" fill="none" stroke="#16171a" strokeWidth="1.15" />
            <circle cx="426" cy="262" r="3.5" fill="#16171a" />

            {/* C3: bottom-left box -> gneiss plinth (x=378, y=422) */}
            <polyline points="274,474 345,474 378,422" fill="none" stroke="#16171a" strokeWidth="1.15" />
            <circle cx="378" cy="422" r="3.5" fill="#16171a" />

            {/* D4: bottom-right box -> balustrade (x=652, y=348) */}
            <polyline points="878,474 756,474 652,348" fill="none" stroke="#b5482e" strokeWidth="1.15" />
            <circle cx="652" cy="348" r="3.5" fill="#b5482e" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 gap-6 items-center">
            {/* Central Architectural Plate */}
            <div className="md:col-span-2 lg:col-start-4 lg:col-span-6 lg:row-start-1 lg:row-span-2 relative z-10">
              <div className="border border-[#16171a] p-2 bg-[#f0efeb]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e2e0d8]">
                  <img
                    src="/src/assets/images/varden_exploded_plate_1795617060449.jpg"
                    alt="Engadin Pavilion tectonic cross-view"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover saturate-[0.85]"
                  />
                  {/* Mobile / tablet target markers */}
                  {CALLOUTS.map((c) => (
                    <span
                      key={c.code}
                      style={{ left: c.dotLeft, top: c.dotTop }}
                      className="lg:hidden absolute -translate-x-1/2 -translate-y-1/2 bg-[#b5482e] text-[#fafaf8] text-[9px] font-mono px-1.5 py-0.5 leading-none"
                    >
                      {c.code}
                    </span>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t border-[#e2e0d8] flex justify-between items-center text-[10px] font-mono text-stone-600 uppercase">
                  <span>FIG. 04 — CANTILEVER ASSEMBLY</span>
                  <span className="tabular-nums">46.4908° N, 9.8355° E</span>
                </div>
              </div>
            </div>

            {/* 4 Directional Annotations */}
            {CALLOUTS.map((c) => (
              <div
                key={c.code}
                className={`${c.positionClass} bg-[#fafaf8] border border-[#e2e0d8] p-4 space-y-1.5 relative z-30`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider">
                  <span className="text-[#b5482e] font-medium">[{c.code}] {c.label}</span>
                </div>
                <div className="text-[10px] font-mono text-stone-500 uppercase">{c.spec}</div>
                <p className="text-xs text-stone-700 leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
