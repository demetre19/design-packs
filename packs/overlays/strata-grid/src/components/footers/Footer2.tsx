import React from 'react';

export function Footer2() {
  return (
    <footer className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10] border-t border-[#0d0e10]/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-xs">
          <div className="flex flex-col gap-4">
            <span className="font-bold uppercase tracking-wider text-[#0d0e10]/60">[01 // PLATFORM]</span>
            <a href="#core" className="hover:text-[#2743f0] transition-colors">Microkernel OS</a>
            <a href="#substations" className="hover:text-[#2743f0] transition-colors">Substation Mesh</a>
            <a href="#dispatch" className="hover:text-[#2743f0] transition-colors">Neural Dispatch</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold uppercase tracking-wider text-[#0d0e10]/60">[02 // TELEMETRY]</span>
            <a href="#streams" className="hover:text-[#2743f0] transition-colors">10,000 Hz Sampling</a>
            <a href="#ledger" className="hover:text-[#2743f0] transition-colors">Time-Series DB</a>
            <a href="#audit" className="hover:text-[#2743f0] transition-colors">Cryptographic Logs</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold uppercase tracking-wider text-[#0d0e10]/60">[03 // SECURITY]</span>
            <a href="#pqc" className="hover:text-[#2743f0] transition-colors">Post-Quantum PQC</a>
            <a href="#zero" className="hover:text-[#2743f0] transition-colors">Zero-Trust Mesh</a>
            <a href="#compliance" className="hover:text-[#2743f0] transition-colors">ISO-27001 Audit</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold uppercase tracking-wider text-[#0d0e10]/60">[04 // REGISTER]</span>
            <a href="#docs" className="hover:text-[#2743f0] transition-colors">System Docs</a>
            <a href="#api" className="hover:text-[#2743f0] transition-colors">REST / gRPC API</a>
            <a href="#status" className="hover:text-[#2743f0] transition-colors text-[#2743f0] font-bold">Grid Status ↗</a>
          </div>
        </div>
        <div className="pt-8 border-t border-[#0d0e10]/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-[10px] text-[#0d0e10]/50">
          <div>STRATA GRID SYSTEMS // INFRASTRUCTURE OS</div>
          <div>[REV: 4.08 // ALL NODES NOMINAL]</div>
        </div>
      </div>
    </footer>
  );
}
