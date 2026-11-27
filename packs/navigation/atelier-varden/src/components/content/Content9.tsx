import React from 'react';

interface IndexGroup {
  roman: string;
  heading: string;
  entries: { code: string; title: string; meta: string; page: string }[];
}

const GROUPS: IndexGroup[] = [
  {
    roman: 'I',
    heading: 'ALPINE MONOLITHS',
    entries: [
      { code: '01.01', title: 'Engadin Stone Pavilion', meta: 'St. Moritz, 2025', page: '014' },
      { code: '01.02', title: 'Vals Thermal Bathhouse', meta: 'Graubünden, 2026', page: '028' },
      { code: '01.03', title: 'Sils Maria Writing Hut', meta: 'Upper Engadin, 2022', page: '042' },
      { code: '01.04', title: 'Flims Concrete Belvedere', meta: 'Grisons, 2021', page: '056' },
      { code: '01.05', title: 'Andermatt Quarry House', meta: 'Uri, 2020', page: '070' },
    ],
  },
  {
    roman: 'II',
    heading: 'COASTAL SHELTERS',
    entries: [
      { code: '02.01', title: 'Kamakura Horizon House', meta: 'Kanagawa, 2024', page: '088' },
      { code: '02.02', title: 'Värmdö Archipelago Studio', meta: 'Stockholm, 2024', page: '104' },
      { code: '02.03', title: 'Gotland Limestone Sanctuary', meta: 'Visby, 2026', page: '118' },
      { code: '02.04', title: 'Naoshima Tidal Annex', meta: 'Kagawa, 2021', page: '132' },
      { code: '02.05', title: 'Lofoten Windbreak Boathouse', meta: 'Nordland, 2019', page: '146' },
    ],
  },
  {
    roman: 'III',
    heading: 'URBAN INFILL & COURTYARDS',
    entries: [
      { code: '03.01', title: 'Villa Varden Nord', meta: 'Zürichberg, 2025', page: '164' },
      { code: '03.02', title: 'Aoyama Courtyard Annex', meta: 'Tokyo, 2023', page: '182' },
      { code: '03.03', title: 'Kyoto Moss Cloister', meta: 'Sakyo-ku, 2026', page: '198' },
      { code: '03.04', title: 'Östermalm Gallery Residence', meta: 'Stockholm, 2022', page: '214' },
    ],
  },
  {
    roman: 'IV',
    heading: 'MATERIAL & TECTONIC PAPERS',
    entries: [
      { code: '04.01', title: 'Douglas Fir Shuttering & Surface Memory', meta: 'Monograph Essay', page: '232' },
      { code: '04.02', title: 'Thermal Inertia at 1,800 Meters', meta: 'Technical Paper', page: '248' },
      { code: '04.03', title: 'Charring Protocols for Sugi Cladding', meta: 'Lab Report', page: '264' },
      { code: '04.04', title: 'Zero-Flashing Parapet Thresholds', meta: 'Detail Archive', page: '278' },
    ],
  },
];

export function Content9() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#16171a] pb-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
                COMPLETE MONOGRAPH INDEX · 2012—2026
              </span>
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">
              Table of Contents &amp; Archival Folios
            </h2>
          </div>
          <span className="text-[10px] font-mono text-stone-500 uppercase tabular-nums">
            PP. 014—294 · EDITION IV
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 relative">
          {/* Center vertical hairline on large screens */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#e2e0d8]"
          />

          {GROUPS.map((group) => (
            <div key={group.roman} className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-[#16171a] pb-2">
                <div className="flex items-baseline space-x-3">
                  <span className="text-xs font-mono text-[#b5482e] font-medium">{group.roman}.</span>
                  <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-[#16171a] font-medium">
                    {group.heading}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-stone-400">FOLIO</span>
              </div>

              <ol className="space-y-2.5">
                {group.entries.map((entry) => (
                  <li key={entry.code} className="flex items-baseline gap-2 text-sm">
                    <span className="text-[11px] font-mono text-stone-400 shrink-0 tabular-nums">
                      {entry.code}
                    </span>
                    <span className="font-medium text-[#16171a]">{entry.title}</span>
                    <span className="hidden sm:inline text-[11px] font-mono text-stone-500 shrink-0">
                      ({entry.meta})
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex-1 border-b border-dotted border-stone-400 mx-1"
                    />
                    <span className="text-xs font-mono font-medium text-[#16171a] shrink-0 tabular-nums">
                      p. {entry.page}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
