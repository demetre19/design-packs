import React from 'react';

export function Stat2() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// SCALE-CONTRAST STAT WALL</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
          POWER <span className="text-[#ff2e00]">REGISTER</span>
        </h2>

        {/* Scale-contrast stat wall: one huge, several small */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 border-2 border-black p-8 bg-black text-white flex flex-col justify-between">
            <div className="font-mono text-[10px] text-[#ff2e00] font-bold">// DOMINANT METRIC 01</div>
            <div className="my-8">
              <div className="text-8xl sm:text-9xl font-black tracking-tighter text-[#ff2e00]">
                305 <span className="text-2xl text-white font-mono">NM</span>
              </div>
              <div className="font-mono text-sm uppercase text-neutral-300 mt-2">
                INSTANT BRUSHLESS TORQUE ACROSS ALL RPM BANDS
              </div>
            </div>
            <div className="font-mono text-xs text-neutral-500 border-t border-neutral-800 pt-4">
              TESTED AT SUZUKA DOCK // 2026 BENCHMARK
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border-2 border-black p-6 bg-white">
              <div className="font-mono text-[10px] text-neutral-500 mb-1">// 02. HORSEPOWER</div>
              <div className="text-4xl font-black">215 HP</div>
              <div className="font-mono text-xs text-neutral-600 mt-1">Dual brushless motor output</div>
            </div>

            <div className="border-2 border-black p-6 bg-white">
              <div className="font-mono text-[10px] text-neutral-500 mb-1">// 03. WEIGHT RATIO</div>
              <div className="text-4xl font-black">1.08</div>
              <div className="font-mono text-xs text-neutral-600 mt-1">HP-to-KG ratio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
