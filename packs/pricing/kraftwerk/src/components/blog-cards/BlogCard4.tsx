import React from 'react';
import { Terminal } from 'lucide-react';

export function BlogCard4() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        {/* Data band */}
        <div className="grid grid-cols-3 border-b border-[#111] text-[9px] uppercase tracking-widest divide-x divide-[#111] bg-[#111] text-[#e8e8e6]">
          <div className="p-2">WALL REF: 04</div>
          <div className="p-2 text-center">CURATOR: ARCHIVE DEPT</div>
          <div className="p-2 text-right">STATUS: PUBLISHED</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#111]">
          <div className="p-8 flex flex-col justify-between">
            <div>
              <span className="text-[9px] text-[#666] block mb-2">2026.11.22 // EDITORIAL WALL</span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-4">
                THE ARCHITECTURE OF SPEED
              </h3>
              <p className="text-[10px] text-[#555] uppercase leading-relaxed mb-6">
                How aerodynamic pressure distribution dictates the physical form of every KRAFTWERK chassis component.
              </p>
            </div>
            <button 
              onClick={() => alert('Opening editorial wall entry...')}
              className="py-3 px-6 bg-[#111] text-[#e8e8e6] font-bold text-xs uppercase tracking-widest hover:bg-[#333] transition-colors cursor-pointer w-fit"
            >
              READ ENTRY
            </button>
          </div>

          <div className="p-6 bg-[#f8f8f6] flex flex-col justify-between">
            <div className="h-48 bg-[#111] border border-[#111] relative overflow-hidden mb-4">
              <img src="https://picsum.photos/seed/kraftwerk_wall/600/400" alt="Wall" className="w-full h-full object-cover grayscale contrast-125" />
            </div>
            <div className="text-[9px] text-[#666] flex justify-between">
              <span>PHOTO PLATE // 04</span>
              <span>STUTTGART ARCHIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
