import React from 'react';

interface InterlockTooth {
  id: string;
  side: 'left' | 'right';
  code: string;
  title: string;
  metric: string;
  note: string;
}

export const Content3: React.FC = () => {
  const teeth: InterlockTooth[] = [
    {
      id: 'T1',
      side: 'left',
      code: 'AXIS-01 // NORTH',
      title: 'GRANITE FOOTING KEY',
      metric: '3,400 kN SHEAR',
      note: 'Stepped rock bench prevents lateral slippage along the 14° bedding plane.',
    },
    {
      id: 'T2',
      side: 'right',
      code: 'AXIS-02 // SOUTH',
      title: 'TENSION TIE RODS',
      metric: 'Ø 95 mm S690',
      note: 'Twin forged rods transfer upper floor uplift back into the central core.',
    },
    {
      id: 'T3',
      side: 'left',
      code: 'AXIS-03 // WEST',
      title: 'CANTILEVER WING PLATE',
      metric: '18.0 m CLEAR',
      note: 'Tapered steel web reduces dead-load bending moment toward the free tip.',
    },
    {
      id: 'T4',
      side: 'right',
      code: 'AXIS-04 // EAST',
      title: 'THERMAL SHEAR BREAK',
      metric: 'U = 0.14 W/m²K',
      note: 'Structural aramid blocks isolate exterior steel balconies from interior slabs.',
    },
    {
      id: 'T5',
      side: 'left',
      code: 'AXIS-05 // APEX',
      title: 'CLERESTORY DIAPHRAGM',
      metric: '12.5° PITCH',
      note: 'Roof skylight frame acts as a rigid horizontal truss resisting wind torsion.',
    },
    {
      id: 'T6',
      side: 'right',
      code: 'AXIS-06 // BASE',
      title: 'SEISMIC DAMPER PIN',
      metric: '±45 mm STROKE',
      note: 'Viscous pin joint absorbs high-frequency lateral ground acceleration.',
    },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#14161a]/60">
            STRUCTURAL INTERLOCK · CENTRAL LOAD SPINE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            ZIPPERED FORCE COUPLING
          </h2>
        </div>

        {/* Shared Continuous Central Vertical Rule */}
        <div className="relative">
          {/* Continuous center vertical axis */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-[#14161a]"
          />

          <div className="space-y-8 md:space-y-0">
            {teeth.map((tooth, idx) => {
              const isLeft = tooth.side === 'left';
              return (
                <div
                  key={tooth.id}
                  className={`relative md:flex items-center ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  } ${idx > 0 ? 'md:-mt-8' : ''}`}
                >
                  {/* Tooth body overlapping toward center line */}
                  <div
                    className={`w-full md:w-[54%] relative z-10 ${
                      isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'
                    }`}
                  >
                    <div
                      className={`p-6 border border-[#14161a]/25 bg-[#f7f6f3] relative ${
                        isLeft ? 'md:mr-2' : 'md:ml-2'
                      }`}
                    >
                      {/* Horizontal coupler arm reaching across center spine */}
                      <div
                        aria-hidden="true"
                        className={`hidden md:flex items-center absolute top-1/2 -translate-y-1/2 ${
                          isLeft ? '-right-12 flex-row' : '-left-12 flex-row-reverse'
                        }`}
                      >
                        <span className="w-10 h-[2px] bg-[#14161a]" />
                        <span className="w-3.5 h-3.5 bg-[#ffc72c] border-2 border-[#14161a] transform skew-x-[-12deg]" />
                      </div>

                      <div
                        className={`flex items-center gap-3 font-mono text-[11px] mb-2 ${
                          isLeft ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <span className="text-[#14161a]/60">{tooth.code}</span>
                        <span className="bg-[#14161a] text-[#ffc72c] px-2 py-0.5 font-bold tabular-nums">
                          {tooth.metric}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold uppercase tracking-tight">{tooth.title}</h3>
                      <p className="text-xs text-[#14161a]/75 font-sans leading-relaxed mt-1.5">
                        {tooth.note}
                      </p>
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
};
