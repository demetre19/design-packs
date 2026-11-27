import React from 'react';

interface ToothItem {
  side: 'left' | 'right';
  code: string;
  title: string;
  metric: string;
  body: string;
  bridgeTag: string;
}

const TEETH: ToothItem[] = [
  {
    side: 'left',
    code: 'Z-01',
    title: 'ZERO CLUTCH ENGAGEMENT',
    metric: '0.00 MS SHIFT LOSS',
    body: 'Single-stage helical reduction eliminates mechanical gear interrupts across the entire 0–300 km/h acceleration envelope.',
    bridgeTag: 'DRIVE // 01',
  },
  {
    side: 'right',
    code: 'Z-02',
    title: 'COUNTER-ROTATING CRANK EFFECT',
    metric: '-38% GYRO INERTIA',
    body: 'Reverse-spin axial rotor cancels front wheel gyroscopic resistance, cutting lean-angle initiation effort in chicane transitions.',
    bridgeTag: 'GYRO // 02',
  },
  {
    side: 'left',
    code: 'Z-03',
    title: 'DIELECTRIC STATOR BATH',
    metric: '12.0 L/MIN FLOW',
    body: 'Low-viscosity synthetic oil immerses copper slots directly, extracting heat three times faster than perimeter water jackets.',
    bridgeTag: 'COOL // 03',
  },
  {
    side: 'right',
    code: 'Z-04',
    title: 'PREDICTIVE SLIP ARBITER',
    metric: '1,000 HZ LOOP',
    body: 'Six-axis IMU feeds rear inverter phase current modulation every millisecond, holding 7% optimal tire slip out of hairpins.',
    bridgeTag: 'CTRL // 04',
  },
  {
    side: 'left',
    code: 'Z-05',
    title: 'STRUCTURAL PACK CASING',
    metric: '42% STIFFNESS GAIN',
    body: 'Machined 7075-T6 billet battery enclosure bolts directly as a stressed chassis member between steering head and swingarm pivot.',
    bridgeTag: 'FRAME // 05',
  },
  {
    side: 'right',
    code: 'Z-06',
    title: 'VARIABLE REGEN ENGINE BRAKE',
    metric: '5-STAGE MAPPING',
    body: 'Thumb-indexed rotary paddle dials simulated two-stroke freewheel to aggressive 94 kW deceleration harvest mid-corner.',
    bridgeTag: 'HARVEST // 06',
  },
];

export function Content3() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">
            ARCHITECTURE 03 // INTERLOCKING MECHANICAL THESIS
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mt-2">
            THE POWERTRAIN ZIPPER
          </h2>
        </div>

        {/* Central Continuous Spine Container */}
        <div className="relative">
          {/* Continuous Vertical Spine on Desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#ff5a1f]/60 -translate-x-1/2"
          />

          <div className="space-y-8 md:space-y-0">
            {TEETH.map((item, idx) => {
              const isLeft = item.side === 'left';
              return (
                <div
                  key={item.code}
                  className={`relative md:w-[54%] ${
                    isLeft
                      ? 'md:mr-auto md:pr-12'
                      : 'md:ml-auto md:pl-12 md:-mt-10'
                  } ${idx > 0 && isLeft ? 'md:mt-4' : ''}`}
                >
                  {/* Tooth element that physically crosses the center spine */}
                  <div
                    className={`relative border-t border-[#272a33] pt-5 pb-6 bg-[#101114]/90 ${
                      isLeft ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    {/* Centerline Bridge Tag overlapping the vertical spine */}
                    <div
                      className={`hidden md:flex items-center gap-2 absolute top-0 -translate-y-1/2 z-20 ${
                        isLeft ? 'right-0 translate-x-[42%]' : 'left-0 -translate-x-[42%]'
                      }`}
                    >
                      <span className="bg-[#16181d] border border-[#ff5a1f] text-[#ff5a1f] font-mono-spec text-[10px] font-bold px-2.5 py-0.5 whitespace-nowrap">
                        {item.bridgeTag}
                      </span>
                    </div>

                    {/* Square Coupling Pin centered right on the spine */}
                    <span
                      aria-hidden="true"
                      className={`hidden md:block absolute top-5 w-2.5 h-2.5 bg-[#ff5a1f] z-10 ${
                        isLeft ? 'right-[7.4%] translate-x-1/2' : 'left-[7.4%] -translate-x-1/2'
                      }`}
                    />

                    {/* Horizontal Coupling Rule reaching the spine */}
                    <span
                      aria-hidden="true"
                      className={`hidden md:block absolute top-[24px] h-px bg-[#272a33] w-12 ${
                        isLeft ? 'right-0' : 'left-0'
                      }`}
                    />

                    <div className={`flex items-baseline gap-3 mb-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="font-mono-spec text-xs text-[#ff5a1f] font-bold">{item.code}</span>
                      <span className="font-mono-spec text-[10px] text-neutral-500">{item.metric}</span>
                    </div>

                    <h3 className="font-display font-extrabold text-xl md:text-2xl text-white">
                      {item.title}
                    </h3>
                    <p className="font-mono-spec text-xs text-neutral-400 leading-relaxed mt-2">
                      {item.body}
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
