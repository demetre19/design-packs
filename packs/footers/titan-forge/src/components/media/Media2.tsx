import React from 'react';

export function Media2() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          WEIGHT-STAGGERED GALLERY // MEDIA 02
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          EXTRACTION SITE <span className="text-[#f25c05]">GALLERY</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Large heavy tile */}
          <div className="md:col-span-8 border-4 border-black bg-black relative group overflow-hidden h-[360px]">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d0fbb18f86f6?auto=format&fit=crop&w=1200&q=80" 
              alt="Heavy Site" 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 opacity-85"
            />
            <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 font-mono text-[10px] border border-neutral-700">
              01 // SECTOR 7-ALPHA DRILL RIG
            </div>
          </div>

          {/* Supporting tile */}
          <div className="md:col-span-4 border-2 border-black bg-black relative group overflow-hidden h-[360px]">
            <img 
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80" 
              alt="Substation" 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 opacity-85"
            />
            <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 font-mono text-[10px] border border-neutral-700">
              02 // MEGAVATT SUBSTATION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
