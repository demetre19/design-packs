import React from 'react';

interface IndexGroup {
  roman: string;
  category: string;
  entries: {
    code: string;
    title: string;
    subnote: string;
    ref: string;
    large?: boolean;
  }[];
}

export function Content9() {
  const sections: IndexGroup[] = [
    {
      roman: 'PART I',
      category: 'PUNCHCUTTING & MATRIX ARCHIVES',
      entries: [
        {
          code: '01.01',
          title: 'Stamperia Reale Strikes — Bodoni Époque',
          subnote: 'Parma royal press · steel counterpunches & brass matrices',
          ref: 'Folio 004–019',
          large: true,
        },
        {
          code: '01.02',
          title: 'Jean Jannon Cursive & Romain Matrices',
          subnote: 'Imprimerie Nationale · 1621 Parisian inventory',
          ref: 'Folio 020–038',
        },
        {
          code: '01.03',
          title: 'William Caslon I Chiswell Street Specimens',
          subnote: 'London rag proofs · 1734 broadsheet measurements',
          ref: 'Plate IV–IX',
        },
      ],
    },
    {
      roman: 'PART II',
      category: 'SWISS MODERNIST SPECIMENS (1957–1964)',
      entries: [
        {
          code: '02.01',
          title: 'Grotesk Schrift — Haas Foundry Reconstruction',
          subnote: 'Münchenstein Monotype castings · ink-trap schematics',
          ref: 'Folio 042–071',
          large: true,
        },
        {
          code: '02.02',
          title: 'Univers Études Taxonomy (Weights 39–83)',
          subnote: 'Adrian Frutiger grid · Deberny & Peignot glass discs',
          ref: 'Folio 072–096',
        },
        {
          code: '02.03',
          title: 'Jan Tschichold Basel Optical Reductions',
          subnote: 'Editorial correspondence & 1961 calibration tables',
          ref: 'Dossier 12B',
        },
      ],
    },
    {
      roman: 'PART III',
      category: 'DIGITAL ENCODING & OPTICAL TABLES',
      entries: [
        {
          code: '03.01',
          title: 'PostScript Type 1 Extrema & Hinting Directives',
          subnote: '1983 Zürich lab conversion · 1000 UPM cubic splines',
          ref: 'Folio 098–118',
          large: true,
        },
        {
          code: '03.02',
          title: 'Multi-Master Optical Scaling Curves (8pt–72pt)',
          subnote: 'Stem load & counter aperture interpolation tables',
          ref: 'Appendix A',
        },
        {
          code: '03.03',
          title: 'Cryptographic Provenance Checksums & Colophon',
          subnote: 'Cabinet 12 digital preservation sign-off',
          ref: 'p. 142',
        },
      ],
    },
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-700 pb-4 mb-10 gap-2">
          <div>
            <div className="text-[10px] tracking-[0.22em] text-neutral-500 uppercase">
              FINDING AID · COMPLETE CATALOG CONTENTS
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mt-1">
              The Index — Master Folio &amp; Plate Directory
            </h2>
          </div>
          <div className="text-[11px] text-neutral-400 tabular-nums">VOLUMES I–III · 142 PP.</div>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.roman}>
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-4">
                <span className="text-[11px] font-bold tracking-[0.22em] text-neutral-300 uppercase">
                  {section.roman}. {section.category}
                </span>
                <span className="text-[10px] text-neutral-600 uppercase">FOLIO REF</span>
              </div>

              <div className="space-y-4">
                {section.entries.map((entry) => (
                  <div key={entry.code} className="group">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs text-neutral-500 tabular-nums shrink-0">
                        {entry.code}
                      </span>
                      <span
                        className={`${
                          entry.large
                            ? 'text-lg sm:text-xl font-serif font-bold text-white'
                            : 'text-sm font-serif text-neutral-200'
                        }`}
                      >
                        {entry.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex-1 border-b border-dotted border-neutral-700 mx-2 min-w-[24px]"
                      />
                      <span className="text-xs text-white font-bold tabular-nums shrink-0">
                        {entry.ref}
                      </span>
                    </div>
                    <div className="pl-12 text-[11px] font-sans text-neutral-500 mt-0.5">
                      {entry.subnote}
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
