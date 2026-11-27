import React from 'react';
import { X } from 'lucide-react';

export function Modal3() {
  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-4xl mx-auto border border-black p-4 bg-zinc-50">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-4">
          <span>IMAGE ZOOM MODAL // PLATE 09</span>
          <button className="p-1 hover:bg-black hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white border border-black p-4">
          <div className="md:col-span-8 border border-black p-1 bg-black">
            <img src="https://picsum.photos/seed/modalzoom/800/600.webp" alt="Zoomed plate" className="w-full h-80 object-cover grayscale" />
          </div>
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono uppercase text-zinc-500 block mb-2">Plate Specification</span>
              <h4 className="text-xl font-black uppercase tracking-tight mb-2">DOUBLE-FACED CASHMERE COAT</h4>
              <p className="text-xs font-mono text-zinc-700 leading-relaxed mb-4">
                Photographed in Marseille. Heavyweight virgin cashmere with untreated raw selvedge edging.
              </p>
            </div>
            <div className="border-t border-black pt-4 text-[10px] font-mono uppercase text-zinc-500">
              <span>Edition of 500 // 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
