import React from 'react';

export function Hero3() {
  return (
    <section className="w-full bg-white text-black border-b border-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="text-9xl md:text-[14rem] font-black font-serif-editorial leading-none tracking-tighter block -mb-12">
              09
            </span>
            <div className="border-t border-black pt-6">
              <span className="text-xs uppercase tracking-widest font-mono text-zinc-500 block mb-2">Issue Statement</span>
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
                VERTIGO OF LINES
              </h1>
              <p className="text-xs font-mono text-zinc-700 leading-relaxed">
                Verticality explored through severe tailoring, structured shoulders, and floor-sweeping gabardine in pristine obsidian and chalk white.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-3 gap-4">
            <div className="border border-black p-1 bg-black">
              <img src="https://picsum.photos/seed/vstrip1/300/600.webp" alt="Strip 1" className="w-full h-80 object-cover grayscale" />
            </div>
            <div className="border border-black p-1 bg-black -mt-6">
              <img src="https://picsum.photos/seed/vstrip2/300/600.webp" alt="Strip 2" className="w-full h-80 object-cover grayscale" />
            </div>
            <div className="border border-black p-1 bg-black">
              <img src="https://picsum.photos/seed/vstrip3/300/600.webp" alt="Strip 3" className="w-full h-80 object-cover grayscale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
