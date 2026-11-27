import React from 'react';

interface ToothItem {
  id: string;
  side: 'left' | 'right';
  code: string;
  title: string;
  body: string;
  metric: string;
  dark?: boolean;
}

export function Content3() {
  const teeth: ToothItem[] = [
    {
      id: 'T1',
      side: 'left',
      code: 'GEAR // 01L',
      title: 'PRIMARY HYDRAULIC MANIFOLD',
      body: 'Dual-piston closed circuit pressurizes excavator arms up to 14,000 PSI without thermal bleed.',
      metric: '14,000 PSI PEAK',
      dark: true,
    },
    {
      id: 'T2',
      side: 'right',
      code: 'GEAR // 02R',
      title: 'COUNTER-ROTATING CRUSHER DRUM',
      body: 'Hardened tungsten-carbide teeth shear granite strata into uniform 40mm conveyor aggregate.',
      metric: '85,000 NM TORQUE',
      dark: false,
    },
    {
      id: 'T3',
      side: 'left',
      code: 'GEAR // 03L',
      title: 'FIBER TELEMETRY BACKPLANE',
      body: 'Armored umbilical routes 128 strain-gauge channels directly into the central mesh node.',
      metric: '0.04 MS LATENCY',
      dark: false,
    },
    {
      id: 'T4',
      side: 'right',
      code: 'GEAR // 04R',
      title: 'CERAMIC THERMAL BAFFLE',
      body: 'Multi-layered refractory shielding isolates electronic logic bays from smelting heat.',
      metric: '1,450 °C RATED',
      dark: true,
    },
    {
      id: 'T5',
      side: 'left',
      code: 'GEAR // 05L',
      title: 'AUTONOMOUS HAUL SYNCHRONIZER',
      body: 'Sub-centimeter LiDAR docking coordinates 400-ton dump trucks beneath primary chutes.',
      metric: '±4 MM ALIGNMENT',
      dark: true,
    },
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black pb-3 mb-10 font-mono text-[10px] uppercase tracking-widest">
          <span>INTERLOCK 03 // COUPLED SUBSYSTEM SPINE</span>
          <span className="text-[#f25c05] font-bold">ZIPPER-MESH ARCHITECTURE</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-12">
          MECHANICAL <span className="text-[#f25c05]">INTERLOCK</span>.
        </h2>

        {/* Continuous Center Vertical Spine with Zipper-Overlapping Elements */}
        <div className="relative py-4">
          {/* Central Continuous Vertical Bar */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-3 bg-black z-10"
            aria-hidden="true"
          />
          {/* Mobile Left Spine */}
          <div
            className="md:hidden absolute left-3 top-0 bottom-0 w-2 bg-black z-10"
            aria-hidden="true"
          />

          <div className="space-y-6 md:space-y-0">
            {teeth.map((tooth, index) => {
              const isLeft = tooth.side === 'left';
              return (
                <div
                  key={tooth.id}
                  className={`relative grid grid-cols-1 md:grid-cols-2 items-center ${
                    index > 0 ? 'md:-mt-8' : ''
                  }`}
                >
                  {/* Left Side Slot */}
                  <div className={`${isLeft ? 'md:pr-0 md:z-20' : 'hidden md:block'}`}>
                    {isLeft && (
                      <div
                        className={`ml-8 md:ml-0 md:-mr-12 border-4 border-black p-6 relative ${
                          tooth.dark ? 'bg-black text-white' : 'bg-white text-black'
                        }`}
                      >
                        {/* Spine Clamp Pin Overlapping Center Line */}
                        <div
                          className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#f25c05] border-2 border-black items-center justify-center z-30"
                          aria-hidden="true"
                        >
                          <span className="w-1.5 h-1.5 bg-black" />
                        </div>
                        <div
                          className="md:hidden absolute -left-7 top-6 w-4 h-4 bg-[#f25c05] border-2 border-black z-30"
                          aria-hidden="true"
                        />

                        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest mb-2">
                          <span className="text-[#f25c05] font-bold">{tooth.code}</span>
                          <span className={tooth.dark ? 'text-neutral-400' : 'text-neutral-500'}>
                            {tooth.metric}
                          </span>
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-tight mb-2 pr-8">
                          {tooth.title}
                        </h3>
                        <p
                          className={`font-mono text-xs leading-relaxed ${
                            tooth.dark ? 'text-neutral-300' : 'text-neutral-700'
                          }`}
                        >
                          {tooth.body}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Side Slot */}
                  <div className={`${!isLeft ? 'md:pl-0 md:z-20' : 'hidden md:block'}`}>
                    {!isLeft && (
                      <div
                        className={`ml-8 md:ml-0 md:-ml-12 md:mt-10 border-4 border-black p-6 relative ${
                          tooth.dark ? 'bg-black text-white' : 'bg-white text-black'
                        }`}
                      >
                        {/* Spine Clamp Pin Overlapping Center Line */}
                        <div
                          className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#f25c05] border-2 border-black items-center justify-center z-30"
                          aria-hidden="true"
                        >
                          <span className="w-1.5 h-1.5 bg-black" />
                        </div>
                        <div
                          className="md:hidden absolute -left-7 top-6 w-4 h-4 bg-[#f25c05] border-2 border-black z-30"
                          aria-hidden="true"
                        />

                        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest mb-2 md:pl-8">
                          <span className="text-[#f25c05] font-bold">{tooth.code}</span>
                          <span className={tooth.dark ? 'text-neutral-400' : 'text-neutral-500'}>
                            {tooth.metric}
                          </span>
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-tight mb-2 md:pl-8">
                          {tooth.title}
                        </h3>
                        <p
                          className={`font-mono text-xs leading-relaxed md:pl-8 ${
                            tooth.dark ? 'text-neutral-300' : 'text-neutral-700'
                          }`}
                        >
                          {tooth.body}
                        </p>
                      </div>
                    )}
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
