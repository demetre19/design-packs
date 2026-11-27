import React from 'react';

export function Stat2() {
  const stats = [
    { num: "1,420", label: "Active Substation Nodes", index: "01" },
    { num: "14.2", label: "Terawatt Hours Dispatched", index: "02" },
    { num: "0.42ms", label: "Mean Consensus Latency", index: "03" },
    { num: "99.999%", label: "Uptime SLA Guarantee", index: "04" }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">KEY PERFORMANCE METRICS</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Planetary scale telemetry register.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[STAT-02 // NUMERALS]</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-[#f2f3f5] p-8 border border-[#0d0e10]/15 flex flex-col justify-between gap-6 rounded-[2px] relative">
              <div className="flex justify-between items-center">
                <div className="w-2 h-2 bg-[#2743f0]" />
                <span className="font-mono text-xs text-[#0d0e10]/40">[{s.index}]</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-4xl font-semibold font-mono tracking-tight text-[#0d0e10]">{s.num}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#0d0e10]/60 mt-1">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
