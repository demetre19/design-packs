import React from 'react';
import { Terminal } from 'lucide-react';

export function Footer4() {
  return (
    <footer className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="p-8 md:p-12 text-center border-b border-[#111] bg-[#f8f8f6]">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            KRAFTWERK VGH-99
          </h2>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#666] mt-3">STUTTGART // TOKYO // HOMOLOGATION ARCHIVE</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#111] text-[10px]">
          <div className="p-4">
            <span className="text-[#666] block text-[8px]">LOCATION</span>
            <span className="font-bold">STUTTGART LAB 04</span>
          </div>
          <div className="p-4">
            <span className="text-[#666] block text-[8px]">ENCRYPTION</span>
            <span className="font-bold">SHA-256 SECURE</span>
          </div>
          <div className="p-4">
            <span className="text-[#666] block text-[8px]">VERSION</span>
            <span className="font-bold">2026.4 FINAL</span>
          </div>
          <div className="p-4 bg-[#111] text-[#e8e8e6] flex items-center justify-center font-bold">
            <span>ARCHIVE SECURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
