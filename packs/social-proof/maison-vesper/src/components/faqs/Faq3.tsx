import React from 'react';

export const Faq3: React.FC = () => {
  const items = [
    { num: "I", q: "Quel est le protocole des essayages ?", a: "Trois rendez-vous successifs : bâti, rectification et livraison finale." },
    { num: "II", q: "Peut-on personnaliser les doublures ?", a: "Absolument, un choix de 40 soies teintes aux pigments naturels est proposé." },
    { num: "III", q: "Quelles sont les garanties de conservation ?", a: "Chaque pièce est accompagnée d'un guide d'archivage et de housses respirantes." }
  ];

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">FAQ ROMAINE — N° III</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">Questions Souveraines</h2>
        </div>

        <div className="space-y-8">
          {items.map((item, idx) => (
            <div key={idx} className="border-b border-[#a68a64]/30 pb-8 space-y-2">
              <div className="font-mono text-xs text-[#a68a64]">SECTION {item.num}</div>
              <h3 className="font-serif text-2xl font-light text-[#1a1512]">{item.q}</h3>
              <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
