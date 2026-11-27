import React from 'react';

export function Media2() {
  const images = [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">EXACT RECTANGULAR GALLERY</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Photographic Portfolio Grid</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <div key={i} className="border border-[#e2e0d8] p-2 bg-[#f0efeb]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={img} alt={`Gallery item 0${i+1}`} className="w-full h-full object-cover filter saturate-[0.85]" />
              </div>
              <div className="mt-2 text-[10px] font-mono uppercase text-stone-500 flex justify-between px-1">
                <span>PLATE 0{i+1}</span>
                <span>ATELIER VARDEN ARCHIVES</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
