import React from 'react';

export const Content5: React.FC = () => {
  return (
    <section className="w-full border-b border-[#a68a64]/30 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        {/* Center Seam Collision Anchor */}
        <div
          className="hidden lg:flex flex-col items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-20 h-20 rounded-full bg-[#faf7f2] border border-[#a68a64] flex items-center justify-center">
            <span className="font-serif italic text-3xl text-[#1a1512] tracking-tighter">
              vs
            </span>
          </div>
          <span className="mt-2 bg-[#1a1512] text-[#a68a64] px-2 py-0.5 text-[8px] font-mono tracking-[0.25em]">
            CLIVAGE
          </span>
        </div>

        {/* Left Opposing Zone — Ivory Manifesto Structure */}
        <div className="bg-[#faf7f2] text-[#1a1512] px-8 sm:px-14 lg:px-16 py-20 lg:pr-20 border-b lg:border-b-0 lg:border-r border-[#a68a64]/50">
          <div className="max-w-md space-y-8">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.28em] text-[#a68a64]">
              <span>THÈSE I — LA PERMANENCE</span>
              <span>IVORY / #FAF7F2</span>
            </div>

            <h2 className="font-serif text-4xl font-light leading-tight">
              Le Vêtement <span className="italic">Transmissible</span>
            </h2>

            <div className="space-y-6 pt-2">
              <div className="flex items-start space-x-5 border-t border-[#a68a64]/30 pt-4">
                <span className="font-serif text-3xl text-[#a68a64] leading-none">I.</span>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-1">
                    Réserve de Couture
                  </h3>
                  <p className="text-xs text-[#1a1512]/75 leading-relaxed">
                    Trois centimètres de surplus laissés dans chaque parementure pour permettre toute reprise décennies plus tard.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5 border-t border-[#a68a64]/30 pt-4">
                <span className="font-serif text-3xl text-[#a68a64] leading-none">II.</span>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-1">
                    Patine Naturelle
                  </h3>
                  <p className="text-xs text-[#1a1512]/75 leading-relaxed">
                    Soie non apprêtée et laine vierge qui s’assouplissent au contact de la peau sans jamais s’affaisser.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-dashed border-[#a68a64]/60 pt-4 flex items-center justify-between text-[9px] font-mono tracking-[0.22em] text-[#1a1512]/60">
              <span>DURÉE D’USAGE : 30+ ANS</span>
              <span>×</span>
            </div>
          </div>
        </div>

        {/* Right Opposing Zone — Espresso Archival Dossier Structure (Completely Different Internal Layout) */}
        <div className="bg-[#241d18] text-[#faf7f2] px-8 sm:px-14 lg:px-16 py-20 lg:pl-20 relative flex items-stretch">
          {/* Vertical 90deg Title Rail */}
          <div className="hidden sm:flex items-center justify-center w-8 mr-8 border-r border-[#a68a64]/30 shrink-0">
            <span className="-rotate-90 whitespace-nowrap text-[10px] font-mono tracking-[0.35em] text-[#a68a64] uppercase">
              CONTRE-ARGUMENT — L’INDUSTRIE RAPIDE
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-between space-y-10">
            <div className="space-y-4">
              <div className="text-[10px] font-mono tracking-[0.28em] text-[#a68a64] uppercase">
                ANTITHÈSE II — L’OBSOLESCENCE
              </div>
              <p className="font-serif italic text-3xl font-light text-[#faf7f2] leading-snug">
                « Tout ce qui est thermocollé meurt au premier nettoyage ; seule la main respire avec le temps. »
              </p>
            </div>

            {/* Technical Opposition Matrix */}
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-[#faf7f2]/15 py-6 text-xs">
              <div>
                <dt className="text-[9px] font-mono tracking-[0.22em] text-[#a68a64] mb-1">
                  ASSEMBLAGE INDUSTRIEL
                </dt>
                <dd className="font-mono text-sm tabular-nums text-[#faf7f2]/85">
                  Colle synthétique · 14 min
                </dd>
              </div>
              <div>
                <dt className="text-[9px] font-mono tracking-[0.22em] text-[#a68a64] mb-1">
                  ENTAILLE VESPER
                </dt>
                <dd className="font-mono text-sm tabular-nums text-[#faf7f2]">
                  Crin piqué main · 11 h
                </dd>
              </div>
              <div>
                <dt className="text-[9px] font-mono tracking-[0.22em] text-[#a68a64] mb-1">
                  TENSION FIBRE
                </dt>
                <dd className="font-mono text-sm tabular-nums text-[#faf7f2]/85">
                  Rigide / Cassante
                </dd>
              </div>
              <div>
                <dt className="text-[9px] font-mono tracking-[0.22em] text-[#a68a64] mb-1">
                  MÉMOIRE DU PLI
                </dt>
                <dd className="font-mono text-sm tabular-nums text-[#faf7f2]">
                  Vivante / Souple
                </dd>
              </div>
            </dl>

            <div className="flex justify-between items-center text-[9px] font-mono tracking-[0.25em] text-[#faf7f2]/50">
              <span>CONTENU N° 05</span>
              <span>ARCHIVE CONTRASTÉE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
