import React from 'react';

export function Content5() {
  return (
    <section className="relative bg-[#0c0d0f] border-b border-[#22262f] font-mono overflow-hidden">
      <div className="max-w-6xl mx-auto relative grid grid-cols-1 lg:grid-cols-2">
        {/* Center Collision Seam Element */}
        <div
          aria-hidden="true"
          className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center"
        >
          <div className="w-px h-24 bg-[#ffd500]" />
          <div className="bg-[#0c0d0f] border-2 border-[#ffd500] text-[#ffd500] px-4 py-3 text-2xl font-display font-black tracking-widest [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)]">
            VS
          </div>
          <div className="w-px h-24 bg-[#ffd500]" />
        </div>

        {/* LEFT ZONE: Deep Black Forced Induction Argument (Bar-Ladder + Oscilloscope) */}
        <div className="bg-[#0c0d0f] text-white p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-[#262c36] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[10px] tracking-[0.25em] text-[#ffd500] mb-4">
              <span>THESIS A // FORCED INDUCTION</span>
              <span>KD-998 V8-TT</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none mb-6">
              DENSITY OVER <span className="text-[#ffd500]">DISPLACEMENT</span>
            </h2>

            {/* Boost Pressure Ladder */}
            <div className="space-y-3 my-8">
              {[
                { rpm: '3,500 RPM', bar: '1.40 BAR', width: '48%' },
                { rpm: '5,500 RPM', bar: '2.45 BAR', width: '84%' },
                { rpm: '6,800 RPM', bar: '2.84 BAR', width: '98%' },
                { rpm: '8,400 RPM', bar: '2.65 BAR', width: '91%' },
              ].map((b) => (
                <div key={b.rpm} className="text-[11px] tabular-nums">
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-400">{b.rpm}</span>
                    <span className="text-[#ffd500] font-bold">{b.bar}</span>
                  </div>
                  <div className="h-2 bg-[#14161a] border border-[#262c36]">
                    <div className="h-full bg-[#ffd500]" style={{ width: b.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#22262f] pt-5 flex items-baseline justify-between">
            <span className="text-xs font-sans text-zinc-400 max-w-xs">
              Twin-scroll charge compression compresses 4.0L intake volume to match 11.0L atmospheric mass flow.
            </span>
            <span className="font-display text-4xl font-black text-[#ffd500] tabular-nums ml-4">612 NM</span>
          </div>
        </div>

        {/* RIGHT ZONE: Inverted Phosphor-Yellow High-Rev Argument (Redline Scale + Axioms) */}
        <div className="bg-[#ffd500] text-[#0c0d0f] p-8 md:p-14 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[10px] tracking-[0.25em] font-extrabold uppercase mb-4">
              <span>THESIS B // ATMOSPHERIC SCREAMER</span>
              <span>KD-880 V10-NA</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none mb-8">
              LINEAR THROTTLE <span className="underline decoration-4 underline-offset-4">IMMEDIACY</span>
            </h2>

            {/* Completely Different Internal Layout: Stacked Vertical Axioms + Redline Tick Strip */}
            <div className="border-t-2 border-b-2 border-[#0c0d0f] divide-y divide-[#0c0d0f]/25 my-6">
              <div className="py-3.5 flex items-baseline justify-between gap-4">
                <span className="text-[10px] font-extrabold tracking-widest">01 / ZERO LAG</span>
                <span className="text-xs font-sans font-semibold text-right">0.9 MS transient torque step</span>
              </div>
              <div className="py-3.5 flex items-baseline justify-between gap-4">
                <span className="text-[10px] font-extrabold tracking-widest">02 / ROTATIONAL CEILING</span>
                <span className="text-xs font-sans font-semibold text-right">10,800 RPM mechanical valve limit</span>
              </div>
              <div className="py-3.5 flex items-baseline justify-between gap-4">
                <span className="text-[10px] font-extrabold tracking-widest">03 / THERMAL SIMPLICITY</span>
                <span className="text-xs font-sans font-semibold text-right">-210°C lower exhaust backpressure</span>
              </div>
            </div>
          </div>

          {/* Redline Tick Scale Strip */}
          <div>
            <div className="flex justify-between text-[10px] font-extrabold tracking-widest mb-1.5">
              <span>8K</span>
              <span>9K</span>
              <span>10K</span>
              <span className="bg-[#0c0d0f] text-[#ffd500] px-1.5">10,800 REDLINE</span>
            </div>
            <div className="flex items-end gap-1 h-6">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 bg-[#0c0d0f] ${i > 18 ? 'h-full' : i % 3 === 0 ? 'h-4' : 'h-2 opacity-60'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
