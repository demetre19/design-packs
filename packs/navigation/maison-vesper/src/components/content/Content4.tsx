import React from 'react';

interface Callout {
  id: string;
  label: string;
  title: string;
  spec: string;
  desktopPos: string;
  align: 'left' | 'right';
}

const CALLOUTS: Callout[] = [
  {
    id: 'A',
    label: 'POINT A — ENCOLURE',
    title: 'Collerette Montante Sculptée',
    spec: 'HAUTEUR 65 MM · TRIPLURE SOIE',
    desktopPos: 'lg:top-[10%] lg:left-0',
    align: 'left',
  },
  {
    id: 'B',
    label: 'POINT B — BUSTE',
    title: 'Entoilage Crin & Plastron',
    spec: 'PIQUAGE CHEVRON · 14 PTS/CM',
    desktopPos: 'lg:top-[44%] lg:left-0',
    align: 'left',
  },
  {
    id: 'C',
    label: 'POINT C — ÉPAULE',
    title: 'Épaule Cigarette Montée',
    spec: 'EMBU +12 MM · SANS MOUSSE',
    desktopPos: 'lg:top-[16%] lg:right-0',
    align: 'right',
  },
  {
    id: 'D',
    label: 'POINT D — TAILLE',
    title: 'Pince Oblique Architecturée',
    spec: 'CINTRAGE 4.5 CM · FIL LIN',
    desktopPos: 'lg:top-[49%] lg:right-0',
    align: 'right',
  },
  {
    id: 'E',
    label: 'POINT E — BAS DE JUPE',
    title: 'Ourlet Plombé Invisible',
    spec: 'REPLI 35 MM · POINT DE CHAUSSON',
    desktopPos: 'lg:bottom-[6%] lg:right-0',
    align: 'right',
  },
];

export const Content4: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto">
        {/* Technical Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-[#1a1512] pb-4 mb-12 gap-3">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64] block mb-1">
              CONTENU N° 04 — PLANCHE TECHNIQUE ÉCLATÉE
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1a1512]">
              Anatomie du Manteau Cambon
            </h2>
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#1a1512]/70 uppercase">
            ÉCHELLE 1:10 · PROJECTION FRONTALE · RÉF. VSP-014
          </div>
        </div>

        {/* Exploded Diagram Canvas */}
        <div className="relative lg:h-[640px] flex flex-col lg:block">
          {/* SVG Leader Lines Layer connecting callout boxes to exact garment anatomical points */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20"
            viewBox="0 0 1100 640"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* A -> Neck collar */}
            <polyline points="245,96 390,96 525,135" fill="none" stroke="#1a1512" strokeWidth="1" />
            <circle cx="525" cy="135" r="3.5" fill="#faf7f2" stroke="#1a1512" strokeWidth="1.5" />

            {/* B -> Chest drape */}
            <polyline points="245,315 390,315 510,255" fill="none" stroke="#a68a64" strokeWidth="1" />
            <circle cx="510" cy="255" r="3.5" fill="#faf7f2" stroke="#a68a64" strokeWidth="1.5" />

            {/* C -> Right shoulder */}
            <polyline points="855,136 710,136 620,175" fill="none" stroke="#1a1512" strokeWidth="1" />
            <circle cx="620" cy="175" r="3.5" fill="#faf7f2" stroke="#1a1512" strokeWidth="1.5" />

            {/* D -> Waist dart */}
            <polyline points="855,346 700,346 575,320" fill="none" stroke="#a68a64" strokeWidth="1" />
            <circle cx="575" cy="320" r="3.5" fill="#faf7f2" stroke="#a68a64" strokeWidth="1.5" />

            {/* E -> Lower hem */}
            <polyline points="855,552 680,552 605,500" fill="none" stroke="#1a1512" strokeWidth="1" />
            <circle cx="605" cy="500" r="3.5" fill="#faf7f2" stroke="#1a1512" strokeWidth="1.5" />
          </svg>

          {/* Central Garment Plate */}
          <div className="mx-auto w-full max-w-[330px] lg:w-[340px] lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 mb-10 lg:mb-0">
            <div className="relative border border-[#a68a64]/50 p-2 bg-[#faf7f2]">
              <div className="aspect-[3/4] bg-[#241d18] overflow-hidden relative">
                <img
                  src="/src/assets/images/atelier_exploded_garment_1795617302844.jpg"
                  alt="Manteau Cambon sur mannequin d'atelier"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2 flex justify-between items-center text-[9px] font-mono tracking-[0.2em] text-[#1a1512]/70 px-1">
                <span>PLANCHE CENTRALE</span>
                <span className="text-[#a68a64]">3/4 PROPORTION</span>
              </div>
              {/* Rotated 90deg garment spec tag */}
              <div className="hidden sm:block absolute -right-8 top-14 rotate-90 bg-[#1a1512] text-[#faf7f2] px-2.5 py-0.5 text-[8px] font-mono tracking-[0.25em]">
                MODÈLE 014
              </div>
            </div>
          </div>

          {/* Flying Technical Annotations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:block">
            {CALLOUTS.map((c) => (
              <div
                key={c.id}
                className={`lg:absolute ${c.desktopPos} lg:w-[245px] z-30 border-t border-[#1a1512] pt-2.5 bg-[#faf7f2]/95 ${
                  c.align === 'right' ? 'lg:text-right' : 'lg:text-left'
                }`}
              >
                <div className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64] mb-1">
                  {c.label}
                </div>
                <h3 className="font-serif text-lg font-normal text-[#1a1512] leading-snug mb-1">
                  {c.title}
                </h3>
                <div className="font-mono text-[9px] tracking-[0.18em] text-[#1a1512]/65">
                  {c.spec}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
