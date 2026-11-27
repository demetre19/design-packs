import React from 'react';

const CASCADE_BARS = [
  {
    beat: '01/05',
    tag: 'PRE-FLIGHT CRYOGENIC CHILLDOWN',
    metric: '-253 °C',
    copy: 'Liquid hydrogen sub-cooling lines purge ambient moisture across dorsal feed manifolds 40 minutes prior to mothership taxi.',
    alignClass: 'md:w-[78%] md:mr-auto',
  },
  {
    beat: '02/05',
    tag: 'CAPTIVE CLIMB',
    metric: 'FL380',
    copy: 'Carrier aircraft ascends to launch corridor.',
    alignClass: 'md:w-[40%] md:ml-auto',
  },
  {
    beat: '03/05',
    tag: 'OBLIQUE SHOCK LOCK',
    metric: 'M 2.85',
    copy: 'Inlet wedges step inward by 4.2° to stabilize supersonic compression shockwaves inside the diffuser throat.',
    alignClass: 'md:w-[58%] md:mx-auto',
  },
  {
    beat: '04/05',
    tag: 'SUSTAINED SCRAMJET DASH',
    metric: 'M 4.84',
    copy: 'Active carbon-silicon skin panels maintain thermal equilibrium across fourteen minutes of continuous hypersonic cruise over Nevada.',
    alignClass: 'md:w-[74%] md:ml-auto',
  },
  {
    beat: '05/05',
    tag: 'DROGUE ARREST',
    metric: '195 KTS',
    copy: 'Twin Kevlar ribbon chutes deploy at Runway 04L.',
    alignClass: 'md:w-[38%] md:mr-auto',
  },
];

export function Content14() {
  return (
    <section
      aria-label="Flight Cadence Cascade"
      className="w-full bg-[#16181d] text-white font-mono border-b border-[#2a2d35] py-14 px-4 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-[#2a2d35] pb-4 mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <span className="text-[10px] tracking-[0.28em] text-[#ff3d00] font-bold uppercase block">
              TELEMETRY CADENCE // CASCADE 14
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight mt-1">
              SORTIE PHASE RHYTHM SCORE
            </h2>
          </div>
          <span className="text-[10px] text-zinc-400">
            WIDTH &amp; OFFSET ENCODE PHASE DURATION
          </span>
        </div>

        {/* Mathematical Shifting Rhythm Bars */}
        <div className="space-y-4">
          {CASCADE_BARS.map((bar) => (
            <div key={bar.beat} className="border-t border-[#2a2d35] pt-4">
              <div
                className={`${bar.alignClass} bg-[#20232a] border border-[#3a3e4c] p-4 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]`}
              >
                <div className="flex items-baseline justify-between gap-4 mb-1.5">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-[10px] font-black text-[#ff3d00] tabular-nums">
                      {bar.beat}
                    </span>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
                      {bar.tag}
                    </h3>
                  </div>
                  <span className="text-sm font-black font-sans text-[#ff3d00] tabular-nums shrink-0">
                    {bar.metric}
                  </span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">{bar.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
