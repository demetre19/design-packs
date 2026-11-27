import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';

export const Navbar4: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#f7f6f3] text-[#14161a] border-b border-[#14161a]/15 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Compass className="w-6 h-6 text-[#14161a]" />
          <span className="font-extrabold tracking-tight text-xl uppercase font-sans">
            KANTILEVER<span className="text-[#ffc72c]">.ARCH</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-block font-mono text-xs bg-[#14161a]/5 px-3 py-1 text-[#14161a]/70">
            INDEX // 44.0
          </span>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#14161a] text-[#f7f6f3] text-xs font-bold uppercase tracking-wider hover:bg-[#ffc72c] hover:text-[#14161a] transition-colors"
          >
            <Menu className="w-4 h-4" /> Menu
          </button>
        </div>
      </div>

      {/* Full-screen diagonal-sliced menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#14161a] text-[#f7f6f3] flex flex-col justify-between p-8 md:p-16 animate-fadeIn">
          <div className="flex justify-between items-center max-w-6xl w-full mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-[#ffc72c] transform skew-x-[-12deg]" />
              <span className="font-extrabold tracking-tight text-xl uppercase text-[#f7f6f3]">
                KANTILEVER // NAVIGATOR
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 bg-[#ffc72c] text-[#14161a] hover:bg-[#f7f6f3] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 my-auto">
            <div className="space-y-6">
              <span className="font-mono text-xs text-[#ffc72c] uppercase tracking-widest">// INDEX DIRECTORY</span>
              <ul className="space-y-4 text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
                <li>
                  <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-[#ffc72c] flex items-center gap-4 group">
                    <span className="text-xs font-mono text-[#f7f6f3]/40 group-hover:text-[#ffc72c]">01</span>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#practice" onClick={() => setIsOpen(false)} className="hover:text-[#ffc72c] flex items-center gap-4 group">
                    <span className="text-xs font-mono text-[#f7f6f3]/40 group-hover:text-[#ffc72c]">02</span>
                    Practice
                  </a>
                </li>
                <li>
                  <a href="#research" onClick={() => setIsOpen(false)} className="hover:text-[#ffc72c] flex items-center gap-4 group">
                    <span className="text-xs font-mono text-[#f7f6f3]/40 group-hover:text-[#ffc72c]">03</span>
                    Research
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#ffc72c] flex items-center gap-4 group">
                    <span className="text-xs font-mono text-[#f7f6f3]/40 group-hover:text-[#ffc72c]">04</span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-l border-[#f7f6f3]/15 pl-8 hidden md:flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#ffc72c] uppercase tracking-widest">// LOCATIONS</span>
                <p className="mt-4 text-sm text-[#f7f6f3]/80 leading-relaxed font-mono">
                  ZURICH: TONY-ARED-STRASSE 14<br />
                  TOKYO: GINZA 6-CHOME 10-1<br />
                  LONDON: SHOREDITCH HIGH ST 42
                </p>
              </div>
              <div className="bg-[#ffc72c] text-[#14161a] p-6 transform skew-x-[-6deg]">
                <p className="font-bold uppercase text-xs">Direct Consultation</p>
                <p className="font-mono text-sm mt-1">brief@kantilever.arch</p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl w-full mx-auto flex justify-between items-center text-xs font-mono text-[#f7f6f3]/50 border-t border-[#f7f6f3]/15 pt-6">
            <span>© 2026 KANTILEVER ARCHITECTURE PRACTICE</span>
            <span>DIAGONAL GEOMETRY SYSTEM</span>
          </div>
        </div>
      )}
    </header>
  );
};
