import React from 'react';

export const FeatureGrid1: React.FC = () => {
  const items = [
    { num: "01", title: "Soie Duchesse", desc: "Tissée à Lyon sur des métiers traditionnels du XIXe siècle, offrant un tombé incomparable." },
    { num: "02", title: "Coupe Architecturale", desc: "Chaque patron est dessiné à la main dans notre atelier de la rue Cambon selon les canons classiques." },
    { num: "03", title: "Finitions Main", desc: "Points de Paris invisibles, doublures en soie naturelle et boutons gainés à la main." },
  ];

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">SAVOIR-FAIRE — GRILLE N° 01</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">Les Piliers de l'Atelier</h2>
          <div className="w-12 h-[1px] bg-[#a68a64] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <div key={idx} className="border border-[#a68a64]/30 p-8 relative bg-[#faf7f2] hover:border-[#1a1512] transition-colors">
              <span className="absolute -top-3.5 left-6 bg-[#faf7f2] px-3 font-mono text-[10px] tracking-[0.2em] text-[#a68a64]">
                FIG. {item.num}
              </span>
              <h3 className="font-serif text-2xl font-light text-[#1a1512] mb-4 mt-2">{item.title}</h3>
              <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
