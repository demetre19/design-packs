import React from 'react';
import { Compass, Camera } from 'lucide-react';

export function Media1() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">MEDIA 01 · FULL-WIDTH CASED PHOTO WITH ENGRAVED CAPTION</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Atelier Visual Exhibit</h2>
      </div>

      <div className="border border-[#d0d0cc] bg-[#1c2128] text-white p-8 md:p-16 relative overflow-hidden text-center space-y-6">
        <div className="absolute inset-0 bg-geneva-stripe opacity-30" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <Camera className="w-8 h-8 text-[#2e5e8e] mx-auto opacity-80" />
          <h3 className="text-2xl font-light tracking-wide">Exhibition Caseback View: Caliber 320</h3>
          <p className="font-mono text-xs text-white/70 tracking-wider">
            ENGRAVED PLATE REF. 5711-EX · GENEVA ATELIER 2026
          </p>
        </div>
      </div>
    </section>
  );
}
