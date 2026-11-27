import React from 'react';

export function Cta3() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="bg-white border-2 border-[#232a30] p-8 md:p-12 text-center space-y-6 shadow-sm max-w-2xl mx-auto">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">CTA 03 · MINIMAL MICRO-LABEL + HAIRLINE BUTTON</div>
        <h2 className="text-2xl font-light tracking-wide text-[#232a30]">Request the 2026 Atelier Catalogue</h2>
        <p className="font-mono text-xs text-[#232a30]/70 tracking-wider">
          Hardbound monograph detailing our complete collection of movements and complications.
        </p>
        <button className="border border-[#232a30] text-[#232a30] font-mono text-xs tracking-[0.25em] px-8 py-3 hover:border-[#2e5e8e] hover:text-[#2e5e8e] transition-colors">
          ORDER HARDBOUND CATALOGUE
        </button>
      </div>
    </section>
  );
}
