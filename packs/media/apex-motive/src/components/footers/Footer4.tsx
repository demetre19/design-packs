import React from 'react';
import { Zap } from 'lucide-react';

export function Footer4() {
  return (
    <footer className="bg-[#101114] border-t border-[#272a33] pt-20 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-extrabold text-[18vw] text-white/[0.02] uppercase tracking-tighter">
          APEX MOTIVE
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#ff5a1f] clip-corner flex items-center justify-center font-bold text-black">
                <Zap size={16} />
              </div>
              <span className="font-extrabold text-lg tracking-tighter text-white">APEX MOTIVE</span>
            </div>
            <p className="font-mono-spec text-xs text-neutral-400">
              Absolute high-performance electric machinery. Zero emissions, brutal velocity.
            </p>
          </div>
          <div className="font-mono-spec text-xs text-neutral-400 space-y-2">
            <div className="text-[#ff5a1f] font-bold">NAVIGATION</div>
            <div><a href="#models" className="hover:text-white">Models & Pricing</a></div>
            <div><a href="#config" className="hover:text-white">Custom Configurator</a></div>
          </div>
          <div className="font-mono-spec text-xs text-neutral-400 space-y-2">
            <div className="text-[#ff5a1f] font-bold">SECURITY</div>
            <div>Encrypted Data Stream</div>
            <div>ISO 27001 Certified</div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#272a33] flex justify-between items-center font-mono-spec text-xs text-neutral-500">
          <span>© 2026 APEX MOTIVE INC.</span>
          <span className="text-[#ff5a1f]">SYSTEM // ONLINE</span>
        </div>
      </div>
    </footer>
  );
}
