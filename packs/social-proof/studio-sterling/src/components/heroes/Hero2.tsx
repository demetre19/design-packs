import React from 'react';

export function Hero2() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-4 gap-2 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[16/9] border border-black overflow-hidden bg-neutral-200">
              <img 
                src={`https://picsum.photos/seed/strip${i}/400/225`} 
                alt={`Strip ${i}`} 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          ))}
        </div>
        <div className="border-t border-b border-black py-4 mb-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center">
            SPATIAL TYPOGRAPHY & EDITORIAL SYSTEMS
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[11px] uppercase tracking-wider leading-tight">
          <div>
            <span className="font-bold block mb-1">01 / PRINCIPAL ROLE</span>
            Senior Design Director at Studio Sterling, leading cross-disciplinary teams in cultural publishing and brand identity.
          </div>
          <div>
            <span className="font-bold block mb-1">02 / PEDAGOGY</span>
            Guest Lecturer in Typography at Royal College of Art and ETH Zurich since 2018.
          </div>
          <div>
            <span className="font-bold block mb-1">03 / RECOGNITION</span>
            D&AD Yellow Pencil, Swiss Design Awards Nominee, Red Dot Best of the Best.
          </div>
        </div>
      </div>
    </section>
  );
}
