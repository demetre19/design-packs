import React from 'react';

export function Media3() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">SINGLE FEATURE PLATE</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">MEDIA 03</span>
        </div>
        <div className="border border-black overflow-hidden bg-white">
          <div className="aspect-[21/9] w-full">
            <img src="https://picsum.photos/seed/featureplate/1200/500" alt="Feature Plate" className="w-full h-full object-cover grayscale contrast-125" />
          </div>
          <div className="bg-black text-white p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs uppercase tracking-widest">
            <div>
              <span className="font-bold">PLATE 03.1 // ARCHITECTURAL MONOGRAPH BINDING</span>
              <div className="text-[10px] text-neutral-400 mt-0.5">LARS MÜLLER PUBLISHERS, ZURICH</div>
            </div>
            <span className="border border-white px-2 py-1 text-[10px] mt-2 sm:mt-0">ARCHIVE SPECIMEN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
