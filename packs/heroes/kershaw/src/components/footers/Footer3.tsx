import React from 'react';

export function Footer3() {
  return (
    <footer className="bg-[#0c0d0f] text-white py-12 px-6 border-t border-[#22262f] font-mono text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500">
        <span>[ 01 // KERSHAW DYNAMICS LABS ]</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#ffd500]">PRIVACY</a>
          <a href="#" className="hover:text-[#ffd500]">TERMS</a>
          <a href="#" className="hover:text-[#ffd500]">SECURITY</a>
        </div>
        <span>CELL 04 // NOMINAL</span>
      </div>
    </footer>
  );
}
