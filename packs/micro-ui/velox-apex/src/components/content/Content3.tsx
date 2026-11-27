import React from 'react';

interface ToothItem {
  num: string;
  side: 'left' | 'right';
  title: string;
  spec: string;
  metric: string;
}

const TEETH: ToothItem[] = [
  {
    num: '01',
    side: 'left',
    title: 'CARBON MONOCOQUE SKIN',
    spec: 'Stress-bearing upper shell eliminates traditional twin-spar perimeter rails.',
    metric: '11.4 KG',
  },
  {
    num: '02',
    side: 'right',
    title: 'BILLET TITANIUM SUBFRAME',
    spec: 'Five-axis machined rear cradle bolts directly into battery housing bulkheads.',
    metric: '2.8 KG',
  },
  {
    num: '03',
    side: 'left',
    title: 'SOLID-STATE ELECTROLYTE',
    spec: 'Zero liquid solvent eliminates thermal runaway under 998V sustained discharge.',
    metric: '420 WH/KG',
  },
  {
    num: '04',
    side: 'right',
    title: 'DUAL AXIAL-FLUX MOTORS',
    spec: 'Counter-rotating rotors cancel gyroscopic inertia through rapid chicane transitions.',
    metric: '305 NM',
  },
  {
    num: '05',
    side: 'left',
    title: 'DIELECTRIC COOLING BATH',
    spec: 'Closed-loop fluorocarbon circulation holds cell pack variance within ±1.5°C.',
    metric: '65°C MAX',
  },
  {
    num: '06',
    side: 'right',
    title: 'NEURAL SLIP VECTORING',
    spec: 'Six-axis IMU feeds independent rear wheel torque modulation at 5,000 Hz.',
    metric: '0.2 MS',
  },
];

export function Content3() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <h2 className="text-5xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.82]">
            ZIPPER <span className="text-[#ff2e00]">INTERLOCK</span>
          </h2>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 max-w-xs mt-4 md:mt-0">
            STRUCTURAL & PROPULSION SUBSYSTEMS MESHED ACROSS CENTRAL CHASSIS SPINE
          </p>
        </div>

        {/* Continuous Center Vertical Spine with Meshing Teeth */}
        <div className="relative">
          {/* Continuous Vertical Rule down the exact middle */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-black z-10"
          />

          <div className="space-y-6 md:space-y-0">
            {TEETH.map((item, idx) => {
              const isLeft = item.side === 'left';
              return (
                <div
                  key={item.num}
                  className={`relative md:grid md:grid-cols-2 items-center ${idx > 0 ? 'md:-mt-8' : ''}`}
                >
                  {/* Left Tooth */}
                  {isLeft ? (
                    <div className="md:pr-10 md:text-right relative z-20">
                      <div className="inline-block w-full border-t-2 border-black pt-4 pb-6 bg-white md:pr-6 relative">
                        {/* Overlap Connector crossing the center line */}
                        <div className="hidden md:flex items-center absolute -right-14 top-3 z-30">
                          <div className="w-8 h-[2px] bg-[#ff2e00]" />
                          <div className="w-7 h-7 bg-[#ff2e00] text-black font-mono text-[11px] font-black flex items-center justify-center border border-black">
                            {item.num}
                          </div>
                        </div>

                        <div className="font-mono text-[10px] tracking-[0.2em] text-[#ff2e00] font-bold mb-1">
                          AXIS A · {item.metric}
                        </div>
                        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-none mb-2">
                          {item.title}
                        </h3>
                        <p className="font-mono text-[11px] text-neutral-600 leading-relaxed max-w-md md:ml-auto">
                          {item.spec}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}

                  {/* Right Tooth */}
                  {!isLeft ? (
                    <div className="md:pl-10 relative z-20">
                      <div className="inline-block w-full border-t-2 border-black pt-4 pb-6 bg-black text-white px-6 relative">
                        {/* Overlap Connector crossing the center line */}
                        <div className="hidden md:flex items-center absolute -left-14 top-3 z-30">
                          <div className="w-7 h-7 bg-black text-white font-mono text-[11px] font-black flex items-center justify-center border border-[#ff2e00]">
                            {item.num}
                          </div>
                          <div className="w-8 h-[2px] bg-[#ff2e00]" />
                        </div>

                        <div className="font-mono text-[10px] tracking-[0.2em] text-[#ff2e00] font-bold mb-1">
                          AXIS B · {item.metric}
                        </div>
                        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-none mb-2">
                          {item.title}
                        </h3>
                        <p className="font-mono text-[11px] text-neutral-400 leading-relaxed max-w-md">
                          {item.spec}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
