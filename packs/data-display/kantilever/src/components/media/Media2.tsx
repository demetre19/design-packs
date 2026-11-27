import React from 'react';

export const Media2: React.FC = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', title: 'TOKYO RESIDENCE // 420 m²' },
    { url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', title: 'OSLO FJORD // 2,300 m²' },
    { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', title: 'ZURICH PAVILION // 1,120 m²' },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// ALTERNATING PARALLELOGRAM GALLERY</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            TECTONIC GALLERY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <div key={i} className="space-y-4 group">
              <div
                className="relative w-full h-[320px] bg-[#14161a] overflow-hidden"
                style={{ clipPath: i % 2 === 0 ? 'polygon(0 0, 100% 8%, 100% 100%, 0 92%)' : 'polygon(0 8%, 100% 0, 100% 92%, 0 100%)' }}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover filter saturate-[0.8] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="font-mono text-xs font-bold uppercase text-[#14161a]/80">
                {img.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
