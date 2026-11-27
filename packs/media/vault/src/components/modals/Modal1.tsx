import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export function Modal1() {
  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-4xl mx-auto border border-black p-4 bg-zinc-50">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-6">
          <span>ARTICLE PREVIEW MODAL // 01</span>
          <button className="p-1 hover:bg-black hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-black p-6">
          <div>
            <span className="text-[9px] font-mono uppercase text-zinc-500 block mb-2">Essay Excerpt</span>
            <h3 className="text-3xl font-black uppercase tracking-tight mb-4 font-serif-editorial">THE ARCHITECTURE OF SILENCE</h3>
            <p className="text-xs font-mono leading-relaxed text-zinc-700 mb-6">
              When color is eliminated, the eye is forced to interrogate texture, shadow, and silhouette. The monochrome garment acts as a blank canvas upon which light etches its own transitory patterns...
            </p>
            <button className="bg-black text-white px-6 py-2.5 text-xs uppercase tracking-widest font-mono flex items-center gap-2 hover:bg-zinc-800 transition-colors">
              Read Full Article <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="border border-black p-1 bg-black">
            <img src="https://picsum.photos/seed/modal1/500/400.webp" alt="Modal preview" className="w-full h-64 object-cover grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
}
