import React from 'react';
import { ArrowUpRight, Shield } from 'lucide-react';

export function Cta2() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-20 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-7xl font-bold text-white mb-4 font-mono">1957</div>
        <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-6">MEMORIAL FOUNDING DATE</span>
        <h2 className="text-3xl font-serif font-bold text-white mb-4">Begin Your Typographic Acquisition</h2>
        <p className="text-xs text-neutral-400 font-sans max-w-lg mx-auto leading-relaxed mb-8">
          Acquire the complete master specimen set and join our international roster of design scholars.
        </p>
        <button className="bg-white text-neutral-900 px-8 py-3.5 font-bold text-xs hover:bg-neutral-200 transition-colors">
          ACQUIRE FOUNDRY SPECIMENS
        </button>
      </div>
    </section>
  );
}
