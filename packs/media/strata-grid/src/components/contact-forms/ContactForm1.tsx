import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm1() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#2743f0]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">DISPATCH CONSULTATION // CF-01</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight uppercase">Connect with infrastructure engineers.</h2>
          <p className="text-[#0d0e10]/70 text-xs leading-relaxed">
            Request an architectural review of your regional substation grid or schedule a live demonstration of the Strata microkernel dispatch OS.
          </p>
          <div className="flex flex-col gap-3 pt-4 border-t border-[#0d0e10]/10 font-mono text-xs">
            <div className="flex justify-between"><span className="text-[#0d0e10]/60">Response Time:</span><span className="font-semibold">Under 2 hours</span></div>
            <div className="flex justify-between"><span className="text-[#0d0e10]/60">Secure Channel:</span><span className="font-semibold text-[#2743f0]">PGP Encrypted</span></div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white p-8 border border-[#0d0e10]/15 rounded-[2px]">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center gap-4">
              <div className="w-2 h-2 bg-[#2743f0]" />
              <div className="font-mono text-sm font-bold uppercase">Transmission Received Successfully</div>
              <p className="text-[#0d0e10]/70 text-xs font-mono">Our engineering team has logged your dispatch request.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-[#0d0e10]/60">Operator Name</label>
                  <input type="text" required placeholder="Elena Vance" className="bg-[#f2f3f5] border border-[#0d0e10]/15 p-3 font-mono text-xs focus:border-[#2743f0] outline-none rounded-[2px]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-[#0d0e10]/60">Secure Email</label>
                  <input type="email" required placeholder="vance@nordikpower.io" className="bg-[#f2f3f5] border border-[#0d0e10]/15 p-3 font-mono text-xs focus:border-[#2743f0] outline-none rounded-[2px]" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#0d0e10]/60">Grid Scale / Megawatts</label>
                <input type="text" placeholder="e.g. 1,420 MW Substation Cluster" className="bg-[#f2f3f5] border border-[#0d0e10]/15 p-3 font-mono text-xs focus:border-[#2743f0] outline-none rounded-[2px]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#0d0e10]/60">Dispatch Specifications</label>
                <textarea rows={4} placeholder="Describe your substation infrastructure requirements..." className="bg-[#f2f3f5] border border-[#0d0e10]/15 p-3 font-mono text-xs focus:border-[#2743f0] outline-none rounded-[2px]" />
              </div>
              <button type="submit" className="bg-[#2743f0] text-white py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#1d32c4] transition-colors flex items-center justify-center gap-2 rounded-[2px]">
                <span>Transmit Request</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
