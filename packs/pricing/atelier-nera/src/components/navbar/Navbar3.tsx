import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Navbar3() {
  return (
    <header className="w-full max-w-6xl mx-auto px-6 py-6 border-b border-black/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-black inline-block" />
          <a href="#" className="font-light tracking-tight lowercase text-sm">atelier nera editorial</a>
        </div>
        <div className="flex items-center gap-3 text-xs font-light">
          <span className="text-black/40">index</span>
          <ArrowDown className="w-3 h-3 stroke-[1.5]" />
        </div>
      </div>
    </header>
  );
}
