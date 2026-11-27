import React from 'react';

interface IndexGroup {
  roman: string;
  category: string;
  entries: { num: string; title: string; subtitle: string; page: string; highlight?: boolean }[];
}

const INDEX_GROUPS: IndexGroup[] = [
  {
    roman: 'I',
    category: 'CHASSIS & COMPOSITES',
    entries: [
      { num: '01', title: 'T1100G CARBON MONOCOQUE SHELL', subtitle: 'Torsional stiffness & bulkhead layup', page: 'P. 004' },
      { num: '02', title: 'BILLET TI-6AL-4V REAR CRADLE', subtitle: '5-axis subtractive weight optimization', page: 'P. 018' },
      { num: '03', title: 'HOLLOW CARBON SWINGARM KINEMATICS', subtitle: 'Anti-squat geometry at 305 Nm', page: 'P. 032' },
    ],
  },
  {
    roman: 'II',
    category: 'SOLID-STATE PROPULSION',
    entries: [
      { num: '04', title: '998V CERAMIC ELECTROLYTE ARCHITECTURE', subtitle: 'Zero-solvent cell thermal envelope', page: 'P. 046', highlight: true },
      { num: '05', title: 'DIELECTRIC IMMERSION BATH CIRCULATION', subtitle: '45-minute full endurance stability', page: 'P. 064' },
      { num: '06', title: 'COUNTER-ROTATING AXIAL-FLUX STATORS', subtitle: 'Gyroscopic inertia cancellation', page: 'P. 078' },
    ],
  },
  {
    roman: 'III',
    category: 'AERODYNAMICS & DOWNFORCE',
    entries: [
      { num: '07', title: 'BIPLANE FORGED CANARD FOILS', subtitle: '340 kg downforce at 280 km/h', page: 'P. 096', highlight: true },
      { num: '08', title: 'VENTURI BELLY DIFFUSER CHANNELS', subtitle: 'Wake isolation at 64° lean angle', page: 'P. 114' },
    ],
  },
  {
    roman: 'IV',
    category: 'TELEMETRY & HOMOLOGATION',
    entries: [
      { num: '09', title: '5KHZ NEURAL TRACTION VECTORING', subtitle: 'Six-axis IMU predictive slip loop', page: 'P. 136' },
      { num: '10', title: 'SUZUKA 1:58.420 COMPLETE TRACE', subtitle: 'Sector-by-sector braking & regen log', page: 'P. 162' },
    ],
  },
];

export function Content9() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-6 mb-10">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#ff2e00] font-bold mb-2">
              MONOGRAPH VOL. IV / COMPLETE CONTENTS
            </div>
            <h2 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.82]">
              THE <span className="text-[#ff2e00]">INDEX</span>
            </h2>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mt-4 md:mt-0 text-left md:text-right">
            PAGES 001 — 188 <br />TOKYO TECHNICAL PRESS
          </div>
        </div>

        {/* Dense Multi-Scale Typographic Table of Contents */}
        <div className="space-y-10">
          {INDEX_GROUPS.map((group) => (
            <div key={group.roman} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Terse Category Label Column */}
              <div className="lg:col-span-3 border-t border-black pt-2">
                <div className="font-mono text-[10px] text-[#ff2e00] font-bold uppercase tracking-[0.2em]">
                  PART {group.roman}
                </div>
                <div className="font-black text-sm uppercase tracking-tight mt-0.5">
                  {group.category}
                </div>
              </div>

              {/* Dotted Leader Entries Column */}
              <div className="lg:col-span-9 space-y-4">
                {group.entries.map((entry) => (
                  <div key={entry.num} className="group">
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-black text-2xl sm:text-3xl tracking-tighter tabular-nums leading-none ${
                          entry.highlight ? 'text-[#ff2e00]' : 'text-black'
                        }`}
                      >
                        {entry.num}
                      </span>
                      <span className="font-black text-base sm:text-xl uppercase tracking-tight group-hover:text-[#ff2e00] transition-colors">
                        {entry.title}
                      </span>
                      {/* Dotted Leader */}
                      <span
                        aria-hidden="true"
                        className="flex-1 border-b border-dotted border-black mx-2 min-w-[24px]"
                      />
                      <span className="font-mono text-xs font-bold tabular-nums whitespace-nowrap">
                        {entry.page}
                      </span>
                    </div>
                    <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider pl-10 mt-0.5">
                      {entry.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
