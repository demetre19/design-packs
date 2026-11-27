import React from 'react';
import { Activity, Bookmark } from 'lucide-react';

export function Content6() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-14 pb-4 border-b border-[#272a33] flex justify-between items-end">
          <div>
            <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">
              TREATISE 06 // ANNOTATED ENGINEERING MANUSCRIPT
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mt-1">
              ON DIELECTRIC COOLING &amp; MASS CENTRALIZATION
            </h2>
          </div>
          <span className="font-mono-spec text-[10px] text-neutral-500 hidden sm:block">
            COLUMN RATIO 42 : 58
          </span>
        </div>

        {/* Margin Book Rows: Narrow Prose (42%) + Aligned Marginalia (58%) */}
        <div className="space-y-14">
          {/* Passage 1 + Aligned Margin Note 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
            <div className="lg:col-span-5 lg:pr-10 lg:border-r lg:border-[#272a33]">
              <span className="font-mono-spec text-[10px] text-[#ff5a1f] block mb-2">
                § 1.01 — STATOR IMMERSION
              </span>
              <p className="text-sm md:text-base text-neutral-200 leading-relaxed">
                Conventional perimeter water jackets extract heat only after thermal energy has crossed epoxy potting and aluminum housing walls. By flooding the air-gap and copper end-turns directly with synthetic ester dielectric fluid, the <strong className="text-white">APEX-V12 R</strong> stator sheds 14.8 kW of waste heat straight into the titanium radiator core.<sup className="text-[#ff5a1f] font-mono-spec text-[10px] ml-1">[n.01]</sup>
              </p>
            </div>

            <div className="lg:col-span-7 lg:pl-10 flex flex-col sm:flex-row items-start gap-5 pt-1">
              <div className="w-40 h-24 shrink-0 bg-gradient-to-br from-[#1f232b] via-[#14161b] to-[#101114] border border-[#272a33] p-3 flex flex-col justify-between relative">
                <span className="font-mono-spec text-[9px] text-[#ff5a1f]">FIG 1.A // OIL JACKET</span>
                <Activity size={24} className="text-[#ff5a1f]/70" />
                <span className="font-mono-spec text-[9px] text-neutral-500">ΔT -29.4 °C VS AIR</span>
              </div>
              <div className="font-mono-spec text-[11px] text-neutral-400 leading-relaxed max-w-sm">
                <span className="text-[#ff5a1f] font-bold block mb-1">[n.01] MARGINAL REFERENCE</span>
                Dielectric breakdown strength verified at 42 kV/mm across 120 °C saturation. Flow rate regulated at 12.0 L/min via brushless vane pump.
              </div>
            </div>
          </div>

          {/* Passage 2 + Aligned Margin Note 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
            <div className="lg:col-span-5 lg:pr-10 lg:border-r lg:border-[#272a33]">
              <span className="font-mono-spec text-[10px] text-[#ff5a1f] block mb-2">
                § 1.02 — GYROSCOPIC NEUTRALIZATION
              </span>
              <p className="text-sm md:text-base text-neutral-200 leading-relaxed">
                At 18,500 revolutions per minute, a dense rotor generates measurable precession resistance during rapid chicane transitions. Reversing rotor spin direction relative to the rear wheel cancels 38% of total vehicle rotational inertia, allowing the chassis to drop from 52° left to 52° right in 0.41 seconds.<sup className="text-[#ff5a1f] font-mono-spec text-[10px] ml-1">[n.02]</sup>
              </p>
            </div>

            <div className="lg:col-span-7 lg:pl-10 flex flex-col sm:flex-row items-start justify-between gap-6 pt-1">
              <blockquote className="font-display font-extrabold text-xl text-white/90 max-w-xs leading-tight border-t border-[#ff5a1f] pt-3">
                “CHICANE ROLL RATE MATCHES A 250CC GRAND PRIX CHASSIS AT 182 KG.”
              </blockquote>
              <div className="font-mono-spec text-[10px] text-neutral-500 border border-[#272a33] px-3 py-2 shrink-0">
                <div className="text-[#ff5a1f] font-bold flex items-center gap-1">
                  <Bookmark size={11} /> [n.02] PATENT DE-4091
                </div>
                <div className="mt-1">TESTED: SUZUKA S-CURVES</div>
                <div>PILOT: H. TANAKA</div>
              </div>
            </div>
          </div>

          {/* Passage 3 + Aligned Margin Note 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
            <div className="lg:col-span-5 lg:pr-10 lg:border-r lg:border-[#272a33]">
              <span className="font-mono-spec text-[10px] text-[#ff5a1f] block mb-2">
                § 1.03 — STRUCTURAL BELLY PACK
              </span>
              <p className="text-sm md:text-base text-neutral-200 leading-relaxed">
                Rather than suspending lithium cells inside a cradle frame, the billet 7075-T6 pack shell bolts directly to the T1000G monocoque steering bridge and forged swingarm pivot. Eliminating the lower trellis removes 6.4 kg of redundant tubing.<sup className="text-[#ff5a1f] font-mono-spec text-[10px] ml-1">[n.03]</sup>
              </p>
            </div>

            <div className="lg:col-span-7 lg:pl-10 pt-1">
              <div className="flex items-center gap-6">
                <svg viewBox="0 0 180 54" className="w-44 h-14 border border-[#272a33] bg-[#14161b] shrink-0" aria-hidden="true">
                  <polyline
                    points="6,42 36,38 64,20 96,24 128,10 172,12"
                    fill="none"
                    stroke="#ff5a1f"
                    strokeWidth="1.75"
                  />
                  <line x1="0" y1="27" x2="180" y2="27" stroke="#272a33" strokeDasharray="3 3" />
                </svg>
                <div className="font-mono-spec text-[11px] text-neutral-400">
                  <span className="text-[#ff5a1f] font-bold block">[n.03] TORSIONAL GAIN</span>
                  +42% lateral rigidity measured across 29.4 kN·m rig load; zero weld fatigue zones.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
