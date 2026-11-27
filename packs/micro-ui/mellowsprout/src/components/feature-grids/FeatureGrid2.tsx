import React from 'react';

export function FeatureGrid2() {
  const steps = [
    { num: "01", title: "Choose Your Theme", desc: "Select from art, science, nature, and rhythm play kits." },
    { num: "02", title: "Delivery Magic", desc: "A colorful box arrives at your door filled with surprises." },
    { num: "03", title: "Play & Learn", desc: "Hours of screen-free immersive joy for the whole family." },
  ];

  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#5ba8e8]/20 text-[#2b7bc0] font-black text-sm uppercase tracking-wider">
          🚀 how it works
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#3d2530]">
          Three steps to endless smiles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] shadow-xl border-4 border-[#3d2530] text-left relative overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 bg-[#ff8c42]/20 rounded-full flex items-center justify-center text-3xl font-black text-[#ff8c42]">
                {s.num}
              </div>
              <div className="text-5xl font-black text-[#ff8c42] mb-6">{s.num}</div>
              <h3 className="text-2xl font-black text-[#3d2530] mb-3">{s.title}</h3>
              <p className="text-[#3d2530]/70 font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
