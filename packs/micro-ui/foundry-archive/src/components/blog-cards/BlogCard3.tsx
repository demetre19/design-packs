import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';

export function BlogCard3() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">03. ARCHIVE-GRID MIXED SCALE</h2>
          <span className="text-xs text-neutral-500">MIXED FORMAT</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-neutral-950 border border-neutral-800 p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-neutral-500 uppercase block mb-2">FEATURED MONOGRAPH // 1961</span>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">The Anatomy of Bracketed Serifs in Eighteenth-Century Printing</h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
                An exhaustive study of Giambattista Bodoni's punchcutting methods, detailing the precise angle of transition from hairline terminals to heavy vertical stems.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-xs text-neutral-500">
              <span>AUTHOR: DR. H. VANDERBILT</span>
              <span>READ TIME: 14 MIN</span>
            </div>
          </div>
          <div className="lg:col-span-4 bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-neutral-500 uppercase block mb-2">SHORT NOTE // 1983</span>
              <h4 className="text-sm font-bold text-neutral-200 mb-2">Digital Bezier Interpolation</h4>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Initial findings on curve smoothness when converting lead matrix scans into Type 1 font files.
              </p>
            </div>
            <span className="text-[10px] text-neutral-500 pt-4 border-t border-neutral-800">REF #83-B</span>
          </div>
        </div>
      </div>
    </section>
  );
}
