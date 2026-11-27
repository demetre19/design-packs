import React from 'react';

export function BlogCard4() {
  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-4xl mx-auto bg-white border border-[#0d0e10]/15 p-10 md:p-14 flex flex-col gap-8 rounded-[2px]">
        <div className="flex flex-col gap-6 pb-8 border-b border-[#0d0e10]/10">
          <div className="flex justify-between items-center font-mono text-xs text-[#0d0e10]/60">
            <span className="text-[#2743f0] font-bold uppercase tracking-wider">RESEARCH PAPER // BLG-04</span>
            <span>[2026.11.24]</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight uppercase leading-tight">
            Sub-Millisecond Phasor Measurement in Decentralized Grids
          </h1>
          <p className="text-[#0d0e10]/70 text-sm leading-relaxed">
            Exploring how localized microkernel consensus algorithms eliminate single points of failure in national power distribution networks.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs pb-8 border-b border-[#0d0e10]/10">
          <div>
            <div className="text-[10px] text-[#0d0e10]/50 uppercase">Author</div>
            <div className="font-semibold uppercase mt-1">Dr. Elena Vance</div>
          </div>
          <div>
            <div className="text-[10px] text-[#0d0e10]/50 uppercase">Department</div>
            <div className="font-semibold uppercase mt-1">Core Architecture</div>
          </div>
          <div>
            <div className="text-[10px] text-[#0d0e10]/50 uppercase">Reading Time</div>
            <div className="font-semibold uppercase mt-1">6 Min Dispatch</div>
          </div>
          <div>
            <div className="text-[10px] text-[#0d0e10]/50 uppercase">Classification</div>
            <div className="font-semibold uppercase mt-1 text-[#2743f0]">Peer Reviewed</div>
          </div>
        </div>

        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-[#0d0e10]/50 uppercase">[REGISTER: 9942-B]</span>
          <a href="#download" className="bg-[#2743f0] text-white px-6 py-3 uppercase tracking-widest hover:bg-[#1d32c4] transition-colors rounded-[2px]">
            Download PDF Specification ↗
          </a>
        </div>
      </div>
    </section>
  );
}
