import React from 'react';

export const Media2: React.FC = () => {
  const plates = [
    { num: "01", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600", title: "Silhouette I" },
    { num: "02", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600", title: "Détail Étoffe" },
    { num: "03", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600", title: "Atelier N° 04" }
  ];

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-[#a68a64]/20 pb-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">GALERIE DE PLANCHES</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512] mt-1">Lookbook Numéroté</h2>
          </div>
          <span className="font-mono text-xs text-[#a68a64]">TOTAL: 3 PLANCHES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plates.map((p, idx) => (
            <div key={idx} className="space-y-4">
              <div className="aspect-[3/4] bg-[#241d18] border border-[#a68a64]/30 overflow-hidden relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-[#faf7f2] px-2 py-0.5 font-mono text-[9px] text-[#1a1512]">
                  PL. {p.num}
                </div>
              </div>
              <div className="flex justify-between items-center text-xs uppercase tracking-[0.2em] text-[#1a1512]">
                <span>{p.title}</span>
                <span className="text-[#a68a64]">×</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
