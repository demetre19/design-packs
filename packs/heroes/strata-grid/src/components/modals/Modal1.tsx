import React from 'react';
import { X, ArrowUpRight, Cpu } from 'lucide-react';

export function Modal1() {
  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#2743f0]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">MODAL DIALOG PREVIEW // M-01</span>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[MODAL_STATE: ACTIVE]</span>
        </div>

        {/* Modal Frame Simulation */}
        <div className="bg-[#f2f3f5] p-6 md:p-12 border border-[#0d0e10]/20 flex justify-center items-center">
          <div className="bg-white border border-[#0d0e10]/20 w-full max-w-lg p-6 md:p-8 flex flex-col gap-6 rounded-[2px] shadow-sm relative">
            <div className="flex justify-between items-center pb-4 border-b border-[#0d0e10]/15">
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-[#2743f0]" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">Substation Deployment Protocol</span>
              </div>
              <button className="text-[#0d0e10]/60 hover:text-[#0d0e10]"><X className="w-5 h-5" /></button>
            </div>
            <div className="flex flex-col gap-4 font-mono text-xs text-[#0d0e10]/70">
              <p className="font-sans text-xs text-[#0d0e10]">You are about to initialize autonomous dispatch across Cluster Alpha-1 (1,420 nodes). This will enforce zero-trust mesh routing.</p>
              <div className="bg-[#f2f3f5] p-4 border border-[#0d0e10]/10 flex flex-col gap-2">
                <div className="flex justify-between"><span>Cluster ID:</span><span className="font-semibold text-[#0d0e10]">ALPHA-1-US-WEST</span></div>
                <div className="flex justify-between"><span>Sampling Rate:</span><span className="font-semibold text-[#2743f0]">10,000 Hz</span></div>
                <div className="flex justify-between"><span>Encryption:</span><span className="font-semibold text-[#0d0e10]">Post-Quantum PQC</span></div>
              </div>
            </div>
            <div className="pt-4 border-t border-[#0d0e10]/15 flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] text-[#0d0e10]/40">[ID: MD-01]</span>
              <div className="flex items-center gap-3">
                <button className="border border-[#0d0e10]/20 px-4 py-2 font-mono text-xs uppercase hover:border-[#0d0e10] rounded-[2px]">Cancel</button>
                <button className="bg-[#2743f0] text-white px-6 py-2 font-mono text-xs uppercase tracking-widest hover:bg-[#1d32c4] flex items-center gap-2 rounded-[2px]">
                  <span>Confirm Dispatch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
