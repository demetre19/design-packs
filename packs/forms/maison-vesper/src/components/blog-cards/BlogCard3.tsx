import React from 'react';

export const BlogCard3: React.FC = () => {
  const volumes = [
    { vol: "VOL. I", title: "L'Anatomie du Patron", count: "12 Articles" },
    { vol: "VOL. II", title: "Les Matières Premières", count: "08 Articles" },
    { vol: "VOL. III", title: "Entretiens et Conservation", count: "15 Articles" }
  ];

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">ARCHIVE — VOLUME INDEX</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">Recueil des Publications</h2>
        </div>

        <div className="space-y-6">
          {volumes.map((v, idx) => (
            <div key={idx} className="border border-[#a68a64]/30 p-6 flex justify-between items-center bg-[#faf7f2] hover:border-[#1a1512] transition-colors">
              <div className="flex items-center space-x-6">
                <span className="font-mono text-xs text-[#a68a64]">{v.vol}</span>
                <h3 className="font-serif text-2xl font-light text-[#1a1512]">{v.title}</h3>
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-xs uppercase tracking-[0.2em] text-[#1a1512]/60 hidden sm:inline">{v.count}</span>
                <a href="#" className="text-xs uppercase tracking-[0.2em] border-b border-[#1a1512] pb-0.5 hover:text-[#a68a64]">Consulter →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
