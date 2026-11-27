import React from 'react';

export const Hero2: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/35">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-6 border-b border-[#a68a64]/20">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64] block mb-2">LOOKBOOK N° 02 — ARCHIVE</span>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-[#1a1512]">
              L'Élégance Non-dite
            </h1>
          </div>
          <div className="mt-4 md:mt-0 text-right font-mono text-xs text-[#1a1512]/60 tracking-wider">
            <div>REF: VSP-2026-AW</div>
            <div>MESURE: SUR-MESURE CM</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-[#241d18] relative overflow-hidden p-2 bg-white border border-[#a68a64]/30 shadow-none">
              <img 
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800" 
                alt="Atelier Fashion Plate"
                className="w-full h-full object-cover filter sepia-[0.15]"
              />
              {/* Garment tag rotated */}
              <div className="absolute top-8 -right-6 rotate-90 bg-[#1a1512] text-[#faf7f2] text-[9px] font-mono tracking-[0.25em] px-3 py-1">
                TAILLE 38 — PARIS
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 md:pl-12">
            <p className="font-serif text-2xl md:text-3xl font-light italic text-[#1a1512] leading-snug">
              "Une silhouette sculptée dans le silence des ateliers de la rue Cambon. Des lignes épurées qui transcendent les saisons."
            </p>
            <p className="text-xs tracking-[0.15em] text-[#1a1512]/70 leading-relaxed uppercase font-light">
              L'artisanat d'art exige la patience. Chaque pièce de cette collection nécessite plus de quarante heures de travail manuel, assemblée par nos maîtres tailleurs à Paris.
            </p>
            <div className="pt-4 flex items-center space-x-6 text-xs uppercase tracking-[0.2em]">
              <a href="#" className="border-b border-[#1a1512] pb-1 hover:text-[#a68a64] hover:border-[#a68a64] transition-colors">
                Explorer le Lookbook
              </a>
              <span className="text-[#a68a64]">×</span>
              <a href="#" className="text-[#1a1512]/60 hover:text-[#1a1512] transition-colors">
                Consulter les spés
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
