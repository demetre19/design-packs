import React from 'react';

export function Media2() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// GALLERY STAGGERED WALL</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
          CIRCUIT <span className="text-[#ff2e00]">CAPTURE</span>
        </h2>

        {/* Gallery as scale-staggered wall (one large, many small) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 border-2 border-black h-[350px] overflow-hidden group relative">
            <img 
              src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80" 
              alt="Track large"
              className="w-full h-full object-cover filter contrast-125 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-black text-white font-mono text-[10px] px-2 py-1">
              // PLATE 01 // START GRID
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="border-2 border-black h-[160px] overflow-hidden group relative">
              <img 
                src="https://images.unsplash.com/photo-1609630875174-b9b05e113e12?auto=format&fit=crop&w=600&q=80" 
                alt="Detail small 1"
                className="w-full h-full object-cover filter contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-black text-white font-mono text-[9px] px-1.5 py-0.5">
                // 02. FRONT CALIPER
              </div>
            </div>
            <div className="border-2 border-black h-[160px] overflow-hidden group relative">
              <img 
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80" 
                alt="Detail small 2"
                className="w-full h-full object-cover filter contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-black text-white font-mono text-[9px] px-1.5 py-0.5">
                // 03. WINGLET FOIL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
