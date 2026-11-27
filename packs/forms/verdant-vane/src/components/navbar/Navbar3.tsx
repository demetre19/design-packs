import React from 'react';
import { Search, User } from 'lucide-react';

export function Navbar3() {
  return (
    <header className="w-full bg-[#e8f0ec] pt-6 pb-3 px-6 border-b border-[#122420]/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top bar with search & account */}
        <div className="w-full flex justify-between items-center pb-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#2a7a6d]">
            <span>Clinical Wellness & Editorial Agency</span>
          </div>
          <div className="flex items-center gap-4 text-[#122420]">
            <button className="flex items-center gap-1.5 text-sm hover:text-[#2a7a6d]">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
            <div className="w-[1px] h-3 bg-[#122420]/20" />
            <button className="flex items-center gap-1.5 text-sm hover:text-[#2a7a6d]">
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </button>
          </div>
        </div>

        {/* Centered Wordmark */}
        <div className="text-center my-3">
          <h1 className="font-serif text-3xl md:text-4xl text-[#122420] tracking-wide">Verdant & Vane</h1>
        </div>

        {/* Full width link row */}
        <div className="w-full mt-4 pt-3 border-t border-[#122420]/10 flex flex-wrap justify-center gap-8 text-sm font-medium text-[#122420]">
          <a href="#overview" className="hover:text-[#2a7a6d] transition-colors">Overview</a>
          <a href="#offerings" className="hover:text-[#2a7a6d] transition-colors">Offerings</a>
          <a href="#methodology" className="hover:text-[#2a7a6d] transition-colors">Methodology</a>
          <a href="#insights" className="hover:text-[#2a7a6d] transition-colors">Insights</a>
          <a href="#accreditation" className="hover:text-[#2a7a6d] transition-colors">Accreditation</a>
          <a href="#locations" className="hover:text-[#2a7a6d] transition-colors">Locations</a>
        </div>
      </div>
    </header>
  );
}
