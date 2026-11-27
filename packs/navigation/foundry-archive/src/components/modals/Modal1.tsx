import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

export function Modal1() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">01. SPECIMEN DETAIL MODAL WITH ERA TIMELINE</h2>
          <span className="text-xs text-neutral-500">MODAL OVERLAY DISPLAY</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 p-8 max-w-2xl mx-auto relative">
          <div className="flex justify-between items-start mb-6 border-b border-neutral-800 pb-4">
            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest">DOSSIER #5701</span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">Bodoni Époque Specimen Review</h3>
            </div>
            <button className="text-neutral-400 hover:text-white p-1 border border-neutral-800">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4 text-xs text-neutral-400 font-sans mb-8">
            <p className="leading-relaxed">
              This master specimen plate contains original letterforms scanned at 1200 DPI in Basel, 1957. All optical sizes have been hand-hinted for digital rendering.
            </p>
            <div className="bg-neutral-900 p-4 border border-neutral-800 font-mono text-neutral-300">
              <div>ERA: 1757 — 1957 — 2026</div>
              <div>PUNCHCUTTER: Giambattista Bodoni</div>
              <div>VAULT LOCATION: Cabinet 12, Shelf B</div>
            </div>
          </div>
          <div className="flex justify-end space-x-4 text-xs">
            <button className="border border-neutral-700 px-4 py-2 text-neutral-300 hover:bg-neutral-800">CLOSE</button>
            <button className="bg-white text-neutral-900 px-6 py-2 font-bold hover:bg-neutral-200">ACQUIRE SPECIMEN</button>
          </div>
        </div>
      </div>
    </section>
  );
}
