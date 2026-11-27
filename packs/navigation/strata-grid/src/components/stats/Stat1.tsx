import React from 'react';

export function Stat1() {
  const stats = [
    { label: "Grid Stability Index", val: "99.98%", change: "+0.4%", spark: [40, 60, 55, 70, 85, 90, 99], index: "01" },
    { label: "Active Substation Load", val: "4.82 GW", change: "+1.2%", spark: [50, 55, 65, 75, 80, 88, 94], index: "02" },
    { label: "Telemetry Latency", val: "0.42 ms", change: "-0.1ms", spark: [90, 80, 70, 60, 50, 45, 42], index: "03" }
  ];

  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">TELEMETRY SPARKLINE REGISTER</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">High-frequency performance metrics.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[STAT-01 // SPARKLINE]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-8 border border-[#0d0e10]/15 flex flex-col justify-between gap-8 rounded-[2px]">
              <div className="flex justify-between items-center font-mono text-[10px]">
                <span className="text-[#0d0e10]/60 uppercase tracking-wider">{s.label}</span>
                <span className="text-[#2743f0] font-bold">[{s.index}]</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-semibold font-mono tracking-tight">{s.val}</div>
                <div className="font-mono text-[10px] text-[#2743f0] font-bold">{s.change} vs baseline</div>
              </div>
              <div className="h-8 flex items-end gap-1 pt-4 border-t border-[#0d0e10]/10">
                {s.spark.map((h, j) => (
                  <div key={j} className="flex-1 bg-[#2743f0]/20 hover:bg-[#2743f0] transition-colors" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
