import React from 'react';
import { BookOpen, Shield } from 'lucide-react';

export function Footer3() {
  return (
    <footer className="w-full bg-neutral-900 text-neutral-400 py-16 px-6 font-mono border-t border-neutral-800 text-xs flex">
      <div className="bg-neutral-950 border-r border-neutral-800 px-4 py-8 flex items-center justify-center font-mono text-[10px] tracking-widest text-neutral-500 uppercase [writing-mode:vertical-rl] rotate-180">
        COLOPHON // SECTION F
      </div>
      <div className="max-w-6xl mx-auto flex-1 pl-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-white font-bold mb-2">TYPOGRAPHIC RESEARCH</div>
          <p className="text-[11px] font-sans text-neutral-500">
            Dedicated to the scholarly preservation and digital distribution of master typeface revivals.
          </p>
        </div>
        <div>
          <div className="text-white font-bold mb-2">CURATORIAL BOARD</div>
          <p className="text-[11px] font-sans text-neutral-500">
            Dr. H. Vanderbilt, Prof. H. Vane, Marcus Thorne.
          </p>
        </div>
        <div>
          <div className="text-white font-bold mb-2">DOC ID</div>
          <p className="text-[11px] font-mono text-neutral-500">
            #ARC-FOOTER-998
          </p>
        </div>
      </div>
    </footer>
  );
}
