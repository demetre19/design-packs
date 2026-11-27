import React from 'react';

export const Content13: React.FC = () => {
  const columns = [
    {
      heading: 'DIRECTION & PATRONAGE',
      pairs: [
        { role: 'Direction Artistique', name: 'C. de Valois' },
        { role: 'Premier Maître Tailleur', name: 'H. Delacroix' },
        { role: 'Première d’Atelier Flou', name: 'S. Sévigné' },
        { role: 'Modéliste Patronnier', name: 'L. Varenne' },
        { role: 'Garde des Archives', name: 'M. Moreau' },
      ],
    },
    {
      heading: 'MANUFACTURES & ÉTOFFES',
      pairs: [
        { role: 'Soieries de Lyon', name: 'Maison Prelle & Cie' },
        { role: 'Cachemires du Piémont', name: 'Lanificio Cerruti' },
        { role: 'Draps de Laine', name: 'Filature de Reims' },
        { role: 'Crin & Entoilage', name: 'Atelier Saint-Honoré' },
        { role: 'Boutons Gainés Main', name: 'Établ. Chevalier' },
      ],
    },
    {
      heading: 'ÉDITION & TYPOGRAPHIE',
      pairs: [
        { role: 'Conception Graphique', name: 'Bureau Vesper Paris' },
        { role: 'Caractères Titrage', name: 'Cormorant Garamond' },
        { role: 'Caractères Labeur', name: 'Montserrat Maigre' },
        { role: 'Papier d’Édition', name: 'Vélin d’Arches 160g' },
        { role: 'Photogravure', name: 'Atelier Oberkampf' },
      ],
    },
    {
      heading: 'MENTIONS DE TIRAGE',
      pairs: [
        { role: 'Lieu d’Impression', name: 'Paris Ier — France' },
        { role: 'Tirage Limité', name: '250 Exemplaires' },
        { role: 'Dépôt Légal', name: 'Novembre 2026' },
        { role: 'Reliure', name: 'Cousue Fil de Lin' },
        { role: 'Numéro de Série', name: 'MV-2026-IV' },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#faf7f2] py-20 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto">
        <div className="border-t-2 border-b border-[#1a1512] py-4 mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span className="text-[10px] font-mono tracking-[0.32em] uppercase text-[#a68a64]">
            CONTENU N° 13 — COLOPHON &amp; MENTIONS DE FABRICATION
          </span>
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#1a1512]/70">
            FIN DU CAHIER TECHNIQUE — IMPRIMATUR
          </span>
        </div>

        {/* Dense 4-Column Hairline Colophon Artifact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-[#a68a64]/40 pb-10">
          {columns.map((col, idx) => (
            <div
              key={col.heading}
              className={`py-4 ${
                idx < columns.length - 1
                  ? 'lg:border-r lg:border-[#a68a64]/30 lg:pr-6'
                  : ''
              } ${idx > 0 ? 'lg:pl-6' : ''}`}
            >
              <h3 className="text-[9px] font-mono tracking-[0.26em] uppercase text-[#a68a64] border-b border-[#a68a64]/30 pb-2 mb-4">
                0{idx + 1}. {col.heading}
              </h3>
              <dl className="space-y-2.5">
                {col.pairs.map((pair, pIdx) => (
                  <div
                    key={pair.role}
                    className="flex items-baseline justify-between gap-2 text-[11px]"
                  >
                    <dt className="text-[#1a1512]/60 font-light shrink-0">
                      <sup className="font-mono text-[8px] text-[#a68a64] mr-1">
                        {pIdx + 1}
                      </sup>
                      {pair.role}
                    </dt>
                    <span
                      className="flex-1 border-b border-[#a68a64]/25 mx-1"
                      aria-hidden="true"
                    />
                    <dd className="font-serif italic text-sm text-[#1a1512] text-right shrink-0">
                      {pair.name}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        {/* Printer's Mark & Seal */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="font-serif italic text-base text-[#1a1512]/80 max-w-2xl">
            Achevé d’imprimer et de façonner à Paris le vingt-cinq novembre deux mille vingt-six sur les presses de la Maison Vesper, trente-deux rue Cambon. Tous droits de reproduction réservés.
          </p>
          <div className="border border-[#1a1512] px-4 py-2 text-center shrink-0">
            <div className="text-[8px] font-mono tracking-[0.3em] text-[#a68a64]">
              SCEAU DE L’ATELIER
            </div>
            <div className="font-serif text-lg tracking-[0.22em] text-[#1a1512]">
              M · V · 1924
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
