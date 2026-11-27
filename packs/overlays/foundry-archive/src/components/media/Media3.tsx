import React from 'react';
import { FileText, Image as ImageIcon } from 'lucide-react';

export function Media3() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">03. SINGLE FEATURE PLATE WITH MUSEUM LABEL</h2>
          <span className="text-xs text-neutral-500">EXHIBIT 09</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 p-8 text-center">
          <div className="bg-neutral-900 border border-neutral-800 h-72 flex items-center justify-center text-neutral-600 mb-6">
            <span className="text-xs font-mono">MASTER TYPECASE PLATE #998</span>
          </div>
          <div className="border-t border-neutral-800 pt-4 max-w-lg mx-auto">
            <div className="text-sm font-serif font-bold text-white mb-1">The Caslon Chiswell Street Letterpress Specimen</div>
            <p className="text-xs text-neutral-400 font-sans">
              Hand-set lead type on handmade rag paper, framed under museum-grade UV-filtering acrylic. Cataloged October 1983.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
