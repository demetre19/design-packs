import React from 'react';
import { Award, Compass } from 'lucide-react';

export function BlogCard4() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      {/* Article header with certificate-style meta */}
      <div className="max-w-3xl mx-auto bg-white border-2 border-[#232a30] p-8 md:p-12 space-y-6 shadow-sm">
        <div className="flex justify-between items-center border-b border-[#d0d0cc] pb-4 font-mono text-[10px] text-[#232a30]/60">
          <span className="text-[#2e5e8e] uppercase tracking-[0.3em]">CERTIFICATE MONOGRAPH</span>
          <span className="tracking-widest">REF. 9942-CERT</span>
        </div>

        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1c2128]/5 border border-[#d0d0cc]">
            <Award className="w-3.5 h-3.5 text-[#2e5e8e]" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#232a30]">GENEVA ATELIER PUBLICATION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.06em] text-[#232a30]">
            The Precision of Temperature-Compensated Balances
          </h2>
          <p className="font-mono text-xs text-[#232a30]/70 tracking-wider leading-relaxed pt-2">
            Authored by Master Watchmaker Jean-Pierre Vaucher. Detailing how alloy composition stabilizes oscillation frequency across extreme climatic variations from -10°C to +40°C.
          </p>
        </div>

        <div className="pt-6 border-t border-[#d0d0cc] flex justify-between items-center font-mono text-xs">
          <span className="text-[#232a30]/60">PUBLISHED: 22.11.2026</span>
          <button className="bg-[#2e5e8e] text-white tracking-[0.25em] px-6 py-2.5 hover:bg-[#232a30] transition-colors">
            DOWNLOAD PDF
          </button>
        </div>
      </div>
    </section>
  );
}
