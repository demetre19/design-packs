import React from 'react';
import { Compass } from 'lucide-react';

export function Media2() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">MEDIA 02 · GALLERY IN STRICT CASE GRID</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Atelier Gallery Matrix</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {['EXHIBIT A: BALANCE', 'EXHIBIT B: ROTO', 'EXHIBIT C: ESCAPEMENT'].map((title, idx) => (
          <div key={idx} className="border border-[#d0d0cc] bg-white p-6 space-y-4 text-center">
            <div className="h-48 bg-[#1c2128] text-white flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-geneva-stripe opacity-40" />
              <span className="font-mono text-xs text-[#2e5e8e] tracking-widest relative z-10">{title}</span>
            </div>
            <div className="font-mono text-[10px] text-[#232a30]/60 tracking-widest">
              REF. 2026-EX{idx + 1} · GENEVA
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
