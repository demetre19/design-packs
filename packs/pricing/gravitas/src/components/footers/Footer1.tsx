import React from 'react';
import { ArrowUpRight, Disc } from 'lucide-react';

export function Footer1() {
  return (
    <footer className="w-full bg-black text-white border-t border-neutral-800 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col items-center tracking-tighter leading-none text-center select-none py-6">
          <span className="font-extralight text-4xl sm:text-7xl text-white">GRAVITAS</span>
          <span className="font-light text-4xl sm:text-7xl text-neutral-200">GRAVITAS</span>
          <span className="font-normal text-4xl sm:text-7xl text-neutral-400">GRAVITAS</span>
          <span className="font-bold text-4xl sm:text-7xl text-neutral-600">GRAVITAS</span>
          <span className="font-black text-4xl sm:text-7xl text-neutral-800">GRAVITAS</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-900 pt-12 text-xs font-mono text-neutral-400">
          <div className="space-y-3">
            <span className="text-white font-bold block">SPECIMENS</span>
            <a href="#hairline" className="block hover:text-white">Hairline (200)</a>
            <a href="#regular" className="block hover:text-white">Regular (400)</a>
            <a href="#bold" className="block hover:text-white">Bold (700)</a>
            <a href="#black" className="block hover:text-white">Extra Black (900)</a>
          </div>
          <div className="space-y-3">
            <span className="text-white font-bold block">LICENSING</span>
            <a href="#desktop" className="block hover:text-white">Desktop Workstation</a>
            <a href="#web" className="block hover:text-white">Web WOFF2 Embedding</a>
            <a href="#enterprise" className="block hover:text-white">Enterprise Global</a>
            <a href="#eula" className="block hover:text-white">EULA Agreement</a>
          </div>
          <div className="space-y-3">
            <span className="text-white font-bold block">FOUNDRY</span>
            <a href="#about" className="block hover:text-white">Zurich Studio</a>
            <a href="#press" className="block hover:text-white">Press & Acclaim</a>
            <a href="#archive" className="block hover:text-white">Specimen Archive</a>
            <a href="#contact" className="block hover:text-white">Inquiries</a>
          </div>
          <div className="space-y-3">
            <span className="text-white font-bold block">SYSTEM</span>
            <span className="block text-neutral-500">VERSION 2.4 OTF</span>
            <span className="block text-neutral-500">LATIN / CYRILLIC</span>
            <span className="block text-neutral-500">© 2026 GRAVITAS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
