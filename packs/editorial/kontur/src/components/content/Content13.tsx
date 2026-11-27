/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content13: React.FC = () => {
  return (
    <section className="w-full bg-black text-white border-b border-white/20 px-6 pt-12 pb-6 md:px-10 overflow-hidden">
      {/* Artifact Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-white/30 pb-4 mb-8 gap-2">
        <div className="text-[10px] font-mono tracking-[0.22em] opacity-65 uppercase">
          CONTENT 13 // THE COLOPHON — BACK MATTER &amp; PRODUCTION ARTIFACT
        </div>
        <div className="text-[10px] font-mono tracking-widest opacity-55 tabular-nums">
          PRINTED IN SWITZERLAND // OCTOBER 2026
        </div>
      </div>

      {/* Dense 4-Column Art-Book Colophon Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-[11px] font-mono leading-relaxed border-b border-white/20 pb-10">
        {/* Column 1: Editorial & Curatorial Board */}
        <div className="space-y-4">
          <div className="text-[10px] tracking-[0.22em] opacity-50 border-b border-white/20 pb-1.5">
            01 // EDITORIAL BOARD
          </div>
          <dl className="space-y-2.5">
            <div>
              <dt className="text-[9px] opacity-50 tracking-widest">SYMPOSIUM DIRECTOR</dt>
              <dd className="font-bold">BRUNO MÜLLER</dd>
            </div>
            <div>
              <dt className="text-[9px] opacity-50 tracking-widest">CURATORIAL CHAIR</dt>
              <dd className="font-bold">ELENA VOSS</dd>
            </div>
            <div>
              <dt className="text-[9px] opacity-50 tracking-widest">SYSTEM ARCHITECTURE</dt>
              <dd className="font-bold">KASPER LIND</dd>
            </div>
            <div>
              <dt className="text-[9px] opacity-50 tracking-widest">ARCHIVAL EDITOR</dt>
              <dd className="font-bold">DR. HANS KELLER</dd>
            </div>
          </dl>
        </div>

        {/* Column 2: Physical & Digital Specification */}
        <div className="space-y-4 lg:border-l lg:border-white/15 lg:pl-6">
          <div className="text-[10px] tracking-[0.22em] opacity-50 border-b border-white/20 pb-1.5">
            02 // PRODUCTION SPECS
          </div>
          <dl className="space-y-2.5">
            <div>
              <dt className="text-[9px] opacity-50 tracking-widest">DISPLAY TYPEFACE</dt>
              <dd>KONTUR GROTESK 700–900</dd>
            </div>
            <div>
              <dt className="text-[9px] opacity-50 tracking-widest">MONO APPARATUS</dt>
              <dd>BASLER MONO 400 // 10–11PX</dd>
            </div>
            <div>
              <dt className="text-[9px] opacity-50 tracking-widest">PAPER EQUIVALENT</dt>
              <dd>MUNKEN POLAR ROUGH 120GSM</dd>
            </div>
            <div>
              <dt className="text-[9px] opacity-50 tracking-widest">INK CALIBRATION</dt>
              <dd>OFFSET SCHWARZ 01 (DMAX 1.92)</dd>
            </div>
          </dl>
        </div>

        {/* Column 3: Institutions & Translations */}
        <div className="space-y-4 lg:border-l lg:border-white/15 lg:pl-6">
          <div className="text-[10px] tracking-[0.22em] opacity-50 border-b border-white/20 pb-1.5">
            03 // INSTITUTIONS
          </div>
          <dl className="space-y-2.5">
            <div>
              <dt className="text-[9px] opacity-50 tracking-widest">HOST ACADEMY</dt>
              <dd>BASEL ART ACADEMY // PETERSPLATZ 13</dd>
            </div>
            <div>
              <dt className="text-[9px] opacity-50 tracking-widest">ANNEX VENUE</dt>
              <dd>ZÜRICH KUNSTGEWERBE // AUSSTELLUNGSSTR. 60</dd>
            </div>
            <div>
              <dt className="text-[9px] opacity-50 tracking-widest">TRANSLATION</dt>
              <dd>DE / FR / EN TRILINGUAL EDITION</dd>
            </div>
            <div>
              <dt className="text-[9px] opacity-50 tracking-widest">BINDING</dt>
              <dd>SWISS OPEN SPINE // THREAD-SEWN</dd>
            </div>
          </dl>
        </div>

        {/* Column 4: Edition Stamp & Legal Deposit */}
        <div className="space-y-4 lg:border-l lg:border-white/15 lg:pl-6 flex flex-col justify-between">
          <div>
            <div className="text-[10px] tracking-[0.22em] opacity-50 border-b border-white/20 pb-1.5 mb-4">
              04 // ARCHIVAL DEPOSIT
            </div>
            <div className="border border-white/40 p-4 space-y-2">
              <div className="text-[9px] opacity-55 tracking-widest">NUMBERED EDITION</div>
              <div className="text-2xl font-black tracking-tighter tabular-nums">
                001 / 500
              </div>
              <div className="text-[10px] opacity-70">
                SWISS NATIONAL LIBRARY BERN // DEPOT LÉGAL 2026
              </div>
            </div>
          </div>
          <div className="text-[10px] opacity-50 pt-3">
            ISSN 2810-9421 · ISBN 978-3-906-2026
          </div>
        </div>
      </div>

      {/* Tight Cropped Colophon Foot-Band */}
      <div className="overflow-hidden -mx-6 -mb-6 pt-4 select-none pointer-events-none">
        <div className="text-[15vw] font-black tracking-[-0.07em] leading-[0.76] uppercase whitespace-nowrap opacity-90">
          COLOPHON
        </div>
      </div>
    </section>
  );
};
