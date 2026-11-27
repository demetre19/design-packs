import React from 'react';

const SPROCKETS = Array.from({ length: 36 });

export function Content7() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#d4b06a] uppercase block mb-1">
              ARCHIVAL REEL // 35MM CONTACT STRIP
            </span>
            <h2 className="font-serif text-3xl text-[#ece8e1]">Sequence 07: Night Shift at Rue du Rhône</h2>
          </div>
          <span className="text-[10px] font-mono text-[#7a8494]">KODAK TRI-X // PUSH +2</span>
        </div>

        {/* Continuous Film Strip Band */}
        <div className="w-full overflow-x-auto border border-white/15 bg-[#13171c]">
          <div className="min-w-[980px]">
            {/* Top Sprocket Perforations */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-[#0b0d10]">
              {SPROCKETS.map((_, i) => (
                <span key={i} className="w-3 h-2 border border-white/20 bg-[#13171c] inline-block" />
              ))}
            </div>

            {/* Unequal Width Film Frames: Wide (34%) | Tiny (10%) | Medium (26%) | Narrow (13%) | Medium (17%) */}
            <div className="flex items-stretch divide-x divide-white/20 min-h-[300px]">
              {/* Frame 1: WIDE — Atmospheric Prose */}
              <div className="w-[34%] p-7 flex flex-col justify-between bg-[#0b0d10]">
                <div className="flex justify-between text-[10px] font-mono text-[#d4b06a]">
                  <span>FRAME 01A</span>
                  <span>00:14:02</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#ece8e1] mb-3 leading-snug">
                    After Midnight, the Lathe Room Falls Quiet
                  </h3>
                  <p className="font-sans text-xs text-[#7a8494] leading-relaxed">
                    Ambient building vibration drops below 0.3 microns once streetcars cease along the Rhône. Only under that stillness do our master turners cut final balance-staff pivots.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-[#7a8494] border-t border-white/10 pt-3">
                  EXPOSURE: 1/15s AT F/2.0 — BENCH 02
                </div>
              </div>

              {/* Frame 2: TINY — Vertical Pure Numeral */}
              <div className="w-[10%] p-3 flex flex-col items-center justify-between bg-[#13171c] relative">
                <span className="text-[9px] font-mono text-[#7a8494]">02B</span>
                <div className="-rotate-90 whitespace-nowrap font-serif text-3xl text-[#d4b06a] tracking-widest">
                  0.002mm
                </div>
                <span className="text-[9px] font-mono text-[#ece8e1]">TOL</span>
              </div>

              {/* Frame 3: MEDIUM — Graded Dark Visual Plate */}
              <div className="w-[26%] p-5 flex flex-col justify-between bg-[#0b0d10] relative">
                <div className="flex justify-between text-[10px] font-mono text-[#7a8494] relative z-10">
                  <span className="text-[#d4b06a]">FRAME 03C</span>
                  <span>PLATE</span>
                </div>

                {/* Pure CSS/SVG Dark Macro Composition */}
                <div className="my-3 h-40 bg-[#13171c] border border-white/10 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-[#d4b06a]" />
                  <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-[#d4b06a]" />
                  <svg viewBox="0 0 180 120" className="w-full h-full opacity-90" aria-label="Gear train macro film plate">
                    <circle cx="65" cy="60" r="38" fill="none" stroke="rgba(236,232,225,0.2)" />
                    <circle cx="65" cy="60" r="24" fill="none" stroke="#d4b06a" strokeOpacity="0.6" />
                    <circle cx="122" cy="62" r="26" fill="none" stroke="rgba(236,232,225,0.28)" strokeDasharray="3 3" />
                    <line x1="20" y1="60" x2="160" y2="60" stroke="rgba(212,176,106,0.25)" />
                    <circle cx="65" cy="60" r="4" fill="#d4b06a" />
                  </svg>
                </div>

                <div className="text-[10px] font-mono text-[#ece8e1]">
                  BEVELING &amp; GRAINING MACRO
                </div>
              </div>

              {/* Frame 4: NARROW — Stark Serif Quote */}
              <div className="w-[14%] p-4 flex flex-col justify-between bg-[#13171c]">
                <span className="text-[9px] font-mono text-[#d4b06a]">04D // QUOTE</span>
                <p className="font-serif italic text-base text-[#ece8e1] leading-snug">
                  “Haste leaves chatter marks on brass.”
                </p>
                <span className="text-[9px] font-mono text-[#7a8494]">— H. VOGEL</span>
              </div>

              {/* Frame 5: MEDIUM — Vault Stamp & Coordinates */}
              <div className="w-[16%] p-5 flex flex-col justify-between bg-[#0b0d10]">
                <div className="flex justify-between text-[10px] font-mono text-[#7a8494]">
                  <span className="text-[#d4b06a]">05E</span>
                  <span>END</span>
                </div>
                <div className="border border-[#d4b06a]/40 p-3 text-center">
                  <span className="text-[#d4b06a] text-xs block mb-1">◆</span>
                  <div className="font-mono text-[10px] text-[#ece8e1] tracking-widest">VERIFIED</div>
                  <div className="font-mono text-[9px] text-[#7a8494] mt-1">N 46°12′ E 06°09′</div>
                </div>
                <div className="text-[9px] font-mono text-[#7a8494] text-right">
                  ARCHIVE REEL 07
                </div>
              </div>
            </div>

            {/* Bottom Sprocket Perforations */}
            <div className="flex items-center justify-between px-3 py-2 border-t border-white/10 bg-[#0b0d10]">
              {SPROCKETS.map((_, i) => (
                <span key={i} className="w-3 h-2 border border-white/20 bg-[#13171c] inline-block" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
