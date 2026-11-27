import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

export function BlogCard4() {
  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono paper-grid-bg">
      <div className="max-w-4xl mx-auto border-2 border-[#1b3a5c] p-8 bg-white shadow-xl relative space-y-8">
        {/* Title Block Meta header */}
        <div className="border-b-2 border-[#1b3a5c] pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-[10px] bg-[#1b3a5c] text-white px-2 py-0.5">ARTICLE PLATE 04</span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-2">Tectonic Purity in Steel & Glass</h2>
          </div>
          <div className="text-right text-[10px] text-[#1b3a5c]/70 border border-[#1b3a5c]/40 p-2">
            <div>DWG: ART-04-REV2</div>
            <div>STATUS: APPROVED PUBLICATION</div>
          </div>
        </div>

        <div className="space-y-4 text-xs md:text-sm text-[#1b3a5c]/80 leading-relaxed">
          <p>
            Architecture is fundamentally an act of measured demarcation. By establishing strict grid coordinates and adhering to material honesty, structures achieve a timeless resonance that transcends fleeting stylistic fads.
          </p>
          <p>
            At Atelier Orthogonal, every structural member is exposed as an honest expression of gravity, load transfer, and spatial definition.
          </p>
        </div>

        <div className="pt-6 border-t border-[#1b3a5c]/20 flex justify-between items-center text-xs">
          <span className="text-[#1b3a5c]/60">PUBLISHED: 2026.11.25 | AUTHOR: ATELIER EDITORIAL</span>
          <button className="bg-[#1b3a5c] text-white px-5 py-2.5 font-bold uppercase hover:bg-[#254e7a] transition-colors cursor-pointer">
            DOWNLOAD FULL ESSAY
          </button>
        </div>
      </div>
    </section>
  );
}
