import React from 'react';
import { Scissors } from 'lucide-react';

export const Content8: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 border-b border-[#a68a64]/30 pb-4 gap-3">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64] block mb-1">
              CONTENU N° 08 — TABLEAU D’INSPIRATION ÉPINGLÉ
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1a1512]">
              Mur d’Étude — Collection Hiver
            </h2>
          </div>
          <span className="text-[10px] font-mono tracking-[0.22em] text-[#1a1512]/60">
            ÉTUDE NON ALIGNÉE · 05 FRAGMENTS
          </span>
        </div>

        {/* Controlled Chaos Pinboard */}
        <div className="relative md:h-[640px] border border-dashed border-[#a68a64]/50 bg-[#faf7f2] p-6 md:p-0">
          {/* Corner cross-stitch marks */}
          <span className="hidden md:block absolute top-3 left-3 text-xs font-mono text-[#a68a64]">×</span>
          <span className="hidden md:block absolute top-3 right-3 text-xs font-mono text-[#a68a64]">×</span>
          <span className="hidden md:block absolute bottom-3 left-3 text-xs font-mono text-[#a68a64]">×</span>
          <span className="hidden md:block absolute bottom-3 right-3 text-xs font-mono text-[#a68a64]">×</span>

          {/* Piece 1: Large Pattern Sketch (Back Left, rotated -2deg) */}
          <div className="md:absolute md:top-10 md:left-10 w-full md:w-[320px] -rotate-1 md:-rotate-2 z-10 bg-white border border-[#a68a64]/50 p-2.5 mb-6 md:mb-0">
            <div className="flex justify-between text-[9px] font-mono text-[#a68a64] mb-1.5">
              <span>ÉPINGLE 01</span>
              <span>×</span>
            </div>
            <div className="aspect-[3/4] bg-[#241d18] overflow-hidden">
              <img
                src="/src/assets/images/atelier_sketch_pattern_1795617299356.jpg"
                alt="Croquis de patronage et ciseaux"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-serif italic text-sm text-[#1a1512] mt-2">
              Fig. A — Tracé d’épaule raglante &amp; ciseaux laiton.
            </p>
          </div>

          {/* Piece 2: Overlapping Ivory Index Note (Center-Top, z-20, rotated +1deg) */}
          <div className="md:absolute md:top-16 md:left-[285px] w-full md:w-[290px] rotate-1 z-20 bg-[#faf7f2] border border-[#1a1512] p-6 mb-6 md:mb-0">
            <div className="flex justify-between items-center text-[9px] font-mono tracking-[0.25em] text-[#a68a64] border-b border-[#a68a64]/30 pb-2 mb-3">
              <span>FICHE MATIÈRE</span>
              <span>N° 18B</span>
            </div>
            <p className="font-serif italic text-xl text-[#1a1512] leading-snug mb-4">
              « Associer le grain de poudre noir d’encre à une doublure ivoire non blanchie. »
            </p>
            <div className="flex items-center space-x-2 pt-2 border-t border-[#a68a64]/20">
              <span className="w-4 h-4 bg-[#1a1512] border border-[#1a1512]" />
              <span className="w-4 h-4 bg-[#e8dfd1] border border-[#1a1512]/30" />
              <span className="w-4 h-4 bg-[#a68a64] border border-[#1a1512]/30" />
              <span className="text-[9px] font-mono tracking-[0.18em] text-[#1a1512]/70 ml-2">
                GAMME RETENUE
              </span>
            </div>
          </div>

          {/* Piece 3: Tall Salon Silhouette Plate (Right, z-10, rotated +2deg) */}
          <div className="md:absolute md:top-8 md:right-12 w-full md:w-[300px] md:rotate-2 z-10 bg-white border border-[#a68a64]/50 p-2.5 mb-6 md:mb-0">
            <div className="flex justify-between text-[9px] font-mono text-[#a68a64] mb-1.5">
              <span>ÉPINGLE 03</span>
              <span>SALON I</span>
            </div>
            <div className="aspect-[3/4] bg-[#241d18] overflow-hidden">
              <img
                src="/src/assets/images/atelier_salon_silhouette_1795617299569.jpg"
                alt="Silhouette du soir dans le salon parisien"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-serif italic text-sm text-[#1a1512] mt-2">
              Fig. B — Volume drapé asymétrique, grand salon.
            </p>
          </div>

          {/* Piece 4: Espresso Garment Tag Card (Overlapping Center-Bottom, z-30, rotated -1deg) */}
          <div className="md:absolute md:bottom-12 md:left-[340px] w-full md:w-[310px] md:-rotate-1 z-30 bg-[#241d18] text-[#faf7f2] border border-[#a68a64] p-6 mb-6 md:mb-0">
            <div className="flex justify-between items-center text-[9px] font-mono tracking-[0.25em] text-[#a68a64] mb-3">
              <span>ÉTIQUETTE D’ESSAI</span>
              <span>TAILLE 38</span>
            </div>
            <div className="font-serif text-2xl font-light mb-2">
              Robe Colonne — 2e Toile
            </div>
            <div className="text-[10px] font-mono tracking-[0.18em] text-[#faf7f2]/75 space-y-1">
              <div>POITRINE : 88 CM · TAILLE : 66 CM</div>
              <div>CHUTE TOTALE : 144 CM</div>
            </div>
          </div>

          {/* Piece 5: Dashed Cutting Slip (Bottom-Right overlap, z-20) */}
          <div className="md:absolute md:bottom-10 md:right-24 w-full md:w-[235px] md:rotate-1 z-20 bg-[#faf7f2] border border-dashed border-[#1a1512] p-4">
            <div className="flex items-center justify-between text-[9px] font-mono tracking-[0.22em] text-[#a68a64] mb-1">
              <span>BON DE COUPE</span>
              <Scissors size={12} className="stroke-[1.5]" />
            </div>
            <div className="text-xs font-serif text-[#1a1512]">
              À tailler avant le 14 novembre — réserve de 30 mm sur couture milieu dos.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
