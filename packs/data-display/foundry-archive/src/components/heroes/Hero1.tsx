import React from 'react';
import { ArrowDown, Bookmark, ExternalLink, ShieldCheck } from 'lucide-react';

export function Hero1() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-20 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8">
          <div className="flex items-center space-x-3 text-xs text-neutral-400 mb-4">
            <span className="border border-neutral-700 px-2 py-0.5">EST. 1957</span>
            <span>FOUNDRY REVIVAL PROJECT</span>
            <span>•</span>
            <span>PARIS & BASEL</span>
          </div>
          <h1 className="text-6xl sm:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-none">
            BODONI <span className="text-neutral-500 italic">ÉPOQUE</span>
          </h1>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl mb-8 font-sans">
            A scholarly digital preservation of Giambattista Bodoni's 18th-century manuale tipografico. Meticulously digitized from original lead strikes housed in the Bibliothèqe Nationale, preserving the exquisite hairline contrast and razor-sharp bracketed serifs.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button className="bg-white text-neutral-900 px-6 py-3 font-bold hover:bg-neutral-200 transition-colors flex items-center space-x-2">
              <span>ACQUIRE SPECIMEN SET</span>
              <ExternalLink className="w-4 h-4" />
            </button>
            <button className="border border-neutral-700 text-neutral-300 px-6 py-3 hover:bg-neutral-800 transition-colors">
              VIEW ARCHIVAL RECORD (#5701)
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 border-l border-neutral-800 pl-8 flex flex-col justify-between h-full space-y-8">
          <div>
            <div className="text-[10px] tracking-widest text-neutral-500 uppercase mb-2">CHRONOLOGY OF STRIKES</div>
            <div className="space-y-4 font-mono">
              <div className="border-b border-neutral-800 pb-3">
                <div className="text-3xl font-bold text-white">1957</div>
                <div className="text-xs text-neutral-400">First Monotype Casting (Basel)</div>
              </div>
              <div className="border-b border-neutral-800 pb-3">
                <div className="text-3xl font-bold text-neutral-400">1961</div>
                <div className="text-xs text-neutral-500">Opticals Cut by Jan Tschichold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neutral-500">1983</div>
                <div className="text-xs text-neutral-600">Digital Foundry Conversion</div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 p-4 text-xs text-neutral-400">
            <div className="text-neutral-300 font-bold mb-1">CURATORIAL NOTE</div>
            "The optical sizing in this digital revival remains faithful to the metal punchcutter's original optical adjustments."
          </div>
        </div>
      </div>
    </section>
  );
}
