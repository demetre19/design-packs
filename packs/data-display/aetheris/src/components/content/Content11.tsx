import React from 'react';

export function Content11() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#d4b06a] uppercase block mb-2">
              DATASHEET // METALLURGICAL SPECIMEN MATRIX
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">
              Material &amp; Escapement Assay Matrix
            </h2>
          </div>
          <span className="text-[10px] font-mono text-[#7a8494]">LAB REPORT // CH-GVA-8840</span>
        </div>

        {/* Irregular Uneven Matrix Using 1px Hairline Gap Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[1px] bg-white/15 border border-white/15">
          {/* Cell A: Tall Left Anchor (5 cols, 2 rows) */}
          <div className="md:col-span-5 md:row-span-2 bg-[#13171c] p-7 flex flex-col justify-between relative">
            <div className="flex justify-between items-start text-[10px] font-mono text-[#d4b06a]">
              <span>SPECIMEN 01 // PRIMARY CASE</span>
              <span>+</span>
            </div>
            <div className="my-8">
              <span className="font-mono text-xs text-[#7a8494] block mb-2">ALLOY DESIGNATION</span>
              <div className="font-serif text-5xl sm:text-6xl text-[#ece8e1] tracking-tight mb-3">
                Ti-6Al-4V
              </div>
              <p className="font-sans text-xs text-[#7a8494] leading-relaxed max-w-sm">
                Alpha-beta aerospace titanium vacuum-remelted twice to eliminate micro-inclusions, finished with alternating satin brushing and mirror chamfers.
              </p>
            </div>
            <div className="border-t border-white/10 pt-3 flex justify-between font-mono text-[10px] text-[#ece8e1]">
              <span>DENSITY: 4.43 g/cm³</span>
              <span className="text-[#d4b06a]">HARDNESS: 349 HV</span>
            </div>
          </div>

          {/* Cell B: Top Middle Narrow (3 cols) */}
          <div className="md:col-span-3 bg-[#0b0d10] p-5 flex flex-col justify-between">
            <span className="font-mono text-[10px] text-[#7a8494]">TENSILE YIELD</span>
            <div className="my-3">
              <span className="font-serif text-4xl text-[#ece8e1] tabular-nums">950</span>
              <span className="font-mono text-xs text-[#d4b06a] ml-1.5">MPa</span>
            </div>
            <span className="font-mono text-[10px] text-[#7a8494]">ASTM F136 CERTIFIED</span>
          </div>

          {/* Cell C: Top Right Medium (4 cols) */}
          <div className="md:col-span-4 bg-[#0b0d10] p-5 flex flex-col justify-between">
            <div className="flex justify-between text-[10px] font-mono">
              <span className="text-[#d4b06a]">BALANCE HAIRSPRING</span>
              <span className="text-[#7a8494]">SI-OXIDE</span>
            </div>
            <div className="my-3 flex items-baseline gap-2">
              <span className="font-serif text-3xl text-[#ece8e1]">15,000</span>
              <span className="font-mono text-[11px] text-[#7a8494]">GAUSS IMMUNITY</span>
            </div>
            <span className="font-mono text-[10px] text-[#ece8e1]/80">
              ◆ DIAMAGNETIC ESCAPEMENT CORE
            </span>
          </div>

          {/* Cell D: Middle Wide Span (7 cols) */}
          <div className="md:col-span-7 bg-[#13171c] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] text-[#d4b06a] block mb-1">
                SPECIMEN 02 // ACOUSTIC GONG WIRE
              </span>
              <div className="font-serif text-2xl text-[#ece8e1]">
                Cathedral-Length Hardened Alloy
              </div>
              <span className="font-mono text-[11px] text-[#7a8494]">
                ANNEALED AT 840°C IN NITROGEN ATMOSPHERE
              </span>
            </div>
            <div className="text-left sm:text-right font-mono shrink-0 border-l border-white/10 pl-4">
              <div className="text-lg text-[#d4b06a] tabular-nums">4,186 Hz</div>
              <div className="text-[10px] text-[#7a8494]">DECAY: 3.8 SECONDS</div>
            </div>
          </div>

          {/* Cell E: Bottom Tiny (2 cols) */}
          <div className="md:col-span-2 bg-[#0b0d10] p-5 flex flex-col justify-between">
            <span className="font-mono text-[10px] text-[#7a8494]">JEWELS</span>
            <span className="font-serif text-4xl text-[#d4b06a] my-2">42</span>
            <span className="font-mono text-[9px] text-[#7a8494]">CORUNDUM</span>
          </div>

          {/* Cell F: Bottom Medium (4 cols) */}
          <div className="md:col-span-4 bg-[#13171c] p-5 flex flex-col justify-between">
            <div className="flex justify-between text-[10px] font-mono text-[#7a8494]">
              <span>GOLD CHATONS</span>
              <span className="text-[#d4b06a]">Au 750</span>
            </div>
            <div className="font-serif text-2xl text-[#ece8e1] my-2">
              5N Rose Gold Settings
            </div>
            <span className="font-mono text-[10px] text-[#7a8494]">
              SECURED BY 3 BLUED STEEL SCREWS EACH
            </span>
          </div>

          {/* Cell G: Bottom Wide (6 cols) */}
          <div className="md:col-span-6 bg-[#0b0d10] p-5 flex flex-col justify-between">
            <div className="flex justify-between text-[10px] font-mono text-[#d4b06a]">
              <span>SPECIMEN 03 // VAULT BARRIER</span>
              <span>CHAMBER Ω</span>
            </div>
            <div className="grid grid-cols-3 gap-4 my-2 font-mono">
              <div>
                <span className="text-[9px] text-[#7a8494] block">WALL THICKNESS</span>
                <span className="text-sm text-[#ece8e1] tabular-nums">850 mm</span>
              </div>
              <div>
                <span className="text-[9px] text-[#7a8494] block">SHIELDING</span>
                <span className="text-sm text-[#ece8e1]">BORON-BASALT</span>
              </div>
              <div>
                <span className="text-[9px] text-[#7a8494] block">O₂ LEVEL</span>
                <span className="text-sm text-[#d4b06a] tabular-nums">&lt; 0.4%</span>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[#7a8494]">
              MICRO-NOTE: TESTED AGAINST THERMAL LANCE &amp; SEISMIC SHEAR
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
