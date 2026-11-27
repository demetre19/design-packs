import React, { useState } from 'react';

export const Content8: React.FC = () => {
  const [focusedId, setFocusedId] = useState<string>('P2');
  const [failedImgs, setFailedImgs] = useState<Record<string, boolean>>({});

  const markFailed = (key: string) =>
    setFailedImgs((prev) => ({ ...prev, [key]: true }));

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#14161a]/60">
              STUDIO PINBOARD · WORKING ARCHIVE COLLISION
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mt-1">
              FIELD STUDIES & SITE ARTIFACTS
            </h2>
          </div>
          <span className="font-mono text-xs bg-[#14161a] text-[#ffc72c] px-3 py-1.5">
            CLICK ANY PINNED LAYER TO ELEVATE
          </span>
        </div>

        {/* Controlled Chaos Pinboard Mat */}
        <div
          className="relative border border-[#14161a]/30 p-6 md:p-10 min-h-[620px] bg-[#eeece6]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(20,22,26,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,22,26,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        >
          {/* Desktop Collage / Mobile Staggered Stack */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:block lg:relative lg:h-[540px]">
            {/* Piece 1: Large Cantilever Photo (Top-Left, slight tilt) */}
            <button
              type="button"
              onClick={() => setFocusedId('P1')}
              className={`text-left bg-[#f7f6f3] border border-[#14161a] p-3 transition-transform lg:absolute lg:top-2 lg:left-2 lg:w-[44%] lg:-rotate-2 ${
                focusedId === 'P1' ? 'z-40 scale-[1.02]' : 'z-10'
              }`}
            >
              <div className="w-3 h-3 bg-[#ffc72c] border border-[#14161a] absolute -top-1.5 left-1/2 -translate-x-1/2" />
              <div className="aspect-[4/3] bg-[#14161a] overflow-hidden">
                {!failedImgs.p1 ? (
                  <img
                    src="/src/assets/images/arch_cantilever_plate_1795617034893.jpg"
                    alt="Cantilever site study photograph"
                    referrerPolicy="no-referrer"
                    onError={() => markFailed('p1')}
                    className="w-full h-full object-cover filter saturate-[0.75]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-mono text-xs text-[#ffc72c]">
                    PLATE A-04
                  </div>
                )}
              </div>
              <div className="pt-2 flex items-center gap-3 font-mono text-[10px] uppercase">
                <span className="font-bold">PLATE A-04 // OVERHANG</span>
                <span className="text-[#14161a]/60">· +2,140 m</span>
              </div>
            </button>

            {/* Piece 2: Vertical Louver Photo overlapping Piece 1 & 4 */}
            <button
              type="button"
              onClick={() => setFocusedId('P2')}
              className={`text-left bg-[#14161a] text-[#f7f6f3] border border-[#14161a] p-3 transition-transform lg:absolute lg:top-16 lg:left-[38%] lg:w-[27%] lg:rotate-3 ${
                focusedId === 'P2' ? 'z-40 scale-[1.02]' : 'z-20'
              }`}
            >
              <div className="w-8 h-3 bg-[#ffc72c] absolute -top-1.5 right-6 transform skew-x-[-14deg]" />
              <div className="aspect-[3/4] bg-[#0d0e11] overflow-hidden">
                {!failedImgs.p2 ? (
                  <img
                    src="/src/assets/images/arch_diagonal_facade_1795617035283.jpg"
                    alt="Precast facade louver study"
                    referrerPolicy="no-referrer"
                    onError={() => markFailed('p2')}
                    className="w-full h-full object-cover filter saturate-[0.75]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-mono text-xs text-[#ffc72c]">
                    PLATE B-12
                  </div>
                )}
              </div>
              <div className="pt-2 flex justify-between font-mono text-[10px] uppercase">
                <span className="text-[#ffc72c] font-bold">PLATE B-12 // 14° FIN</span>
                <span className="text-[#f7f6f3]/60">PRECAST</span>
              </div>
            </button>

            {/* Piece 3: Technical Spec Slip (Bottom-Left overlapping Piece 1) */}
            <button
              type="button"
              onClick={() => setFocusedId('P3')}
              className={`text-left bg-[#ffc72c] text-[#14161a] border border-[#14161a] p-5 transition-transform lg:absolute lg:bottom-2 lg:left-[10%] lg:w-[33%] lg:rotate-1 ${
                focusedId === 'P3' ? 'z-40 scale-[1.02]' : 'z-30'
              }`}
            >
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest border-b border-[#14161a]/30 pb-1.5 mb-2">
                FIELD SLIP #19 // WIND TUNNEL
              </div>
              <p className="text-xs font-extrabold uppercase leading-snug">
                VORTEX SHEDDING ELIMINATED AT 12.5° SOFFIT TAPER · PEAK VELOCITY TESTED AT 195 KM/H
              </p>
              <div className="mt-3 font-mono text-[10px] flex justify-between">
                <span>ETH LAB #09</span>
                <span className="font-bold">PASSED</span>
              </div>
            </button>

            {/* Piece 4: Structural Node Square Photo (Top-Right) */}
            <button
              type="button"
              onClick={() => setFocusedId('P4')}
              className={`text-left bg-[#f7f6f3] border border-[#14161a] p-3 transition-transform lg:absolute lg:top-0 lg:right-3 lg:w-[27%] lg:-rotate-3 ${
                focusedId === 'P4' ? 'z-40 scale-[1.02]' : 'z-10'
              }`}
            >
              <div className="w-3 h-3 bg-[#14161a] absolute -top-1.5 left-6" />
              <div className="aspect-square bg-[#14161a] overflow-hidden">
                {!failedImgs.p4 ? (
                  <img
                    src="/src/assets/images/arch_structural_node_1795617036355.jpg"
                    alt="Steel cross-bracing pin node"
                    referrerPolicy="no-referrer"
                    onError={() => markFailed('p4')}
                    className="w-full h-full object-cover filter saturate-[0.75]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-mono text-xs text-[#ffc72c]">
                    NODE C-01
                  </div>
                )}
              </div>
              <div className="pt-2 flex justify-between font-mono text-[10px] uppercase">
                <span className="font-bold">NODE C-01 // S690</span>
                <span className="text-[#14161a]/60">Ø120 mm</span>
              </div>
            </button>

            {/* Piece 5: Dark Engineering Memorandum Card (Bottom-Right) */}
            <button
              type="button"
              onClick={() => setFocusedId('P5')}
              className={`text-left bg-[#14161a] text-[#f7f6f3] border border-[#14161a] p-5 transition-transform lg:absolute lg:bottom-4 lg:right-4 lg:w-[34%] lg:rotate-2 ${
                focusedId === 'P5' ? 'z-40 scale-[1.02]' : 'z-30'
              }`}
            >
              <div className="font-mono text-[10px] text-[#ffc72c] uppercase tracking-widest mb-2">
                MEMO // SITE INSPECTION 26.02
              </div>
              <p className="text-xs font-sans text-[#f7f6f3]/85 leading-relaxed">
                Formwork stripped on east cantilever nose. Laser deflection scan registers 1.8 mm total sag—well inside the 4.5 mm camber allowance.
              </p>
              <div className="mt-3 pt-2 border-t border-[#f7f6f3]/15 font-mono text-[10px] flex justify-between text-[#f7f6f3]/60">
                <span>ENG: H. BAUER</span>
                <span className="text-[#ffc72c]">APPROVED</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
