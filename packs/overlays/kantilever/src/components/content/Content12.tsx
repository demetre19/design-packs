import React, { useState } from 'react';

export const Content12: React.FC = () => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/20 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14 space-y-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#14161a]/60">
            CHRONICLE 12 // THREE-ACT CONSTRUCTION SEQUENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            THE OSLO CANTILEVER — THREE ACTS
          </h2>
        </div>

        {/* Continuous Vertical Thread Line connecting all 3 Acts */}
        <div className="relative pl-8 md:pl-14">
          {/* The visible continuous connector line */}
          <div
            aria-hidden="true"
            className="absolute left-3 md:left-5 top-2 bottom-2 w-[3px] bg-[#14161a]"
          >
            <div className="w-full h-1/3 bg-[#ffc72c]" />
          </div>

          <div className="space-y-16">
            {/* ACT I: Wide Horizontal Strata Strip Layout */}
            <article className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-[29px] md:-left-[45px] top-1 w-5 h-5 bg-[#ffc72c] border-2 border-[#14161a] transform skew-x-[-12deg]"
              />
              <div className="font-mono text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-3">
                <span className="bg-[#14161a] text-[#ffc72c] px-2 py-0.5">ACT I</span>
                <span>EXCAVATION & GRANITE KEY · MONTHS 01–05</span>
              </div>
              <h3 className="text-2xl font-extrabold uppercase mb-4">
                ANCHORING AGAINST THE FJORD SHEAR WALL
              </h3>
              {/* Distinct layout: horizontal strata bar */}
              <div className="grid grid-cols-1 md:grid-cols-3 border border-[#14161a]/25 divide-y md:divide-y-0 md:divide-x divide-[#14161a]/25 bg-[#f7f6f3]">
                <div className="p-5">
                  <div className="font-mono text-[10px] text-[#14161a]/60">01 // BLAST LINE</div>
                  <div className="font-bold text-sm uppercase mt-1">1,200 m³ Granite Removed</div>
                  <p className="text-xs text-[#14161a]/70 mt-1.5">Precision wire-sawing created a 12° keyed bench without fracturing adjacent fjord cliff faces.</p>
                </div>
                <div className="p-5">
                  <div className="font-mono text-[10px] text-[#14161a]/60">02 // TIE-BACKS</div>
                  <div className="font-bold text-sm uppercase mt-1">16 Post-Tensioned Tendons</div>
                  <p className="text-xs text-[#14161a]/70 mt-1.5">Grouted 38 meters deep into solid gneiss bedrock prior to above-grade steel erection.</p>
                </div>
                <div className="p-5">
                  <div className="font-mono text-[10px] text-[#14161a]/60">03 // BALLAST</div>
                  <div className="font-bold text-sm uppercase mt-1">3,120 kN Counterweight</div>
                  <p className="text-xs text-[#14161a]/70 mt-1.5">Magnetite concrete core poured continuously over 18 hours to eliminate cold joints.</p>
                </div>
              </div>
            </article>

            {/* ACT II: Asymmetric Tension Sequence with Embedded Node Plate */}
            <article className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-[29px] md:-left-[45px] top-1 w-5 h-5 bg-[#14161a] border-2 border-[#ffc72c] transform skew-x-[-12deg]"
              />
              <div className="font-mono text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-3">
                <span className="bg-[#ffc72c] text-[#14161a] px-2 py-0.5">ACT II</span>
                <span>CANTILEVER LAUNCH · MONTHS 06–11</span>
              </div>
              <div className="bg-[#14161a] text-[#f7f6f3] p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 aspect-square bg-[#0d0e11] overflow-hidden">
                  {!imgFailed ? (
                    <img
                      src="/src/assets/images/arch_structural_node_1795617036355.jpg"
                      alt="Steel tension pin joint during erection"
                      referrerPolicy="no-referrer"
                      onError={() => setImgFailed(true)}
                      className="w-full h-full object-cover filter saturate-[0.75]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono text-xs text-[#ffc72c]">
                      NODE ASSEMBLY
                    </div>
                  )}
                </div>
                <div className="md:col-span-8 space-y-4">
                  <h3 className="text-2xl font-extrabold uppercase">
                    RIGGING THE 18-METER DIAGONAL CHORD
                  </h3>
                  <p className="text-xs text-[#f7f6f3]/80 font-sans leading-relaxed">
                    Temporary barge-mounted cranes hoisted pre-assembled S690QL steel triangles into position over open water. Once the final Ø 120 mm clevis pin locked into place, falsework jacks were lowered in 2 mm increments until the structure stood completely free.
                  </p>
                  <div className="flex flex-wrap gap-6 font-mono text-[11px] text-[#ffc72c] tabular-nums pt-2 border-t border-[#f7f6f3]/15">
                    <span>PIN DIAMETER: Ø 120 mm</span>
                    <span>CAMBER SETTLE: 1.8 mm</span>
                    <span>CREW: 14 RIGGERS</span>
                  </div>
                </div>
              </div>
            </article>

            {/* ACT III: Dense Two-Row Completion Log */}
            <article className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-[29px] md:-left-[45px] top-1 w-5 h-5 bg-[#ffc72c] border-2 border-[#14161a] transform skew-x-[-12deg]"
              />
              <div className="font-mono text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-3">
                <span className="bg-[#14161a] text-[#ffc72c] px-2 py-0.5">ACT III</span>
                <span>ENVELOPE & EQUILIBRIUM · MONTHS 12–16</span>
              </div>
              <h3 className="text-2xl font-extrabold uppercase mb-4">
                SOLAR LOUVERS & FIBER-OPTIC SIGN-OFF
              </h3>
              <div className="border-y border-[#14161a]/25 divide-y divide-[#14161a]/20 font-mono text-xs">
                <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-bold">PHASE 3.1 // 14° ANODIZED BAFFLE HANGING</span>
                  <span className="text-[#14161a]/65">420 PRECAST & ALUMINUM FINS ALIGNED VIA LASER</span>
                </div>
                <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-bold">PHASE 3.2 // ACOUSTIC GLAZING SEAL</span>
                  <span className="text-[#14161a]/65">AIRTIGHTNESS VERIFIED AT 0.35 ACH50</span>
                </div>
                <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-bold">PHASE 3.3 // COMMISSIONING HANDOVER</span>
                  <span className="bg-[#ffc72c] text-[#14161a] px-2 py-0.5 font-bold">CERTIFIED 2026 Q3</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
