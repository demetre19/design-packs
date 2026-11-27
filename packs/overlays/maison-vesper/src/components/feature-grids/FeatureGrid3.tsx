import React from 'react';

export const FeatureGrid3: React.FC = () => {
  const steps = [
    { id: "I", title: "Consultation", desc: "Rencontre privée au salon pour définir vos aspirations et choix d'étoffes." },
    { id: "II", title: "Prise de Mesures", desc: "Plus de 30 points de contrôle anatomique pour un patronage unique." },
    { id: "III", title: "Bâti d'Essai", desc: "Premier essayage de la structure brute pour valider l'aplomb." },
    { id: "IV", title: "Livraison", desc: "Remise de la pièce dans son coffret en carton vergé avec certificat." }
  ];

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-[#a68a64]/20 pb-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">PROTOCOLE ATELIER</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512] mt-1">L'Itinéraire d'une Pièce</h2>
          </div>
          <span className="text-xs font-mono text-[#a68a64]">× STITCH INDEX</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, idx) => (
            <div key={idx} className="border-t border-dashed border-[#a68a64]/60 pt-6 space-y-4 relative">
              <div className="font-mono text-xs text-[#a68a64]">N° {s.id}</div>
              <h3 className="font-serif text-xl font-light text-[#1a1512]">{s.title}</h3>
              <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light">
                {s.desc}
              </p>
              <div className="absolute top-0 right-0 text-[#a68a64] font-mono text-xs">×</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
