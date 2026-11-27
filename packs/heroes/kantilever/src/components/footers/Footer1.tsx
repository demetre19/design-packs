import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer1: React.FC = () => {
  return (
    <footer className="bg-[#14161a] text-[#f7f6f3] py-20 border-t border-[#f7f6f3]/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-[#ffc72c] transform skew-x-[-12deg]" />
            <span className="font-extrabold tracking-tight text-xl uppercase font-sans">
              KANTILEVER<span className="text-[#ffc72c]">_SYS</span>
            </span>
          </div>
          <p className="text-xs text-[#f7f6f3]/60 font-sans leading-relaxed">
            Contemporary architectural practice specialising in cantilevered structures and diagonal tectonic geometry.
          </p>
        </div>

        <div className="space-y-4">
          <span className="font-mono text-xs text-[#ffc72c] uppercase tracking-widest">// PRACTICE</span>
          <ul className="space-y-2 text-xs font-bold uppercase tracking-wider text-[#f7f6f3]/80">
            <li><a href="#projects" className="hover:text-[#ffc72c]">Selected Works</a></li>
            <li><a href="#manifesto" className="hover:text-[#ffc72c]">Manifesto</a></li>
            <li><a href="#sustainability" className="hover:text-[#ffc72c]">Sustainability</a></li>
            <li><a href="#awards" className="hover:text-[#ffc72c]">Awards & Press</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <span className="font-mono text-xs text-[#ffc72c] uppercase tracking-widest">// LOCATIONS</span>
          <ul className="space-y-2 text-xs font-mono text-[#f7f6f3]/80">
            <li>ZURICH // TONY-ARED-STRASSE 14</li>
            <li>TOKYO // GINZA 6-CHOME 10-1</li>
            <li>LONDON // SHOREDITCH ST 42</li>
          </ul>
        </div>

        <div className="space-y-4">
          <span className="font-mono text-xs text-[#ffc72c] uppercase tracking-widest">// INQUIRY BRIEF</span>
          <p className="text-xs text-[#f7f6f3]/60 font-sans">Submit structural project briefs directly to our partners.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider hover:bg-[#f7f6f3] transition-colors"
          >
            Inquire Now <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-[#f7f6f3]/10 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-[#f7f6f3]/40">
        <span>© 2026 KANTILEVER ARCHITECTURE. ALL RIGHTS RESERVED.</span>
        <span>DIAGONAL ARCHITECTURAL SYSTEM v4.4</span>
      </div>
    </footer>
  );
};
