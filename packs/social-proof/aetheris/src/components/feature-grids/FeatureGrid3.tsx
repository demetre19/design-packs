import React from 'react';

export function FeatureGrid3() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10 flex flex-col gap-16">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">ROW 01 // ARCHITECTURAL MASTERY</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1] mb-6">Corner-Framed Elegance</h2>
          <p className="font-sans text-xs text-[#7a8494] leading-relaxed mb-6">
            Every component and display plate is bordered with hairline gold geometry, reflecting the precise tolerances of high horology and elite asset custody.
          </p>
          <span className="text-[10px] font-mono text-[#d4b06a]">REF: PLATE-01-A</span>
        </div>
        <div className="h-72 bg-[#13171c] border border-white/10 relative p-4 flex items-center justify-center">
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#d4b06a]" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#d4b06a]" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#d4b06a]" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#d4b06a]" />
          <span className="font-serif text-lg text-[#ece8e1] italic">Atelier Workshop Plate</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="h-72 bg-[#13171c] border border-white/10 relative p-4 flex items-center justify-center order-2 lg:order-1">
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#d4b06a]" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#d4b06a]" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#d4b06a]" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#d4b06a]" />
          <span className="font-serif text-lg text-[#ece8e1] italic">Subterranean Vault Strongroom</span>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">ROW 02 // SECURE CUSTODY</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1] mb-6">Absolute Isolation</h2>
          <p className="font-sans text-xs text-[#7a8494] leading-relaxed mb-6">
            Our vaults remain hermetically isolated from external networks, ensuring absolute privacy and security for your most prized collections.
          </p>
          <span className="text-[10px] font-mono text-[#d4b06a]">REF: PLATE-02-B</span>
        </div>
      </div>
    </section>
  );
}
