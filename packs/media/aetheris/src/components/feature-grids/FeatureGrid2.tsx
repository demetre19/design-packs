import React from 'react';

export function FeatureGrid2() {
  const items = [
    { num: '01', title: 'Atelier Metallurgy', desc: 'Proprietary titanium and gold alloys smelted in-house for maximum tensile durability and acoustic resonance.' },
    { num: '02', title: 'Acoustic Minute Repeaters', desc: 'Hand-tuned gongs echoing cathedral bells, tested in anechoic chambers by master acousticians.' },
    { num: '03', title: 'Subterranean Vaults', desc: 'Deep-earth climate-controlled strongrooms with independent seismic isolation foundations.' },
  ];

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">NUMERICAL INDEX</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">The Aetheris Protocol</h2>
          </div>
          <span className="text-xs font-mono text-[#7a8494]">EST. MMXXIV</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="border-t border-white/10 pt-6 flex flex-col">
              <span className="font-serif text-3xl text-[#d4b06a] mb-4">{item.num}</span>
              <h3 className="font-serif text-xl text-[#ece8e1] mb-3">{item.title}</h3>
              <p className="font-sans text-xs text-[#7a8494] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
