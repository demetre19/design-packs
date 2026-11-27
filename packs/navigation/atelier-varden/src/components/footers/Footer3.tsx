import React from 'react';

export function Footer3() {
  return (
    <footer className="w-full bg-[#fafaf8] border-t border-[#e2e0d8] py-12 font-sans">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-3">
          <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
          <span className="text-sm font-medium tracking-tight text-[#16171a]">ATELIER VARDEN</span>
          <span className="text-xs font-mono text-stone-400">/ ZÜRICH · TOKYO</span>
        </div>
        <div className="flex items-center space-x-8 text-xs font-mono text-stone-600">
          <a href="#works" className="hover:text-[#b5482e]">WORKS</a>
          <a href="#practice" className="hover:text-[#b5482e]">PRACTICE</a>
          <a href="#journal" className="hover:text-[#b5482e]">JOURNAL</a>
          <a href="#contact" className="hover:text-[#b5482e]">CONTACT</a>
        </div>
        <div className="text-xs font-mono text-stone-400">
          © 2026
        </div>
      </div>
    </footer>
  );
}
