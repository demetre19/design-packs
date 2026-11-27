import React from 'react';

export function Stat3() {
  const table = [
    { metric: "Substation Failover Isolation", baseline: "14.2 minutes", strata: "120 microseconds", improvement: "99.8% Faster" },
    { metric: "Phasor Measurement Accuracy", baseline: "±0.5 degrees", strata: "±0.002 degrees", improvement: "250x Precision" },
    { metric: "Telemetry Sampling Frequency", baseline: "60 Hz SCADA", strata: "10,000 Hz Edge", improvement: "166x Bandwidth" },
    { metric: "Cyber Incident Isolation", baseline: "Manual Quarantine", strata: "Zero-Trust Mesh", improvement: "Autonomous" }
  ];

  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">BENCHMARK COMPARISON TABLE</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Legacy SCADA vs. Strata Grid OS.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[STAT-03 // REGISTER TABLE]</span>
        </div>

        <div className="bg-white border border-[#0d0e10]/15 divide-y divide-[#0d0e10]/10 rounded-[2px] overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-4 font-mono text-[10px] uppercase tracking-wider text-[#0d0e10]/60 bg-[#f2f3f5]">
            <span className="col-span-4">Performance Metric</span>
            <span className="col-span-3">Legacy SCADA</span>
            <span className="col-span-3 text-[#2743f0] font-bold">Strata Grid OS</span>
            <span className="col-span-2 text-right">Delta</span>
          </div>
          {table.map((row, i) => (
            <div key={i} className="grid grid-cols-12 px-6 py-4 items-center font-mono text-xs hover:bg-[#f2f3f5]/50 transition-colors">
              <span className="col-span-4 font-sans font-semibold uppercase text-xs">{row.metric}</span>
              <span className="col-span-3 text-[#0d0e10]/60">{row.baseline}</span>
              <span className="col-span-3 text-[#2743f0] font-bold">{row.strata}</span>
              <span className="col-span-2 text-right font-semibold text-[#0d0e10]">{row.improvement}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
