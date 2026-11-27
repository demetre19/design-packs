/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Crosshair } from 'lucide-react';

export const Content4: React.FC = () => {
  return (
    <section className="w-full bg-black text-white border-b border-white/20 px-6 py-12 md:px-10 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-white/20 pb-4 mb-8">
        <div>
          <div className="text-[10px] font-mono tracking-[0.22em] opacity-60 uppercase">
            CONTENT 04 // THE EXPLODED DIAGRAM — ANATOMY OF SPECIMEN PLATE 09
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mt-1">
            GLYPH DISSECTION
          </h2>
        </div>
        <div className="text-[10px] font-mono tracking-widest opacity-60 text-right hidden sm:block">
          SCALE 12:1 // UPEM 1000<br />
          LEADER PROJECTION VIEW
        </div>
      </div>

      {/* Desktop Exploded Diagram Canvas */}
      <div className="relative max-w-5xl mx-auto min-h-[540px] hidden lg:block">
        {/* SVG Leader Lines connecting exact plate points to callout boxes */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
          viewBox="0 0 1000 540"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Leader 1: Top-Left callout (220,90) -> Plate Upper Terminal (395, 165) */}
          <polyline
            points="235,88 320,88 395,165"
            fill="none"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="1"
          />
          <rect x="391" y="161" width="8" height="8" fill="#ffffff" />

          {/* Leader 2: Top-Right callout (765,105) -> Plate Cap Edge (605, 150) */}
          <polyline
            points="750,105 665,105 605,150"
            fill="none"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="1"
          />
          <rect x="601" y="146" width="8" height="8" fill="#ffffff" />

          {/* Leader 3: Mid-Left callout (220,310) -> Plate Counter Aperture (430, 290) */}
          <polyline
            points="235,310 345,310 430,290"
            fill="none"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="1"
          />
          <rect x="426" y="286" width="8" height="8" fill="#ffffff" />

          {/* Leader 4: Bottom-Right callout (765,365) -> Plate Spur/Crossbar (585, 315) */}
          <polyline
            points="750,365 655,365 585,315"
            fill="none"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="1"
          />
          <rect x="581" y="311" width="8" height="8" fill="#ffffff" />

          {/* Leader 5: Bottom-Center callout (500,455) -> Plate Baseline Trim (500, 395) */}
          <line
            x1="500"
            y1="452"
            x2="500"
            y2="395"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="1"
          />
          <rect x="496" y="391" width="8" height="8" fill="#ffffff" />
        </svg>

        {/* Central Visual Plate */}
        <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-[310px] h-[300px] border border-white/40 bg-black overflow-hidden z-10 flex items-center justify-center">
          {/* Technical Grid Lines inside plate */}
          <div className="absolute top-[22%] inset-x-0 border-t border-dashed border-white/25" />
          <div className="absolute bottom-[20%] inset-x-0 border-t border-dashed border-white/25" />
          <div className="absolute left-[26%] inset-y-0 border-l border-dashed border-white/20" />

          <span className="text-[280px] font-black tracking-tighter leading-none select-none translate-y-2">
            G
          </span>

          <div className="absolute top-2 left-2.5 text-[9px] font-mono tracking-widest opacity-60">
            PLATE 09 // GROTESQUE G
          </div>
          <div className="absolute bottom-2 right-2.5 text-[9px] font-mono tracking-widest opacity-60">
            CROP: 12% BLEED
          </div>
        </div>

        {/* Annotation 1: Top-Left */}
        <div className="absolute top-8 left-0 w-[235px] border-t border-white/40 pt-2">
          <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-white">
            <Crosshair className="w-3 h-3" />
            <span>[A1 // UPPER TERMINAL]</span>
          </div>
          <p className="text-[11px] font-mono opacity-75 leading-relaxed mt-1">
            Horizontal shear cut at 90° flat; zero optical curvature taper.
          </p>
        </div>

        {/* Annotation 2: Top-Right */}
        <div className="absolute top-14 right-0 w-[250px] border-t border-white/40 pt-2 text-right">
          <div className="text-[10px] font-mono tracking-widest text-white">
            [A2 // CAP OVERSHOOT +14U]
          </div>
          <p className="text-[11px] font-mono opacity-75 leading-relaxed mt-1">
            Apex extends 14 UPEM beyond cap-height guide to neutralize optical shrinkage.
          </p>
        </div>

        {/* Annotation 3: Mid-Left */}
        <div className="absolute top-[282px] left-0 w-[235px] border-t border-white/40 pt-2">
          <div className="text-[10px] font-mono tracking-widest text-white">
            [A3 // COUNTER APERTURE]
          </div>
          <p className="text-[11px] font-mono opacity-75 leading-relaxed mt-1">
            Enclosed negative void occupies 41% of total bounding box area.
          </p>
        </div>

        {/* Annotation 4: Bottom-Right */}
        <div className="absolute top-[338px] right-0 w-[250px] border-t border-white/40 pt-2 text-right">
          <div className="text-[10px] font-mono tracking-widest text-white">
            [A4 // CROSSBAR WEIGHT]
          </div>
          <p className="text-[11px] font-mono opacity-75 leading-relaxed mt-1">
            118-unit horizontal stroke anchors right-side tension against left stem.
          </p>
        </div>

        {/* Annotation 5: Bottom-Center */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[320px] border-t border-white/40 pt-2 text-center">
          <div className="text-[10px] font-mono tracking-widest text-white">
            [A5 // BASELINE BLEED TRIM]
          </div>
          <p className="text-[11px] font-mono opacity-75 leading-relaxed mt-1">
            Lower curve intentionally kisses plate edge to establish gravitational anchor.
          </p>
        </div>
      </div>

      {/* Responsive Tablet/Mobile Fallback View */}
      <div className="lg:hidden space-y-6">
        <div className="border border-white/40 bg-black h-64 relative overflow-hidden flex items-center justify-center">
          <span className="text-[210px] font-black tracking-tighter leading-none select-none">G</span>
          <div className="absolute top-3 left-3 text-[10px] font-mono tracking-widest opacity-60">
            PLATE 09 // GROTESQUE G
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            ['[A1 // UPPER TERMINAL]', 'Horizontal shear cut at 90° flat; zero optical curvature taper.'],
            ['[A2 // CAP OVERSHOOT +14U]', 'Apex extends 14 UPEM beyond cap-height guide.'],
            ['[A3 // COUNTER APERTURE]', 'Enclosed negative void occupies 41% of bounding area.'],
            ['[A4 // CROSSBAR WEIGHT]', '118-unit horizontal stroke anchors right-side tension.'],
            ['[A5 // BASELINE BLEED TRIM]', 'Lower curve intentionally kisses plate edge.'],
          ].map(([label, desc]) => (
            <div key={label} className="border-t border-white/30 pt-2">
              <div className="text-[10px] font-mono tracking-widest">{label}</div>
              <p className="text-[11px] font-mono opacity-75 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
