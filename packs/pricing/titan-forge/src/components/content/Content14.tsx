import React from 'react';

export function Content14() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between border-b border-black pb-3 mb-4 font-mono text-[10px] uppercase tracking-widest">
          <span>SCORE 14 // MATHEMATICAL CADENCE CASCADE</span>
          <span className="text-[#f25c05] font-bold">12-TRACK SHIFT</span>
        </div>

        {/* Musical Score Column Measure Ruler */}
        <div
          className="hidden md:grid grid-cols-12 gap-2 border-b border-neutral-300 pb-2 mb-8 font-mono text-[9px] text-neutral-400 tabular-nums"
          aria-hidden="true"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-neutral-400 pl-1">
              M.{String(i + 1).padStart(2, '0')}
            </div>
          ))}
        </div>

        {/* Strict Shifting-Width Cascade Across 12 Columns */}
        <div className="space-y-6">
          {/* Measure 1: WIDE LEFT (Cols 1-8) */}
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-start-1 md:col-span-8 bg-black text-white p-6 md:p-8 border-2 border-black">
              <div className="flex justify-between font-mono text-[10px] text-[#f25c05] uppercase mb-2">
                <span>01 // WIDE-LEFT [COLS 1–8]</span>
                <span>LOAD: 100%</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-2">
                PRIMARY OVERBURDEN EXCAVATION
              </h3>
              <p className="font-mono text-xs text-neutral-400">
                Continuous bucket-wheel trenching clears 180,000 cubic meters of basalt caprock per operational shift.
              </p>
            </div>
          </div>

          {/* Measure 2: NARROW RIGHT (Cols 9-12) */}
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-start-9 md:col-span-4 bg-[#f25c05] text-black p-6 border-2 border-black">
              <div className="font-mono text-[10px] font-bold uppercase mb-2">
                02 // NARROW-RIGHT [COLS 9–12]
              </div>
              <div className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">
                18.4 M/S
              </div>
              <p className="font-mono text-[11px] font-bold uppercase">
                CONVEYOR SURGE RATE
              </p>
            </div>
          </div>

          {/* Measure 3: MEDIUM CENTER (Cols 4-9) */}
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-start-4 md:col-span-6 bg-white text-black p-6 border-4 border-black">
              <div className="flex justify-between font-mono text-[10px] text-neutral-500 uppercase mb-2">
                <span>03 // MEDIUM-CENTER [COLS 4–9]</span>
                <span className="text-[#f25c05] font-bold">SYNC LOCK</span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight leading-none mb-2">
                OPTICAL SPECTROSCOPY SORTING
              </h3>
              <p className="font-mono text-xs text-neutral-700">
                High-speed pneumatic diverters separate gangue waste from copper-rich porphyry prior to milling.
              </p>
            </div>
          </div>

          {/* Measure 4: WIDE RIGHT (Cols 5-12) */}
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-start-5 md:col-span-8 bg-black text-white p-6 md:p-8 border-2 border-black flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="font-mono text-[10px] text-[#f25c05] uppercase mb-1">
                  04 // WIDE-RIGHT [COLS 5–12]
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none">
                  CLOSED-LOOP SLURRY RECLAMATION
                </h3>
              </div>
              <div className="font-mono text-right shrink-0">
                <div className="text-2xl font-black text-[#f25c05] tabular-nums">94.8%</div>
                <div className="text-[10px] text-neutral-400 uppercase">WATER RECOVERED</div>
              </div>
            </div>
          </div>

          {/* Measure 5: NARROW LEFT (Cols 1-5) */}
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-start-1 md:col-span-5 bg-white text-black p-6 border-2 border-black border-b-4 border-b-[#f25c05]">
              <div className="font-mono text-[10px] text-neutral-500 uppercase mb-2">
                05 // NARROW-LEFT [COLS 1–5]
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight leading-none mb-1">
                BULLION DISPATCH SEAL
              </h3>
              <p className="font-mono text-[11px] text-neutral-600">
                Automated RFID ingot stamping &amp; armored rail loading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
