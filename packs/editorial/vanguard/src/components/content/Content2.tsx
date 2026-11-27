import React from 'react';
import { ChevronRight } from 'lucide-react';

interface StairStep {
  code: string;
  phase: string;
  mach: string;
  alt: string;
  note: string;
  offsetClass: string;
}

const STEPS: StairStep[] = [
  {
    code: 'ST-01',
    phase: 'CARRIER RELEASE & DROP IGNITION',
    mach: 'M 0.82',
    alt: 'FL380',
    note: 'Pneumatic pylon separation from Mothership-04; dual turbofan spool-up to 104% N2 within 1.8 seconds.',
    offsetClass: 'md:ml-[0%] md:w-[54%]',
  },
  {
    code: 'ST-02',
    phase: 'TRANSONIC CORRIDOR ACCELERATION',
    mach: 'M 1.45',
    alt: 'FL430',
    note: 'Afterburner Stage-II light-off; variable intake ramps lock into oblique shock capture geometry.',
    offsetClass: 'md:ml-[11%] md:w-[54%]',
  },
  {
    code: 'ST-03',
    phase: 'RAMJET HANDOFF & TURBO BYPASS',
    mach: 'M 2.85',
    alt: 'FL520',
    note: 'Compressor bypass louvers seal; ram compression sustains continuous stoichiometric kerosine burn.',
    offsetClass: 'md:ml-[22%] md:w-[54%]',
  },
  {
    code: 'ST-04',
    phase: 'SCRAMJET SUPERSONIC TRANSITION',
    mach: 'M 4.10',
    alt: 'FL590',
    note: 'Cryogenic LH2 injection activates; combustion velocity remains supersonic across the C/SiC duct.',
    offsetClass: 'md:ml-[33%] md:w-[54%]',
  },
  {
    code: 'ST-05',
    phase: 'HYPERSONIC CRUISE CORRIDOR',
    mach: 'M 4.84',
    alt: 'FL650',
    note: 'Peak thermal equilibrium reached at 1,680°C nose stagnation; telemetry locked on Edwards relay.',
    offsetClass: 'md:ml-[44%] md:w-[56%]',
  },
];

export function Content2() {
  return (
    <section
      aria-label="Hypersonic Acceleration Spiral Staircase"
      className="w-full bg-[#16181d] text-white font-mono border-b border-[#2a2d35] py-14 px-4 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#2a2d35] pb-4 mb-10">
          <div>
            <span className="text-[10px] tracking-[0.28em] text-[#ff3d00] font-bold uppercase block">
              ASCENT TRAJECTORY // SEQUENCE 02
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight mt-1">
              MACH TRANSITION STAIRCASE
            </h2>
          </div>
          <span className="text-[11px] text-zinc-400 tabular-nums">
            CONTINUOUS VECTOR PATH // T+00:00 TO T+08:40
          </span>
        </div>

        {/* Stepped Diagonal Sequence with Continuous Drawn Connector */}
        <div className="relative space-y-6">
          {/* Continuous Background SVG Stepped Thread (Desktop) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 560"
            preserveAspectRatio="none"
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
          >
            <polyline
              fill="none"
              stroke="#ff3d00"
              strokeOpacity="0.45"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              points="30,52 140,52 140,162 250,162 250,272 360,272 360,382 470,382 470,492 580,492"
            />
            <polyline
              fill="none"
              stroke="#3a3e4c"
              strokeWidth="1"
              points="18,64 128,64 128,174 238,174 238,284 348,284 348,394 458,394 458,504 568,504"
            />
          </svg>

          {STEPS.map((step, idx) => (
            <div key={step.code} className={`relative ${step.offsetClass}`}>
              {/* Drawn elbow connector on desktop linking previous step */}
              {idx > 0 && (
                <div
                  aria-hidden="true"
                  className="hidden md:flex items-center absolute -left-10 top-1/2 -translate-y-1/2 text-[#ff3d00]"
                >
                  <span className="w-6 h-px bg-[#ff3d00]" />
                  <ChevronRight className="w-3.5 h-3.5 -ml-1.5" />
                </div>
              )}

              <div className="bg-[#20232a] border border-[#3a3e4c] p-5 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2a2d35] pb-2 mb-2.5">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#ff3d00] inline-block" />
                    <span className="text-xs font-extrabold text-[#ff3d00] tracking-widest">
                      {step.code}
                    </span>
                    <h3 className="text-sm font-black font-sans uppercase tracking-wide text-white">
                      {step.phase}
                    </h3>
                  </div>
                  <div className="text-[11px] tabular-nums font-bold text-zinc-200 flex items-center gap-3">
                    <span className="text-[#ff3d00]">{step.mach}</span>
                    <span className="text-zinc-500">/</span>
                    <span>{step.alt}</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">{step.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
