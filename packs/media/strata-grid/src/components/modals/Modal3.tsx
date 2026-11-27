import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export function Modal3() {
  const specs = [
    { label: "Subsystem ID", value: "ALPHA-01" },
    { label: "Sampling Rate", value: "10,000 Hz" },
    { label: "Protocol", value: "IEC 61850" },
    { label: "Encryption", value: "Post-Quantum PQC" },
    { label: "Status", value: "Nominal" }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#2743f0]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">SLIDE-OVER INSPECTOR // M-03</span>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[DRAWER_ACTIVE]</span>
        </div>

        <div className="bg-[#f2f3f5] p-6 border border-[#0d0e10]/20 flex justify-end">
          <div className="bg-white border border-[#0d0e10]/20 w-full max-w-md p-8 flex flex-col justify-between gap-8 rounded-[2px] shadow-sm">
            <div className="flex justify-between items-center pb-4 border-b border-[#0d0e10]/15">
              <div className="font-mono text-xs uppercase tracking-wider font-semibold">Substation Inspector</div>
              <button className="text-[#0d0e10]/60 hover:text-[#0d0e10]"><X className="w-5 h-5" /></button>
            </div>
            <div className="divide-y divide-[#0d0e10]/10 font-mono text-xs">
              {specs.map((s, i) => (
                <div key={i} className="py-3 flex justify-between items-center">
                  <span className="text-[#0d0e10]/60 uppercase text-[10px]">{s.label}</span>
                  <span className="font-semibold text-[#0d0e10]">{s.value}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-[#0d0e10]/15 flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#0d0e10]/40">[REG: 9942]</span>
              <button className="bg-[#2743f0] text-white px-6 py-2.5 font-mono text-xs uppercase tracking-widest hover:bg-[#1d32c4] flex items-center gap-2 rounded-[2px]">
                <span>Export Logs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
