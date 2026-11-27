import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar1: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#f7f6f3] text-[#14161a] border-b border-[#14161a]/15 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-[#ffc72c] transform skew-x-[-12deg]" />
          <span className="font-extrabold tracking-tight text-xl uppercase font-sans">
            KANTILEVER<span className="text-[#ffc72c] ml-1">//</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase">
          <a href="#projects" className="hover:text-[#ffc72c] transition-colors flex items-center gap-1">
            Projects <span className="text-[10px] text-[#14161a]/40 font-mono">01</span>
          </a>
          <a href="#practice" className="hover:text-[#ffc72c] transition-colors flex items-center gap-1">
            Practice <span className="text-[10px] text-[#14161a]/40 font-mono">02</span>
          </a>
          <a href="#research" className="hover:text-[#ffc72c] transition-colors flex items-center gap-1">
            Research <span className="text-[10px] text-[#14161a]/40 font-mono">03</span>
          </a>
          <a href="#journal" className="hover:text-[#ffc72c] transition-colors flex items-center gap-1">
            Journal <span className="text-[10px] text-[#14161a]/40 font-mono">04</span>
          </a>
        </nav>

        {/* CTA with Diagonal Corner Cut */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center px-6 py-3 bg-[#14161a] text-[#f7f6f3] text-xs font-bold uppercase tracking-wider overflow-hidden group clip-diagonal-corner transition-transform hover:-translate-y-0.5"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)' }}
          >
            <span className="absolute inset-0 bg-[#ffc72c] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 group-hover:text-[#14161a] flex items-center gap-2 transition-colors">
              Inquire Brief <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#14161a] hover:bg-[#14161a]/5 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f7f6f3] border-b border-[#14161a]/15 px-6 py-6 space-y-4">
          <a href="#projects" className="block text-lg font-bold uppercase">Projects</a>
          <a href="#practice" className="block text-lg font-bold uppercase">Practice</a>
          <a href="#research" className="block text-lg font-bold uppercase">Research</a>
          <a href="#journal" className="block text-lg font-bold uppercase">Journal</a>
          <a
            href="#contact"
            className="block text-center py-3 bg-[#ffc72c] text-[#14161a] font-bold uppercase text-sm"
          >
            Inquire Brief
          </a>
        </div>
      )}
    </header>
  );
};
