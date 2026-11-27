import React from 'react';

interface StepItem {
  num: string;
  phase: string;
  title: string;
  detail: string;
  tolerance: string;
  offsetClass: string;
}

export function Content2() {
  const steps: StepItem[] = [
    {
      num: '01',
      phase: 'SURFACE LOCK',
      title: 'SEISMIC ARRAY CALIBRATION',
      detail: 'Deploy 64-node acoustic geophones across target bedrock perimeter to map density shear.',
      tolerance: '±0.02 MM // 120 HZ',
      offsetClass: 'md:ml-0 md:w-[48%]',
    },
    {
      num: '02',
      phase: 'PRIMARY BORE',
      title: 'DIAMOND CORE PENETRATION',
      detail: 'Hydraulic torque modulation drives 4.2m tungsten-matrix bit through basalt caprock.',
      tolerance: '85,000 NM // 14K PSI',
      offsetClass: 'md:ml-[17%] md:w-[48%]',
    },
    {
      num: '03',
      phase: 'VEIN CAPTURE',
      title: 'AUTONOMOUS SLURRY EXTRACTION',
      detail: 'Closed-loop pressurized risers lift pulverized mineral ore directly to surface separator.',
      tolerance: '450 T/HR // ZERO VENT',
      offsetClass: 'md:ml-[34%] md:w-[48%]',
    },
    {
      num: '04',
      phase: 'THERMAL PURGE',
      title: 'INDUCTION SMELTING CELL-X',
      detail: 'Continuous electromagnetic crucible refines raw concentrate into 99.94% bullion ingots.',
      tolerance: '1,450 °C // 48 MW',
      offsetClass: 'md:ml-[52%] md:w-[48%]',
    },
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Meta Strip */}
        <div className="flex items-center justify-between border-b border-black pb-3 mb-10 font-mono text-[10px] uppercase tracking-widest">
          <span>SEQUENCE 02 // DESCENDING EXTRACTION CONDUIT</span>
          <span className="text-[#f25c05] font-bold">4-STAGE CASCADE</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-12 max-w-2xl">
          VERTICAL DESCENT <span className="text-[#f25c05]">PROTOCOL</span>.
        </h2>

        {/* Spiral / Diagonal Descending Staircase threaded by continuous drawn connector */}
        <div className="relative">
          {/* Continuous Diagonal + Stepped Threading Conduit (Desktop SVG behind steps) */}
          <svg
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 680"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Thin structural guide diagonal */}
            <line x1="20" y1="40" x2="960" y2="630" stroke="#d4d4d0" strokeWidth="1.5" strokeDasharray="6 6" />
            {/* Continuous thick stepped black conduit threading every node */}
            <polyline
              points="24,52 24,148 194,148 194,316 364,316 364,484 544,484 544,648 980,648"
              fill="none"
              stroke="#000000"
              strokeWidth="4"
            />
            {/* Secondary orange signal trace */}
            <polyline
              points="24,52 24,148 194,148 194,316 364,316 364,484 544,484 544,648"
              fill="none"
              stroke="#f25c05"
              strokeWidth="1.5"
              strokeDasharray="10 6"
            />
          </svg>

          {/* Mobile continuous vertical bar */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-black" aria-hidden="true" />

          <div className="space-y-8 md:space-y-6 relative z-10">
            {steps.map((step, index) => (
              <div key={step.num} className={`relative pl-10 md:pl-0 ${step.offsetClass}`}>
                {/* Junction Pin */}
                <div
                  className="absolute left-2.5 md:-left-2.5 top-6 w-4 h-4 bg-[#f25c05] border-2 border-black z-20"
                  aria-hidden="true"
                />

                <div className="bg-white border-2 border-black p-6 md:ml-4 relative">
                  {/* Large Outline Numeral */}
                  <div
                    className="absolute right-4 top-2 font-sans font-black text-6xl md:text-7xl leading-none select-none pointer-events-none text-transparent"
                    style={{ WebkitTextStroke: '1.5px #d4d4d0' }}
                    aria-hidden="true"
                  >
                    {step.num}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest mb-2">
                      <span className="bg-black text-white px-2 py-0.5 font-bold">STAGE {step.num}</span>
                      <span className="text-[#f25c05] font-bold">{step.phase}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2 pr-14">
                      {step.title}
                    </h3>

                    <p className="font-mono text-xs text-neutral-700 leading-relaxed mb-4">
                      {step.detail}
                    </p>

                    <div className="pt-3 border-t border-black flex items-center justify-between font-mono text-[10px] uppercase tabular-nums">
                      <span className="text-neutral-500">TOLERANCE SPEC</span>
                      <span className="font-bold text-black">{step.tolerance}</span>
                    </div>
                  </div>
                </div>

                {/* Step connector tick to next level */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center gap-2 ml-4 mt-2 font-mono text-[9px] text-neutral-500 uppercase">
                    <span>DROP +180M</span>
                    <span className="w-8 h-[1px] bg-black inline-block" />
                    <span>SHIFT +17%</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
