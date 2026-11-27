import React from 'react';

interface IndexGroup {
  roman: string;
  heading: string;
  entries: { num: string; title: string; subtitle: string; page: string }[];
}

const INDEX_GROUPS: IndexGroup[] = [
  {
    roman: 'I',
    heading: 'FONDEMENTS & ARCHITECTURES',
    entries: [
      { num: '01', title: 'Géométrie du Patron Plat', subtitle: 'Proportions dorées du buste parisien', page: 'p. 009' },
      { num: '02', title: 'Le Droit-Fil et ses Dérogations', subtitle: 'Biais franc à quarante-cinq degrés', page: 'p. 024' },
      { num: '03', title: 'L’Épaule sans Artifice', subtitle: 'Construction cigarette et embu naturel', page: 'p. 041' },
      { num: '04', title: 'Anatomie des Pinces Oblics', subtitle: 'Résorption de volume sur laine sèche', page: 'p. 058' },
    ],
  },
  {
    roman: 'II',
    heading: 'ÉTOFFES & TEINTURES RARES',
    entries: [
      { num: '05', title: 'Soieries de Lyon, 1924–2026', subtitle: 'Métiers à bras et duchesse lourde', page: 'p. 073' },
      { num: '06', title: 'Cachemire Non Teint de Biella', subtitle: 'Tri manuel des fibres sous-poil', page: 'p. 088' },
      { num: '07', title: 'Crin de Cheval & Entoilages', subtitle: 'Souplesse structurelle des plastrons', page: 'p. 102' },
    ],
  },
  {
    roman: 'III',
    heading: 'CAHIERS DE SALON & ESSAYAGES',
    entries: [
      { num: '08', title: 'Protocole de la Première Toile', subtitle: 'Observation muette devant le triptyque', page: 'p. 119' },
      { num: '09', title: 'Le Bâti au Fil de Coton Glacé', subtitle: 'Points de marque et fils de couleur', page: 'p. 134' },
      { num: '10', title: 'Boutonnières Passepoilées Main', subtitle: 'Soie torse et ganse de maintien', page: 'p. 147' },
      { num: '11', title: 'L’Art du Repassage à la Vapeur', subtitle: 'Pattemouille humide sur bois de poirier', page: 'p. 162' },
    ],
  },
  {
    roman: 'IV',
    heading: 'CONSERVATION & ARCHIVES PRIVÉES',
    entries: [
      { num: '12', title: 'Boîtes en Carton Vergé Non Acide', subtitle: 'Pliage au papier de soie neutre', page: 'p. 178' },
      { num: '13', title: 'Catalogue Raisonné des Silhouettes', subtitle: 'Index des planches I à XXIV', page: 'p. 194' },
      { num: '14', title: 'Répertoire des Maîtres Tailleurs', subtitle: 'Signatures de la rue Cambon', page: 'p. 216' },
    ],
  },
];

export const Content9: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto">
        <div className="border-b-2 border-[#1a1512] pb-5 mb-14 flex flex-col md:flex-row justify-between md:items-end gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64] block mb-1">
              CONTENU N° 09 — TABLE DES MATIÈRES
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1a1512]">
              Sommaire Général du Tome IV
            </h2>
          </div>
          <div className="font-mono text-[10px] tracking-[0.22em] text-[#1a1512]/70 uppercase">
            224 PAGES · XIV CHAPITRES · ÉDITION IN-FOLIO
          </div>
        </div>

        {/* Dense Two-Column Typographic Book Index */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14 relative">
          {/* Center vertical hairline divider on desktop */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#a68a64]/35 -translate-x-1/2"
            aria-hidden="true"
          />

          {INDEX_GROUPS.map((group) => (
            <div key={group.roman} className="space-y-6">
              <div className="flex items-baseline justify-between border-b border-[#1a1512] pb-2">
                <div className="flex items-baseline space-x-3">
                  <span className="font-serif text-3xl font-light text-[#a68a64]">
                    {group.roman}.
                  </span>
                  <h3 className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#1a1512]">
                    {group.heading}
                  </h3>
                </div>
                <span className="text-[9px] font-mono text-[#a68a64]">×</span>
              </div>

              <ol className="space-y-4">
                {group.entries.map((entry) => (
                  <li key={entry.num} className="group">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-[10px] tabular-nums text-[#a68a64] w-6 shrink-0">
                        {entry.num}
                      </span>
                      <span className="font-serif text-xl font-light text-[#1a1512] group-hover:italic transition-all">
                        {entry.title}
                      </span>
                      <span
                        className="flex-1 border-b border-dotted border-[#a68a64]/70 mx-1 translate-y-[-3px]"
                        aria-hidden="true"
                      />
                      <span className="font-mono text-[11px] tabular-nums text-[#1a1512] shrink-0">
                        {entry.page}
                      </span>
                    </div>
                    <div className="pl-8 font-serif italic text-sm text-[#1a1512]/60">
                      {entry.subtitle}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
