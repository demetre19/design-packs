import React from 'react';
import { BookOpen, Shield } from 'lucide-react';

export function Footer2() {
  return (
    <footer className="w-full bg-neutral-900 text-neutral-400 py-16 px-6 font-mono border-t border-neutral-800 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center border-b border-neutral-800 pb-12 mb-8">
        <div>
          <div className="text-3xl font-serif font-bold text-white mb-2">ÉPOQUE FONTAINE</div>
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest">CATALOG REFERENCE #883-Z</span>
        </div>
        <div className="mt-6 md:mt-0 flex items-center space-x-4">
          <span className="text-[10px] text-neutral-500">VAULT STATUS: SECURE</span>
          <div className="w-2.5 h-2.5 bg-neutral-400"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-[10px] text-neutral-600 flex justify-between">
        <span>ESTABLISHED 1961 — BASEL SWITZERLAND</span>
        <span>ALL RIGHTS RESERVED UNDER INTERNATIONAL COPYRIGHT CONVENTIONS</span>
      </div>
    </footer>
  );
}
