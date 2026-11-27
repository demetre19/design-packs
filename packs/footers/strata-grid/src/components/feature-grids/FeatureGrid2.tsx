import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function FeatureGrid2() {
  const rows = [
    { num: "01", title: "Substation Auto-Isolation", latency: "0.12ms", protocol: "IEC 61850", status: "Active" },
    { num: "02", title: "Harmonic Load Dampening", latency: "0.45ms", protocol: "IEEE 1547", status: "Active" },
    { num: "03", title: "Predictive Thermal Balancing", latency: "1.20ms", protocol: "ANSI C84.1", status: "Nominal" },
    { num: "04", title: "Quantum Lattice Encryption", latency: "0.08ms", protocol: "NIST PQC", status: "Secured" }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">REGISTER ROW MATRIX</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Deterministic protocol specifications.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[FG-02 // REGISTERS]</span>
        </div>

        <div className="bg-[#f2f3f5] border border-[#0d0e10]/15 divide-y divide-[#0d0e10]/10 rounded-[2px]">
          <div className="grid grid-cols-12 px-6 py-4 font-mono text-[10px] uppercase tracking-wider text-[#0d0e10]/60 bg-white">
            <span className="col-span-1">Index</span>
            <span className="col-span-5">Subsystem Register</span>
            <span className="col-span-2">Latency</span>
            <span className="col-span-2">Standard</span>
            <span className="col-span-2 text-right">Status</span>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-12 px-6 py-4 items-center font-mono text-xs hover:bg-white transition-colors">
              <span className="col-span-1 text-[#2743f0] font-bold">[{r.num}]</span>
              <span className="col-span-5 font-semibold font-sans uppercase text-sm">{r.title}</span>
              <span className="col-span-2 text-[#0d0e10]/70">{r.latency}</span>
              <span className="col-span-2 text-[#0d0e10]/70">{r.protocol}</span>
              <span className="col-span-2 text-right text-[#2743f0] font-bold flex items-center justify-end gap-1">
                <span>{r.status}</span>
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
