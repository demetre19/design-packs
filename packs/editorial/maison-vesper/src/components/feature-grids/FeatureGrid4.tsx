import React from 'react';

export const FeatureGrid4: React.FC = () => {
  const cells = [
    { title: "Savoir-Faire Ancestral", text: "Héritage des grands maîtres tailleurs parisiens depuis 1924." },
    { title: "Étoffes Exclusives", text: "Sélection restreinte de fibres naturelles rares et non traitées." },
    { title: "Salon Privé", text: "Accueil sur rendez-vous dans notre écrin de la rue Cambon." },
    { title: "Conservation", text: "Chaque création est garantie à vie avec entretien annuel offert." }
  ];

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">GRILLE CARRÉE N° 04</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">Les Engagements de la Maison</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cells.map((c, idx) => (
            <div key={idx} className="border-2 border-[#a68a64]/30 p-8 relative bg-[#faf7f2]">
              <div className="absolute inset-1 border border-[#a68a64]/15 pointer-events-none"></div>
              <div className="absolute top-4 right-4 text-[10px] font-mono text-[#a68a64]">[{idx + 1}]</div>
              <h3 className="font-serif text-2xl font-light text-[#1a1512] mb-3">{c.title}</h3>
              <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
