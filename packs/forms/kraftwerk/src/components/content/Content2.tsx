import React from 'react';

const STAIRCASE_STEPS = [
  {
    code: 'ST-01',
    phase: 'CAD GEOMETRY FREEZE',
    duration: 'DAY 001–024',
    detail: 'Aerodynamic surface NURBS locked to ±0.05 mm master buck tolerance prior to autoclave tooling.',
    ref: 'A14',
    offsetClass: 'md:ml-0 md:w-[46%]',
  },
  {
    code: 'ST-02',
    phase: 'AUTOCLAVE MONOCOQUE CURE',
    duration: 'DAY 025–068',
    detail: 'Pre-impregnated T1000G carbon plies cured at 180 °C under 6.8 bar nitrogen pressure for 14 hours.',
    ref: 'B08',
    offsetClass: 'md:ml-[13%] md:w-[46%]',
  },
  {
    code: 'ST-03',
    phase: 'TORSIONAL & CRASH RIG',
    duration: 'DAY 069–104',
    detail: 'Chassis tub verified to 48,500 Nm/deg static rigidity alongside FIA frontal impact sled certification.',
    ref: 'C21',
    offsetClass: 'md:ml-[26%] md:w-[46%]',
  },
  {
    code: 'ST-04',
    phase: 'DYNAMOMETER POWERTRAIN MARRIAGE',
    duration: 'DAY 105–146',
    detail: '4.0L Quad-Turbo V8 mated to 7-speed sequential casing; 40-hour full-load thermal endurance cycle.',
    ref: 'D09',
    offsetClass: 'md:ml-[39%] md:w-[46%]',
  },
  {
    code: 'ST-05',
    phase: 'NORDSCHLEIFE SIGN-OFF',
    duration: 'DAY 147–180',
    detail: '2,400 km live telemetry validation and final FIA Annex J homologation stamp issued in Stuttgart.',
    ref: 'E44',
    offsetClass: 'md:ml-[52%] md:w-[46%]',
  },
];

export function Content2() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono text-[#111111] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Classification Strip */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#111111] pb-3 mb-10 text-[9px] uppercase tracking-[0.25em]">
          <span>CONTENT-02 // DIAGONAL PROCESS THREAD // 180-DAY HOMOLOGATION SEQUENCE</span>
          <span className="font-bold">REF: KW-STAIR-02</span>
        </div>

        {/* Diagonal Spiral Staircase Thread */}
        <div className="relative">
          {/* Continuous Background Diagonal Reference Rule (Desktop) */}
          <svg
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 650"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="40"
              y1="40"
              x2="940"
              y2="610"
              stroke="#111111"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.3"
            />
          </svg>

          <div className="space-y-0 relative z-10">
            {STAIRCASE_STEPS.map((step, index) => (
              <div key={step.code} className="relative">
                {/* Stepped Orthogonal Connector Threading Step N to Step N+1 */}
                {index > 0 && (
                  <div
                    className={`hidden md:flex items-stretch h-10 ${step.offsetClass}`}
                    aria-hidden="true"
                  >
                    <div className="w-8 border-l-2 border-b-2 border-[#111111] -ml-8 relative">
                      <span className="absolute -top-2 -left-[5px] text-[10px] font-bold leading-none bg-[#e8e8e6]">
                        +
                      </span>
                      <span className="absolute -bottom-[5px] -right-1 w-2 h-2 bg-[#111111]" />
                    </div>
                  </div>
                )}

                {/* Step Compartment Node */}
                <div
                  className={`${step.offsetClass} border-t-2 border-l-2 border-[#111111] bg-[#f4f4f0] relative ${
                    index === STAIRCASE_STEPS.length - 1 ? 'border-b-2 border-r-2' : 'border-r border-b'
                  }`}
                >
                  {/* Top Micro-Label Band */}
                  <div className="flex items-center justify-between border-b border-[#111111] px-3 py-1.5 text-[9px] uppercase tracking-widest bg-[#e8e8e6]">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#111111] text-[#e8e8e6] px-1.5 py-0.5 font-bold">
                        {step.code}
                      </span>
                      <span className="tabular-nums font-bold">{step.duration}</span>
                    </div>
                    <span className="text-[#555555]">CELL {step.ref}</span>
                  </div>

                  {/* Step Content Body */}
                  <div className="p-4 md:p-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base md:text-lg font-black uppercase tracking-tight leading-tight">
                        {step.phase}
                      </h3>
                      <p className="text-[10px] text-[#444444] leading-relaxed mt-1.5 uppercase">
                        {step.detail}
                      </p>
                    </div>
                    <span className="text-2xl font-black text-[#c8c8c4] leading-none shrink-0 tabular-nums select-none">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Scale Ticks */}
        <div className="mt-10 pt-3 border-t border-[#111111] flex items-center justify-between text-[9px] uppercase tracking-widest text-[#555555]">
          <span>VECTOR SLOPE: +13% HORIZONTAL STEP PER STAGE</span>
          <div className="hidden sm:flex items-center gap-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className={`w-[1px] bg-[#111111] ${i % 5 === 0 ? 'h-3' : 'h-1.5'}`}
              />
            ))}
          </div>
          <span>TOTAL CYCLE: 180 DAYS</span>
        </div>
      </div>
    </section>
  );
}
