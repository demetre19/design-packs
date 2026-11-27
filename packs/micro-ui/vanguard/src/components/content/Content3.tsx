import React from 'react';

interface ZipperTooth {
  side: 'left' | 'right';
  code: string;
  altitude: string;
  heading: string;
  spec: string;
  detail: string;
}

const TEETH: ZipperTooth[] = [
  {
    side: 'left',
    code: 'IN-01',
    altitude: 'FL340',
    heading: 'OBLIQUE SHOCK RAMP COMPRESSION',
    spec: 'PRESSURE RATIO 18.4:1',
    detail: 'Four-stage hinged titanium intake wedges decelerate supersonic airflow to Mach 1.65 prior to diffuser throat.',
  },
  {
    side: 'right',
    code: 'EX-01',
    altitude: 'FL410',
    heading: 'STAGED HYDROGEN PLASMA IGNITION',
    spec: 'TEMP 2,140 K CORE',
    detail: 'Dual wall-mounted cavity flameholders stabilize combustion across rapid Mach-number throttle transients.',
  },
  {
    side: 'left',
    code: 'IN-02',
    altitude: 'FL485',
    heading: 'BOUNDARY LAYER BLEED EXTRACTION',
    spec: 'BLEED MASS 4.2 KG/S',
    detail: 'Laser-perforated intake floor channels divert low-energy turbulent boundary flow away from the combustor core.',
  },
  {
    side: 'right',
    code: 'EX-02',
    altitude: 'FL550',
    heading: 'SINGLE-EXPANSION RAMP NOZZLE',
    spec: 'THRUST VECTOR ±8.5°',
    detail: 'Asymmetric aft-fuselage expansion surface converts exhaust enthalpy into positive lift and pitch trim.',
  },
  {
    side: 'left',
    code: 'IN-03',
    altitude: 'FL620',
    heading: 'UNSTART RECOVERY BYPASS VALVE',
    spec: 'RESPONSE < 4.0 MS',
    detail: 'Pneumatic spill doors open instantaneously on shock-train expulsion to preserve structural intake integrity.',
  },
];

export function Content3() {
  return (
    <section
      aria-label="Propulsion Cycle Interlock"
      className="w-full bg-[#16181d] text-white font-mono border-b border-[#2a2d35] py-14 px-4 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Bar */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#2a2d35] pb-4 mb-12">
          <div>
            <span className="text-[10px] tracking-[0.28em] text-[#ff3d00] font-bold uppercase block">
              CYCLE COUPLING // INTERLOCK 03
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight mt-1">
              INTAKE &amp; EXHAUST ZIPPER COUPLING
            </h2>
          </div>
          <div className="text-[11px] text-zinc-400">
            LEFT: COMPRESSION RAIL // RIGHT: EXPANSION RAIL
          </div>
        </div>

        {/* Zipper Interlock Spine */}
        <div className="relative">
          {/* Continuous Vertical Center Rule */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#3a3e4c] -translate-x-1/2"
          />

          <div className="space-y-6 md:space-y-2">
            {TEETH.map((tooth) => {
              const isLeft = tooth.side === 'left';
              return (
                <div
                  key={tooth.code}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Tooth Panel Wrapper (unclipped so spine badge stays visible) */}
                  <div
                    className={`w-full md:w-[54%] relative z-10 ${
                      isLeft ? 'md:-mr-[4%]' : 'md:-ml-[4%]'
                    }`}
                  >
                    {/* Centerline Anchor Tab outside clip-path */}
                    <div
                      className={`hidden md:flex items-center gap-1.5 absolute top-1/2 -translate-y-1/2 bg-[#16181d] border border-[#ff3d00] px-2 py-0.5 text-[10px] font-black text-[#ff3d00] tabular-nums z-30 ${
                        isLeft ? '-right-14' : '-left-14'
                      }`}
                    >
                      <span>{tooth.altitude}</span>
                    </div>

                    <div
                      className={`bg-[#20232a] border border-[#3a3e4c] p-5 ${
                        isLeft
                          ? '[clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]'
                          : '[clip-path:polygon(12px_0,100%_0,100%_100%,0_100%,0_12px)]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4 border-b border-[#2a2d35] pb-2 mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-black text-[#ff3d00]">{tooth.code}</span>
                          <span className="text-[10px] text-zinc-500">//</span>
                          <h3 className="text-sm font-black font-sans uppercase tracking-wide">
                            {tooth.heading}
                          </h3>
                        </div>
                        <span className="text-[10px] text-zinc-400 tabular-nums whitespace-nowrap">
                          {tooth.spec}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">{tooth.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
