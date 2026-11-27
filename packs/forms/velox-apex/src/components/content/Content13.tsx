import React from 'react';
import { Plus } from 'lucide-react';

export function Content13() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-baseline border-b-2 border-black pb-3 mb-8">
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase font-bold">
            BACK MATTER / COLOPHON & ARCHIVAL PROVENANCE
          </div>
          <div className="font-mono text-[10px] text-[#ff2e00] font-bold uppercase">
            EDITION 2026.01 · TOKYO
          </div>
        </div>

        {/* Dense 4-Column Hairline-Divided Colophon Artifact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-black divide-y sm:divide-y-0 sm:divide-x divide-black font-mono text-[10px] leading-relaxed">
          {/* Column 1 */}
          <div className="py-4 sm:pr-6 space-y-4">
            <div className="font-bold text-[#ff2e00] tracking-[0.2em] uppercase">
              01 / ENGINEERING CREDITS
            </div>
            <dl className="space-y-2.5">
              <div className="flex justify-between gap-2 border-b border-neutral-200 pb-1">
                <dt className="text-neutral-500">CHIEF ARCHITECT</dt>
                <dd className="font-bold text-right">K. SATO</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-neutral-200 pb-1">
                <dt className="text-neutral-500">AERO DYNAMICS</dt>
                <dd className="font-bold text-right">M. VANCE</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-neutral-200 pb-1">
                <dt className="text-neutral-500">CELL CHEMISTRY</dt>
                <dd className="font-bold text-right">E. ROSTOVA</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-neutral-500">TEST PILOT LEAD</dt>
                <dd className="font-bold text-right">H. TANAKA</dd>
              </div>
            </dl>
          </div>

          {/* Column 2 */}
          <div className="py-4 sm:px-6 space-y-4">
            <div className="font-bold text-[#ff2e00] tracking-[0.2em] uppercase">
              02 / MATERIAL PROVENANCE
            </div>
            <dl className="space-y-2.5">
              <div className="flex justify-between gap-2 border-b border-neutral-200 pb-1">
                <dt className="text-neutral-500">CARBON TOW</dt>
                <dd className="font-bold text-right">TORAY T1100G</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-neutral-200 pb-1">
                <dt className="text-neutral-500">ALLOY BILLET</dt>
                <dd className="font-bold text-right">TI-6AL-4V ELI</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-neutral-200 pb-1">
                <dt className="text-neutral-500">DIELECTRIC FLUID</dt>
                <dd className="font-bold text-right">FC-3283 PURE</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-neutral-500">BRAKE CERAMIC</dt>
                <dd className="font-bold text-right">C/SIC-390</dd>
              </div>
            </dl>
          </div>

          {/* Column 3 */}
          <div className="py-4 sm:px-6 space-y-4">
            <div className="font-bold text-[#ff2e00] tracking-[0.2em] uppercase">
              03 / TYPOGRAPHIC SPEC
            </div>
            <p className="text-neutral-600">
              Set in geometric grotesk display weights (800–900) collided against 10px–11px tabular monospace registers. Zero drop shadows; zero rounded capsules.
            </p>
            <div className="border-t border-neutral-200 pt-2 flex justify-between">
              <span className="text-neutral-500">INK PALETTE</span>
              <span className="font-bold">#FFFFFF · #000000 · #FF2E00</span>
            </div>
          </div>

          {/* Column 4 */}
          <div className="py-4 sm:pl-6 flex flex-col justify-between">
            <div>
              <div className="font-bold text-[#ff2e00] tracking-[0.2em] uppercase mb-3">
                04 / HOMOLOGATION SEAL
              </div>
              <p className="text-neutral-600">
                Printed & assembled at Tokyo Test Dock #04, Koto-ku. All telemetry benchmarks recorded November 2026 under FIA Category E-Superbike rules.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-black flex items-center justify-between">
              <span className="text-3xl font-sans font-black tracking-tighter leading-none">V-999</span>
              <Plus className="w-4 h-4 text-[#ff2e00]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
