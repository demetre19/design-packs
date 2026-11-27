import React from 'react';

const COLOPHON_COLUMNS = [
  {
    title: 'I. ATELIER DIRECTION',
    pairs: [
      ['Master Watchmaker', 'Henri Vogel'],
      ['Chief Escapement Engineer', 'Luc Mercer'],
      ['Acoustic Gong Tuner', 'Claire Delacroix'],
      ['Rose-Engine Guillocheur', 'Marc-Antoine Rochat'],
    ],
  },
  {
    title: 'II. METALLURGICAL GUILD',
    pairs: [
      ['Titanium Alloy Metallurgy', 'Dr. Stefan Weber'],
      ['Hairspring Silicon Lab', 'EPFL Neuchâtel Unit'],
      ['18K Bullion Assay', 'Geneva Cantonal Bureau'],
      ['Black Polish Finisher', 'Sophie Vacheron'],
    ],
  },
  {
    title: 'III. VAULT & CRYPTOGRAPHY',
    pairs: [
      ['Subterranean Architect', 'Keller & Partners ZRH'],
      ['Biometric Hardware', 'Aetheris Security Lab'],
      ['Air-Gapped Ledger Audit', 'Bianchi & Co. Trustees'],
      ['Diplomatic Transit', 'Vanguard Armoured LDN'],
    ],
  },
  {
    title: 'IV. EDITION & IMPRINT',
    pairs: [
      ['Display Typography', 'Cormorant Garamond'],
      ['Technical Tabular Mono', 'JetBrains Mono'],
      ['Archival Paper Stock', '320gsm Hahnemühle Noir'],
      ['Folio Registry Seal', 'No. 001 / 250 — MMXXIV'],
    ],
  },
];

export function Content13() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Top Colophon Rule */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-b border-white/20 py-4 mb-12 text-[10px] font-mono tracking-[0.28em] text-[#7a8494]">
          <span className="text-[#d4b06a]">COLOPHON // CREDITS &amp; ARCHIVAL IMPRINT</span>
          <span>AETHERIS &amp; CO. — GENEVA · LONDON · ZURICH · TOKYO</span>
        </div>

        {/* Dense Multi-Column Small-Type Credit Artifact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-white/10">
          {COLOPHON_COLUMNS.map((col, cIdx) => (
            <div key={col.title} className={cIdx > 0 ? 'lg:pl-8' : ''}>
              <h3 className="font-mono text-[10px] tracking-[0.25em] text-[#d4b06a] uppercase pb-3 mb-5 border-b border-white/15">
                {col.title}
              </h3>
              <dl className="flex flex-col gap-4">
                {col.pairs.map(([role, name], pIdx) => (
                  <div key={role} className="flex flex-col gap-0.5">
                    <dt className="font-mono text-[10px] text-[#7a8494] flex items-center gap-2">
                      <span className="text-[#d4b06a]/70">0{cIdx * 4 + pIdx + 1}</span>
                      <span>{role}</span>
                    </dt>
                    <dd className="font-serif text-base text-[#ece8e1] pl-5">{name}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        {/* Bottom Imprint & Monogram Medallion */}
        <div className="mt-14 pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-[#d4b06a]/60 flex items-center justify-center font-serif text-sm text-[#d4b06a]">
              A
            </div>
            <p className="font-mono text-[10px] text-[#7a8494] max-w-md leading-relaxed">
              PRINTED AND BOUND IN GENEVA FOR PRIVATE DISTRIBUTION TO PATRONS OF THE SOVEREIGN AND IMPERIAL FELLOWSHIPS. ALL MECHANICAL TOLERANCES MEASURED AT 20°C.
            </p>
          </div>
          <div className="text-[10px] font-mono text-[#ece8e1] tracking-[0.25em] text-right">
            <div>IMPRINT CODE // ATH-COL-2026</div>
            <div className="text-[#d4b06a] mt-0.5">◆ FINIS CORONAT OPUS ◆</div>
          </div>
        </div>
      </div>
    </section>
  );
}
