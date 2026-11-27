import React from 'react';

export function BlogCard4() {
  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>FEATURED STORY // OVERLAPPING</span>
          <span>STORY 04</span>
        </div>
        <div className="relative">
          <div className="border border-black p-2 bg-black">
            <img src="https://picsum.photos/seed/bloghero4/1000/500.webp" alt="Featured story" className="w-full h-96 object-cover grayscale contrast-125" />
          </div>
          <div className="md:absolute md:-bottom-12 md:left-12 bg-black text-white p-8 border border-white/20 max-w-lg shadow-2xl mt-4 md:mt-0">
            <span className="text-[9px] uppercase tracking-widest font-mono text-zinc-400 block mb-2">COVER ESSAY // V-09</span>
            <h3 className="text-3xl font-black uppercase tracking-tight mb-4 font-serif-editorial">THE SHADOWS OF TOKYO</h3>
            <p className="text-xs font-mono text-zinc-300 leading-relaxed mb-6">
              A photographic exploration of nocturnal concrete structures and the silent figures draped in structured black gabardine who inhabit them.
            </p>
            <a href="#" className="text-xs font-mono uppercase tracking-widest border-b border-white pb-0.5 inline-block hover:opacity-60">
              Read Complete Story*
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
