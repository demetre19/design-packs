import React from 'react';

export function Content3() {
  const teeth = [
    {
      side: 'left',
      code: 'IN-01',
      title: 'DUAL-PLENUM CARBON INTAKE',
      metric: '0.84 KG/S FLOW',
      note: 'Autoclave pre-preg runner geometry equalizes cylinder-to-cylinder charge density within 0.7% variance.',
      overlapTag: 'PORT A // 41.6°C IAT',
    },
    {
      side: 'right',
      code: 'EX-01',
      title: 'INCONEL 713C MANIFOLD',
      metric: '890.4°C EGT',
      note: 'Equal-length hydroformed primaries merge into twin-scroll volutes without pulse interference.',
      overlapTag: 'PORT B // 2.84 BAR',
    },
    {
      side: 'left',
      code: 'IN-02',
      title: 'PIEZOELECTRIC DIRECT INJECTION',
      metric: '350.0 BAR RAIL',
      note: 'Quad-pulse stratified spray atomizes fuel droplets under 8 microns at 8,400 RPM cycle speeds.',
      overlapTag: 'SYNC // 0.14 MS',
    },
    {
      side: 'right',
      code: 'EX-02',
      title: 'WATER-COOLED WASTEGATE VALVE',
      metric: '92% DUTY CYCLE',
      note: 'Zero-creep pneumatic actuator holds boost ceiling rigid across full-throttle gear shifts.',
      overlapTag: 'BYPASS // LOCKED',
    },
    {
      side: 'left',
      code: 'IN-03',
      title: 'FORGED TITANIUM CON-ROD',
      metric: '11.4 G MASS DELTA',
      note: 'H-beam cross-section withstands 14,500 N tensile pull at top-dead-center exhaust overlap.',
      overlapTag: 'STROKE // 82.0 MM',
    },
    {
      side: 'right',
      code: 'EX-03',
      title: 'EDDY-CURRENT BRAKE STATOR',
      metric: '612 NM PEAK',
      note: 'Direct-splined load absorber measures instantaneous shaft torque across 1,000 Hz sample windows.',
      overlapTag: 'LOAD // CELL 04',
    },
  ];

  return (
    <section className="relative bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.35em] text-[#ffd500] uppercase">
            // ZIPPER TELEMETRY SPINE · INTAKE / EXHAUST INTERLOCK
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tight mt-2">
            OPPOSED POWERTRAIN <span className="text-[#ffd500]">INTERLOCK</span>
          </h2>
        </div>

        {/* Interlocking Zipper Architecture Sharing One Central Vertical Spine */}
        <div className="relative">
          {/* Continuous Vertical Center Rule */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[#ffd500]/60"
          />

          <div className="space-y-6 md:space-y-0">
            {teeth.map((item, idx) => {
              const isLeft = item.side === 'left';
              return (
                <div
                  key={item.code}
                  className={`relative md:w-[56%] ${
                    isLeft
                      ? 'md:mr-auto md:pr-14 text-left md:text-right'
                      : 'md:ml-auto md:pl-14 text-left'
                  } ${idx > 0 ? 'md:-mt-4' : ''}`}
                >
                  {/* Cantilever Tooth Extending Across Center Rule */}
                  <div
                    className={`hidden md:flex items-center absolute top-6 ${
                      isLeft ? 'right-0 translate-x-1/2 flex-row' : 'left-0 -translate-x-1/2 flex-row-reverse'
                    } z-20`}
                  >
                    <div className="w-16 h-px bg-[#ffd500]" />
                    <div className="bg-[#0c0d0f] border border-[#ffd500] px-2 py-0.5 text-[9px] font-extrabold text-[#ffd500] whitespace-nowrap tracking-wider">
                      {item.overlapTag}
                    </div>
                    <div className="w-2.5 h-2.5 bg-[#ffd500] rotate-45 shrink-0" />
                  </div>

                  {/* Staggered Open Tooth Content */}
                  <div
                    className={`bg-[#14161a]/80 border-t border-b border-[#262c36] py-5 px-5 ${
                      isLeft ? 'border-l-2 border-l-[#ffd500]' : 'border-r-2 border-r-[#ffd500]'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-1.5 ${
                        isLeft ? 'md:justify-end' : 'justify-start'
                      }`}
                    >
                      <span className="text-[10px] font-bold text-[#ffd500] tracking-widest">
                        [{item.code}]
                      </span>
                      <span className="text-xs font-extrabold text-white tabular-nums">
                        {item.metric}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs font-sans text-zinc-400 leading-relaxed">
                      {item.note}
                    </p>
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
