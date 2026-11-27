import React from 'react';
import { ArrowDown, Bookmark, ExternalLink, ShieldCheck } from 'lucide-react';

export function Hero3() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end border-b border-neutral-800 pb-6 mb-8">
          <div>
            <span className="text-xs text-neutral-500 tracking-widest uppercase">MUSEUM WALL DISPLAY // WING B</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mt-1">
              GARAMOND ARCHIVALE
            </h1>
          </div>
          <div className="text-right text-xs text-neutral-400 hidden sm:block">
            <div>DATE RANGE: 1540 — 1983</div>
            <div>CATALOG: #GA-883</div>
          </div>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-neutral-400">
          <div>
            <div className="text-white font-bold mb-2">01. THE POISSONS STRIKES</div>
            <p className="font-sans">Jean Jannon's 1621 punches cast in Paris, discovered in the Imprimerie Nationale vaults and re-photographed in 1961.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-2">02. OPTICAL GRADIENTS</div>
            <p className="font-sans">Four distinct master sizes ranging from 8pt caption to 72pt display, each with custom stem width and terminal curvature.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-2">03. SCHOLARLY VERIFICATION</div>
            <p className="font-sans">Certified by the International Typographic Association research committee under Dr. E. M. Rilke.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
