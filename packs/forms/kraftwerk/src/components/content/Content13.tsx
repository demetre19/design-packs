import React from 'react';
import { Globe, ShieldCheck } from 'lucide-react';

export function Content13() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono text-[#111111] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto border-t-2 border-b-2 border-[#111111] py-8">
        {/* Top Colophon Title Strip */}
        <div className="flex flex-wrap items-center justify-between text-[9px] uppercase tracking-[0.28em] pb-6 border-b border-[#111111] mb-8">
          <span className="font-black">CONTENT-13 // ARCHIVAL COLOPHON &amp; PRODUCTION PROVENANCE</span>
          <span>BINDER IV // EDITION 2026.4 // PRINT RUN: 044 COPIES</span>
        </div>

        {/* 4-Column Dense Hairline-Separated Colophon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#111111] text-[9px] uppercase">
          {/* Col 1: Engineering & Archive Credits */}
          <div className="pb-6 sm:pb-0 sm:pr-6 space-y-2.5">
            <div className="font-black tracking-widest border-b border-[#111111] pb-1 mb-3">
              [01. ENGINEERING CREDITS]
            </div>
            {[
              ['CHIEF CHASSIS', 'K. WEISSENBORN'],
              ['AERODYNAMICS', 'DR. M. WEBER'],
              ['POWERTRAIN', 'K. SCHMIDT'],
              ['DEVELOPMENT DRIVER', 'H. VON STUCK'],
              ['TELEMETRY ARCHIVE', 'A. TAKAHASHI'],
              ['TECHNICAL TYPE', 'STUDIO VGH-99'],
            ].map(([role, person]) => (
              <div key={role} className="flex justify-between gap-2 border-b border-dotted border-[#999999] pb-1">
                <span className="text-[#555555]">{role}</span>
                <span className="font-bold text-right">{person}</span>
              </div>
            ))}
          </div>

          {/* Col 2: Material & Monochrome Specification */}
          <div className="py-6 sm:py-0 sm:px-6 space-y-2.5">
            <div className="font-black tracking-widest border-b border-[#111111] pb-1 mb-3">
              [02. PAPER &amp; INK SPEC]
            </div>
            <p className="text-[#444444] leading-relaxed">
              Typeset in Extended Grotesque 900 and Tabular Monospace at 9–11px. Printed on archival uncoated stock calibrated to zero chroma.
            </p>
            <div className="space-y-1 pt-2">
              {[
                ['GROUND PAPER', '#E8E8E6'],
                ['CARBON INK', '#111111'],
                ['CELL SURFACE', '#F4F4F0'],
                ['HAIRLINE RULE', '1.0 PX SOLID'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-[#555555]">{k}</span>
                  <span className="font-bold tabular-nums">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Laboratory Provenance */}
          <div className="py-6 sm:py-0 sm:px-6 space-y-2.5">
            <div className="font-black tracking-widest border-b border-[#111111] pb-1 mb-3">
              [03. PROVENANCE SITES]
            </div>
            <div className="space-y-2">
              <div className="border border-[#111111] p-2 bg-[#f4f4f0]">
                <div className="font-bold">FACILITY A — STUTTGART</div>
                <div className="text-[#555555] tabular-nums">48.7758° N, 9.1829° E</div>
              </div>
              <div className="border border-[#111111] p-2 bg-[#f4f4f0]">
                <div className="font-bold">FACILITY B — NÜRBURG</div>
                <div className="text-[#555555] tabular-nums">50.3356° N, 6.9475° E</div>
              </div>
              <div className="border border-[#111111] p-2 bg-[#f4f4f0]">
                <div className="font-bold">ARCHIVE C — TOKYO</div>
                <div className="text-[#555555] tabular-nums">35.6762° N, 139.6503° E</div>
              </div>
            </div>
          </div>

          {/* Col 4: Certification Glyphs & Checksum */}
          <div className="pt-6 sm:pt-0 sm:pl-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="font-black tracking-widest border-b border-[#111111] pb-1 mb-3">
                [04. CERTIFICATION STAMP]
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 border border-[#111111] flex items-center justify-center bg-[#ffffff]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="w-9 h-9 border border-[#111111] flex items-center justify-center bg-[#ffffff]">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="px-2 py-1 bg-[#111111] text-[#e8e8e6] text-[8px] font-bold tracking-widest">
                  ANNEX J
                </div>
              </div>
              <p className="text-[8px] text-[#555555] leading-relaxed">
                SHA-256 CHECKSUM: 9F8A-44C2-KW99-B810. UNAUTHORIZED DUPLICATION PROHIBITED.
              </p>
            </div>

            <div>
              <div className="h-5 w-full bg-[repeating-linear-gradient(90deg,#111111,#111111_2px,#e8e8e6_2px,#e8e8e6_4px)] border border-[#111111]" />
              <div className="flex justify-between text-[8px] mt-1 text-[#555555]">
                <span>COLOPHON END</span>
                <span>KW-2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
