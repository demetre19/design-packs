import React, { useState } from 'react';
import { Crosshair } from 'lucide-react';

interface Callout {
  id: string;
  label: string;
  spec: string;
  detail: string;
  // Coordinates on the SVG / plate (percentage-based for overlay)
  dotX: number;
  dotY: number;
  boxClass: string;
  linePoints: string;
}

export const Content4: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('C3');
  const [imgFailed, setImgFailed] = useState(false);

  const callouts: Callout[] = [
    {
      id: 'C1',
      label: 'UPPER CLERESTORY HOOD',
      spec: 'P-01 // +14.60 m',
      detail: '12° canted concrete eyebrow shields south glazing from summer zenith sun.',
      dotX: 38,
      dotY: 26,
      boxClass: 'lg:col-start-1 lg:row-start-1',
      linePoints: '23.5,26 38,26',
    },
    {
      id: 'C2',
      label: 'DIAGONAL STEEL RIB',
      spec: 'P-02 // S690QL',
      detail: 'Primary inclined shear rib transferring terrace loads back to the rock core.',
      dotX: 37,
      dotY: 63,
      boxClass: 'lg:col-start-1 lg:row-start-2',
      linePoints: '23.5,63 37,63',
    },
    {
      id: 'C3',
      label: '18 m FREE CANTILEVER NOSE',
      spec: 'P-03 // ±0.02 mm',
      detail: 'Post-tensioned hollow deck hovering clear above the alpine gorge without piers.',
      dotX: 67,
      dotY: 36,
      boxClass: 'lg:col-start-3 lg:row-start-1',
      linePoints: '67,36 76.5,36',
    },
    {
      id: 'C4',
      label: 'SOFFIT TENSION FLANGE',
      spec: 'P-04 // 690 MPa',
      detail: 'Pre-cambered lower flange counters downward creep across a 100-year service life.',
      dotX: 54,
      dotY: 66,
      boxClass: 'lg:col-start-3 lg:row-start-2',
      linePoints: '54,66 76.5,66',
    },
    {
      id: 'C5',
      label: 'BEDROCK ANCHOR FOOTING',
      spec: 'P-05 // -14.20 m',
      detail: 'Cast-in-situ concrete abutment keyed directly into fractured gneiss slope.',
      dotX: 41,
      dotY: 85,
      boxClass: 'lg:col-start-2 lg:row-start-3',
      linePoints: '41,85 50,100',
    },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/20">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#14161a]/20 pb-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#14161a]/60">
              PLATE 04 // EXPLODED STRUCTURAL ANATOMY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mt-1">
              ALPINE OUTCROP CANTILEVER — SECTIONAL CALLOUTS
            </h2>
          </div>
          <span className="font-mono text-xs text-[#14161a]/70 whitespace-nowrap">
            CLICK CALLOUT TO FOCUS TARGET RETICLE
          </span>
        </div>

        {/* Desktop Exploded Diagram Canvas with Central Plate + Flying Annotations */}
        <div>
          <div className="relative">
            {/* Desktop SVG Leader Lines (sits behind callout boxes, above plate edge) */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20"
            >
              {callouts.map((c) => {
                const isActive = activeId === c.id;
                return (
                  <g key={c.id}>
                    <polyline
                      points={c.linePoints}
                      fill="none"
                      stroke={isActive ? '#ffc72c' : '#14161a'}
                      strokeWidth={isActive ? '0.45' : '0.24'}
                      strokeDasharray={isActive ? undefined : '0.9 0.6'}
                    />
                    <circle
                      cx={c.dotX}
                      cy={c.dotY}
                      r={isActive ? '0.95' : '0.65'}
                      fill={isActive ? '#ffc72c' : '#14161a'}
                      stroke="#f7f6f3"
                      strokeWidth="0.25"
                    />
                  </g>
                );
              })}
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
              {/* Left Callouts (Top-Left & Mid-Left) */}
              <div className="lg:col-span-3 space-y-6 order-2 lg:order-1 relative z-30">
                {callouts.slice(0, 2).map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveId(c.id)}
                    className={`w-full text-left p-4 border transition-colors ${
                      activeId === c.id
                        ? 'bg-[#14161a] text-[#f7f6f3] border-[#14161a]'
                        : 'bg-[#f7f6f3] text-[#14161a] border-[#14161a]/25 hover:border-[#14161a]'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                      <span className={activeId === c.id ? 'text-[#ffc72c]' : 'text-[#14161a]/60'}>
                        {c.spec}
                      </span>
                      <Crosshair className="w-3.5 h-3.5" />
                    </div>
                    <div className="font-extrabold uppercase text-xs tracking-wide">{c.label}</div>
                    <p className={`text-[11px] mt-1.5 leading-relaxed ${activeId === c.id ? 'text-[#f7f6f3]/80' : 'text-[#14161a]/70'}`}>
                      {c.detail}
                    </p>
                  </button>
                ))}
              </div>

              {/* Central Visual Plate */}
              <div className="lg:col-span-6 order-1 lg:order-2 relative z-10">
                <div
                  className="relative w-full aspect-[4/3] bg-[#14161a] overflow-hidden border border-[#14161a]"
                  style={{ clipPath: 'polygon(3% 0, 100% 0, 97% 100%, 0 100%)' }}
                >
                  {!imgFailed ? (
                    <img
                      src="/src/assets/images/arch_cantilever_plate_1795617034893.jpg"
                      alt="Exploded technical architectural plate of the alpine cantilevered concrete pavilion"
                      referrerPolicy="no-referrer"
                      onError={() => setImgFailed(true)}
                      className="w-full h-full object-cover filter contrast-110 saturate-[0.7]"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-[#f7f6f3] font-mono text-xs p-8 text-center">
                      <Crosshair className="w-8 h-8 text-[#ffc72c] mb-2" />
                      <span>PLATE 04 // STÄFA ALPINE CANTILEVER</span>
                    </div>
                  )}

                  {/* Subtle crosshair datum markings */}
                  <div className="absolute top-3 left-4 font-mono text-[10px] bg-[#14161a]/90 text-[#ffc72c] px-2 py-0.5">
                    ELEV. +2,140 m ASL
                  </div>
                  <div className="absolute bottom-3 right-4 font-mono text-[10px] bg-[#14161a]/90 text-[#f7f6f3] px-2 py-0.5">
                    SCALE 1:200 · MONOGRAPH PLATE
                  </div>
                </div>
              </div>

              {/* Right Callouts (Top-Right & Mid-Right) */}
              <div className="lg:col-span-3 space-y-6 order-3 relative z-30">
                {callouts.slice(2, 4).map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveId(c.id)}
                    className={`w-full text-left p-4 border transition-colors ${
                      activeId === c.id
                        ? 'bg-[#14161a] text-[#f7f6f3] border-[#14161a]'
                        : 'bg-[#f7f6f3] text-[#14161a] border-[#14161a]/25 hover:border-[#14161a]'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                      <span className={activeId === c.id ? 'text-[#ffc72c]' : 'text-[#14161a]/60'}>
                        {c.spec}
                      </span>
                      <Crosshair className="w-3.5 h-3.5" />
                    </div>
                    <div className="font-extrabold uppercase text-xs tracking-wide">{c.label}</div>
                    <p className={`text-[11px] mt-1.5 leading-relaxed ${activeId === c.id ? 'text-[#f7f6f3]/80' : 'text-[#14161a]/70'}`}>
                      {c.detail}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical connector stem into bottom callout */}
          <div className="hidden lg:flex justify-center">
            <div className={`w-[2px] h-6 ${activeId === 'C5' ? 'bg-[#ffc72c]' : 'bg-[#14161a]'}`} />
          </div>

          {/* Bottom-Center Annotation anchored directly below plate */}
          <div className="mt-4 lg:mt-0 max-w-md mx-auto">
            {(() => {
              const c = callouts[4];
              return (
                <button
                  type="button"
                  onClick={() => setActiveId(c.id)}
                  className={`w-full text-left p-4 border transition-colors ${
                    activeId === c.id
                      ? 'bg-[#14161a] text-[#f7f6f3] border-[#14161a]'
                      : 'bg-[#f7f6f3] text-[#14161a] border-[#14161a]/25 hover:border-[#14161a]'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                    <span className={activeId === c.id ? 'text-[#ffc72c]' : 'text-[#14161a]/60'}>
                      {c.spec}
                    </span>
                    <Crosshair className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-extrabold uppercase text-xs tracking-wide">{c.label}</div>
                  <p className={`text-[11px] mt-1.5 leading-relaxed ${activeId === c.id ? 'text-[#f7f6f3]/80' : 'text-[#14161a]/70'}`}>
                    {c.detail}
                  </p>
                </button>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};
