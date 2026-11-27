import React, { useState } from 'react';

interface StepItem {
  step: string;
  phase: string;
  station: string;
  duration: string;
  detail: string;
  tolerance: string;
}

const STEPS: StepItem[] = [
  {
    step: '01',
    phase: 'T1000G MONOCOQUE LAYUP',
    station: 'MUNICH AUTOCLAVE BAY 01',
    duration: '14.5 HRS',
    detail: 'Hand-indexed aerospace carbon prepreg cured at 6.5 bar until structural frame reaches 7.2 kg mass target.',
    tolerance: '±0.08 MM',
  },
  {
    step: '02',
    phase: 'AXIAL STATOR WINDING',
    station: 'CLEANROOM CELL 03',
    duration: '08.0 HRS',
    detail: 'High-fill rectangular copper hairpins laser-welded and vacuum-potted inside dielectric oil housing.',
    tolerance: '±0.005 MM',
  },
  {
    step: '03',
    phase: 'CRYO ROTOR BALANCING',
    station: 'SPIN RIG B-12',
    duration: '03.2 HRS',
    detail: 'Titanium-sleeved Halbach magnet rotor spun to 21,000 RPM overspeed threshold under thermal imaging.',
    tolerance: '0.02 G·MM',
  },
  {
    step: '04',
    phase: 'SiC INVERTER FLASH & DYNO',
    station: 'CELL 04 // 800V',
    duration: '06.0 HRS',
    detail: 'Custom torque-vectoring map flashed to dual silicon-carbide bridges; 117 kW continuous curve verified.',
    tolerance: '99.4 % EFF',
  },
  {
    step: '05',
    phase: 'TRACK SIGN-OFF',
    station: 'SUZUKA SECTOR TEST',
    duration: '45 LAPS',
    detail: 'Factory test pilot calibrates Öhlins TTX36 semi-active damping and GP4-RR regen blend prior to crate seal.',
    tolerance: 'SIGN-OFF',
  },
];

export function Content2() {
  const [activeStep, setActiveStep] = useState<string>('03');

  const offsets = [
    'md:ml-0 md:w-[46%]',
    'md:ml-[13%] md:w-[46%]',
    'md:ml-[26%] md:w-[46%]',
    'md:ml-[39%] md:w-[46%]',
    'md:ml-[52%] md:w-[48%]',
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 border-b border-[#272a33] pb-6">
          <div>
            <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">
              SEQUENCE 02 // DIAGONAL FABRICATION DESCENT
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mt-1">
              FROM PREPREG TO SUZUKA TARMAC
            </h2>
          </div>
          <span className="font-mono-spec text-xs text-neutral-400">
            TOTAL BUILD CYCLE: <strong className="text-white">31.7 HRS + TRACK</strong>
          </span>
        </div>

        {/* Stepped Diagonal Spiral Staircase */}
        <div className="relative space-y-0">
          {STEPS.map((item, idx) => {
            const isActive = activeStep === item.step;
            const isLast = idx === STEPS.length - 1;

            return (
              <div key={item.step} className="relative">
                {/* Physical stepped connector threading from previous step down and right */}
                {idx > 0 && (
                  <div
                    aria-hidden="true"
                    className="hidden md:block relative h-8"
                  >
                    <div
                      className="absolute top-0 h-full border-l border-[#ff5a1f]/50"
                      style={{ left: `${(idx - 1) * 13 + 2}%` }}
                    />
                    <div
                      className="absolute top-1/2 border-t border-[#ff5a1f]/50"
                      style={{
                        left: `${(idx - 1) * 13 + 2}%`,
                        width: '13%',
                      }}
                    />
                    <div
                      className="absolute top-1/2 w-2 h-2 -translate-x-1 -translate-y-1 bg-[#ff5a1f]"
                      style={{ left: `${idx * 13 + 2}%` }}
                    />
                  </div>
                )}

                {/* Mobile vertical connector */}
                {idx > 0 && (
                  <div aria-hidden="true" className="md:hidden h-6 ml-5 border-l border-[#ff5a1f]/50" />
                )}

                {/* Stepped Block */}
                <button
                  type="button"
                  onClick={() => setActiveStep(item.step)}
                  className={`w-full text-left block relative transition-colors cursor-pointer ${offsets[idx]} border-t border-l pl-6 pr-5 py-5 ${
                    isActive
                      ? 'border-[#ff5a1f] bg-[#16181d]'
                      : 'border-[#272a33] bg-[#101114] hover:border-neutral-500'
                  }`}
                >
                  {/* Pin marker at top-left elbow */}
                  <span
                    className={`absolute -top-1.5 -left-1.5 w-3 h-3 ${
                      isActive ? 'bg-[#ff5a1f]' : 'bg-[#272a33]'
                    }`}
                  />

                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono-spec text-lg font-bold text-[#ff5a1f] tabular-nums">
                        {item.step}
                      </span>
                      <h3 className="font-display font-extrabold text-lg md:text-xl text-white">
                        {item.phase}
                      </h3>
                    </div>
                    <span className="font-mono-spec text-[10px] text-neutral-400 shrink-0 tabular-nums">
                      {item.duration}
                    </span>
                  </div>

                  <p className="font-mono-spec text-xs text-neutral-400 leading-relaxed">
                    {item.detail}
                  </p>

                  <div className="mt-3 pt-2 border-t border-[#272a33]/80 flex items-center justify-between font-mono-spec text-[10px]">
                    <span className="text-neutral-500">{item.station}</span>
                    <span className={isActive ? 'text-[#ff5a1f] font-bold' : 'text-neutral-300'}>
                      TOL: {item.tolerance}
                    </span>
                  </div>

                  {/* Outbound downward stub if not last */}
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="hidden md:block absolute -bottom-1 left-[2%] w-2 h-2 border border-[#ff5a1f] bg-[#101114]"
                    />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
