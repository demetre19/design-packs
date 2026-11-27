import React from 'react';

export function Footer3() {
  return (
    <footer className="w-full bg-white text-black border-b border-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-black pb-4 mb-8 flex justify-between items-end">
          <span className="text-4xl font-black uppercase font-serif-editorial">COLOPHON*</span>
          <span className="text-xs font-mono uppercase text-zinc-500">Vol. 09 // Complete Grid</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-[11px] font-mono leading-relaxed text-zinc-700 mb-12">
          <div>
            <strong className="block text-black uppercase mb-1">Publisher</strong>
            VAULT Publishing Ltd. Paris &amp; Tokyo
          </div>
          <div>
            <strong className="block text-black uppercase mb-1">Editor-in-Chief</strong>
            Marcus Vance
          </div>
          <div>
            <strong className="block text-black uppercase mb-1">Art Direction</strong>
            Studio Noir Paris
          </div>
          <div>
            <strong className="block text-black uppercase mb-1">Typography</strong>
            Space Grotesk &amp; Playfair
          </div>
          <div>
            <strong className="block text-black uppercase mb-1">Paper Stock</strong>
            140gsm Munken Lynx Raw
          </div>
          <div>
            <strong className="block text-black uppercase mb-1">Distribution</strong>
            Global Independent Press
          </div>
        </div>
        <div className="border-t border-black pt-6 flex justify-between items-center text-[10px] font-mono uppercase text-zinc-500">
          <span>ISSN 2940-1029</span>
          <span>&copy; 2026 VAULT EDITORIAL</span>
        </div>
      </div>
    </footer>
  );
}
