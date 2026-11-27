import React from 'react';
import { Layers } from 'lucide-react';

export const Navbar3: React.FC = () => {
  return (
    <header className="w-full bg-[#f7f6f3] text-[#14161a] border-b border-[#14161a]/15 sticky top-0 z-50">
      {/* Angled Accent Strip Banner on top */}
      <div className="bg-[#14161a] text-[#ffc72c] text-[10px] font-mono tracking-widest py-1 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex items-center justify-between uppercase">
          <span>// SPECIFICATION 2026.4 ACTIVE</span>
          <span className="hidden sm:inline">STRUCTURAL CANTILEVER TOLERANCE ±0.02MM</span>
          <span>LAT/LONG 47.3769° N, 8.5417° E</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-[#ffc72c] text-[#14161a] transform skew-x-[-12deg]">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold tracking-tight text-lg uppercase block leading-none">
              KANTILEVER
            </span>
            <span className="text-[10px] font-mono text-[#14161a]/60 uppercase">Architectural Practice</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
          <a href="#portfolio" className="hover:text-[#ffc72c] transition-colors">Portfolio</a>
          <a href="#manifesto" className="hover:text-[#ffc72c] transition-colors">Manifesto</a>
          <a href="#sustainability" className="hover:text-[#ffc72c] transition-colors">Sustainability</a>
          <a href="#press" className="hover:text-[#ffc72c] transition-colors">Press</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#inquiry"
            className="px-5 py-2.5 border-2 border-[#14161a] text-[#14161a] text-xs font-bold uppercase tracking-wider hover:bg-[#14161a] hover:text-[#f7f6f3] transition-colors"
          >
            Project Brief
          </a>
        </div>
      </div>
    </header>
  );
};
