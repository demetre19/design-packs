import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export function Cta3() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border border-[#111] bg-white p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <Terminal className="w-5 h-5 text-[#111]" />
          <div>
            <h3 className="text-lg font-black uppercase tracking-tight">KRAFTWERK VGH-99 ARCHIVE DOSSIER</h3>
            <p className="text-[10px] text-[#666] uppercase">Access complete CAD schematics and telemetry logs instantly.</p>
          </div>
        </div>

        <button 
          onClick={() => alert('Accessing archive dossier...')}
          className="px-6 py-3 bg-[#111] text-[#e8e8e6] font-bold text-[10px] uppercase tracking-widest hover:bg-[#333] transition-colors cursor-pointer flex items-center space-x-1 shrink-0"
        >
          <span>ACCESS DOSSIER</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
