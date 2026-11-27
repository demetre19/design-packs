import React from 'react';

export const Content6: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto">
        {/* Book Folio Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-6 mb-12 border-b border-[#1a1512]">
          <div className="md:col-span-5">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64] block mb-1">
              CONTENU N° 06 — CAHIER ANNOTÉ
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1a1512]">
              De la Chute du Drapé
            </h2>
          </div>
          <div className="md:col-span-1 hidden md:block" />
          <div className="md:col-span-6 flex items-end justify-between text-[10px] font-mono tracking-[0.22em] text-[#a68a64] uppercase">
            <span>GLOSES &amp; MARGINALIA DE L’ATELIER</span>
            <span>FOLIO 14 — VERSO</span>
          </div>
        </div>

        {/* Passage 1 + Aligned Marginalia Note 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12">
          <div className="md:col-span-5">
            <p className="text-sm leading-[1.85] text-[#1a1512]/85 font-light">
              <span className="font-serif text-4xl float-left mr-3 mt-1 leading-none text-[#1a1512]">L</span>
              a soie duchesse ne tolère aucune précipitation. Avant même que la lame des ciseaux n’effleure le lé, la pièce doit reposer déroulée sur la table de chêne pendant vingt-quatre heures complètes.<sup className="font-mono text-[10px] text-[#a68a64] ml-0.5">[1]</sup> C’est dans cet intervalle silencieux que la tension résiduelle du métier à tisser s’apaise.
            </p>
          </div>
          <div className="md:col-span-1 hidden md:flex justify-center pt-2">
            <div className="w-full h-px bg-[#a68a64]/50 mt-2" />
          </div>
          <aside className="md:col-span-6 border-l border-[#a68a64]/40 pl-5 py-1 space-y-2">
            <div className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
              NOTE [1] — REPOS HYGROMÉTRIQUE
            </div>
            <p className="font-serif italic text-base text-[#1a1512]/80">
              « Taux d’humidité maintenu à 52 % dans l’atelier du troisième étage, rue Cambon. Toute variation supérieure à 4 % fausse le biais. »
            </p>
          </aside>
        </div>

        {/* Passage 2 + Aligned Archival Image Thumbnail */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12">
          <div className="md:col-span-5">
            <p className="text-sm leading-[1.85] text-[#1a1512]/85 font-light">
              Vient ensuite le temps du bâti à grands points lâches. À l’aiguille n° 9, les couturières assemblent la lisière au fil de coton glacé blanc, dont la trace éphémère guide l’œil sans jamais marquer la trame.<sup className="font-mono text-[10px] text-[#a68a64] ml-0.5">[2]</sup> Le vêtement commence alors à parler en trois dimensions.
            </p>
          </div>
          <div className="md:col-span-1 hidden md:flex justify-center pt-2">
            <div className="w-full h-px bg-[#a68a64]/50 mt-2" />
          </div>
          <aside className="md:col-span-6 border-l border-[#a68a64]/40 pl-5 flex flex-col sm:flex-row gap-5 items-start">
            <div className="w-40 shrink-0 border border-[#a68a64]/40 p-1 bg-white">
              <div className="aspect-[4/3] bg-[#241d18] overflow-hidden">
                <img
                  src="/src/assets/images/atelier_silk_drape_1795617299625.jpg"
                  alt="Bâti blanc sur soie duchesse"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
                NOTE [2] — FIG. MARGINALE A
              </div>
              <p className="text-xs text-[#1a1512]/70 leading-relaxed">
                Point de bâti diagonal espacé de 18 mm sur pli de soie écrue. Épingles en laiton fin n° 00.
              </p>
            </div>
          </aside>
        </div>

        {/* Passage 3 + Aligned Pull-Fragment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12">
          <div className="md:col-span-5">
            <p className="text-sm leading-[1.85] text-[#1a1512]/85 font-light">
              Lors du second essayage, rien n’est encore définitif. Un simple coup de craie de tailleur déplace une pince de trois millimètres vers l’os de la hanche.<sup className="font-mono text-[10px] text-[#a68a64] ml-0.5">[3]</sup> C’est cette fraction infime qui transforme un manteau juste en une œuvre inoubliable.
            </p>
          </div>
          <div className="md:col-span-1 hidden md:flex justify-center pt-2">
            <div className="w-full h-px bg-[#a68a64]/50 mt-2" />
          </div>
          <aside className="md:col-span-6 border-l border-[#a68a64]/40 pl-5 py-1">
            <div className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64] mb-1.5">
              NOTE [3] — FRAGMENT D’ESSAYAGE
            </div>
            <div className="font-serif italic text-2xl text-[#1a1512] leading-snug">
              « Trois millimètres séparent l’exactitude de la grâce. »
            </div>
            <div className="text-[9px] font-mono tracking-[0.2em] text-[#1a1512]/50 mt-2">
              — CAHIER DE M. DELACROIX, 1968
            </div>
          </aside>
        </div>

        {/* Passage 4 + Aligned Reference Swatches */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <p className="text-sm leading-[1.85] text-[#1a1512]/85 font-light">
              Enfin, la doublure est glacée à la main le long des parementures, laissant un léger bouffant d’aisance afin que le tissu extérieur conserve à jamais sa souveraine autonomie.<sup className="font-mono text-[10px] text-[#a68a64] ml-0.5">[4]</sup>
            </p>
          </div>
          <div className="md:col-span-1 hidden md:flex justify-center pt-2">
            <div className="w-full h-px bg-[#a68a64]/50 mt-2" />
          </div>
          <aside className="md:col-span-6 border-l border-[#a68a64]/40 pl-5 py-1 space-y-3">
            <div className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
              NOTE [4] — NUANCIER DE DOUBLURE
            </div>
            <div className="flex items-center space-x-5">
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 border border-[#1a1512]/30 bg-[#faf7f2] inline-block" />
                <span className="text-[10px] font-mono text-[#1a1512]/75">IVOIRE</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 border border-[#1a1512]/30 bg-[#a68a64] inline-block" />
                <span className="text-[10px] font-mono text-[#1a1512]/75">TAUPE DORÉ</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 border border-[#1a1512]/30 bg-[#241d18] inline-block" />
                <span className="text-[10px] font-mono text-[#1a1512]/75">ESPRESSO</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
