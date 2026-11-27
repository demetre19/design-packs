import React from 'react';

const CASCADE_BARS = [
  {
    bar: 'BAR 01',
    meter: '4/4 PRELUDE',
    placement: 'md:w-8/12 md:mr-auto',
    title: 'Gravity Compensated in Sixty Seconds',
    copy: 'The upper carriage completes one full revolution per minute, averaging positional rate errors before they accumulate across the daily cycle.',
    marker: '0.29g TITANIUM CAGE',
  },
  {
    bar: 'BAR 02',
    meter: '3/4 INTERLUDE',
    placement: 'md:w-4/12 md:ml-auto',
    title: 'Zero Lubrication Friction',
    copy: 'Diamond-coated silicon pallets operate dry without viscosity drift.',
    marker: '120H POWER',
  },
  {
    bar: 'BAR 03',
    meter: '5/8 CADENCE',
    placement: 'md:w-6/12 md:mx-auto',
    title: 'Twin-Barrel Harmonic Torque Delivery',
    copy: 'Two series-coupled mainsprings maintain an unbroken flat torque plateau for ninety-six hours prior to reserve decline.',
    marker: '294° AMPLITUDE',
  },
  {
    bar: 'BAR 04',
    meter: '2/4 COUNTERPOINT',
    placement: 'md:w-5/12 md:mr-auto md:ml-[8%]',
    title: 'Subterranean Nitrogen Equanimity',
    copy: 'Hermetic vaults hold 44% relative humidity indefinitely, isolating rare lubricants and dials from oxygen.',
    marker: '18.0°C LOCKED',
  },
  {
    bar: 'BAR 05',
    meter: '4/4 FINALE',
    placement: 'md:w-7/12 md:ml-auto',
    title: 'An Unbroken Lineal Register',
    copy: 'Every bridge number, assay mark, and transfer deed remains tethered to physical titanium certificates sealed inside our London and Geneva chambers.',
    marker: 'FOLIO VERIFIED',
  },
];

export function Content14() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-14">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#d4b06a] uppercase block mb-2">
              SCORE CADENCE // MATHEMATICAL CASCADE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">
              Five Measures of Precision
            </h2>
          </div>
          <span className="text-[10px] font-mono text-[#7a8494]">SHIFTING MEASURE PROGRESSION</span>
        </div>

        {/* Musical-Score Staves Shifting Horizontally & Proportionally */}
        <div className="flex flex-col gap-8">
          {CASCADE_BARS.map((item, idx) => (
            <div key={item.bar} className="relative pt-4">
              {/* Continuous Staff Line Behind Each Measure */}
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[10px] text-[#d4b06a] tracking-widest shrink-0">
                  {item.bar}
                </span>
                <div className="h-[1px] flex-1 bg-white/15 relative">
                  <span
                    className="hidden md:block absolute top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#d4b06a]"
                    style={{ left: `${[8, 72, 48, 22, 64][idx]}%` }}
                    aria-hidden="true"
                  />
                </div>
                <span className="font-mono text-[10px] text-[#7a8494] shrink-0">{item.meter}</span>
              </div>

              {/* Shifted Content Measure */}
              <div className={`w-full ${item.placement} bg-[#13171c] border border-white/10 p-6`}>
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <h3 className="font-serif text-2xl text-[#ece8e1]">{item.title}</h3>
                  <span className="font-mono text-[10px] text-[#d4b06a] whitespace-nowrap shrink-0">
                    ◆ {item.marker}
                  </span>
                </div>
                <p className="font-sans text-xs text-[#7a8494] leading-relaxed">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
