import React, { useState } from 'react';
import { ArrowDownRight } from 'lucide-react';

interface StairStep {
  code: string;
  phase: string;
  detail: string;
  gate: string;
  offsetClass: string;
}

const STEPS: StairStep[] = [
  {
    code: '01',
    phase: 'CARBON AUTOCLAVE LAYUP',
    detail: '240-ply T1100G monocoque cured at 7 bar pressure for 14 continuous hours.',
    gate: '0.05 MM LASER SCAN',
    offsetClass: 'lg:ml-0 lg:w-5/12',
  },
  {
    code: '02',
    phase: 'SOLID-STATE CORE SEALING',
    detail: '998V ceramic electrolyte modules immersed in zero-viscosity dielectric bath.',
    gate: '45 MIN THERMAL SOAK',
    offsetClass: 'lg:ml-[14%] lg:w-5/12',
  },
  {
    code: '03',
    phase: 'AERO FOIL TUNNEL CALIBRATION',
    detail: 'Biplane front winglets pitched to 11.4° incidence verifying 340 kg downforce.',
    gate: '280 KM/H WIND LOAD',
    offsetClass: 'lg:ml-[28%] lg:w-5/12',
  },
  {
    code: '04',
    phase: '5KHZ NEURAL ECU FLASH',
    detail: 'Dual-motor slip curves mapped across 64° lean angles on Suzuka reference asphalt.',
    gate: '0.2 MS LOOP LATENCY',
    offsetClass: 'lg:ml-[42%] lg:w-5/12',
  },
  {
    code: '05',
    phase: 'FACTORY TRACK SIGN-OFF',
    detail: 'Eighteen consecutive flying laps completed with zero power derating.',
    gate: '1:58.420 BENCHMARK',
    offsetClass: 'lg:ml-[56%] lg:w-5/12',
  },
];

export function Content2() {
  const [activeStep, setActiveStep] = useState<string>('03');

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Stepped Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#ff2e00] font-bold mb-2">
              SEQUENCE PROTOCOL / DIAGONAL DESCENT
            </div>
            <h2 className="text-5xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.82]">
              STAIRCASE <br />HOMOLOGATION
            </h2>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mt-4 sm:mt-0">
            FIVE MANDATORY GATES TO DISPATCH
          </div>
        </div>

        {/* Diagonal Spiral Staircase with Continuous Thread Line */}
        <div className="relative">
          {/* Continuous Drawn Diagonal & Stepped SVG Connector (Desktop) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 620"
            preserveAspectRatio="none"
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
          >
            <polyline
              fill="none"
              stroke="#000000"
              strokeWidth="1.5"
              points="30,45 170,45 170,170 310,170 310,295 450,295 450,420 590,420 590,545 960,545"
            />
            <line
              x1="30"
              y1="45"
              x2="590"
              y2="545"
              stroke="#ff2e00"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
            {[
              [30, 45],
              [170, 170],
              [310, 295],
              [450, 420],
              [590, 545],
            ].map(([cx, cy], idx) => (
              <g key={idx}>
                <circle cx={cx} cy={cy} r="6" fill="#ff2e00" stroke="#000000" strokeWidth="1.5" />
              </g>
            ))}
          </svg>

          <div className="relative z-10 space-y-6 lg:space-y-8">
            {STEPS.map((step) => {
              const isActive = activeStep === step.code;
              return (
                <div key={step.code} className={`${step.offsetClass} transition-transform`}>
                  <button
                    type="button"
                    onClick={() => setActiveStep(step.code)}
                    className={`w-full text-left border-2 border-black p-5 cursor-pointer transition-colors relative ${
                      isActive ? 'bg-black text-white' : 'bg-white text-black hover:bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-baseline gap-4">
                        <span
                          className={`text-4xl sm:text-5xl font-black tracking-tighter leading-none tabular-nums ${
                            isActive ? 'text-[#ff2e00]' : 'text-black'
                          }`}
                        >
                          {step.code}
                        </span>
                        <div>
                          <h3 className="font-black text-base sm:text-lg uppercase tracking-tight">
                            {step.phase}
                          </h3>
                          <p
                            className={`font-mono text-[11px] leading-relaxed mt-1 ${
                              isActive ? 'text-neutral-300' : 'text-neutral-600'
                            }`}
                          >
                            {step.detail}
                          </p>
                        </div>
                      </div>
                      <ArrowDownRight
                        className={`w-4 h-4 shrink-0 mt-1 ${
                          isActive ? 'text-[#ff2e00]' : 'text-black'
                        }`}
                      />
                    </div>
                    <div
                      className={`mt-3 pt-2 border-t font-mono text-[10px] tracking-[0.2em] uppercase flex justify-between ${
                        isActive ? 'border-neutral-800 text-[#ff2e00]' : 'border-neutral-200 text-neutral-500'
                      }`}
                    >
                      <span>GATE VERIFICATION</span>
                      <span className="font-bold">{step.gate}</span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
