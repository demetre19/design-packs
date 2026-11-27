import React from 'react';

interface IndexGroup {
  part: string;
  heading: string;
  entries: {
    roman: string;
    title: string;
    subtitle: string;
    folio: string;
    featured?: boolean;
  }[];
}

const INDEX_GROUPS: IndexGroup[] = [
  {
    part: 'PART I',
    heading: 'CHRONOMETRY & ESCAPEMENTS',
    entries: [
      { roman: 'I', title: 'On the Double-Axis Tourbillon Carriage', subtitle: 'Gravity vector cancellation across 60-second rotations', folio: 'FOL. 014', featured: true },
      { roman: 'II', title: 'Breguet Terminal Curves in Silicon', subtitle: 'Oxide thermal compensation and concentric breathing', folio: 'FOL. 038' },
      { roman: 'III', title: 'Twin-Coaxial Constant-Torque Barrels', subtitle: '120-hour reserve and amplitude flatness curves', folio: 'FOL. 062' },
      { roman: 'IV', title: 'Cathedral Gong Acoustic Tuning', subtitle: 'Harmonic thirds in hardened alloy wire', folio: 'FOL. 089' },
    ],
  },
  {
    part: 'PART II',
    heading: 'SUBTERRANEAN CUSTODY & ARCHITECTURE',
    entries: [
      { roman: 'V', title: 'Seismic Base-Isolation Strongrooms', subtitle: 'Bedrock foundations at 42 meters below Mayfair', folio: 'FOL. 116', featured: true },
      { roman: 'VI', title: 'Positive-Pressure Nitrogen Preservation', subtitle: 'Halting lubricant oxidation over multi-decade storage', folio: 'FOL. 148' },
      { roman: 'VII', title: 'Tri-Modal Biometric Vault Protocols', subtitle: 'Vascular, iris, and physical titanium key-bit', folio: 'FOL. 174' },
    ],
  },
  {
    part: 'PART III',
    heading: 'PROVENANCE, LAW & PATRONAGE',
    entries: [
      { roman: 'VIII', title: 'The Perpetual Lineal Succession Charter', subtitle: 'Cross-generational custody transfer instruments', folio: 'FOL. 208' },
      { roman: 'IX', title: 'Geneva & London Salon Etiquette', subtitle: 'Private viewing schedules and archive requisitions', folio: 'FOL. 244' },
      { roman: 'X', title: 'Appendix: Complete Assay & Hallmark Plates', subtitle: 'Photographic index of all 18K and Pt950 punches', folio: 'FOL. 288', featured: true },
    ],
  },
];

export function Content9() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-6 border-b border-white/20 mb-14">
          <div>
            <span className="text-[10px] font-mono tracking-[0.35em] text-[#d4b06a] uppercase block mb-2">
              COMPENDIUM MMXXVI // TABLE OF CONTENTS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#ece8e1]">
              Index of Technical Folios
            </h2>
          </div>
          <span className="font-mono text-xs text-[#7a8494]">288 PAGES // EDITION OF 250</span>
        </div>

        <div className="flex flex-col gap-14">
          {INDEX_GROUPS.map((group) => (
            <div key={group.part}>
              {/* Terse Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#d4b06a]">{group.part}</span>
                <span className="text-[#d4b06a] text-[10px]">◆</span>
                <span className="font-mono text-[10px] tracking-[0.28em] text-[#7a8494] uppercase">
                  {group.heading}
                </span>
                <div className="h-[1px] flex-1 bg-white/10" />
              </div>

              {/* Typographic Leader Entries */}
              <div className="flex flex-col gap-5">
                {group.entries.map((entry) => (
                  <div key={entry.roman} className="group">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif italic text-base text-[#d4b06a] w-8 shrink-0">
                        {entry.roman}.
                      </span>
                      <span
                        className={`font-serif tracking-wide text-[#ece8e1] group-hover:text-[#d4b06a] transition-colors ${
                          entry.featured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
                        }`}
                      >
                        {entry.title}
                      </span>
                      {/* Dotted Leader */}
                      <span
                        className="flex-1 border-b border-dotted border-white/25 mx-2 translate-y-[-4px] min-w-[24px]"
                        aria-hidden="true"
                      />
                      <span className="font-mono tabular-nums text-xs text-[#d4b06a] shrink-0">
                        {entry.folio}
                      </span>
                    </div>
                    <div className="pl-11 font-mono text-[11px] text-[#7a8494] mt-1">
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
