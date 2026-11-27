import React from 'react';

export function Hero4() {
  return (
    <section className="w-full bg-black text-white border-b border-white font-mono py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-white pb-4 mb-8 text-xs uppercase tracking-widest text-neutral-400">
          <span>SECTION: INVERTED HERO</span>
          <span>SYSTEM: CURRICULUM-04</span>
        </div>
        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
          STERLING<br />ARCHIVE.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white text-xs uppercase tracking-wider">
          <div>
            <span className="text-neutral-400 block mb-1">01 / PRACTICE</span>
            Rigorous typographic systems and editorial direction based in London and Zurich.
          </div>
          <div>
            <span className="text-neutral-400 block mb-1">02 / CLIENTS</span>
            Tate Modern, Serpentine Gallery, Vitra, Harvard GSD, Rizzoli International.
          </div>
          <div>
            <span className="text-neutral-400 block mb-1">03 / CONTACT</span>
            inquiries@studio-sterling.com / +44 20 7946 0912
          </div>
        </div>
      </div>
    </section>
  );
}
