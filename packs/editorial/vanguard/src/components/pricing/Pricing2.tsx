import React, { useState } from 'react';

export function Pricing2() {
  const [machTier, setMachTier] = useState(3);
  const [crewIncluded, setCrewIncluded] = useState(true);

  const calculatePrice = () => {
    let base = machTier * 45000;
    if (crewIncluded) base += 25000;
    return `$${base.toLocaleString()}`;
  };

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">PRICING // 02</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans">
            PROGRAM <span className="text-[#ff3d00]">CONFIGURATOR</span>
          </h2>
          <p className="text-zinc-300 text-xs">Configure your experimental flight test parameters and dynamic telemetry bundle.</p>
        </div>

        <div className="bg-[#20232a] border border-[#3a3e4c] p-8 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] space-y-8">
          <div>
            <label className="text-xs font-bold text-zinc-300 uppercase tracking-widest block mb-3">
              TARGET MACH RATING: <span className="text-[#ff3d00]">MACH {machTier}.0</span>
            </label>
            <div className="grid grid-cols-4 gap-4">
              {[2, 3, 4, 5].map((m) => (
                <button
                  key={m}
                  onClick={() => setMachTier(m)}
                  className={`py-3 text-xs font-extrabold uppercase [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] border ${
                    machTier === m
                      ? 'bg-[#ff3d00] text-white border-[#ff3d00]'
                      : 'bg-[#16181d] text-zinc-300 border-[#3a3e4c] hover:bg-[#282c35]'
                  }`}
                >
                  MACH {m}.0
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-b border-[#3a3e4c] py-6">
            <div>
              <div className="text-sm font-bold uppercase">DEDICATED FLIGHT CREW & CHASE PLANE</div>
              <div className="text-xs text-zinc-400">Includes T-38 Talon telemetry chase aircraft support.</div>
            </div>
            <button
              onClick={() => setCrewIncluded(!crewIncluded)}
              className={`px-6 py-2 text-xs font-black tracking-widest uppercase [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)] border ${
                crewIncluded ? 'bg-[#ff3d00] text-white border-[#ff3d00]' : 'bg-[#16181d] text-zinc-400 border-[#3a3e4c]'
              }`}
            >
              {crewIncluded ? 'INCLUDED' : 'OPTIONAL'}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-4">
            <div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest">ESTIMATED PROGRAM COST</div>
              <div className="text-4xl font-black font-sans text-[#ff3d00]">{calculatePrice()}</div>
            </div>
            <button className="mt-4 sm:mt-0 bg-[#ff3d00] hover:bg-[#e03500] text-white font-black text-xs tracking-widest px-8 py-3.5 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]">
              INITIATE CONTRACT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
