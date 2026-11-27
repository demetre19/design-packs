import React from 'react';
import { Zap } from 'lucide-react';

export function Footer2() {
  return (
    <footer className="bg-[#101114] border-t border-[#272a33] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-12 border-b border-[#272a33]">
          <div>
            <span className="font-mono-spec text-[10px] text-neutral-500 block">HEADQUARTERS</span>
            <span className="font-mono-spec text-sm font-bold text-white mt-1 block">MUNICH // GERMANY</span>
          </div>
          <div>
            <span className="font-mono-spec text-[10px] text-neutral-500 block">TEST TRACK</span>
            <span className="font-mono-spec text-sm font-bold text-white mt-1 block">SUZUKA // JAPAN</span>
          </div>
          <div>
            <span className="font-mono-spec text-[10px] text-neutral-500 block">CONTACT TELEMETRY</span>
            <span className="font-mono-spec text-sm font-bold text-[#ff5a1f] mt-1 block">OPS@APEXMOTIVE.COM</span>
          </div>
          <div>
            <span className="font-mono-spec text-[10px] text-neutral-500 block">ENCRYPTION</span>
            <span className="font-mono-spec text-sm font-bold text-white mt-1 block">PGP // SHA-256</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center font-mono-spec text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#ff5a1f] clip-corner" />
            <span>APEX MOTIVE // SPEC-SHEET FOOTER</span>
          </div>
          <div>© 2026 APEX MOTIVE INC.</div>
        </div>
      </div>
    </footer>
  );
}
