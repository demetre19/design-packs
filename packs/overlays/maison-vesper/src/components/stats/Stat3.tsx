import React from 'react';

export const Stat3: React.FC = () => {
  const rows = [
    { title: "Salons Particuliers", count: "03 Salons", loc: "Paris • Tokyo • Milan" },
    { title: "Maîtres Tailleurs", count: "18 Artisans", loc: "Rue Cambon" },
    { title: "Étoffes Exclusives", count: "42 Références", loc: "Lombardie & Lyon" }
  ];

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">LIVRE DE COMPTE — STATS</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">Registre de l'Atelier</h2>
        </div>

        <div className="space-y-6">
          {rows.map((r, idx) => (
            <div key={idx} className="border border-[#a68a64]/30 p-6 flex justify-between items-center bg-[#faf7f2]">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#a68a64]">ENTRÉE N° 0{idx + 1}</span>
                <h3 className="font-serif text-2xl font-light text-[#1a1512]">{r.title}</h3>
              </div>
              <div className="text-right">
                <div className="font-serif text-3xl text-[#1a1512]">{r.count}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#1a1512]/60 font-mono">{r.loc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
