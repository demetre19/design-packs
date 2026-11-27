import React from 'react';

export const Stat2: React.FC = () => {
  const measurements = [
    { label: "Carrure Épaule", val: "44 CM" },
    { label: "Longueur Manches", val: "62 MM" },
    { label: "Hauteur Taille", val: "115 CM" },
    { label: "Amplitude Bâti", val: "± 0.5 MM" }
  ];

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">STATISTIQUES DE MESURE — CM / MM</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">Précision Anatomique</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {measurements.map((m, idx) => (
            <div key={idx} className="border-t border-[#1a1512] pt-6 space-y-2">
              <div className="text-[10px] font-mono text-[#a68a64]">SPÉC. {idx + 1}</div>
              <div className="font-serif text-4xl font-light text-[#1a1512]">{m.val}</div>
              <div className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
