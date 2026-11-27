import React from 'react';

export const Content11: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-8 gap-2">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64] block mb-1">
              CONTENU N° 11 — FICHE SPÉCIMEN MATÉRIAU
            </span>
            <h2 className="font-serif text-3xl font-light text-[#1a1512]">
              Matrice Technique — Lot Lyon N° 884
            </h2>
          </div>
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#1a1512]/60">
            NORME INTERNE ATELIER · REV. IV
          </span>
        </div>

        {/* Irregular Asymmetric Datasheet Matrix */}
        <div className="border-t border-l border-[#1a1512] grid grid-cols-1 md:grid-cols-12">
          {/* Cell 1: Span 5 */}
          <div className="md:col-span-5 border-r border-b border-[#1a1512] p-5 flex flex-col justify-between">
            <div className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64] mb-3">
              01 / APPELLATION &amp; TISSAGE
            </div>
            <div className="font-serif text-3xl font-light text-[#1a1512]">
              Satin Duchesse Double Chaîne
            </div>
            <div className="font-serif italic text-sm text-[#1a1512]/65 mt-2">
              Armure huit fils, envers mat serré sur métier mécanique ancien de la Croix-Rousse.
            </div>
          </div>

          {/* Cell 2: Span 3 */}
          <div className="md:col-span-3 border-r border-b border-[#1a1512] p-5 flex flex-col justify-between bg-[#1a1512]/[0.02]">
            <div className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
              02 / MASSE SURFACIQUE
            </div>
            <div className="my-3">
              <span className="font-serif text-5xl font-light tabular-nums text-[#1a1512]">
                340
              </span>
              <span className="font-mono text-xs text-[#a68a64] ml-2">G/M²</span>
            </div>
            <div className="text-[9px] font-mono text-[#1a1512]/60">
              TOLÉRANCE : ± 4.0 G
            </div>
          </div>

          {/* Cell 3: Span 4 */}
          <div className="md:col-span-4 border-r border-b border-[#1a1512] p-5 flex flex-col justify-between">
            <div className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64] mb-2">
              03 / ÉCHANTILLONNAGE CHROMATIQUE
            </div>
            <div className="grid grid-cols-4 gap-2 my-2">
              <div>
                <div className="h-8 bg-[#faf7f2] border border-[#1a1512]/30" />
                <div className="text-[8px] font-mono mt-1 text-[#1a1512]/70">ÉCRU</div>
              </div>
              <div>
                <div className="h-8 bg-[#cbbba4] border border-[#1a1512]/30" />
                <div className="text-[8px] font-mono mt-1 text-[#1a1512]/70">GRÈGE</div>
              </div>
              <div>
                <div className="h-8 bg-[#a68a64] border border-[#1a1512]/30" />
                <div className="text-[8px] font-mono mt-1 text-[#1a1512]/70">TAUPE</div>
              </div>
              <div>
                <div className="h-8 bg-[#241d18] border border-[#1a1512]" />
                <div className="text-[8px] font-mono mt-1 text-[#1a1512]/70">ENCRE</div>
              </div>
            </div>
            <div className="text-[9px] font-mono text-[#1a1512]/55">
              TEINTURE VÉGÉTALE EN PIÈCE
            </div>
          </div>

          {/* Row 2: Span 2 + Span 6 + Span 4 */}
          <div className="md:col-span-2 border-r border-b border-[#1a1512] p-5 flex flex-col justify-between">
            <div className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
              04 / LAIZE
            </div>
            <div className="font-serif text-3xl tabular-nums text-[#1a1512] my-2">
              140 <span className="text-xs font-mono text-[#a68a64]">CM</span>
            </div>
            <div className="text-[9px] font-mono text-[#1a1512]/60">UTILE 136 CM</div>
          </div>

          <div className="md:col-span-6 border-r border-b border-[#1a1512] p-5 flex flex-col justify-between">
            <div className="flex justify-between text-[9px] font-mono tracking-[0.25em] text-[#a68a64] mb-2">
              <span>05 / PRESCRIPTIONS D’AIGUILLE &amp; DE FER</span>
              <span>×</span>
            </div>
            <div className="grid grid-cols-3 gap-4 py-2 border-y border-dashed border-[#a68a64]/40">
              <div>
                <div className="text-[9px] font-mono text-[#1a1512]/55">AIGUILLE</div>
                <div className="font-mono text-sm tabular-nums text-[#1a1512]">N° 70 / 9</div>
              </div>
              <div>
                <div className="text-[9px] font-mono text-[#1a1512]/55">DENSITÉ POINT</div>
                <div className="font-mono text-sm tabular-nums text-[#1a1512]">14.5 / CM</div>
              </div>
              <div>
                <div className="text-[9px] font-mono text-[#1a1512]/55">TEMP. FER</div>
                <div className="font-mono text-sm tabular-nums text-[#1a1512]">115 °C MAX</div>
              </div>
            </div>
            <p className="font-serif italic text-xs text-[#1a1512]/70 mt-2">
              Ne jamais presser à sec : interposer une pattemouille de mousseline humide sur l’envers.
            </p>
          </div>

          <div className="md:col-span-4 border-r border-b border-[#1a1512] p-5 flex flex-col justify-between bg-[#241d18] text-[#faf7f2]">
            <div className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
              06 / TORSION &amp; ORIGINE
            </div>
            <div className="font-serif text-2xl font-light my-2">
              Grège Organzin 20/22 Deniers
            </div>
            <div className="flex justify-between text-[9px] font-mono tracking-[0.18em] text-[#faf7f2]/65 border-t border-[#faf7f2]/15 pt-2">
              <span>PROVENANCE : LYON</span>
              <span>LOT CERTIFIÉ</span>
            </div>
          </div>

          {/* Row 3: Span 8 + Span 4 */}
          <div className="md:col-span-8 border-r border-b border-[#1a1512] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64] mb-1">
                07 / OBSERVATION DU CHEF D’ATELIER
              </div>
              <p className="font-serif italic text-lg text-[#1a1512]">
                « Ce lot présente un grain exceptionnellement nerveux ; idéal pour les manches montées sans soutènement synthétique. »
              </p>
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#1a1512]/60 shrink-0 border border-[#a68a64]/40 px-3 py-2">
              VALIDE 2026–2027
            </div>
          </div>

          <div className="md:col-span-4 border-r border-b border-[#1a1512] p-5 flex items-center justify-between">
            <div>
              <div className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
                08 / MÉTRAGE DISPONIBLE
              </div>
              <div className="font-serif text-3xl tabular-nums text-[#1a1512]">
                42.5 <span className="text-xs font-mono text-[#a68a64]">MÈTRES</span>
              </div>
            </div>
            <span className="text-xs font-mono text-[#a68a64]">×</span>
          </div>
        </div>
      </div>
    </section>
  );
};
