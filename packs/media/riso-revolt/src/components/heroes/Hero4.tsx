import React from 'react';
import { Grid, ArrowRight } from 'lucide-react';

export default function Hero4() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div className="lg:col-span-6">
          <div className="inline-block bg-[#ffd92e] border-2 border-[#111111] font-mono text-xs font-black px-3 py-1 mb-4 shadow-hard-sm">
            04 // 2X2 GRID SYSTEM
          </div>
          <h1 className="font-grotesk font-black text-4xl sm:text-6xl uppercase tracking-tighter leading-none mb-6">
            MULTIDIMENSIONAL DESIGN LAB.
          </h1>
          <p className="font-mono text-sm sm:text-base text-[#111111]/80 mb-8">
            Every project is broken down into constituent graphic grids, tested against strict typographic hierarchies, and brought to life with pristine code.
          </p>
          <div className="flex gap-4">
            <button className="btn-brutal bg-[#ff6b5e] text-white font-grotesk font-black text-sm px-6 py-3">
              START BRIEF
            </button>
            <button className="btn-brutal bg-white text-[#111111] font-grotesk font-black text-sm px-6 py-3">
              VIEW SPECS
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="bg-white border-2 border-[#111111] shadow-hard-sm p-2 bg-halftone">
            <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=400&q=80" alt="Grid 1" className="w-full h-36 object-cover border border-[#111111]" />
            <div className="mt-2 font-mono text-[10px] font-bold">PLATE 01 // RISO</div>
          </div>
          <div className="bg-[#ffd92e] border-2 border-[#111111] shadow-hard-sm p-2">
            <img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=400&q=80" alt="Grid 2" className="w-full h-36 object-cover border border-[#111111]" />
            <div className="mt-2 font-mono text-[10px] font-bold">PLATE 02 // TYPO</div>
          </div>
          <div className="bg-[#ff6b5e] border-2 border-[#111111] shadow-hard-sm p-2 text-white">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" alt="Grid 3" className="w-full h-36 object-cover border border-[#111111]" />
            <div className="mt-2 font-mono text-[10px] font-bold">PLATE 03 // ARCH</div>
          </div>
          <div className="bg-white border-2 border-[#111111] shadow-hard-sm p-2">
            <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=400&q=80" alt="Grid 4" className="w-full h-36 object-cover border border-[#111111]" />
            <div className="mt-2 font-mono text-[10px] font-bold">PLATE 04 // CODE</div>
          </div>
        </div>

      </div>
    </section>
  );
}
