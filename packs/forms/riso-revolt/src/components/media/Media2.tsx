import React from 'react';

export default function Media2() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block bg-[#ffd92e] border-2 border-[#111111] font-mono text-xs font-black px-3 py-1 mb-2 shadow-hard-sm">
            COLLAGE ARCHIVE
          </div>
          <h2 className="font-grotesk font-black text-4xl uppercase">STUDIO COLLAGE.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border-3 border-[#111111] shadow-hard-lg p-3 rotate-[-2deg] bg-halftone">
            <div className="aspect-[4/3] border-2 border-[#111111] overflow-hidden bg-[#ffd92e]">
              <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80" alt="Collage 1" className="w-full h-full object-cover contrast-125 mix-blend-multiply" />
            </div>
            <div className="mt-2 font-mono text-[10px] font-bold">PLATE // 01 (TOKYO)</div>
          </div>
          <div className="bg-white border-3 border-[#111111] shadow-hard-lg p-3 rotate-[3deg] bg-halftone">
            <div className="aspect-[4/3] border-2 border-[#111111] overflow-hidden bg-[#ff6b5e]">
              <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80" alt="Collage 2" className="w-full h-full object-cover contrast-125" />
            </div>
            <div className="mt-2 font-mono text-[10px] font-bold">PLATE // 02 (BERLIN)</div>
          </div>
          <div className="bg-white border-3 border-[#111111] shadow-hard-lg p-3 rotate-[-1deg] bg-halftone">
            <div className="aspect-[4/3] border-2 border-[#111111] overflow-hidden bg-[#111111]">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Collage 3" className="w-full h-full object-cover contrast-125 grayscale" />
            </div>
            <div className="mt-2 font-mono text-[10px] font-bold">PLATE // 03 (STUDIO)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
