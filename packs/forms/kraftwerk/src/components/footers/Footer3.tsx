import React from 'react';
import { Terminal } from 'lucide-react';

export function Footer3() {
  return (
    <footer className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border border-[#111] bg-white p-4 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <Terminal className="w-4 h-4" />
          <span className="font-bold">KRAFTWERK ARCHIVE // MINIMAL</span>
        </div>
        <div className="flex items-center space-x-6 text-[#666]">
          <a href="#" className="hover:underline">PRIVACY</a>
          <a href="#" className="hover:underline">TERMS</a>
          <a href="#" className="hover:underline">DOSSIER</a>
        </div>
        <div className="mt-4 md:mt-0 text-[9px] text-[#888]">
          REF: FT-03
        </div>
      </div>
    </footer>
  );
}
