import React from 'react';

export function Content13() {
  const creditGroups = [
    {
      heading: 'HISTORICAL MATRICES',
      items: [
        ['Original Punchcutter', 'Giambattista Bodoni (1790)'],
        ['Parisian Cursive Cut', 'Jean Jannon (1621)'],
        ['London Antiqua', 'William Caslon I (1734)'],
        ['Swiss Rationalist', 'Adrian Frutiger (1957)'],
      ],
    },
    {
      heading: 'ARCHIVE CURATION',
      items: [
        ['Chief Curator', 'Dr. H. Vanderbilt'],
        ['Optical Supervision', 'Jan Tschichold (1961)'],
        ['Metallurgical Assay', 'Prof. Hélène Vane'],
        ['Vault Archivist', 'Marcus Thorne'],
      ],
    },
    {
      heading: 'DIGITAL PRODUCTION',
      items: [
        ['1200 DPI Optics', 'Basel Optical Lab'],
        ['Spline Engineering', 'Zürich Type Workshop'],
        ['OpenType Hinting', 'Dr. Alistair Finch'],
        ['Checksum Registry', 'Cabinet 12 Ledger'],
      ],
    },
    {
      heading: 'EDITION SPECIFICATIONS',
      items: [
        ['Primary Display', 'Bodoni Époque 72pt'],
        ['Tabular Index', 'Foundry Mono 11px'],
        ['Ground Stock', 'Off-Black Rag (#171717)'],
        ['Edition Run', '500 Numbered Folios'],
      ],
    },
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="border-t-2 border-b border-neutral-700 py-8">
          {/* Printer's Mark & Edition Statement */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-neutral-800 pb-8 mb-8">
            <div className="flex items-center gap-5">
              {/* Geometric Printer's Device Emblem */}
              <svg
                aria-hidden="true"
                viewBox="0 0 64 64"
                className="w-14 h-14 shrink-0 text-white"
              >
                <rect x="2" y="2" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                <line x1="32" y1="2" x2="32" y2="62" stroke="currentColor" strokeWidth="1" />
                <line x1="2" y1="32" x2="62" y2="32" stroke="currentColor" strokeWidth="1" />
                <text
                  x="32"
                  y="38"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="16"
                  fontFamily="serif"
                  fontStyle="italic"
                >
                  É
                </text>
              </svg>
              <div>
                <div className="text-[10px] tracking-[0.25em] text-neutral-500 uppercase">
                  COLOPHON · ARTIFACT PRODUCTION RECORD
                </div>
                <h2 className="text-xl font-serif italic text-white mt-1">
                  Imprinted &amp; Digitized by Typographica Archiv, Basel &amp; Paris
                </h2>
              </div>
            </div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest md:text-right tabular-nums">
              <div>FOLIO EDITION NO. 001 / 500</div>
              <div className="text-neutral-500 mt-0.5">ISSN 2451-8830 · REF #COL-1957</div>
            </div>
          </div>

          {/* Dense 4-column role-name pairs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {creditGroups.map((group, gIdx) => (
              <div key={group.heading} className="space-y-3">
                <div className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase border-b border-neutral-800 pb-1.5 flex justify-between">
                  <span>{group.heading}</span>
                  <span className="text-neutral-600 tabular-nums">[{gIdx + 1}]</span>
                </div>
                <dl className="space-y-2.5 text-[11px]">
                  {group.items.map(([role, name]) => (
                    <div key={role} className="border-b border-dotted border-neutral-800 pb-1.5">
                      <dt className="text-[9px] text-neutral-500 uppercase tracking-wider">
                        {role}
                      </dt>
                      <dd className="text-neutral-200 font-serif text-xs mt-0.5">{name}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          {/* Endnote indices */}
          <div className="mt-8 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row justify-between gap-2 text-[10px] text-neutral-500">
            <div>
              [i] All vector master outlines verified against primary lead impressions housed in Cabinet 12, Basel.
            </div>
            <div className="tabular-nums shrink-0">FINIS · MCMLVII — MMXXVI</div>
          </div>
        </div>
      </div>
    </section>
  );
}
