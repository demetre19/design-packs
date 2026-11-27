import React from 'react';

export function BlogCard4() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-4xl mx-auto bg-[#13171c] border border-white/10 p-10">
        <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-8 text-xs font-mono text-[#7a8494]">
          <span>REF // ART-994-HX</span>
          <span className="text-[#d4b06a]">PUBLISHED: EST. MMXXIV</span>
          <span>AUTHOR: ATELIER DES HORLOGERS</span>
        </div>

        <span className="text-xs font-mono text-[#d4b06a] uppercase tracking-widest block mb-3">TECHNICAL MONOGRAPH</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#ece8e1] mb-6">Isochronism in Double-Axis Tourbillons</h1>
        <p className="font-sans text-xs text-[#7a8494] leading-relaxed mb-8">
          A rigorous mathematical examination of gravitational error cancellation across multi-axis rotating cages. Utilizing advanced finite element analysis to ensure constant amplitude across all vertical planes.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-2.5 rounded-full border border-[#d4b06a] text-[#d4b06a] text-xs font-mono tracking-widest hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all">
            DOWNLOAD PDF DOSSIER
          </button>
        </div>
      </div>
    </section>
  );
}
