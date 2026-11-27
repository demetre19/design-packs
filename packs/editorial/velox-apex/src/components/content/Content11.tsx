import React from 'react';

export function Content11() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-6">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#ff2e00] font-bold">
              DATASHEET MATRIX / UNEVEN CADENCE
            </div>
            <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mt-1">
              SPECIMEN <span className="text-[#ff2e00]">GRID</span>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-neutral-500 uppercase">
            12-CELL IRREGULAR MOSAIC · ISO-2026
          </div>
        </div>

        {/* Irregular 12-Column Hairline Matrix */}
        <div className="bg-black p-[1px] grid grid-cols-1 md:grid-cols-12 gap-[1px]">
          {/* Cell A: Tall Left Span (5 cols, 2 rows) */}
          <div className="md:col-span-5 md:row-span-2 bg-white p-6 flex flex-col justify-between">
            <div className="flex justify-between font-mono text-[10px] text-neutral-500 uppercase">
              <span>SPEC. 01 — VOLTAGE BUS</span>
              <span className="text-[#ff2e00] font-bold">CLASS HV-A</span>
            </div>
            <div className="my-8">
              <div className="text-7xl sm:text-8xl font-black tracking-tighter leading-none tabular-nums">
                998<span className="text-2xl font-mono text-[#ff2e00] ml-1">VDC</span>
              </div>
              <p className="font-mono text-[11px] text-neutral-600 mt-4 leading-relaxed">
                Peak silicon-carbide inverter bus potential under regenerative braking recovery; zero arc-fault tolerance at 220°C junction limit.
              </p>
            </div>
            <div className="border-t border-black pt-3 flex justify-between font-mono text-[10px] uppercase">
              <span>RIPPLE: &lt; 0.4%</span>
              <span className="font-bold">ISOLATED SHIELD</span>
            </div>
          </div>

          {/* Cell B: Top Middle (4 cols) */}
          <div className="md:col-span-4 bg-black text-white p-5 flex flex-col justify-between">
            <div className="font-mono text-[10px] text-[#ff2e00] uppercase font-bold">
              SPEC. 02 — STATOR FREQUENCY
            </div>
            <div className="text-5xl font-black tracking-tighter tabular-nums my-3">
              24,000 <span className="text-sm font-mono text-neutral-400">RPM</span>
            </div>
            <div className="font-mono text-[10px] text-neutral-400 uppercase">
              COBALT-IRON 0.1MM LAMINATIONS
            </div>
          </div>

          {/* Cell C: Top Right Narrow (3 cols) */}
          <div className="md:col-span-3 bg-[#ff2e00] text-black p-5 flex flex-col justify-between">
            <div className="font-mono text-[10px] font-black uppercase">
              SPEC. 03 — LEAN
            </div>
            <div className="text-6xl font-black tracking-tighter leading-none tabular-nums">
              64°
            </div>
            <div className="font-mono text-[10px] font-bold uppercase">
              MAX BANK LIMIT
            </div>
          </div>

          {/* Cell D: Mid Right Wide (7 cols) */}
          <div className="md:col-span-7 bg-white p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div>
              <div className="font-mono text-[10px] text-neutral-500 uppercase">SPEC. 04</div>
              <div className="font-black text-lg uppercase">GYRO CANCEL</div>
            </div>
            <div className="font-mono text-[11px] text-neutral-600">
              Dual counter-rotating rotors equalize angular momentum through S-curves.
            </div>
            <div className="text-right font-mono">
              <div className="text-2xl font-black tabular-nums">0.00</div>
              <div className="text-[10px] text-[#ff2e00] font-bold">NET PRECESSION</div>
            </div>
          </div>

          {/* Cell E: Bottom Left Narrow (2 cols) */}
          <div className="md:col-span-2 bg-neutral-100 p-4 flex flex-col justify-between">
            <div className="font-mono text-[9px] text-neutral-500 uppercase">SPEC. 05</div>
            <div className="text-3xl font-black tabular-nums tracking-tighter">0.214</div>
            <div className="font-mono text-[9px] uppercase font-bold">Cd·A M²</div>
          </div>

          {/* Cell F: Bottom Center (6 cols) */}
          <div className="md:col-span-6 bg-white p-5 flex items-center justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] text-[#ff2e00] font-bold uppercase">
                SPEC. 06 — CERAMIC STOPPING FORCE
              </div>
              <div className="font-black text-2xl uppercase tracking-tight">
                2.4G PEAK DECELERATION
              </div>
            </div>
            <div className="font-mono text-[10px] text-right text-neutral-600">
              390 MM ROTORS <br />8-PISTON BILLET
            </div>
          </div>

          {/* Cell G: Bottom Right (4 cols) */}
          <div className="md:col-span-4 bg-black text-white p-5 flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] text-neutral-400 uppercase">SPEC. 07 — DRY CURB</div>
              <div className="font-black text-3xl tracking-tighter tabular-nums">198.0 KG</div>
            </div>
            <div className="border border-[#ff2e00] text-[#ff2e00] font-mono text-[10px] px-2 py-1 font-bold">
              1.08 HP/KG
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
