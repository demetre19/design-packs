import React from 'react';

interface MeasureBlock {
  measure: string;
  tempo: string;
  title: string;
  copy: string;
  layoutClass: string;
}

const MEASURES: MeasureBlock[] = [
  {
    measure: 'M.01',
    tempo: '68% WIDTH // LEFT ANCHOR',
    title: 'POWER WITHOUT THERMAL DECAY',
    copy: 'Most electric prototypes peak for ninety seconds before inverter throttling cuts output by half. Continuous oil-immersion locks 117 kW flat across forty-five minutes of track attack.',
    layoutClass: 'w-full md:w-[68%] mr-auto',
  },
  {
    measure: 'M.02',
    tempo: '38% WIDTH // RIGHT ANCHOR',
    title: 'STIFFNESS AT 7.2 KG',
    copy: 'T1000G monocoque replaces multi-tube welds with a single autoclaved spine.',
    layoutClass: 'w-full md:w-[38%] ml-auto',
  },
  {
    measure: 'M.03',
    tempo: '54% WIDTH // CENTER ANCHOR',
    title: '1,000 HZ REAR TIRE ARBITRATION',
    copy: 'Phase-current modulation reads lean angle and slip velocity every millisecond, carving apex exits with mechanical predictability.',
    layoutClass: 'w-full md:w-[54%] mx-auto',
  },
  {
    measure: 'M.04',
    tempo: '64% WIDTH // RIGHT ANCHOR',
    title: 'ACTIVE AERO TRANSITION IN 185 MS',
    copy: 'Front-fork pressure transducers command electro-mechanical winglets under braking, adding 48.2 kgf of front-axle bite before tip-in.',
    layoutClass: 'w-full md:w-[64%] ml-auto',
  },
  {
    measure: 'M.05',
    tempo: '34% WIDTH // LEFT ANCHOR',
    title: 'ZERO SHIFT INTERRUPTION',
    copy: 'One helical stage from standstill to 300 km/h.',
    layoutClass: 'w-full md:w-[34%] mr-auto',
  },
];

export function Content14() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-14 flex justify-between items-end border-b border-[#272a33] pb-4">
          <div>
            <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">
              SCORE 14 // MATHEMATICAL HORIZONTAL CASCADE
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mt-1">
              DYNAMIC THESIS CADENCE
            </h2>
          </div>
          <span className="font-mono-spec text-[10px] text-neutral-500 hidden sm:block">
            5 MEASURES // VARIABLE WIDTH
          </span>
        </div>

        {/* Mathematical Shifting Cascade */}
        <div className="space-y-8">
          {MEASURES.map((m) => (
            <div key={m.measure} className="relative border-t border-[#272a33]/60 pt-4">
              {/* Musical Score Measure Bar Margin Tag */}
              <div className="flex justify-between font-mono-spec text-[9px] text-neutral-500 mb-3">
                <span className="text-[#ff5a1f] font-bold">{m.measure}</span>
                <span>{m.tempo}</span>
              </div>

              <div className={`${m.layoutClass} border-l-2 border-[#ff5a1f] pl-5 py-1`}>
                <h3 className="font-display font-extrabold text-xl md:text-2xl text-white">
                  {m.title}
                </h3>
                <p className="font-mono-spec text-xs text-neutral-400 leading-relaxed mt-2">
                  {m.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
