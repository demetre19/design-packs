import React from 'react';

interface RadialNode {
  num: string;
  label: string;
  title: string;
  detail: string;
  desktopPos: string;
  align: string;
}

const RADIAL_NODES: RadialNode[] = [
  {
    num: 'I',
    label: 'NORD · 00°',
    title: 'La Lumière Zénithale',
    detail: 'Verrière orientée nord, 6500 K constants.',
    desktopPos: 'lg:top-0 lg:left-1/2 lg:-translate-x-1/2',
    align: 'lg:text-center',
  },
  {
    num: 'II',
    label: 'NORD-EST · 60°',
    title: 'Les Ciseaux Laiton',
    detail: 'Lames forgées à Nogent, affûtage annuel.',
    desktopPos: 'lg:top-[20%] lg:right-12',
    align: 'lg:text-left',
  },
  {
    num: 'III',
    label: 'SUD-EST · 120°',
    title: 'La Soie Noire',
    detail: 'Satin duchesse teint en cuve à Lyon.',
    desktopPos: 'lg:bottom-[20%] lg:right-12',
    align: 'lg:text-left',
  },
  {
    num: 'IV',
    label: 'SUD · 180°',
    title: 'Le Coffre d’Archive',
    detail: 'Carton neutre, papiers de soie sans acide.',
    desktopPos: 'lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2',
    align: 'lg:text-center',
  },
  {
    num: 'V',
    label: 'SUD-OUEST · 240°',
    title: 'Le Fil de Lin',
    detail: 'Câblé à la main, ciré à la cire d’abeille.',
    desktopPos: 'lg:bottom-[20%] lg:left-12',
    align: 'lg:text-right',
  },
  {
    num: 'VI',
    label: 'NORD-OUEST · 300°',
    title: 'La Craie Grasse',
    detail: 'Tracé net s’effaçant à la vapeur douce.',
    desktopPos: 'lg:top-[20%] lg:left-12',
    align: 'lg:text-right',
  },
];

export const Content15: React.FC = () => {
  return (
    <section className="w-full bg-[#1a1512] text-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-[#a68a64]/30 pb-4 mb-14 gap-2">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64] block mb-1">
              CONTENU N° 15 — CAVEAU INVERSÉ · CADRAN RADIAL
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#faf7f2]">
              La Rose des Métiers
            </h2>
          </div>
          <span className="text-[10px] font-mono tracking-[0.22em] text-[#faf7f2]/60">
            GÉOMÉTRIE CIRCULAIRE · 360°
          </span>
        </div>

        {/* Circular / Radial Vault Composition */}
        <div className="relative lg:h-[640px] flex flex-col items-center justify-center">
          {/* Concentric Hairline SVG Rings & Radial Spokes (Desktop) */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 640"
            aria-hidden="true"
          >
            {/* Outer Orbital Ring */}
            <circle
              cx="500"
              cy="320"
              r="245"
              fill="none"
              stroke="#a68a64"
              strokeOpacity="0.35"
              strokeWidth="1"
            />
            {/* Inner Dashed Stitch Ring */}
            <circle
              cx="500"
              cy="320"
              r="180"
              fill="none"
              stroke="#a68a64"
              strokeOpacity="0.55"
              strokeWidth="1"
              strokeDasharray="3 5"
            />
            {/* Radial Spokes (0°, 60°, 120°, 180°, 240°, 300°) */}
            <line x1="500" y1="75" x2="500" y2="565" stroke="#a68a64" strokeOpacity="0.2" strokeWidth="1" />
            <line x1="288" y1="198" x2="712" y2="442" stroke="#a68a64" strokeOpacity="0.2" strokeWidth="1" />
            <line x1="712" y1="198" x2="288" y2="442" stroke="#a68a64" strokeOpacity="0.2" strokeWidth="1" />
          </svg>

          {/* Central Circular Archival Medallion */}
          <div className="relative z-10 w-60 h-60 sm:w-64 sm:h-64 rounded-full border border-[#a68a64] p-2 bg-[#241d18] flex items-center justify-center mb-10 lg:mb-0">
            <div className="w-full h-full rounded-full overflow-hidden relative border border-[#faf7f2]/20">
              <img
                src="/src/assets/images/atelier_exploded_garment_1795617302844.jpg"
                alt="Pièce maîtresse au cœur du caveau Vesper"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-[#1a1512]/60 flex flex-col items-center justify-center text-center p-4">
                <span className="text-[9px] font-mono tracking-[0.3em] text-[#a68a64]">
                  NOYAU CENTRAL
                </span>
                <span className="font-serif italic text-2xl text-[#faf7f2] mt-1">
                  Maison Vesper
                </span>
                <span className="text-[9px] font-mono tracking-[0.25em] text-[#faf7f2]/75 mt-1">
                  PARIS · 1924
                </span>
              </div>
            </div>
          </div>

          {/* 6 Radial Perimeter Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:block">
            {RADIAL_NODES.map((node) => (
              <div
                key={node.num}
                className={`lg:absolute ${node.desktopPos} lg:w-[225px] ${node.align} z-20 bg-[#1a1512]/95 border border-[#a68a64]/35 p-4`}
              >
                <div className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64] mb-1">
                  {node.num} · {node.label}
                </div>
                <h3 className="font-serif text-xl font-light text-[#faf7f2] mb-1">
                  {node.title}
                </h3>
                <p className="text-[11px] text-[#faf7f2]/70 leading-relaxed">
                  {node.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
