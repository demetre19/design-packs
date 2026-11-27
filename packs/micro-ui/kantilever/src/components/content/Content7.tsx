import React, { useState } from 'react';

export const Content7: React.FC = () => {
  const [img1Failed, setImg1Failed] = useState(false);
  const [img2Failed, setImg2Failed] = useState(false);

  const sprocketTicks = Array.from({ length: 24 }, (_, idx) => idx);

  return (
    <section className="bg-[#14161a] text-[#f7f6f3] py-16 border-b border-[#f7f6f3]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest">
          <span className="text-[#ffc72c]">REEL 07 // DIAGONAL TECTONIC SEQUENCE</span>
          <span className="text-[#f7f6f3]/60">UNEQUAL FRAME CADENCE · 35MM ARCHITECTURAL CONTACT STRIP</span>
        </div>

        {/* Continuous Film Strip Band */}
        <div className="border-y-2 border-[#f7f6f3]/25 bg-[#14161a]">
          {/* Top Sprocket Perforation Track */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-[#f7f6f3]/20 overflow-hidden">
            {sprocketTicks.map((tick) => (
              <span
                key={`top-${tick}`}
                className="w-4 h-2 bg-[#f7f6f3]/25 transform skew-x-[-14deg] shrink-0 mx-1"
              />
            ))}
          </div>

          {/* Unequal Width Horizontal Frames */}
          <div className="flex flex-col lg:flex-row items-stretch divide-y lg:divide-y-0 lg:divide-x divide-[#f7f6f3]/25">
            {/* Frame 1: Tiny rotated strip */}
            <div className="lg:w-16 bg-[#ffc72c] text-[#14161a] p-4 flex lg:flex-col items-center justify-between shrink-0">
              <span className="font-mono text-[10px] font-bold">01A</span>
              <span className="font-extrabold text-xs uppercase tracking-widest lg:-rotate-90 whitespace-nowrap">
                KANTILEVER
              </span>
              <span className="font-mono text-[10px] font-bold">2026</span>
            </div>

            {/* Frame 2: Wide typographic essay frame */}
            <div className="lg:flex-[2.2] p-7 flex flex-col justify-between bg-[#14161a]">
              <div className="font-mono text-[10px] text-[#ffc72c] uppercase tracking-widest">
                FRAME 02A // THESIS
              </div>
              <div className="my-6 space-y-3">
                <h3 className="text-2xl font-extrabold uppercase leading-tight">
                  SLOPED CORRIDORS & SMOKED OAK JOINERY
                </h3>
                <p className="text-xs text-[#f7f6f3]/75 font-sans leading-relaxed">
                  Steel tension rods pierce the 14° concrete ceiling coffers, suspending an entire mezzanine library above the concrete concourse without a single floor column.
                </p>
              </div>
              <div className="font-mono text-[10px] text-[#f7f6f3]/50 tabular-nums">
                SPAN: 14.4 m · CLEARANCE: 6.2 m
              </div>
            </div>

            {/* Frame 3: Medium wide photographic frame */}
            <div className="lg:flex-[2.4] relative min-h-[240px] bg-[#0d0e11] overflow-hidden">
              {!img1Failed ? (
                <img
                  src="/src/assets/images/arch_timber_concrete_joinery_1795617036052.jpg"
                  alt="Interior concrete beams and tension rods"
                  referrerPolicy="no-referrer"
                  onError={() => setImg1Failed(true)}
                  className="w-full h-full object-cover filter saturate-[0.75]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-mono text-xs text-[#ffc72c]">
                  FRAME 03A // JOINERY
                </div>
              )}
              <div className="absolute bottom-2 left-2 bg-[#14161a]/90 text-[#ffc72c] px-2 py-0.5 font-mono text-[10px]">
                03A // CLERESTORY BAY
              </div>
            </div>

            {/* Frame 4: Narrow pure numeral frame */}
            <div className="lg:w-36 p-6 flex flex-col items-center justify-center text-center bg-[#f7f6f3] text-[#14161a] shrink-0">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#14161a]/60">
                PITCH
              </span>
              <span className="text-5xl font-extrabold font-mono tracking-tighter my-2 tabular-nums">
                14°
              </span>
              <span className="font-mono text-[10px] bg-[#ffc72c] px-2 py-0.5 font-bold">
                FRAME 04A
              </span>
            </div>

            {/* Frame 5: Medium-narrow quote frame */}
            <div className="lg:flex-[1.3] p-6 flex flex-col justify-between bg-[#14161a]">
              <span className="font-mono text-[10px] text-[#ffc72c]">05A // AXIOM</span>
              <blockquote className="text-sm font-bold uppercase leading-snug my-4">
                &ldquo;A DIAGONAL CUT TURNS DEAD WEIGHT INTO DIRECTIONAL VELOCITY.&rdquo;
              </blockquote>
              <span className="font-mono text-[10px] text-[#f7f6f3]/55">— M. VANCE</span>
            </div>

            {/* Frame 6: Medium vertical louver detail image */}
            <div className="lg:flex-[1.5] relative min-h-[240px] bg-[#0d0e11] overflow-hidden">
              {!img2Failed ? (
                <img
                  src="/src/assets/images/arch_diagonal_facade_1795617035283.jpg"
                  alt="Diagonal precast concrete facade louvers"
                  referrerPolicy="no-referrer"
                  onError={() => setImg2Failed(true)}
                  className="w-full h-full object-cover filter saturate-[0.75]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-mono text-xs text-[#ffc72c]">
                  FRAME 06A // LOUVERS
                </div>
              )}
              <div className="absolute top-2 right-2 bg-[#ffc72c] text-[#14161a] px-2 py-0.5 font-mono text-[10px] font-bold">
                06A // LOUVER
              </div>
            </div>
          </div>

          {/* Bottom Sprocket Perforation Track */}
          <div className="flex items-center justify-between px-3 py-2 border-t border-[#f7f6f3]/20 overflow-hidden">
            {sprocketTicks.map((tick) => (
              <span
                key={`bot-${tick}`}
                className="w-4 h-2 bg-[#f7f6f3]/25 transform skew-x-[-14deg] shrink-0 mx-1"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
