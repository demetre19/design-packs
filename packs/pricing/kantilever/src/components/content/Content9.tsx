import React from 'react';

interface IndexCategory {
  roman: string;
  label: string;
  items: { num: string; title: string; subtitle: string; ref: string }[];
}

export const Content9: React.FC = () => {
  const categories: IndexCategory[] = [
    {
      roman: 'I',
      label: 'TECTONIC THEORY & DIAGONAL GEOMETRY',
      items: [
        { num: '001', title: 'THE MERIDIAN ANGLE AXIOM (8°–14°)', subtitle: 'Vectorial load distribution in slope-anchored architecture', ref: 'P. 008 · PL. 01' },
        { num: '002', title: 'COUNTERWEIGHT & BEDROCK KEYS', subtitle: 'Granite tension anchors vs. vertical pier conventions', ref: 'P. 024 · PL. 04' },
        { num: '003', title: 'SEISMIC SHEAR & TORSION DAMPING', subtitle: 'Zone 4 lateral acceleration tests across open bays', ref: 'P. 041 · PL. 07' },
        { num: '004', title: 'SOLAR RADIATION & LOUVER PITCH', subtitle: 'Passive thermal deflection via 14° precast concrete fins', ref: 'P. 058 · PL. 11' },
      ],
    },
    {
      roman: 'II',
      label: 'BUILT MONOLITHS & FIELD DOSSIERS',
      items: [
        { num: '005', title: 'STÄFA ALPINE OUTCROP PAVILION', subtitle: '1,840 m² · 4 Levels · Zurich Canton, Switzerland', ref: 'P. 076 · PL. 14' },
        { num: '006', title: 'OSLO FJORD CANTILEVER TOWER', subtitle: '2,300 m² · 5 Levels · Akershus, Norway', ref: 'P. 112 · PL. 22' },
        { num: '007', title: 'TOKYO ANGULAR RESIDENCE', subtitle: '420 m² · 3 Levels · Setagaya-ku, Japan', ref: 'P. 148 · PL. 30' },
        { num: '008', title: 'GENEVA RAIL CORRIDOR OVERPASS', subtitle: '3,450 m² · 6 Levels · Geneva, Switzerland', ref: 'P. 184 · PL. 38' },
      ],
    },
    {
      roman: 'III',
      label: 'MATERIAL MATRICES & APPENDICES',
      items: [
        { num: '009', title: 'S690QL QUENCHED & TEMPERED STEEL', subtitle: 'Pin joint machining tolerances and weld schedules', ref: 'P. 210 · APP. A' },
        { num: '010', title: 'C60/75 ULTRA-HIGH PERFORMANCE CONCRETE', subtitle: 'Board-formed cedar shuttering & magnetite aggregate', ref: 'P. 228 · APP. B' },
        { num: '011', title: 'ACOUSTIC ISOLATION BEARINGS', subtitle: 'Elastomeric shear break specifications over active rail', ref: 'P. 244 · APP. C' },
        { num: '012', title: 'CHRONOLOGICAL WORKS REGISTER (2008–2026)', subtitle: 'Complete index of 44 built & unbuilt commissions', ref: 'P. 262 · APP. D' },
      ],
    },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/20">
      <div className="max-w-5xl mx-auto px-6 space-y-14">
        {/* Typographic Masthead */}
        <div className="border-b-2 border-[#14161a] pb-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-none">
            MONOGRAPH INDEX
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#14161a]/70">
            COMPLETE CONTENTS · VOL. I–III · 288 PAGES
          </span>
        </div>

        {/* Dense Typographic Table of Contents */}
        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.roman} className="space-y-5">
              {/* Category Terse Header */}
              <div className="flex items-center gap-4 border-b border-[#14161a] pb-2">
                <span className="bg-[#ffc72c] text-[#14161a] font-mono text-xs font-extrabold px-2.5 py-0.5 transform skew-x-[-12deg]">
                  {cat.roman}
                </span>
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.22em]">
                  {cat.label}
                </h3>
              </div>

              {/* Entries with dot leaders */}
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item.num} className="group">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-bold text-[#14161a]/50 group-hover:text-[#14161a] tabular-nums shrink-0">
                        {item.num}
                      </span>
                      <span className="text-base md:text-xl font-extrabold uppercase tracking-tight shrink-0 max-w-[70%] md:max-w-none">
                        {item.title}
                      </span>
                      {/* Dot leader stretching across available horizontal gap */}
                      <span
                        aria-hidden="true"
                        className="hidden sm:block flex-1 border-b border-dotted border-[#14161a]/45 mx-2 translate-y-[-3px]"
                      />
                      <span className="font-mono text-xs font-bold tabular-nums shrink-0 ml-auto bg-[#14161a] text-[#ffc72c] px-2 py-0.5">
                        {item.ref}
                      </span>
                    </div>
                    <div className="pl-9 text-xs text-[#14161a]/65 font-sans mt-0.5">
                      {item.subtitle}
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
};
