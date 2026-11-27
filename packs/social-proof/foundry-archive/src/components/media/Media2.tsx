import React from 'react';
import { FileText, Image as ImageIcon } from 'lucide-react';

export function Media2() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">02. GALLERY OF SMALL FRAMED SPECIMENS</h2>
          <span className="text-xs text-neutral-500">CABINET GALLERY</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-neutral-950 border border-neutral-800 p-4">
              <div className="bg-neutral-900 border border-neutral-800 h-36 flex items-center justify-center text-neutral-600 mb-3">
                <span className="text-xs">SPECIMEN THUMBNAIL #{n}</span>
              </div>
              <h4 className="text-xs font-bold text-white mb-1">Matrix Strike #{50 + n}</h4>
              <p className="text-[11px] text-neutral-400 font-sans">Cast in Munich, 1961.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
