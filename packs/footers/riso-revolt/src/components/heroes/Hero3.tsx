import React from 'react';
import { ArrowRight, Pin } from 'lucide-react';

export default function Hero3() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-[#ff6b5e] text-white font-mono text-xs font-bold px-3 py-1 mb-4 shadow-hard-sm">
            EDITORIAL EDITION 03
          </div>
          <h1 className="font-grotesk font-black text-5xl sm:text-7xl uppercase tracking-tighter leading-none mb-6">
            RADICAL CLARITY THROUGH PRINTED MATTER.
          </h1>
          <p className="font-mono text-sm sm:text-base text-[#111111]/80">
            Hand-curated typography, analog textures, and high-performance frontend engineering combined into singular digital experiences.
          </p>
        </div>

        {/* Asymmetric photo with tape strip */}
        <div className="relative max-w-4xl mx-auto">
          {/* Tape strip decoration */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#ffd92e]/80 border-2 border-[#111111] z-20 flex items-center justify-center font-mono text-[10px] font-black rotate-[-2deg] shadow-hard-sm">
            [ARCHIVE_09.PNG]
          </div>

          <div className="bg-white border-3 border-[#111111] shadow-hard-xl p-3 bg-halftone">
            <div className="relative aspect-[16/9] border-2 border-[#111111] overflow-hidden bg-[#111111]">
              <img 
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80" 
                alt="Editorial Design" 
                className="w-full h-full object-cover contrast-150 grayscale"
              />
              <div className="absolute inset-0 bg-[#ff6b5e]/20 mix-blend-color"></div>
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-xs font-bold px-2">
              <span>POSTER SERIES // VOL. 04</span>
              <button className="text-[#ff6b5e] hover:underline flex items-center gap-1">
                <span>INSPECT SPEC</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
