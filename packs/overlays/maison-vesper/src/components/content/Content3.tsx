import React from 'react';

interface InterlockEntry {
  side: 'left' | 'right';
  code: string;
  title: string;
  detail: string;
  metric: string;
  swatch: string;
}

const ENTRIES: InterlockEntry[] = [
  {
    side: 'left',
    code: 'DENT 01 — GAUCHE',
    title: 'Le Droit-Fil de Chaîne',
    detail: 'Alignement rigoureux des lisières avant tout bâti afin d’empêcher toute torsion du buste.',
    metric: '0.0° DÉVIATION',
    swatch: '#faf7f2',
  },
  {
    side: 'right',
    code: 'DENT 02 — DROITE',
    title: 'La Pince Sous-Bras',
    detail: 'Rentrée anatomique de vingt-deux millimètres résorbant l’excédent sous l’emmanchure.',
    metric: '22 MM',
    swatch: '#e3d8c8',
  },
  {
    side: 'left',
    code: 'DENT 03 — GAUCHE',
    title: 'Le Plastron de Crin',
    detail: 'Bâtissage en chevrons souples permettant au revers de rouler naturellement sans pli cassant.',
    metric: '185 G/M²',
    swatch: '#a68a64',
  },
  {
    side: 'right',
    code: 'DENT 04 — DROITE',
    title: 'L’Embu de Tête de Manche',
    detail: 'Répartition invisible du surplus d’étoffe sur la couronne supérieure par fil de fronce.',
    metric: '+14 MM EMBU',
    swatch: '#6b5344',
  },
  {
    side: 'left',
    code: 'DENT 05 — GAUCHE',
    title: 'La Fente Capucin',
    detail: 'Finition nette des poignets boutonnés permettant de relever la manche sans tension.',
    metric: '04 BOUTONS',
    swatch: '#241d18',
  },
  {
    side: 'right',
    code: 'DENT 06 — DROITE',
    title: 'Le Point de Glaçage',
    detail: 'Fixation silencieuse de la doublure en pongé de soie à quatre millimètres du bord inférieur.',
    metric: '04 MM RETRAIT',
    swatch: '#1a1512',
  },
];

export const Content3: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64] block">
            CONTENU N° 03 — ENGRÈNEMENT DE COUTURE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">
            La Patte d’Assemblage
          </h2>
          <p className="font-serif italic text-lg text-[#1a1512]/70">
            Chaque pièce gauche s’engrène dans son vis-à-vis droit le long de la ligne médiane.
          </p>
        </div>

        {/* Zipper-teeth interlocking layout around a continuous central spine */}
        <div className="relative">
          {/* Continuous Central Vertical Spine */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#a68a64]/70 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-0">
            {ENTRIES.map((entry, idx) => {
              const isLeft = entry.side === 'left';
              return (
                <div
                  key={entry.code}
                  className={`grid grid-cols-1 md:grid-cols-2 items-center ${
                    idx > 0 ? 'md:-mt-6' : ''
                  }`}
                >
                  {isLeft ? (
                    <>
                      <div className="md:pr-12 relative">
                        {/* Leader arm crossing center spine */}
                        <div className="hidden md:flex items-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                          <div className="w-12 h-px bg-[#1a1512]" />
                          <span className="w-5 h-5 bg-[#faf7f2] border border-[#1a1512] flex items-center justify-center font-mono text-[10px] text-[#1a1512]">
                            ×
                          </span>
                        </div>

                        <div className="border-t border-[#1a1512] pt-4 pb-6 md:text-right pr-2">
                          <div className="flex items-center md:justify-end space-x-3 mb-1.5">
                            <span className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
                              {entry.code}
                            </span>
                            <span
                              className="w-2.5 h-2.5 border border-[#1a1512]/30 inline-block"
                              style={{ backgroundColor: entry.swatch }}
                              aria-hidden="true"
                            />
                          </div>
                          <h3 className="font-serif text-2xl font-light text-[#1a1512] mb-1.5">
                            {entry.title}
                          </h3>
                          <p className="text-xs text-[#1a1512]/70 leading-relaxed max-w-sm md:ml-auto mb-2">
                            {entry.detail}
                          </p>
                          <span className="font-mono text-[10px] tabular-nums tracking-[0.2em] text-[#a68a64]">
                            {entry.metric}
                          </span>
                        </div>
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <div className="md:pl-12 relative">
                        {/* Leader arm crossing center spine */}
                        <div className="hidden md:flex items-center absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                          <span className="w-5 h-5 bg-[#1a1512] border border-[#1a1512] flex items-center justify-center font-mono text-[10px] text-[#faf7f2]">
                            ×
                          </span>
                          <div className="w-12 h-px bg-[#a68a64]" />
                        </div>

                        <div className="border-t border-[#a68a64] pt-4 pb-6 pl-2">
                          <div className="flex items-center space-x-3 mb-1.5">
                            <span
                              className="w-2.5 h-2.5 border border-[#1a1512]/30 inline-block"
                              style={{ backgroundColor: entry.swatch }}
                              aria-hidden="true"
                            />
                            <span className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
                              {entry.code}
                            </span>
                          </div>
                          <h3 className="font-serif italic text-2xl font-light text-[#1a1512] mb-1.5">
                            {entry.title}
                          </h3>
                          <p className="text-xs text-[#1a1512]/70 leading-relaxed max-w-sm mb-2">
                            {entry.detail}
                          </p>
                          <span className="font-mono text-[10px] tabular-nums tracking-[0.2em] text-[#1a1512]">
                            {entry.metric}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
