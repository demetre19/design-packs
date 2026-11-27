import React from 'react';
import { Compass } from 'lucide-react';

export function Footer1() {
  return (
    <footer className="w-full bg-[#1c2128] text-white border-t border-[#2e5e8e]">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Compass className="w-4 h-4 text-[#2e5e8e]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] font-medium">Vaucher & Fils</span>
          </div>
          <p className="font-mono text-[11px] text-white/60 tracking-wider leading-relaxed">
            Geneva-crafted horological instruments of absolute precision. REF. 1924-F.
          </p>
        </div>

        <div className="space-y-3 font-mono text-xs">
          <div className="text-[#2e5e8e] uppercase tracking-[0.25em] text-[10px]">Atelier</div>
          {['Complications', 'Tourbillon', 'Chronographs', 'Manufacture'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block text-white/70 hover:text-[#2e5e8e] transition-colors tracking-widest">
              {item}
            </a>
          ))}
        </div>

        <div className="space-y-3 font-mono text-xs">
          <div className="text-[#2e5e8e] uppercase tracking-[0.25em] text-[10px]">Certification</div>
          {['Geneva Seal', 'Isochronism', 'Climatic Tests', 'Service Dossiers'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block text-white/70 hover:text-[#2e5e8e] transition-colors tracking-widest">
              {item}
            </a>
          ))}
        </div>

        <div className="space-y-3 font-mono text-xs">
          <div className="text-[#2e5e8e] uppercase tracking-[0.25em] text-[10px]">Geneva Headquarters</div>
          <p className="text-white/70 tracking-wider leading-relaxed">
            Rue du Rhône 42<br />
            1204 Genève, Switzerland
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 text-center font-mono text-[10px] text-white/40 tracking-[0.3em]">
        © 2026 VAUCHER & FILS SA. ALL RIGHTS RESERVED. REF. 5711-SYS.
      </div>
    </footer>
  );
}
