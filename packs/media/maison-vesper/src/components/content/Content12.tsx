import React from 'react';
import { Scissors } from 'lucide-react';

export const Content12: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 pb-4 border-b border-[#a68a64]/30 flex justify-between items-end">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64] block mb-1">
              CONTENU N° 12 — RÉCIT EN TROIS ACTES
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">
              Le Fil Continu d’une Robe
            </h2>
          </div>
          <span className="hidden sm:inline text-[10px] font-mono tracking-[0.22em] text-[#1a1512]/60">
            TRILOGIE D’ATELIER
          </span>
        </div>

        {/* Continuous Vertical Thread Line Linking Three Structurally Distinct Acts */}
        <div className="relative pl-8 md:pl-14">
          {/* Continuous Gold-Taupe Thread Line */}
          <div
            className="absolute left-3 md:left-5 top-2 bottom-4 w-px bg-[#a68a64]"
            aria-hidden="true"
          />

          {/* ACT I — Wide Two-Column Prose Layout */}
          <div className="relative pb-16">
            <span
              className="absolute -left-8 md:-left-14 top-1 w-6 h-6 bg-[#faf7f2] border border-[#1a1512] flex items-center justify-center font-mono text-[10px] text-[#1a1512]"
              aria-hidden="true"
            >
              01
            </span>
            <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-[#a68a64] mb-3">
              ACTE I — L’ÉPURE SUR TOILE
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <h3 className="md:col-span-5 font-serif text-3xl font-light text-[#1a1512] leading-tight">
                Tout commence dans l’effacement du blanc.
              </h3>
              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs leading-relaxed text-[#1a1512]/75">
                <p>
                  Sur le buste de lin brut, le premier geste n’est jamais décoratif : il cherche l’aplomb. Une ligne de craie trace la colonne vertébrale avant que la moindre courbe ne soit accordée à la hanche.
                </p>
                <p>
                  Durant trois jours, la toile reste silencieuse sous les lampes d’architecte. On retire un millimètre ici, on ouvre une pince là, jusqu’à ce que le coton tienne seul sans tension.
                </p>
              </div>
            </div>
          </div>

          {/* ACT II — Inset Archival Plate with Vertical CM Ruler Layout */}
          <div className="relative pb-16">
            <span
              className="absolute -left-8 md:-left-14 top-1 w-6 h-6 bg-[#a68a64] border border-[#a68a64] flex items-center justify-center font-mono text-[10px] text-[#faf7f2]"
              aria-hidden="true"
            >
              02
            </span>
            <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-[#a68a64] mb-4">
              ACTE II — LE BÂTI &amp; LA RÈGLE
            </div>
            <div className="border border-[#a68a64]/40 p-6 md:p-8 bg-[#faf7f2] flex flex-col md:flex-row gap-8 items-stretch">
              {/* Vertical Scale Bar */}
              <div className="hidden md:flex flex-col justify-between items-end pr-4 border-r border-dashed border-[#a68a64]/50 font-mono text-[9px] text-[#a68a64] tabular-nums whitespace-nowrap select-none">
                <span>00 CM</span>
                <span>35 CM</span>
                <span>70 CM</span>
                <span>105 CM</span>
                <span>142 CM</span>
              </div>

              <div className="w-full md:w-52 shrink-0 border border-[#a68a64]/30 p-1.5 bg-white">
                <div className="aspect-[3/4] bg-[#241d18] overflow-hidden">
                  <img
                    src="/src/assets/images/atelier_salon_silhouette_1795617299569.jpg"
                    alt="Essayage de la silhouette dans le salon"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-4">
                <blockquote className="font-serif italic text-2xl text-[#1a1512] leading-snug">
                  « Lorsque l’étoffe définitive remplace la toile, le drapé découvre son propre poids et impose une nouvelle cadence au mouvement. »
                </blockquote>
                <div className="pt-4 border-t border-[#a68a64]/20 flex flex-wrap gap-6 text-[10px] font-mono tracking-[0.2em] text-[#1a1512]/70">
                  <span>SOIE : 340 G/M²</span>
                  <span>LONGUEUR : 142 CM</span>
                  <span>ESSAYAGE : SALON N° 2</span>
                </div>
              </div>
            </div>
          </div>

          {/* ACT III — Double-Ruled Epilogue & Cutting Mark */}
          <div className="relative">
            <span
              className="absolute -left-8 md:-left-14 top-1 w-6 h-6 bg-[#1a1512] border border-[#1a1512] flex items-center justify-center font-mono text-[10px] text-[#faf7f2]"
              aria-hidden="true"
            >
              03
            </span>
            <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-[#a68a64] mb-3">
              ACTE III — LA REMISE AU SALON
            </div>
            <div className="border-y-2 border-[#1a1512] py-8 px-6 text-center space-y-4 relative">
              <div className="absolute inset-x-0 top-1 border-t border-[#a68a64]/40 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-1 border-b border-[#a68a64]/40 pointer-events-none" />

              <p className="font-serif text-2xl md:text-3xl font-light text-[#1a1512] max-w-2xl mx-auto">
                Les fils de bâti sont retirés un à un à la pince d’acier ; la pièce quitte l’atelier enveloppée de mousseline non blanchie.
              </p>
              <div className="inline-flex items-center space-x-2 text-[9px] font-mono tracking-[0.28em] text-[#a68a64] uppercase pt-2">
                <Scissors size={12} className="stroke-[1.5]" />
                <span>FIN DU FIL — PIECE ARCHIVÉE AU REGISTRE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
