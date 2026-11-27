import React from 'react';

export function FeatureGrid3() {
  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>EDITORIAL ESSAYS // MULTI-COLUMN</span>
          <span>ISSUE NO. 09</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="border border-black p-6 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono uppercase text-zinc-500 block mb-2">Essay 01 // Aesthetics</span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 font-serif-editorial">THE REDUNDANCY OF COLOR</h3>
              <p className="text-[11px] font-mono leading-relaxed text-zinc-800 mb-6">
                When color is eliminated, the eye is forced to interrogate texture, shadow, and silhouette. The monochrome garment acts as a blank canvas upon which light etches its own transitory patterns throughout the day.
              </p>
            </div>
            <div className="border-t border-black pt-4 flex justify-between items-center text-[10px] font-mono uppercase">
              <span>By M. Vance</span>
              <span>6 Min Read</span>
            </div>
          </div>
          <div className="border border-black p-6 flex flex-col justify-between bg-black text-white">
            <div>
              <span className="text-[9px] font-mono uppercase text-zinc-400 block mb-2">Essay 02 // Craftsmanship</span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 font-serif-editorial">BRUTALIST SEAMS</h3>
              <p className="text-[11px] font-mono leading-relaxed text-zinc-300 mb-6">
                Exposed edges and raw hems are not mere stylistic whims; they are honest disclosures of how a garment is assembled. By refusing to conceal the inner mechanics, we celebrate the hands that shaped the fabric.
              </p>
            </div>
            <div className="border-t border-zinc-700 pt-4 flex justify-between items-center text-[10px] font-mono uppercase text-zinc-300">
              <span>By K. Sterling</span>
              <span>8 Min Read</span>
            </div>
          </div>
          <div className="border border-black p-6 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono uppercase text-zinc-500 block mb-2">Essay 03 // Architecture</span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 font-serif-editorial">CONCRETE MONOLITHS</h3>
              <p className="text-[11px] font-mono leading-relaxed text-zinc-800 mb-6">
                The brutalist architecture of Marseille served as the primary backdrop for our autumn collection. The coarse concrete textures mirror the dense weaves of our virgin wool overcoats and structured trousers.
              </p>
            </div>
            <div className="border-t border-black pt-4 flex justify-between items-center text-[10px] font-mono uppercase">
              <span>By S. Lords</span>
              <span>5 Min Read</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
