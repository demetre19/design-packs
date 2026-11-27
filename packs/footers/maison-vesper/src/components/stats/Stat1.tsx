import React from 'react';

export const Stat1: React.FC = () => {
  const stats = [
    { num: "1924", label: "Fondation à Paris" },
    { num: "40+", label: "Heures de main-d'œuvre" },
    { num: "3", label: "Essayages obligatoires" },
    { num: "100%", label: "Fibres naturelles rares" }
  ];

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, idx) => (
          <div key={idx} className="border border-[#a68a64]/30 p-8 text-center bg-[#faf7f2] space-y-3 relative">
            <span className="absolute top-3 right-3 text-[10px] font-mono text-[#a68a64]">[{idx + 1}]</span>
            <div className="font-serif text-5xl md:text-6xl font-light text-[#1a1512]">{s.num}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#1a1512]/70 font-mono">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
