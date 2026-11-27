import React from 'react';
import { BookOpen, Shield } from 'lucide-react';

export function Footer4() {
  return (
    <footer className="w-full bg-neutral-900 text-neutral-400 py-16 px-6 font-mono border-t border-neutral-800 text-xs">
      <div className="max-w-6xl mx-auto">
        <div className="bg-neutral-950 border border-neutral-800 p-8 flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <div className="text-white font-serif font-bold text-lg mb-1">ARCHIVE NEWSLETTER SUBSCRIPTION</div>
            <p className="text-xs text-neutral-500 font-sans">Receive quarterly specimen slips and vault catalog updates.</p>
          </div>
          <div className="flex w-full md:w-auto space-x-2">
            <input type="email" placeholder="FELLOW@ARCHIVE.ORG" className="bg-neutral-900 border border-neutral-700 px-4 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none" />
            <button className="bg-white text-neutral-900 px-6 py-2 text-xs font-bold hover:bg-neutral-200">SUBSCRIBE</button>
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] text-neutral-600">
          <div>TYPOGRAPHICA ARCHIV — BASEL, SWITZERLAND</div>
          <div>ISSN 2451-8830</div>
        </div>
      </div>
    </footer>
  );
}
