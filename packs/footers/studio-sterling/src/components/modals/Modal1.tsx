import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export function Modal1() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-4xl mx-auto border border-black bg-neutral-100 p-2">
        <div className="bg-white border border-black p-6 md:p-8">
          <div className="flex justify-between items-center border-b border-black pb-4 mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">MODAL SPEC // 01</span>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">PROJECT DETAIL DOSSIER</h3>
            </div>
            <button className="border border-black p-1.5 hover:bg-black hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="aspect-[4/3] border border-black overflow-hidden bg-neutral-200">
              <img 
                src="https://picsum.photos/seed/modalproject/600/450" 
                alt="Project Detail" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            <div className="space-y-3 text-xs uppercase tracking-wider">
              <div className="border-b border-black pb-2">
                <span className="font-bold text-neutral-500 block">CLIENT</span>
                <span>Tate Modern Permanent Galleries</span>
              </div>
              <div className="border-b border-black pb-2">
                <span className="font-bold text-neutral-500 block">TIMELINE</span>
                <span>2024–2025</span>
              </div>
              <div className="border-b border-black pb-2">
                <span className="font-bold text-neutral-500 block">DISCIPLINE</span>
                <span>Spatial Wayfinding & Signage System</span>
              </div>
            </div>
          </div>
          <p className="text-xs uppercase tracking-wider text-neutral-700 leading-relaxed border-t border-black pt-4 mb-6">
            Complete overhaul of gallery visitor navigation utilizing custom grotesk typography, acid-etched aluminum plaques, and high-contrast spatial zoning.
          </p>
          <div className="flex justify-end gap-3">
            <button className="border border-black px-4 py-2 text-xs font-bold uppercase hover:bg-neutral-200">
              Close Dossier
            </button>
            <button className="bg-black text-white px-4 py-2 text-xs font-bold uppercase hover:bg-neutral-800 flex items-center gap-1">
              Download PDF Spec <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
