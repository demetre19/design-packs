import React from 'react';
import { ArrowUpRight, Cpu, Activity } from 'lucide-react';

export function FeatureGrid3() {
  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#2743f0]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">TESSELLATED ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight uppercase">Modular infrastructure mapped for scale.</h2>
        </div>

        <div className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-[#0d0e10]/10 rounded-[2px] overflow-hidden">
            <div className="lg:col-span-7 p-8 flex flex-col justify-between gap-6 border-b lg:border-b-0 lg:border-r border-[#0d0e10]/10">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] uppercase text-[#2743f0] font-bold">MODULE // 01</span>
                <span className="font-mono text-[10px] text-[#0d0e10]/40">[SUBSTATION MESH]</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold uppercase">Decentralized Microgrid Orchestration</h3>
                <p className="text-[#0d0e10]/70 text-xs leading-relaxed">
                  Each substation acts as an independent intelligent agent, executing decentralized consensus to balance frequency and phase angle without single points of failure.
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#2743f0] font-semibold cursor-pointer">
                <span>Inspect Microkernel Architecture</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <div className="lg:col-span-5 bg-[#0d0e10] text-white p-8 flex flex-col justify-between">
              <div className="flex justify-between items-center font-mono text-[10px] text-white/50">
                <span>ACTIVE NODES</span>
                <span>1,420 / 1,420</span>
              </div>
              <div className="my-8">
                <div className="font-mono text-3xl font-semibold tracking-tight text-[#2743f0]">0.42 ms</div>
                <div className="font-mono text-[10px] uppercase text-white/60 mt-1">Mean Consensus Latency</div>
              </div>
              <div className="font-mono text-[10px] text-white/40">SEC_LEVEL: QUANTUM_RESISTANT</div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-[#0d0e10]/10 rounded-[2px] overflow-hidden">
            <div className="lg:col-span-5 bg-[#f2f3f5] p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#0d0e10]/10">
              <div className="flex justify-between items-center font-mono text-[10px] text-[#0d0e10]/60">
                <span>TELEMETRY STREAM</span>
                <span>[02]</span>
              </div>
              <div className="my-8">
                <div className="font-mono text-3xl font-semibold tracking-tight text-[#0d0e10]">10,000 Hz</div>
                <div className="font-mono text-[10px] uppercase text-[#0d0e10]/60 mt-1">High-Frequency Sampling Rate</div>
              </div>
              <div className="font-mono text-[10px] text-[#0d0e10]/40">BUFFER: 100% NOMINAL</div>
            </div>
            <div className="lg:col-span-7 p-8 flex flex-col justify-between gap-6">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] uppercase text-[#2743f0] font-bold">MODULE // 02</span>
                <span className="font-mono text-[10px] text-[#0d0e10]/40">[TIME-SERIES LEDGER]</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold uppercase">Immutable Substation Telemetry</h3>
                <p className="text-[#0d0e10]/70 text-xs leading-relaxed">
                  Cryptographically chained telemetry logs provide unalterable audit trails for compliance, forensic root-cause analysis, and automated market settlement.
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#2743f0] font-semibold cursor-pointer">
                <span>View Ledger Specifications</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
