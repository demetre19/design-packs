import React from 'react';
import { ArrowUpRight, Disc } from 'lucide-react';

export function Footer2() {
  return (
    <footer className="w-full bg-black text-white border-t border-neutral-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-neutral-800 pb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Disc className="w-5 h-5 text-white" />
              <span className="font-bold tracking-tight text-lg">Gravitas Foundry</span>
            </div>
            <p className="text-xs font-light text-neutral-400 leading-relaxed">
              Precision engineered type specimens designed for high-density editorial publishing and digital interfaces.
            </p>
          </div>
          <div className="space-y-4 font-mono text-xs text-neutral-400">
            <span className="text-white font-bold block">HEADQUARTERS</span>
            <p>Limmatstrasse 48<br />8005 Zurich, Switzerland</p>
            <p>studio@gravitas-foundry.ch</p>
          </div>
          <div className="space-y-4 font-mono text-xs text-neutral-400">
            <span className="text-white font-bold block">SPECIMEN DESK</span>
            <p>Active cuts: 12 weights<br />Format: OpenType Variable</p>
            <span className="text-white hover:underline cursor-pointer block pt-2">Download PDF Specimen →</span>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center text-[10px] font-mono text-neutral-400">
          <span>ALL RIGHTS RESERVED © 2026</span>
          <span>MONOCHROME TYPE DESIGN SYSTEM</span>
        </div>
      </div>
    </footer>
  );
}
