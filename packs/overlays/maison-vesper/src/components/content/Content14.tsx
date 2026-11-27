import React from 'react';

export const Content14: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end border-b border-[#a68a64]/30 pb-4 mb-14">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64] block mb-1">
              CONTENU N° 14 — PARTITION EN CASCADE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">
              Cadence des Proportions
            </h2>
          </div>
          <span className="hidden sm:inline text-[10px] font-mono tracking-[0.2em] text-[#1a1512]/60">
            72% → 38% → 56% → 68%
          </span>
        </div>

        <div className="space-y-12">
          {/* Measure 1: WIDE LEFT (72% width) */}
          <div className="w-full md:w-[72%] mr-auto border-t-2 border-[#1a1512] pt-5 space-y-3">
            <div className="flex justify-between text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
              <span>MESURE 01 — PORTÉE LARGE GAUCHE [00% → 72%]</span>
              <span>×</span>
            </div>
            <h3 className="font-serif text-3xl font-light text-[#1a1512]">
              La Discipline du Volume Libre
            </h3>
            <p className="text-xs leading-relaxed text-[#1a1512]/75 max-w-xl">
              Une silhouette parisienne ne se mesure pas à la quantité de matière employée, mais à l’espace exact d’air et de lumière préservé entre le corps et le tombé du drap de laine.
            </p>
          </div>

          {/* Measure 2: NARROW RIGHT (38% width) */}
          <div className="w-full md:w-[38%] ml-auto border border-[#a68a64]/50 p-6 bg-[#faf7f2] space-y-3">
            <div className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
              MESURE 02 — PORTÉE ÉTROITE DROITE [62% → 100%]
            </div>
            <div className="font-serif italic text-2xl text-[#1a1512]">
              « Quarante-deux millimètres d’aisance au dos. »
            </div>
            <div className="flex items-center space-x-2 pt-2 border-t border-dashed border-[#a68a64]/40 text-[9px] font-mono text-[#1a1512]/65">
              <span className="w-2.5 h-2.5 bg-[#a68a64] inline-block" />
              <span>RÈGLE D’OR N° 07</span>
            </div>
          </div>

          {/* Measure 3: MEDIUM CENTER (56% width) */}
          <div className="w-full md:w-[56%] mx-auto border-y border-[#1a1512] py-6 space-y-4">
            <div className="flex justify-between text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
              <span>MESURE 03 — PORTÉE MÉDIANE CENTRÉE [22% → 78%]</span>
              <span>PLANCHE VI</span>
            </div>
            <div className="aspect-[16/9] bg-[#241d18] border border-[#a68a64]/40 overflow-hidden">
              <img
                src="/src/assets/images/atelier_silk_drape_1795617299625.jpg"
                alt="Étude de drapé sur table de chêne"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between items-baseline text-xs">
              <span className="font-serif italic text-base text-[#1a1512]">
                Pli plat sur soie duchesse non apprêtée.
              </span>
              <span className="font-mono text-[9px] text-[#a68a64]">FIG. 14C</span>
            </div>
          </div>

          {/* Measure 4: WIDE RIGHT (68% width) */}
          <div className="w-full md:w-[68%] ml-auto bg-[#241d18] text-[#faf7f2] p-8 space-y-3">
            <div className="flex justify-between text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
              <span>MESURE 04 — RÉSOLUTION DROITE [32% → 100%]</span>
              <span>FIN DE PARTITION</span>
            </div>
            <h3 className="font-serif italic text-3xl font-light">
              Tout s’achève dans l’équilibre des lignes silencieuses.
            </h3>
            <p className="text-xs text-[#faf7f2]/75 leading-relaxed max-w-lg">
              Chaque décalage horizontal sur cette page répond à une proportion mathématique calculée selon la cadence des ateliers Vesper.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
