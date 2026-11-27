import React from 'react';
import { Scissors } from 'lucide-react';

interface LedgerRow {
  ref: string;
  piece: string;
  note: string;
  master: string;
  fabric: string;
  swatch: string;
  hours: string;
  measure: string;
}

const LEDGER_ROWS: LedgerRow[] = [
  {
    ref: 'VSP-014',
    piece: 'Manteau Cambon Croisé',
    note: 'Col tailleur monté à la main, boutonnières passepoilées',
    master: 'M. Delacroix',
    fabric: 'Laine Cachemire — Biella',
    swatch: '#241d18',
    hours: '64 H',
    measure: '118 cm',
  },
  {
    ref: 'VSP-021',
    piece: 'Robe Duchesse N° 12',
    note: 'Biais franc sans couture latérale, ourlet roulotté main',
    master: 'Mme. Sévigné',
    fabric: 'Soie Duchesse — Lyon',
    swatch: '#e8dfd1',
    hours: '52 H',
    measure: '142 cm',
  },
  {
    ref: 'VSP-029',
    piece: 'Tailleur Minuit',
    note: 'Épaule cigarette structurée au crin de cheval naturel',
    master: 'M. Delacroix',
    fabric: 'Grain de Poudre — Reims',
    swatch: '#1a1512',
    hours: '48 H',
    measure: '74 cm',
  },
  {
    ref: 'VSP-033',
    piece: 'Cape Opéra Plissée',
    note: 'Plis creux pressés à la vapeur douce, agrafe laiton doré',
    master: 'Mlle. Varenne',
    fabric: 'Velours de Soie — Côme',
    swatch: '#6b5344',
    hours: '38 H',
    measure: '130 cm',
  },
  {
    ref: 'VSP-040',
    piece: 'Corsage d’Atelier',
    note: 'Baleinage interne souple, douze points d’arrêt par cm',
    master: 'Mme. Sévigné',
    fabric: 'Organza Triple — Lyon',
    swatch: '#f3ede2',
    hours: '41 H',
    measure: '56 cm',
  },
  {
    ref: 'VSP-047',
    piece: 'Jupe Colonne Droite',
    note: 'Fente d’aisance dissimulée sous patte doublée crêpe',
    master: 'Mlle. Varenne',
    fabric: 'Crêpe Georgette — Côme',
    swatch: '#a68a64',
    hours: '29 H',
    measure: '98 cm',
  },
  {
    ref: 'VSP-052',
    piece: 'Veste d’Essayage Grège',
    note: 'Surpiqûres contrastées fil de lin écru, poche poitrine',
    master: 'M. Moreau',
    fabric: 'Toile de Lin — Normandie',
    swatch: '#cbbba4',
    hours: '46 H',
    measure: '71 cm',
  },
];

export const Content1: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-20 px-6 border-b border-[#a68a64]/30 relative">
      <div className="max-w-6xl mx-auto">
        {/* Top Ledger Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#1a1512] pb-4 mb-2 gap-4">
          <div className="space-y-1">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">
              CONTENU N° 01 — REGISTRE D’ATELIER — GRAND LIVRE
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1a1512]">
              Répertoire des Pièces Numérotées
            </h2>
          </div>
          <div className="flex items-center space-x-6 text-[10px] font-mono tracking-[0.2em] uppercase text-[#1a1512]/70">
            <span>EXERCICE 2026</span>
            <span className="text-[#a68a64]">×</span>
            <span>32 RUE CAMBON, PARIS</span>
          </div>
        </div>

        {/* Annotated Ledger Table */}
        <div className="overflow-x-auto border-b border-[#1a1512]">
          <table className="w-full min-w-[780px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#a68a64]/50 text-[9px] font-mono tracking-[0.24em] uppercase text-[#a68a64]">
                <th className="py-3 pr-4 border-r border-[#a68a64]/25 font-normal w-24">RÉF. PATRON</th>
                <th className="py-3 px-4 border-r border-[#a68a64]/25 font-normal">DÉSIGNATION &amp; FINITION</th>
                <th className="py-3 px-4 border-r border-[#a68a64]/25 font-normal w-36">MAÎTRE</th>
                <th className="py-3 px-4 border-r border-[#a68a64]/25 font-normal w-52">ÉTOFFE &amp; ORIGINE</th>
                <th className="py-3 px-4 border-r border-[#a68a64]/25 font-normal w-24 text-right">FAÇON</th>
                <th className="py-3 pl-4 font-normal w-28 text-right">HAUTEUR</th>
              </tr>
            </thead>
            <tbody>
              {LEDGER_ROWS.map((row, idx) => (
                <tr
                  key={row.ref}
                  className="border-b border-[#a68a64]/25 hover:bg-[#1a1512]/[0.025] transition-colors"
                >
                  <td className="py-4 pr-4 border-r border-[#a68a64]/25 align-top font-mono text-[11px] tabular-nums text-[#a68a64]">
                    <div>{row.ref}</div>
                    <div className="text-[9px] text-[#1a1512]/40 mt-1">L.{idx + 1}</div>
                  </td>
                  <td className="py-4 px-4 border-r border-[#a68a64]/25 align-top">
                    <div className="font-serif text-xl font-light text-[#1a1512] leading-snug">
                      {row.piece}
                    </div>
                    <div className="font-serif italic text-sm text-[#1a1512]/65 mt-0.5">
                      {row.note}
                    </div>
                  </td>
                  <td className="py-4 px-4 border-r border-[#a68a64]/25 align-top text-[11px] uppercase tracking-[0.14em] text-[#1a1512]/80">
                    {row.master}
                  </td>
                  <td className="py-4 px-4 border-r border-[#a68a64]/25 align-top">
                    <div className="flex items-center space-x-2.5">
                      <span
                        className="w-2.5 h-2.5 inline-block border border-[#1a1512]/25 shrink-0"
                        style={{ backgroundColor: row.swatch }}
                        aria-hidden="true"
                      />
                      <span className="text-[11px] tracking-[0.08em] text-[#1a1512]/80">
                        {row.fabric}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 border-r border-[#a68a64]/25 align-top text-right font-mono text-xs tabular-nums text-[#1a1512]">
                    {row.hours}
                  </td>
                  <td className="py-4 pl-4 align-top text-right font-mono text-xs tabular-nums text-[#1a1512]/75">
                    {row.measure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ledger Tally Footer with double rule and cutting glyph */}
        <div className="mt-1 border-t border-[#1a1512] pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-mono tracking-[0.22em] uppercase">
          <div className="flex items-center space-x-3 text-[#1a1512]/70">
            <Scissors size={12} className="text-[#a68a64] stroke-[1.5]" />
            <span>REGISTRE CERTIFIÉ PAR LA CHAMBRE SYNDICALE — ARCHIVE OUVERTE</span>
          </div>
          <div className="flex items-center space-x-6 tabular-nums text-[#1a1512]">
            <span className="text-[#a68a64]">07 PIÈCES</span>
            <span>TOTAL : 318 HEURES MAIN</span>
          </div>
        </div>
      </div>
    </section>
  );
};
