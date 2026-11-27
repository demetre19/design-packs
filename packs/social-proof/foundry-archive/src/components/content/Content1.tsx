import React from 'react';

interface LedgerRow {
  folio: string;
  strike: string;
  foundry: string;
  alloy: string;
  bodyPt: string;
  matrices: string;
  provenance: string;
  annotation: string;
  status: 'CATALOGED' | 'IN PRESS' | 'SEALED';
}

export function Content1() {
  const groups: { heading: string; code: string; rows: LedgerRow[] }[] = [
    {
      heading: 'I. PARMA & PARIS LEAD STRIKES',
      code: 'SEC. A — 1757–1813',
      rows: [
        {
          folio: 'F-014v',
          strike: 'Bodoni Époque Romain',
          foundry: 'Stamperia Reale, Parma',
          alloy: '82Pb · 14Sb · 4Sn',
          bodyPt: '18.0 Didot',
          matrices: '214',
          provenance: 'Biblioteca Palatina, Drawer 04',
          annotation: 'Hand-filed steel counterpunches; 0.08mm hairline bracket variance.',
          status: 'CATALOGED',
        },
        {
          folio: 'F-019r',
          strike: 'Garamond Archivale',
          foundry: 'Imprimerie Nationale, Paris',
          alloy: '79Pb · 16Sb · 5Sn',
          bodyPt: '14.5 Didot',
          matrices: '186',
          provenance: 'Jean Jannon Vault, Shelf 09B',
          annotation: 'Carved 1621; re-justified in copper matrix 1961 under Dr. Vanderbilt.',
          status: 'SEALED',
        },
        {
          folio: 'F-023v',
          strike: 'Caslon Antiqua No. 4',
          foundry: 'Chiswell Street, London',
          alloy: '80Pb · 15Sb · 5Sn',
          bodyPt: '24.0 Pica',
          matrices: '148',
          provenance: 'London Type Specimen Folio IX',
          annotation: 'Retains original irregular baseline drift of ±0.04mm on rag proof.',
          status: 'CATALOGED',
        },
      ],
    },
    {
      heading: 'II. BASEL & MÜNCHENSTEIN MONOTYPE',
      code: 'SEC. B — 1957–1964',
      rows: [
        {
          folio: 'F-104r',
          strike: 'Grotesk Schrift Halbfett',
          foundry: 'Haas Type Foundry, Basel',
          alloy: 'Monotype Hard Metal',
          bodyPt: '12.0 Cicero',
          matrices: '312',
          provenance: 'Cabinet 12, Tray VII',
          annotation: 'Optical ink traps cut at acute vertices for high-speed rotary press.',
          status: 'IN PRESS',
        },
        {
          folio: 'F-118v',
          strike: 'Univers Études 55/65',
          foundry: 'Deberny & Peignot, Paris',
          alloy: 'Nickel-Faced Bronze',
          bodyPt: '10.0 Didot',
          matrices: '420',
          provenance: 'Frutiger Dossier #H-83',
          annotation: '21-weight rationalized grid; uniform x-height across all width axes.',
          status: 'CATALOGED',
        },
      ],
    },
    {
      heading: 'III. POSTSCRIPT ENCODING & OPTICAL REVISION',
      code: 'SEC. C — 1983–2026',
      rows: [
        {
          folio: 'F-208r',
          strike: 'Bodoni Époque Optical 72',
          foundry: 'Typographica Archiv, Basel',
          alloy: 'PostScript Type 1 / OTF',
          bodyPt: '72.0 Display',
          matrices: '842',
          provenance: 'Master Reel #5701-D',
          annotation: '1200 DPI photomicrograph trace; sub-pixel Bézier spline tolerance.',
          status: 'CATALOGED',
        },
      ],
    },
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-700 pb-4 mb-2 gap-2">
          <div>
            <div className="text-[10px] tracking-[0.22em] text-neutral-500 uppercase">
              DOCUMENT 01 · MATRIX INVENTORY & ALLOY STATEMENT
            </div>
            <h2 className="text-2xl font-serif font-bold text-white tracking-wide mt-1">
              The Foundry Ledger — Casting &amp; Digitization Register
            </h2>
          </div>
          <div className="text-[11px] text-neutral-400 tabular-nums text-right">
            <div>AUDIT PERIOD: 1757 — 2026</div>
            <div className="text-neutral-500">REF: LEDGER-5701-B</div>
          </div>
        </div>

        <div className="overflow-x-auto border-b-2 border-double border-neutral-700">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-neutral-700 text-[10px] tracking-[0.16em] text-neutral-400 uppercase bg-neutral-950">
                <th className="py-3 px-3 border-r border-neutral-800 font-normal">FOLIO</th>
                <th className="py-3 px-3 border-r border-neutral-800 font-normal">SPECIMEN / FOUNDRY</th>
                <th className="py-3 px-3 border-r border-neutral-800 font-normal">ALLOY / MEDIUM</th>
                <th className="py-3 px-3 border-r border-neutral-800 font-normal text-right">BODY</th>
                <th className="py-3 px-3 border-r border-neutral-800 font-normal text-right">MATRICES</th>
                <th className="py-3 px-3 border-r border-neutral-800 font-normal">PROVENANCE &amp; CURATORIAL NOTE</th>
                <th className="py-3 px-3 font-normal text-right">REGISTER</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <React.Fragment key={group.heading}>
                  <tr className="border-t border-b border-neutral-800 bg-neutral-950/60">
                    <td
                      colSpan={7}
                      className="py-2 px-3 text-[10px] tracking-[0.2em] text-neutral-300 uppercase"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{group.heading}</span>
                        <span className="text-neutral-500">{group.code}</span>
                      </div>
                    </td>
                  </tr>
                  {group.rows.map((row) => (
                    <tr
                      key={row.folio}
                      className="border-b border-neutral-800/80 hover:bg-neutral-950/70 transition-colors align-top"
                    >
                      <td className="py-3.5 px-3 border-r border-neutral-800 text-xs text-neutral-400 tabular-nums whitespace-nowrap">
                        {row.folio}
                      </td>
                      <td className="py-3.5 px-3 border-r border-neutral-800">
                        <div className="font-serif text-sm font-bold text-white leading-snug">
                          {row.strike}
                        </div>
                        <div className="text-[11px] text-neutral-500 mt-0.5">{row.foundry}</div>
                      </td>
                      <td className="py-3.5 px-3 border-r border-neutral-800 text-[11px] text-neutral-300 tabular-nums whitespace-nowrap">
                        {row.alloy}
                      </td>
                      <td className="py-3.5 px-3 border-r border-neutral-800 text-[11px] text-neutral-300 tabular-nums text-right whitespace-nowrap">
                        {row.bodyPt}
                      </td>
                      <td className="py-3.5 px-3 border-r border-neutral-800 text-xs font-bold text-white tabular-nums text-right">
                        {row.matrices}
                      </td>
                      <td className="py-3.5 px-3 border-r border-neutral-800 max-w-xs">
                        <div className="text-[11px] text-neutral-300">{row.provenance}</div>
                        <div className="text-[11px] text-neutral-500 font-sans italic mt-1 leading-snug">
                          {row.annotation}
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-right text-[10px] tracking-widest text-neutral-300 whitespace-nowrap">
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[11px] text-neutral-400 gap-2 tabular-nums">
          <div>RECONCILED TOTAL: 6 MASTER STRIKES · 2,122 VERIFIED MATRICES &amp; GLYPHS</div>
          <div className="text-neutral-500">EXAMINED &amp; SIGNED: DR. H. VANDERBILT, CURATOR (BASEL)</div>
        </div>
      </div>
    </section>
  );
}
