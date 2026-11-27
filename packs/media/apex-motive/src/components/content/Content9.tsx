import React, { useState } from 'react';

interface IndexGroup {
  roman: string;
  category: string;
  entries: { code: string; title: string; rev: string; page: string }[];
}

const INDEX_GROUPS: IndexGroup[] = [
  {
    roman: 'I',
    category: 'PROPULSION & STATOR TOPOLOGY',
    entries: [
      { code: '01.01', title: 'Axial-Flux Halbach Array Rotor Geometry', rev: 'REV C', page: 'P. 004' },
      { code: '01.02', title: 'Dielectric Ester Direct-Oil Cooling Loop', rev: 'REV D', page: 'P. 019' },
      { code: '01.03', title: 'Dual Silicon-Carbide 800V Inverter Switching', rev: 'REV B', page: 'P. 034' },
      { code: '01.04', title: 'Helical Reduction & Counter-Rotation Mass', rev: 'REV A', page: 'P. 051' },
    ],
  },
  {
    roman: 'II',
    category: 'CHASSIS, AERO & DAMPING',
    entries: [
      { code: '02.01', title: 'Autoclaved T1000G Carbon Monocoque Layup', rev: 'REV E', page: 'P. 068' },
      { code: '02.02', title: 'Stressed 7075-T6 Battery Belly Enclosure', rev: 'REV B', page: 'P. 082' },
      { code: '02.03', title: 'Active 18° Front Winglet Actuation Logic', rev: 'REV C', page: 'P. 097' },
      { code: '02.04', title: 'Öhlins TTX36 10ms Semi-Active Valve Map', rev: 'REV A', page: 'P. 114' },
    ],
  },
  {
    roman: 'III',
    category: 'TRACK TELEMETRY & HOMOLOGATION',
    entries: [
      { code: '03.01', title: 'Suzuka West Loop Sector Energy Budget', rev: 'REV D', page: 'P. 132' },
      { code: '03.02', title: '5-Stage Regenerative Deceleration Harvest', rev: 'REV B', page: 'P. 149' },
      { code: '03.03', title: '350 kW DC Fast-Charge Thermal Pre-Chill', rev: 'REV C', page: 'P. 166' },
      { code: '03.04', title: 'Batch 04 Safety & Street Homologation File', rev: 'FINAL', page: 'P. 188' },
    ],
  },
];

export function Content9() {
  const [selectedCode, setSelectedCode] = useState<string>('01.02');

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#272a33] pb-6 mb-14 gap-4">
          <div>
            <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">
              DOSSIER 09 // COMPLETE ENGINEERING TABLE OF CONTENTS
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-1">
              TECHNICAL MONOGRAPH INDEX
            </h2>
          </div>
          <div className="font-mono-spec text-xs text-neutral-400 text-right">
            <div>VOLUME IV // 196 PAGES</div>
            <div className="text-[#ff5a1f]">SELECTED REF: {selectedCode}</div>
          </div>
        </div>

        <div className="space-y-12">
          {INDEX_GROUPS.map((group) => (
            <div key={group.roman} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Group Scale Marker */}
              <div className="lg:col-span-4 flex items-baseline gap-4 border-t border-[#272a33] pt-4">
                <span className="font-display font-extrabold text-5xl text-[#ff5a1f] leading-none">
                  {group.roman}.
                </span>
                <h3 className="font-mono-spec text-xs font-bold tracking-widest text-white">
                  {group.category}
                </h3>
              </div>

              {/* Dense Typographic Entries with Dot Leaders */}
              <div className="lg:col-span-8 border-t border-[#272a33] pt-3 divide-y divide-[#272a33]/60">
                {group.entries.map((entry) => {
                  const active = selectedCode === entry.code;
                  return (
                    <button
                      key={entry.code}
                      type="button"
                      onClick={() => setSelectedCode(entry.code)}
                      className={`w-full py-3 flex items-baseline gap-3 text-left transition-colors cursor-pointer ${
                        active ? 'text-[#ff5a1f]' : 'text-neutral-200 hover:text-white'
                      }`}
                    >
                      <span className="font-mono-spec text-xs font-bold shrink-0 tabular-nums text-[#ff5a1f]">
                        {entry.code}
                      </span>
                      <span className="font-display font-bold text-sm md:text-base tracking-tight shrink-0 max-w-[65%] sm:max-w-none truncate">
                        {entry.title}
                      </span>
                      <span className="flex-1 border-b border-dotted border-[#3b404d] mx-1 translate-y-[-3px]" />
                      <span className="font-mono-spec text-[10px] text-neutral-500 shrink-0 hidden sm:inline">
                        {entry.rev}
                      </span>
                      <span className="font-mono-spec text-xs font-bold shrink-0 tabular-nums">
                        {entry.page}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
