import React from 'react';

interface StepItem {
  num: string;
  elevation: string;
  title: string;
  detail: string;
  duration: string;
  offsetClass: string;
  connectorLeftClass: string;
}

const STEPS: StepItem[] = [
  {
    num: '01',
    elevation: 'EL. +0.00 M',
    title: 'Geotechnical & Solar Audit',
    detail: 'Core-sample bedrock verification, seasonal shadow plotting, and municipal setback calibration.',
    duration: 'WEEKS 01—04',
    offsetClass: 'lg:ml-0',
    connectorLeftClass: 'lg:left-[3px] lg:w-[14%]',
  },
  {
    num: '02',
    elevation: 'EL. -3.20 M',
    title: 'Monolithic Massing Study',
    detail: '1:100 plaster cast models testing roof overhang geometry against prevailing alpine winds.',
    duration: 'WEEKS 05—10',
    offsetClass: 'lg:ml-[14%]',
    connectorLeftClass: 'lg:left-[calc(14%+3px)] lg:w-[14%]',
  },
  {
    num: '03',
    elevation: 'EL. -6.40 M',
    title: 'Structural & Formwork Detailing',
    detail: 'Board-width concrete joint registration, hidden drip edges, and thermal break engineering.',
    duration: 'WEEKS 11—20',
    offsetClass: 'lg:ml-[28%]',
    connectorLeftClass: 'lg:left-[calc(28%+3px)] lg:w-[14%]',
  },
  {
    num: '04',
    elevation: 'EL. -9.60 M',
    title: 'On-Site Pour & Timber Joinery',
    detail: 'Continuous monolithic casting supervised daily alongside mortise-and-tenon Douglas fir assembly.',
    duration: 'WEEKS 21—44',
    offsetClass: 'lg:ml-[42%]',
    connectorLeftClass: 'lg:left-[calc(42%+3px)] lg:w-[14%]',
  },
  {
    num: '05',
    elevation: 'EL. -12.80 M',
    title: 'Acoustic & Patina Handover',
    detail: 'Reverberation tuning, mineral wax sealing, and archival maintenance dossier transfer.',
    duration: 'WEEKS 45—48',
    offsetClass: 'lg:ml-[56%]',
    connectorLeftClass: '',
  },
];

export function Content2() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e2e0d8] pb-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
                SECTION 02 — DESCENDING COMMISSION SEQUENCE
              </span>
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">
              From Bedrock to Occupancy
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            48-WEEK STEPPED TRAJECTORY
          </span>
        </div>

        <div className="relative py-2">
          {/* Mobile continuous vertical thread */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute left-[3px] top-4 bottom-4 w-px bg-[#16171a]"
          />

          <div className="space-y-6 lg:space-y-0 relative z-10">
            {STEPS.map((step, index) => {
              const isLast = index === STEPS.length - 1;
              return (
                <div key={step.num} className={`relative ${!isLast ? 'lg:pb-8' : ''}`}>
                  {/* Exact pixel-locked orthogonal elbow thread on desktop */}
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className={`hidden lg:block absolute top-[11px] bottom-[-11px] border-l border-b pointer-events-none ${
                        index === 0 ? 'border-[#b5482e]' : 'border-[#16171a]'
                      } ${step.connectorLeftClass}`}
                    />
                  )}

                  <div className={`relative pl-8 lg:pl-0 lg:w-[44%] ${step.offsetClass}`}>
                    {/* Connector pin node */}
                    <div className="flex items-center space-x-3 mb-2">
                      <span
                        className={`w-[7px] h-[7px] shrink-0 border absolute left-0 lg:static ${
                          index === 0
                            ? 'bg-[#b5482e] border-[#b5482e]'
                            : 'bg-[#fafaf8] border-[#16171a]'
                        }`}
                      />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#b5482e] tabular-nums">
                        STEP {step.num}
                      </span>
                      <span className="h-px flex-1 bg-[#e2e0d8]" />
                      <span className="text-[10px] font-mono text-stone-500 tabular-nums">
                        {step.elevation}
                      </span>
                    </div>

                    <div className="bg-[#f0efeb] border border-[#e2e0d8] p-5 space-y-2 lg:ml-5">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-lg font-medium text-[#16171a]">{step.title}</h3>
                        <span className="text-[10px] font-mono text-stone-500 shrink-0 tabular-nums">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">{step.detail}</p>
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
