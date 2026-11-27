import React from 'react';

export function Footer3() {
  return (
    <footer className="w-full bg-[#f4f4f2] border-t border-[#d0d0cc] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#232a30]">
          VAUCHER & FILS <span className="text-[#2e5e8e]">·</span> REF. 1924-COLOPHON
        </div>
        <div className="flex space-x-8 font-mono text-xs text-[#232a30]/70 tracking-[0.25em]">
          <a href="#privacy" className="hover:text-[#2e5e8e]">PRIVACY</a>
          <a href="#terms" className="hover:text-[#2e5e8e]">TERMS</a>
          <a href="#press" className="hover:text-[#2e5e8e]">PRESS</a>
        </div>
        <div className="font-mono text-[10px] text-[#232a30]/40 tracking-widest">
          CAL. 8800 · GENEVA
        </div>
      </div>
    </footer>
  );
}
