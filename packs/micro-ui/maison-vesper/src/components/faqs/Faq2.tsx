import React from 'react';

export const Faq2: React.FC = () => {
  const faqs = [
    { q: "Comment planifier un rendez-vous ?", a: "Directement via notre formulaire en ligne ou par téléphone au salon." },
    { q: "Quelles sont les conditions de livraison ?", a: "Remise en main propre par coursier ou dans un coffret en carton vergé." },
    { q: "Puis-je commander depuis l'étranger ?", a: "Nos maîtres tailleurs se déplacent à Tokyo, New York et Londres sur demande." },
    { q: "Existe-t-il un catalogue papier ?", a: "Oui, notre gazette trimestrielle est envoyée à tous les membres du cercle." }
  ];

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">FAQ ÉDITORIALE — DEUX COLONNES</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">Informations Pratiques</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {faqs.map((f, idx) => (
            <div key={idx} className="border border-[#a68a64]/30 p-8 bg-[#faf7f2] space-y-3">
              <span className="text-[10px] font-mono text-[#a68a64]">QUESTION N° 0{idx + 1}</span>
              <h3 className="font-serif text-2xl font-light text-[#1a1512]">{f.q}</h3>
              <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
