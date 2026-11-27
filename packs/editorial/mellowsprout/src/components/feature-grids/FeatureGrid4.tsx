import React from 'react';

export function FeatureGrid4() {
  const items = [
    { title: "Artistic Expression", color: "bg-[#ff8c42]" },
    { title: "Logical Puzzles", color: "bg-[#5ba8e8]" },
    { title: "Sensory Discovery", color: "bg-[#f975a3]" },
    { title: "Nature Exploration", color: "bg-[#6dbf67]" },
  ];

  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#f975a3]/20 text-[#f975a3] font-black text-sm uppercase tracking-wider">
          ⭐ 2x2 sticker grid
        </div>
        <h2 className="text-4xl font-black text-[#3d2530]">Explore our core pillars</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] shadow-xl border-4 border-[#3d2530] relative overflow-hidden text-left flex items-center justify-between">
              <div className="absolute -top-4 -right-4 bg-[#ff8c42] text-white px-4 py-1 rounded-full font-black text-xs border-2 border-[#3d2530] rotate-6">
                Sticker Badge 🌟
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#3d2530] mb-2">{item.title}</h3>
                <p className="text-[#3d2530]/70 font-medium">Curated by child development specialists.</p>
              </div>
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-white text-2xl font-black shadow-md`}>
                ✨
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
