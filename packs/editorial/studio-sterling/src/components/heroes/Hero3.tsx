import React from 'react';

export function Hero3() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 border border-black p-2 bg-neutral-100">
          <div className="aspect-[3/4] border border-black overflow-hidden bg-neutral-300">
            <img 
              src="https://picsum.photos/seed/herothree/600/800" 
              alt="Studio Interior" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-widest font-bold mb-2 border-b border-black pb-2">
            CURRICULUM ARCHIVE // MARCUS STERLING
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            DIRECTOR & DESIGNER
          </h1>
          <div className="space-y-3 text-xs uppercase tracking-wider mb-6">
            <div className="flex justify-between border-b border-black pb-2">
              <span className="font-bold">CURRENT POSITION</span>
              <span>PRINCIPAL, STUDIO STERLING (2018–PRES)</span>
            </div>
            <div className="flex justify-between border-b border-black pb-2">
              <span className="font-bold">PREVIOUS PRACTICE</span>
              <span>ASSOCIATE, PENTAGRAM LONDON (2014–2018)</span>
            </div>
            <div className="flex justify-between border-b border-black pb-2">
              <span className="font-bold">EDUCATION</span>
              <span>MA TYPOGRAPHY, RCA (2012–2014)</span>
            </div>
          </div>
          <p className="text-[11px] text-neutral-700 leading-relaxed uppercase">
            Specializing in high-density print documents, bespoke typefaces, museum exhibition design, and architectural monographs.
          </p>
        </div>
      </div>
    </section>
  );
}
