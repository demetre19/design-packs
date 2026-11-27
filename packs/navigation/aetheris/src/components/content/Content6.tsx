import React from 'react';

export function Content6() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Book Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/15 pb-5 mb-12 text-[10px] font-mono tracking-[0.25em] text-[#7a8494] uppercase">
          <div className="lg:col-span-5 text-[#d4b06a]">TRACTATUS HOROLOGICUS // FOLIO IV</div>
          <div className="lg:col-span-7 lg:pl-12 hidden lg:block">ANNOTATED MARGINALIA &amp; SCHOLIA</div>
        </div>

        {/* Paired Passage + Aligned Marginalia Rows */}
        <div className="flex flex-col">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start pb-12 border-b border-white/10">
            <div className="lg:col-span-5 lg:pr-10">
              <span className="font-mono text-[10px] text-[#d4b06a] block mb-2">§ 01 — ON ISOCHRONISM</span>
              <p className="font-serif text-xl text-[#ece8e1] leading-relaxed">
                When a balance wheel oscillates in an unconstrained vacuum, amplitude decay remains proportional to pivot friction alone. Yet in terrestrial vaults, barometric pressure shifts air drag around the timing rim.<sup className="text-[#d4b06a] font-mono text-xs ml-1">[1]</sup>
              </p>
            </div>

            <div className="lg:col-span-7 lg:pl-12 lg:border-l border-white/15 mt-6 lg:mt-0 flex items-start gap-4">
              <span className="font-mono text-xs text-[#d4b06a] shrink-0 pt-1">[1]</span>
              <div className="border-t border-[#d4b06a]/40 pt-3 w-full flex flex-col sm:flex-row justify-between gap-6">
                <p className="font-serif italic text-base text-[#ece8e1]/85 max-w-sm">
                  “Air density within a hermetically sealed case drops 12% across a 1,200-meter Alpine ascent.”
                </p>
                <div className="text-[10px] font-mono text-[#7a8494] shrink-0">
                  <div>OBS. GENEVA 1924</div>
                  <div className="text-[#d4b06a]">ΔP = 114 hPa</div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start py-12 border-b border-white/10">
            <div className="lg:col-span-5 lg:pr-10">
              <span className="font-mono text-[10px] text-[#d4b06a] block mb-2">§ 02 — ON THERMAL EXPANSION</span>
              <p className="font-serif text-xl text-[#ece8e1] leading-relaxed">
                Conventional brass and steel pairs diverge at twelve parts per million per kelvin. By fusing our hairspring from single-crystal silicon doped with oxide sheathing, thermal drift vanishes across ordinary climates.<sup className="text-[#d4b06a] font-mono text-xs ml-1">[2]</sup>
              </p>
            </div>

            <div className="lg:col-span-7 lg:pl-12 lg:border-l border-white/15 mt-6 lg:mt-0 flex items-start gap-4">
              <span className="font-mono text-xs text-[#d4b06a] shrink-0 pt-1">[2]</span>
              <div className="flex flex-col sm:flex-row gap-6 items-start w-full">
                {/* Small Schematic Plate Aligned to Passage */}
                <div className="w-44 h-28 bg-[#13171c] border border-white/15 relative p-2 shrink-0 flex items-center justify-center">
                  <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#d4b06a]" />
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#d4b06a]" />
                  <svg viewBox="0 0 120 70" className="w-full h-full" aria-label="Silicon hairspring cross-section">
                    <line x1="10" y1="55" x2="110" y2="55" stroke="rgba(236,232,225,0.2)" />
                    <path d="M 15 50 Q 60 14 105 22" fill="none" stroke="#d4b06a" strokeWidth="1.5" />
                    <path d="M 15 50 L 105 48" fill="none" stroke="rgba(236,232,225,0.4)" strokeDasharray="2 3" />
                  </svg>
                </div>
                <div className="text-xs font-mono text-[#7a8494] leading-relaxed">
                  <div className="text-[#ece8e1] mb-1">FIG. 6B — ELASTIC MODULUS CURVE</div>
                  <div>COEFFICIENT: -0.02 × 10⁻⁶ K⁻¹</div>
                  <div>RANGE TESTED: -10°C TO +45°C</div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start py-12 border-b border-white/10">
            <div className="lg:col-span-5 lg:pr-10">
              <span className="font-mono text-[10px] text-[#d4b06a] block mb-2">§ 03 — ON ACOUSTIC CATHEDRAL GONGS</span>
              <p className="font-serif text-xl text-[#ece8e1] leading-relaxed">
                A minute repeater’s voice resides not in volume alone, but in harmonic decay. Wrapping two full revolutions of hardened steel wire around the caseband doubles low-register sustain.<sup className="text-[#d4b06a] font-mono text-xs ml-1">[3]</sup>
              </p>
            </div>

            <div className="lg:col-span-7 lg:pl-12 lg:border-l border-white/15 mt-6 lg:mt-0 flex items-start gap-4">
              <span className="font-mono text-xs text-[#d4b06a] shrink-0 pt-1">[3]</span>
              <div className="grid grid-cols-3 gap-6 w-full border-t border-white/10 pt-3 font-mono">
                <div>
                  <span className="text-[10px] text-[#7a8494] block">SUSTAIN</span>
                  <span className="font-serif text-2xl text-[#ece8e1]">3.8s</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#7a8494] block">INTERVAL</span>
                  <span className="font-serif text-2xl text-[#d4b06a]">B♭ — F</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#7a8494] block">DECIBEL</span>
                  <span className="font-serif text-2xl text-[#ece8e1]">64 dB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start pt-12">
            <div className="lg:col-span-5 lg:pr-10">
              <span className="font-mono text-[10px] text-[#d4b06a] block mb-2">§ 04 — ON PERPETUAL CUSTODY</span>
              <p className="font-serif text-xl text-[#ece8e1] leading-relaxed">
                Objects engineered for three centuries demand chambers immune to civic upheaval. Our London and Zurich strongrooms interleave basalt shielding with air-gapped title ledgers.<sup className="text-[#d4b06a] font-mono text-xs ml-1">[4]</sup>
              </p>
            </div>

            <div className="lg:col-span-7 lg:pl-12 lg:border-l border-white/15 mt-6 lg:mt-0 flex items-start gap-4">
              <span className="font-mono text-xs text-[#d4b06a] shrink-0 pt-1">[4]</span>
              <div className="text-[11px] font-mono text-[#7a8494] border-l border-[#d4b06a]/50 pl-4">
                <div className="text-[#ece8e1] mb-1">ARCHIVAL CITATION // CHARTER OF 2024</div>
                <div>DEPOSITORIES: N 51°30′ W 0°05′ · N 47°22′ E 8°32′</div>
                <div className="text-[#d4b06a] mt-1">INSPECTION PROTOCOL: BI-ANNUAL NITROGEN PURGE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
