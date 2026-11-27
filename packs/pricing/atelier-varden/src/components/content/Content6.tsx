import React from 'react';

export function Content6() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex items-center justify-between border-b border-[#16171a] pb-4">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
              MONOGRAPH CHAPTER IV — ANNOTATED MARGINALIA
            </span>
          </div>
          <span className="text-[10px] font-mono text-stone-500 uppercase tabular-nums">
            FOL. 084—087
          </span>
        </div>

        <div className="divide-y divide-[#e2e0d8]">
          {/* Passage 1 + Aligned Marginalia Note */}
          <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-[10px] font-mono text-[#b5482e] uppercase tracking-widest">
                § 4.1 — THE CALIBRATED SLOT
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-[#16171a]">
                Light Treated as Structural Mass
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                In high-altitude residences, panoramic glass compromises both thermal enclosure and psychological stillness. Atelier Varden replaces curtain walls with deep, narrow vertical apertures carved directly between load-bearing concrete piers and Douglas fir posts.
              </p>
            </div>
            <div className="lg:col-span-7 lg:pl-10 lg:border-l border-[#e2e0d8] flex items-start space-x-4">
              <span className="hidden lg:inline-block w-6 h-px bg-[#b5482e] mt-2 shrink-0" />
              <div className="bg-[#f0efeb] border border-[#e2e0d8] p-4 max-w-sm space-y-1.5">
                <div className="text-[10px] font-mono text-[#b5482e] uppercase">NOTE [14] · DAYLIGHT FACTOR</div>
                <p className="text-xs font-mono text-stone-600 leading-relaxed">
                  Aperture width constrained to 180 mm reduces winter conductive heat loss by 62% while producing a crisp solar sundial line across the limestone floor.
                </p>
              </div>
            </div>
          </div>

          {/* Passage 2 + Aligned Small Archival Detail Plate */}
          <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-[10px] font-mono text-[#b5482e] uppercase tracking-widest">
                § 4.2 — MINERAL &amp; TIMBER JUNCTION
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">
                Where horizontal cedar formwork meets vertical joinery, no metal flashing or elastomeric caulk is permitted to remain visible. Timber posts sit within milled 12 mm shadow recesses cast directly into the concrete pier, allowing seasonal expansion without cracking.
              </p>
              <p className="text-sm text-stone-700 leading-relaxed">
                Over twenty winters, rain and alpine frost darken the fir while bleaching the aggregate surface, drawing both materials toward one unified geological tone.
              </p>
            </div>
            <div className="lg:col-span-7 lg:pl-10 lg:border-l border-[#e2e0d8] flex items-start space-x-4">
              <span className="hidden lg:inline-block w-6 h-px bg-[#16171a] mt-3 shrink-0" />
              <figure className="w-56 border border-[#e2e0d8] p-1.5 bg-[#f0efeb]">
                <div className="aspect-[3/4] overflow-hidden bg-[#e2e0d8]">
                  <img
                    src="/src/assets/images/varden_margin_detail_1795617061194.jpg"
                    alt="Board-formed concrete meeting Douglas fir post and vertical slot"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover saturate-[0.85]"
                  />
                </div>
                <figcaption className="mt-1.5 text-[10px] font-mono text-stone-500 leading-snug">
                  FIG. 4.2 — 180 MM LIGHT SLOT &amp; MORTISED TIMBER FRAME, ZÜRICHBERG.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Passage 3 + Aligned Pull-Fragment */}
          <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-[10px] font-mono text-[#b5482e] uppercase tracking-widest">
                § 4.3 — ACOUSTIC DECAY
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">
                Quietness is measured before a wall is drawn. By staggering stone planes at 4-degree off-parallel alignments inside entry vestibules, exterior wind noise dissipates before reaching living rooms.
              </p>
            </div>
            <div className="lg:col-span-7 lg:pl-10 lg:border-l border-[#e2e0d8] flex items-start space-x-4">
              <span className="hidden lg:inline-block w-6 h-px bg-[#b5482e] mt-3 shrink-0" />
              <blockquote className="max-w-md border-t border-b border-[#16171a] py-3 text-base font-medium text-[#16171a] italic">
                &ldquo;A wall should not merely block the storm; it should register the passage of morning light without announcing itself.&rdquo;
                <footer className="mt-2 not-italic text-[10px] font-mono uppercase text-stone-500">
                  — M. VARDEN, LECTURE NOTES, ETH ZÜRICH 2024
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Passage 4 + Aligned Reference Table Fragment */}
          <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-[10px] font-mono text-[#b5482e] uppercase tracking-widest">
                § 4.4 — THERMAL ENVELOPE VERIFICATION
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">
                Foam-glass gravel beds beneath the lower slab isolate the heated core from permafrost moisture, permitting exposed stone floors with zero radiant lag.
              </p>
            </div>
            <div className="lg:col-span-7 lg:pl-10 lg:border-l border-[#e2e0d8] flex items-start space-x-4">
              <span className="hidden lg:inline-block w-6 h-px bg-[#16171a] mt-3 shrink-0" />
              <div className="w-full max-w-sm border border-[#e2e0d8] bg-[#f0efeb] p-3 font-mono text-[10px] space-y-1.5 tabular-nums">
                <div className="text-stone-500 uppercase border-b border-[#e2e0d8] pb-1">
                  REF. TABLE — WALL SECTION W-09
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">U-VALUE (EXTERIOR WALL)</span>
                  <span className="text-[#16171a]">0.14 W/m²K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">THERMAL PHASE SHIFT</span>
                  <span className="text-[#b5482e]">14.2 HOURS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
