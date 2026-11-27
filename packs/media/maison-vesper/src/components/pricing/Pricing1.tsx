import React from 'react';

export const Pricing1: React.FC = () => {
  const tiers = [
    { name: "Prêt-à-Porteur Édition", price: "2 400 €", desc: "Pièce issue de la collection courante, finitions main.", items: ["1 Essayage en salon", "Retouches sur-mesure incluses", "Housse en soie naturelle"] },
    { name: "Demi-Mesure Atelier", price: "4 800 €", desc: "Patronage adapté à votre morphologie, choix des doublures.", items: ["2 Essayages privés", "Personnalisation des boutons", "Garantie entretien 2 ans"], featured: true },
    { name: "Haute Couture Sur-Mesure", price: "12 500 €", desc: "Création unique, bâti d'essai multiple, exclusivité absolue.", items: ["Essayages illimités à domicile", "Matière exclusive réservée", "Certificat d'authenticité calligraphié"] }
  ];

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">SERVICE DE TARIFICATION — MENUS</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">Grille des Prestations</h2>
          <div className="w-12 h-[1px] bg-[#a68a64] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((t, idx) => (
            <div 
              key={idx} 
              className={`border p-8 flex flex-col justify-between relative ${t.featured ? 'border-[#1a1512] bg-[#faf7f2]' : 'border-[#a68a64]/30 bg-[#faf7f2]'}`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1a1512] text-[#faf7f2] text-[9px] font-mono tracking-[0.25em] px-3 py-0.5">
                  CHOIX DE L'ATELIER
                </div>
              )}
              <div>
                <div className="text-[10px] font-mono tracking-[0.2em] text-[#a68a64] mb-2">CATÉGORIE N° 0{idx + 1}</div>
                <h3 className="font-serif text-2xl font-light text-[#1a1512] mb-2">{t.name}</h3>
                <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 mb-6 font-light">{t.desc}</p>
                <div className="font-serif text-4xl text-[#1a1512] mb-6 pb-6 border-b border-[#a68a64]/20">{t.price}</div>
                <ul className="space-y-3 mb-8">
                  {t.items.map((item, i) => (
                    <li key={i} className="text-xs uppercase tracking-[0.1em] text-[#1a1512]/85 flex items-center space-x-2">
                      <span className="text-[#a68a64]">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a 
                href="#" 
                className={`w-full text-center py-3 text-xs uppercase tracking-[0.2em] transition-colors ${t.featured ? 'bg-[#1a1512] text-[#faf7f2] hover:bg-[#a68a64]' : 'border border-[#1a1512] text-[#1a1512] hover:bg-[#1a1512] hover:text-[#faf7f2]'}`}
              >
                Réserver un Salon
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
