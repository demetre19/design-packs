import React, { useState } from 'react';

export const Content6: React.FC = () => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Book Folio Header */}
        <div className="flex items-center justify-between border-b border-[#14161a] pb-4 mb-12 font-mono text-[11px] uppercase tracking-widest">
          <span>MONOGRAPH VOL. IV · FOLIO 042</span>
          <span>SECTION: MARGINALIA & STRUCTURAL PROOF</span>
          <span>ZURICH ARCHIVE</span>
        </div>

        <div className="space-y-0">
          {/* Passage 1 + Aligned Margin Note [01] */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 lg:pr-6 pb-12">
              <h2 className="text-3xl font-extrabold uppercase tracking-tight leading-tight mb-4">
                ON SUSPENDED MASS & VISUAL GRAVITY
              </h2>
              <p className="text-sm leading-relaxed text-[#14161a]/85 font-sans">
                When a concrete volume projects beyond its final foundation pier, the observer experiences an immediate perceptual tension. Gravity is not negated; rather, it is redirected along unseen steel tendons buried within the upper chord.<sup className="font-mono font-bold text-[#14161a] bg-[#ffc72c] px-1 ml-1">01</sup>
              </p>
            </div>

            <div className="lg:col-span-7 lg:border-l lg:border-[#14161a]/25 lg:pl-8 pt-1 pb-12">
              <div className="flex items-start gap-4 border-t border-[#14161a]/20 pt-3">
                <span className="font-mono text-xs font-bold bg-[#14161a] text-[#ffc72c] px-2 py-0.5 shrink-0">
                  NOTE 01
                </span>
                <div className="space-y-1.5">
                  <div className="font-mono text-[11px] uppercase font-bold tracking-wider">
                    TENSION TRAJECTORY · S690QL TENDONS
                  </div>
                  <p className="font-mono text-xs text-[#14161a]/70 leading-relaxed">
                    Internal post-tensioning ducts sit 140 mm below the top slab screed, maintaining 690 MPa yield capacity under peak alpine snow loading (4.8 kN/m²).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Passage 2 + Aligned Margin Detail Image [02] */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 lg:pr-6 pb-12">
              <p className="text-sm leading-relaxed text-[#14161a]/85 font-sans">
                Every diagonal strut terminates at an exposed pin assembly bolted directly into cast-in-situ granite abutments. By refusing to conceal the mechanical joint behind plasterboard, the building declares its exact equilibrium state.<sup className="font-mono font-bold text-[#14161a] bg-[#ffc72c] px-1 ml-1">02</sup>
              </p>
            </div>

            <div className="lg:col-span-7 lg:border-l lg:border-[#14161a]/25 lg:pl-8 pb-12">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start border-t border-[#14161a]/20 pt-3">
                <div className="sm:col-span-5 bg-[#14161a] aspect-square overflow-hidden">
                  {!imgFailed ? (
                    <img
                      src="/src/assets/images/arch_structural_node_1795617036355.jpg"
                      alt="Marginalia structural pin joint detail"
                      referrerPolicy="no-referrer"
                      onError={() => setImgFailed(true)}
                      className="w-full h-full object-cover filter saturate-[0.75]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono text-[10px] text-[#ffc72c]">
                      FIG. 02 PIN JOINT
                    </div>
                  )}
                </div>
                <div className="sm:col-span-7 space-y-2">
                  <span className="font-mono text-xs font-bold bg-[#ffc72c] text-[#14161a] px-2 py-0.5 inline-block">
                    FIG. 02 · PIN NODE
                  </span>
                  <p className="font-mono text-[11px] text-[#14161a]/75 leading-relaxed">
                    Forged Ø 120 mm steel clevis pin anchored via four M36 tension bolts into raw board-formed concrete abutment. Tolerance: ±0.02 mm.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Passage 3 + Aligned Angled Pull-Fragment [03] */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 lg:pr-6 pb-12">
              <p className="text-sm leading-relaxed text-[#14161a]/85 font-sans">
                The perimeter envelope never touches the hillside beneath the main gallery. Rainwater runoff, alpine melt, and native scrub continue uninterrupted under the 18-meter overhang, leaving the geological contour intact.<sup className="font-mono font-bold text-[#14161a] bg-[#ffc72c] px-1 ml-1">03</sup>
              </p>
            </div>

            <div className="lg:col-span-7 lg:border-l lg:border-[#14161a]/25 lg:pl-8 pb-12">
              <div className="border-t border-[#14161a]/20 pt-4">
                <div className="bg-[#14161a] text-[#f7f6f3] p-5 transform skew-x-[-6deg] max-w-md">
                  <div className="transform skew-x-[6deg]">
                    <span className="font-mono text-[10px] text-[#ffc72c] uppercase block mb-1">
                      MARGIN FRAGMENT // 03
                    </span>
                    <p className="text-base font-extrabold uppercase leading-snug">
                      &ldquo;TO TOUCH THE MOUNTAIN ONLY ONCE IS THE HIGHEST DISCIPLINE OF ENGINEERING.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Passage 4 + Aligned Citation Reference [04] */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 lg:pr-6">
              <p className="text-sm leading-relaxed text-[#14161a]/85 font-sans">
                Calibration continues long after formwork stripping. Embedded fiber-optic strain gauges report seasonal thermal expansion across every diagonal chord back to our Zurich research desk.<sup className="font-mono font-bold text-[#14161a] bg-[#ffc72c] px-1 ml-1">04</sup>
              </p>
            </div>

            <div className="lg:col-span-7 lg:border-l lg:border-[#14161a]/25 lg:pl-8">
              <div className="border-t border-[#14161a]/20 pt-3 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] tabular-nums">
                <div>
                  <span className="font-bold">REF [04]:</span> ETH ZURICH STRUCTURAL ARCHIVE · PAPER #2026-14
                </div>
                <span className="text-[#14161a]/60">MEASURED DRIFT: 0.4 mm / YEAR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
