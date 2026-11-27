import React from 'react';

export function Stat3() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">03. SINGLE SPOTLIGHT: FOUNDING YEAR</h2>
          <span className="text-xs text-neutral-500">MONUMENTAL METRIC</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 p-12">
          <div className="text-8xl font-bold text-white tracking-tight mb-4">1957</div>
          <div className="text-xs text-neutral-400 uppercase tracking-widest mb-6 font-mono">
            ESTABLISHMENT OF THE BASEL TYPOGRAPHIC PRESERVATION VAULT
          </div>
          <p className="text-xs text-neutral-500 font-sans max-w-lg mx-auto leading-relaxed">
            Over seven decades of continuous scholarly preservation, housing thousands of primary lead strikes and master copperplates.
          </p>
        </div>
      </div>
    </section>
  );
}
