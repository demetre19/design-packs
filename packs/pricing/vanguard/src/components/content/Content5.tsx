import React from 'react';

export function Content5() {
  return (
    <section
      aria-label="Propulsion Architecture Split Argument"
      className="w-full font-mono border-b border-[#2a2d35] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT OPPOSING ZONE: Obsidian Carbon — Pure Scramjet (Vertical Pressure Log) */}
        <div className="bg-[#0d0f13] text-white p-8 lg:p-12 border-r border-[#2a2d35] flex flex-col justify-between space-y-8">
          <div>
            <div className="text-[10px] tracking-[0.28em] text-[#ff3d00] font-bold uppercase mb-2">
              THESIS 01 // PURE SCRAMJET CYCLE
            </div>
            <h2 className="text-3xl font-black font-sans uppercase tracking-tight leading-none">
              UNCONSTRAINED <br />SUPERSONIC BURN
            </h2>
            <p className="text-xs text-zinc-400 mt-3 leading-relaxed max-w-md">
              Eliminating rotating turbomachinery removes thermal rotor-blade limits above Mach 3.2, allowing continuous atmospheric acceleration past Mach 5.
            </p>
          </div>

          {/* Left Internal Layout: Segmented Horizontal Enthalpy Bars */}
          <div className="space-y-4">
            {[
              { label: 'MASS EFFICIENCY (ISP)', pct: '92%', val: '1,450 SEC' },
              { label: 'MOVING PARTS COUNT', pct: '14%', val: 'ZERO ROTORS' },
              { label: 'PEAK MACH CEILING', pct: '98%', val: 'M 6.20+' },
            ].map((bar) => (
              <div key={bar.label} className="space-y-1">
                <div className="flex justify-between text-[10px] tracking-widest">
                  <span className="text-zinc-400">{bar.label}</span>
                  <span className="text-[#ff3d00] font-bold tabular-nums">{bar.val}</span>
                </div>
                <div className="h-2.5 bg-[#1b1e25] border border-[#2a2d35]">
                  <div className="h-full bg-[#ff3d00]" style={{ width: bar.pct }} />
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#2a2d35] pt-4 text-[11px] text-zinc-400">
            CONSTRAINT: REQUIRES M 2.6 CARRIER BOOST PRIOR TO LIGHT-OFF
          </div>
        </div>

        {/* CENTER COLLISION SEAM (Desktop) */}
        <div
          aria-hidden="true"
          className="hidden lg:flex flex-col items-center justify-center absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-20 pointer-events-none"
        >
          <div className="w-px flex-1 bg-[#ff3d00]/60" />
          <div className="bg-[#ff3d00] text-black font-black font-sans text-xl tracking-tighter px-3.5 py-2.5 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]">
            VS
          </div>
          <div className="w-px flex-1 bg-[#ff3d00]/60" />
        </div>

        {/* RIGHT OPPOSING ZONE: Inverted High-Contrast Titanium Sheet — TBCC Hybrid */}
        <div className="bg-[#e4e6eb] text-[#16181d] p-8 lg:p-12 flex flex-col justify-between space-y-8">
          <div className="lg:pl-6">
            <div className="text-[10px] tracking-[0.28em] text-[#ff3d00] font-extrabold uppercase mb-2">
              THESIS 02 // TURBINE-BASED COMBINED CYCLE
            </div>
            <h2 className="text-3xl font-black font-sans uppercase tracking-tight leading-none">
              RUNWAY-TO-MACH 4 <br />AUTONOMY
            </h2>
          </div>

          {/* Right Internal Layout: Completely Different — Stark Ledger Quote & Dual Verdict Matrix */}
          <div className="lg:pl-6 border-t-2 border-b-2 border-[#16181d] py-5 space-y-4">
            <p className="text-sm font-bold font-sans leading-snug">
              "A single airframe capable of conventional runway takeoff, subsonic loiter, and supersonic dash eliminates captive-carry bomber dependence."
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 text-xs border-t border-[#16181d]/20 tabular-nums">
              <div>
                <div className="text-[10px] text-zinc-600 uppercase">TAKEOFF ROLL</div>
                <div className="font-black text-lg">2,400 M</div>
              </div>
              <div>
                <div className="text-[10px] text-zinc-600 uppercase">DRY WEIGHT PENALTY</div>
                <div className="font-black text-lg text-[#ff3d00]">+1,850 KG</div>
              </div>
            </div>
          </div>

          <div className="lg:pl-6 flex items-center justify-between text-[11px] font-bold">
            <span>VERDICT: DEPLOYED ON X-99B</span>
            <span className="bg-[#16181d] text-white px-2.5 py-1">SORTIE S-11</span>
          </div>
        </div>
      </div>
    </section>
  );
}
