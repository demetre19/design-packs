import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Faq2() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">FAQ 02 // Dense Two-Column Notes</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Foundry Specifications & Q/A</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">SPECIMEN NOTES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
          <div className="border border-neutral-800 bg-neutral-950 p-6 space-y-4">
            <span className="text-white font-bold block">Q: FORMATS SUPPORTED?</span>
            <p className="text-neutral-400 font-light leading-relaxed">
              OpenType (.otf), TrueType (.ttf), and Web Open Font Format 2 (.woff2) are bundled in every purchase archive.
            </p>
          </div>
          <div className="border border-neutral-800 bg-neutral-950 p-6 space-y-4">
            <span className="text-white font-bold block">Q: UPDATES & MAINTENANCE?</span>
            <p className="text-neutral-400 font-light leading-relaxed">
              All minor version updates and glyph additions are provided free of charge to existing license holders.
            </p>
          </div>
          <div className="border border-neutral-800 bg-neutral-950 p-6 space-y-4">
            <span className="text-white font-bold block">Q: SERVER EMBEDDING?</span>
            <p className="text-neutral-400 font-light leading-relaxed">
              Enterprise licenses cover server-side rendering and dynamic PDF document generation without extra fees.
            </p>
          </div>
          <div className="border border-neutral-800 bg-neutral-950 p-6 space-y-4">
            <span className="text-white font-bold block">Q: REFUND POLICY?</span>
            <p className="text-neutral-400 font-light leading-relaxed">
              Due to the digital nature of font files, refunds are evaluated on a case-by-case basis within 14 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
