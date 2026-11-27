import React from 'react';
import { Scissors } from 'lucide-react';

export const Content7: React.FC = () => {
  const perforations = Array.from({ length: 24 });

  return (
    <section className="w-full bg-[#faf7f2] py-20 border-b border-[#a68a64]/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6 flex justify-between items-center text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">
        <span>CONTENU N° 07 — PELLICULE D’ATELIER 35 MM</span>
        <span>BOBINE N° 04 · CADENCE IRRÉGULIÈRE</span>
      </div>

      {/* Continuous Film Strip Band */}
      <div className="w-full border-y border-[#1a1512] bg-[#faf7f2]">
        {/* Top Sprocket Perforation Track */}
        <div className="border-b border-[#a68a64]/40 py-2 px-4 flex justify-between items-center overflow-hidden bg-[#1a1512]/[0.03]">
          {perforations.map((_, i) => (
            <span
              key={`top-${i}`}
              className="w-3 h-1.5 border border-[#1a1512]/35 bg-[#faf7f2] shrink-0 mx-1"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Unequal Width Film Frames Sequence */}
        <div className="flex flex-col lg:flex-row items-stretch divide-y lg:divide-y-0 lg:divide-x divide-[#1a1512]">
          {/* Frame 1 — WIDE (29%) — Editorial Text Block */}
          <div className="lg:w-[29%] p-7 flex flex-col justify-between space-y-6">
            <div className="flex justify-between text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
              <span>PHOT. 01A</span>
              <span>28 MM</span>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-light text-[#1a1512] mb-3">
                Séquence Matinale
              </h3>
              <p className="text-xs leading-relaxed text-[#1a1512]/75">
                Huit heures trente. La lumière oblique traverse la verrière de la cour intérieure et révèle chaque fil de faufilage posé la veille.
              </p>
            </div>
            <div className="text-[9px] font-mono tracking-[0.2em] text-[#1a1512]/50">
              EXPOSITION : 1/125 S · F/2.8
            </div>
          </div>

          {/* Frame 2 — NARROW (13%) — Pure Oversized Numeral */}
          <div className="lg:w-[13%] p-5 bg-[#241d18] text-[#faf7f2] flex flex-col justify-between items-center text-center">
            <span className="text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
              02B
            </span>
            <div className="font-serif text-5xl tracking-tight font-light my-4">
              1924
            </div>
            <span className="text-[8px] font-mono tracking-[0.3em] uppercase text-[#faf7f2]/60">
              FONDATION
            </span>
          </div>

          {/* Frame 3 — MEDIUM (23%) — Image Plate */}
          <div className="lg:w-[23%] p-4 flex flex-col justify-between bg-[#faf7f2]">
            <div className="flex justify-between text-[9px] font-mono tracking-[0.2em] text-[#a68a64] mb-2">
              <span>PHOT. 03C</span>
              <span>3:4</span>
            </div>
            <div className="aspect-[4/3] bg-[#241d18] border border-[#a68a64]/40 overflow-hidden">
              <img
                src="/src/assets/images/atelier_sketch_pattern_1795617299356.jpg"
                alt="Patron et croquis sur table"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 text-[9px] font-mono tracking-[0.18em] text-[#1a1512]/65">
              TRACÉ AU FUSAIN — PL. IV
            </div>
          </div>

          {/* Frame 4 — TINY (9%) — Vertical Garment Tag & Swatch */}
          <div className="lg:w-[9%] py-5 px-3 flex lg:flex-col justify-between items-center bg-[#faf7f2]">
            <span className="text-[9px] font-mono text-[#a68a64]">04D</span>
            <span className="lg:-rotate-90 whitespace-nowrap text-[9px] font-mono tracking-[0.25em] text-[#1a1512] uppercase my-4">
              100% SOIE
            </span>
            <div className="flex lg:flex-col gap-1.5">
              <span className="w-3 h-3 border border-[#1a1512]/30 bg-[#e8dfd1] block" />
              <span className="w-3 h-3 border border-[#1a1512]/30 bg-[#241d18] block" />
            </div>
          </div>

          {/* Frame 5 — MEDIUM-WIDE (26%) — Italic Pull Quote + Cutting Marker */}
          <div className="lg:w-[26%] p-7 flex flex-col justify-between space-y-5">
            <div className="flex justify-between text-[9px] font-mono tracking-[0.25em] text-[#a68a64]">
              <span>PHOT. 05E</span>
              <Scissors size={12} className="stroke-[1.5]" />
            </div>
            <blockquote className="font-serif italic text-xl text-[#1a1512] leading-snug">
              « Le silence d’un atelier est la mesure exacte de sa maîtrise. »
            </blockquote>
            <div className="pt-2 border-t border-dashed border-[#a68a64]/50 text-[9px] font-mono tracking-[0.2em] text-[#1a1512]/60 flex justify-between">
              <span>FIN DE BOBINE</span>
              <span>×</span>
            </div>
          </div>
        </div>

        {/* Bottom Sprocket Perforation Track */}
        <div className="border-t border-[#a68a64]/40 py-2 px-4 flex justify-between items-center overflow-hidden bg-[#1a1512]/[0.03]">
          {perforations.map((_, i) => (
            <span
              key={`bot-${i}`}
              className="w-3 h-1.5 border border-[#1a1512]/35 bg-[#faf7f2] shrink-0 mx-1"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
