import React from 'react';

export function Content10() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b-2 border-[#111111] font-mono text-[#111111] py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Top-Right Cornered Micro Footnote */}
        <div className="flex justify-between items-start text-[8px] uppercase tracking-[0.28em] text-[#555555] mb-6">
          <span>CONTENT-10 // TYPOGRAPHIC INTERRUPTION</span>
          <span className="border border-[#111111] px-2 py-1 text-[#111111] font-bold">
            FOOTNOTE A // MASS BUDGET 1,120 KG MAX
          </span>
        </div>

        {/* Rotated Vertical Left Attribution */}
        <div className="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[8px] uppercase tracking-[0.35em] text-[#555555] whitespace-nowrap">
          KRAFTWERK ENGINEERING THESIS // STUTTGART 1998–2026
        </div>

        {/* Full-Bleed Enormous Statement Fragment with Inline Cutout Tag */}
        <div className="relative py-2">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.75rem] font-black uppercase tracking-tighter leading-[0.84] break-words">
            MASS IS THE{' '}
            <span className="inline-block align-middle bg-[#111111] text-[#e8e8e6] text-[10px] md:text-xs font-bold tracking-[0.22em] px-3 py-1.5 mx-1 -translate-y-2 md:-translate-y-5">
              [REF: KW-INT-10 // ZERO SURPLUS]
            </span>{' '}
            ENEMY OF MECHANICAL TRUTH.
          </h2>
        </div>

        {/* Bottom Measurement Rule & Cornered Attribution */}
        <div className="mt-10 pt-3 border-t border-[#111111] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[9px] uppercase tracking-[0.22em]">
          <div className="flex items-center gap-4">
            <span className="font-bold">GRAM STRATEGY // EVERY BOLT HOLLOW-DRILLED</span>
            <span className="hidden md:inline text-[#555555]">TOLERANCE: -0.0 / +0.5 G</span>
          </div>
          <div className="text-[#555555]">
            ATTRIBUTION: CHASSIS GROUP STUTTGART — BINDER IV
          </div>
        </div>
      </div>
    </section>
  );
}
