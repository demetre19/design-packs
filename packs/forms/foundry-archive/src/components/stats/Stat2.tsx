import React from 'react';

export function Stat2() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">02. STAT ROW AS A TIMELINE STRIP</h2>
          <span className="text-xs text-neutral-500">CHRONOLOGICAL METRICS</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-800 text-center p-8">
          <div className="p-4">
            <div className="text-4xl font-bold text-white mb-1">1757</div>
            <div className="text-[10px] text-neutral-500 uppercase">Parma Manuale Typografico</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-white mb-1">1961</div>
            <div className="text-[10px] text-neutral-500 uppercase">Imprimerie Nationale Plates</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-white mb-1">1983</div>
            <div className="text-[10px] text-neutral-500 uppercase">Digital PostScript Encoding</div>
          </div>
        </div>
      </div>
    </section>
  );
}
