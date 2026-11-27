import React, { useState } from 'react';
import { ChevronDown, Sparkles, Menu, X } from 'lucide-react';

export function Navbar4() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#faf6f0] px-6 py-4 border-b border-[#122420]/10 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl text-[#122420] font-medium">Verdant & Vane</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#122420]">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-[#2a7a6d] transition-colors py-2"
            >
              <span>Practices</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-[#faf6f0] border border-[#122420]/15 rounded-2xl shadow-xl p-4 mt-2 grid gap-3 z-50">
                <a href="#integrative" className="p-2 rounded-xl hover:bg-[#e8f0ec] transition-colors block">
                  <div className="text-xs uppercase tracking-wider text-[#2a7a6d] font-semibold">Clinical</div>
                  <div className="text-sm font-serif text-[#122420]">Integrative Medicine & Longevity</div>
                </a>
                <a href="#branding" className="p-2 rounded-xl hover:bg-[#e8f0ec] transition-colors block">
                  <div className="text-xs uppercase tracking-wider text-[#2a7a6d] font-semibold">Studio</div>
                  <div className="text-sm font-serif text-[#122420]">Boutique Brand Architecture</div>
                </a>
                <a href="#workshops" className="p-2 rounded-xl hover:bg-[#e8f0ec] transition-colors block">
                  <div className="text-xs uppercase tracking-wider text-[#2a7a6d] font-semibold">Education</div>
                  <div className="text-sm font-serif text-[#122420]">Executive Health Retreats</div>
                </a>
              </div>
            )}
          </div>

          <a href="#science" className="hover:text-[#2a7a6d] transition-colors">Science & Research</a>
          <a href="#about" className="hover:text-[#2a7a6d] transition-colors">Our Ethos</a>
          <a href="#contact" className="hover:text-[#2a7a6d] transition-colors">Inquiries</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#consult"
            className="px-5 py-2.5 rounded-full bg-[#1d4f47] text-[#faf6f0] text-sm font-medium hover:bg-[#153b34] transition-all"
          >
            Inquire Now
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#122420]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}
