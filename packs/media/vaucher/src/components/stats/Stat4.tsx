import React from 'react';
import { Award } from 'lucide-react';

export function Stat4() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">STAT 04 · CERTIFICATE-STYLE STAT PANELS</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Certificate Metric Panels</h2>
      </div>

      <div className="max-w-2xl mx-auto bg-white border-2 border-[#232a30] p-8 md:p-12 text-center space-y-6 shadow-sm">
        <div className="font-mono text-[9px] text-[#2e5e8e] tracking-[0.3em]">OFFICIAL ATELIER CERTIFICATE METRICS</div>
        <Award className="w-8 h-8 text-[#2e5e8e] mx-auto opacity-80" />
        <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#d0d0cc]">
          <div>
            <div className="font-mono text-[10px] text-[#232a30]/50 tracking-widest">DEVIATION</div>
            <div className="font-mono text-2xl font-light text-[#232a30] mt-1">±0.4s</div>
          </div>
          <div>
            <div className="font-mono text-[10px] text-[#232a30]/50 tracking-widest">POSITIONAL TEST</div>
            <div className="font-mono text-2xl font-light text-[#2e5e8e] mt-1">6 POSITIONS</div>
          </div>
        </div>
        <div className="font-mono text-[10px] text-[#232a30]/40 tracking-[0.25em] pt-4">
          REF. STAT-CERT-9942 · GENEVA
        </div>
      </div>
    </section>
  );
}
