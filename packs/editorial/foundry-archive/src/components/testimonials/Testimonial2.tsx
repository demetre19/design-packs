import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial2() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">02. QUOTE WALL AS ARCHIVAL MARGINALIA</h2>
          <span className="text-xs text-neutral-500">MARGIN NOTES</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3 border-r border-neutral-800 pr-6 text-neutral-500 text-[10px] uppercase">
            [NOTE IN MARGIN // FOLIO 44]
            <div className="text-white font-serif text-xl mt-2">"True form is born from the punchcutter's hand."</div>
          </div>
          <div className="lg:col-span-9 text-xs text-neutral-400 font-sans leading-relaxed">
            Examining the original punches cast by William Caslon in Chiswell Street revealed micro-variations in counter spaces that digital interpolation must preserve to maintain historical integrity. This typeface succeeds precisely where previous digital conversions faltered by respecting those physical anomalies.
            <div className="mt-4 font-mono text-[10px] text-neutral-500 uppercase">
              — ARCHIVAL RECORD #994-C (VERIFIED BY J. TSCHICHOLD, 1961)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
