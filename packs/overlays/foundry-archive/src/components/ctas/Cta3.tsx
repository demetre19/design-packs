import React from 'react';
import { ArrowUpRight, Shield } from 'lucide-react';

export function Cta3() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-20 px-6 font-mono border-b border-neutral-800 flex">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-1 hidden lg:flex justify-center">
          <div className="text-xs text-neutral-500 uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 py-4 border-r border-neutral-800">
            VAULT SECTION C // 1983
          </div>
        </div>
        <div className="lg:col-span-11 bg-neutral-950 border border-neutral-800 p-10 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-serif font-bold text-white mb-2">Secure Your Specimen License</h2>
            <p className="text-xs text-neutral-400 font-sans max-w-xl">
              Immediate digital download of all 21 optical weights, documentation, and historical provenance dossiers.
            </p>
          </div>
          <button className="bg-white text-neutral-900 px-8 py-4 font-bold text-xs hover:bg-neutral-200 whitespace-nowrap">
            ACQUIRE NOW ($180)
          </button>
        </div>
      </div>
    </section>
  );
}
