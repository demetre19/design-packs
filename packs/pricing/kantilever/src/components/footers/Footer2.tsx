import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer2: React.FC = () => {
  return (
    <footer className="bg-[#14161a] text-[#f7f6f3] pt-28 pb-16 relative overflow-hidden">
      {/* Angled top edge */}
      <div className="absolute top-0 left-0 w-full h-16 bg-[#f7f6f3]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        <div className="space-y-4">
          <span className="font-mono text-xs text-[#ffc72c] uppercase">// ANGLED EDGE FOOTER</span>
          <h3 className="text-2xl font-extrabold uppercase">KANTILEVER PRACTICE</h3>
          <p className="text-xs text-[#f7f6f3]/70 font-sans">
            Rigorous geometric structural systems operating globally from Zurich and Tokyo.
          </p>
        </div>

        <div className="space-y-4 font-mono text-xs">
          <span className="text-[#ffc72c] uppercase">// QUICK INDEX</span>
          <div className="grid grid-cols-2 gap-2 uppercase font-bold text-[#f7f6f3]/80">
            <a href="#works" className="hover:text-[#ffc72c]">Works</a>
            <a href="#practice" className="hover:text-[#ffc72c]">Practice</a>
            <a href="#research" className="hover:text-[#ffc72c]">Research</a>
            <a href="#contact" className="hover:text-[#ffc72c]">Contact</a>
          </div>
        </div>

        <div className="space-y-4">
          <span className="font-mono text-xs text-[#ffc72c] uppercase">// DIRECT BRIEF</span>
          <div className="flex">
            <input
              type="email"
              placeholder="ENTER EMAIL"
              className="bg-[#f7f6f3]/10 px-4 py-3 text-xs text-[#f7f6f3] font-mono focus:outline-none w-full"
            />
            <button className="bg-[#ffc72c] text-[#14161a] px-4 font-bold text-xs uppercase hover:bg-[#f7f6f3] transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
