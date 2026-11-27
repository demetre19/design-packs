import React from 'react';
import { Watch, ChevronRight } from 'lucide-react';

export function Navbar3() {
  return (
    <header className="w-full bg-[#f4f4f2] border-b border-[#d0d0cc]">
      {/* Centered Masthead */}
      <div className="max-w-6xl mx-auto px-6 py-4 text-center border-b border-[#d0d0cc]/60 relative">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:block font-mono text-[10px] tracking-[0.25em] text-[#232a30]/60">
          REF. 1924-V
        </div>
        <div className="inline-flex items-center space-x-2">
          <Watch className="w-5 h-5 text-[#2e5e8e]" />
          <h1 className="font-mono text-sm uppercase tracking-[0.4em] font-bold text-[#232a30]">
            Vaucher & Fils
          </h1>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block font-mono text-[10px] tracking-[0.25em] text-[#2e5e8e]">
          GENÈVE · SWITZERLAND
        </div>
      </div>

      {/* Fine-ruled link row */}
      <div className="max-w-6xl mx-auto px-6 h-11 flex items-center justify-center space-x-12">
        {['Complications', 'Tourbillon', 'Chronographs', 'Atelier', 'Contact'].map((item, idx) => (
          <React.Fragment key={item}>
            {idx > 0 && <span className="text-[#d0d0cc]">·</span>}
            <a
              href={`#${item.toLowerCase()}`}
              className="text-[11px] uppercase tracking-[0.3em] text-[#232a30]/80 hover:text-[#2e5e8e] transition-colors font-medium flex items-center space-x-1"
            >
              <span>{item}</span>
            </a>
          </React.Fragment>
        ))}
      </div>
    </header>
  );
}
