import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer4() {
  return (
    <footer className="w-full bg-black text-white py-12 border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <div className="font-mono text-[10px] text-[#ff2e00] font-bold uppercase">// MINIMAL ARROW FOOTER</div>
          <div className="text-2xl font-black uppercase tracking-tight">VELOX APEX // 2026</div>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs">
          <span className="text-neutral-400">INITIALIZE BUILD DISPATCH</span>
          <div className="bg-[#ff2e00] text-black p-3 hover:bg-white transition-colors cursor-pointer">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
