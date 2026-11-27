import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function Modal2() {
  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#2743f0]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">CONFIRMATION DIALOG // M-02</span>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[MODAL_STATE: ALERT]</span>
        </div>

        <div className="bg-white p-6 md:p-12 border border-[#0d0e10]/20 flex justify-center items-center">
          <div className="bg-white border border-[#0d0e10]/20 w-full max-w-md p-8 flex flex-col gap-6 rounded-[2px] shadow-sm">
            <div className="flex items-center gap-3 pb-4 border-b border-[#0d0e10]/15">
              <AlertTriangle className="w-5 h-5 text-[#2743f0]" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">Substation Isolation Protocol</span>
            </div>
            <p className="font-sans text-xs text-[#0d0e10]/70 leading-relaxed">
              Are you certain you wish to initiate emergency isolation of Substation Node Beta-4? This will reroute 980 MW instantly across adjacent nodes.
            </p>
            <div className="pt-4 border-t border-[#0d0e10]/15 grid grid-cols-2 gap-4 font-mono text-xs">
              <button className="border border-[#0d0e10]/20 py-3 uppercase hover:border-[#0d0e10] rounded-[2px] transition-colors">
                Abort Protocol
              </button>
              <button className="bg-[#2743f0] text-white py-3 uppercase tracking-widest hover:bg-[#1d32c4] rounded-[2px] transition-colors font-bold">
                Execute Isolate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
