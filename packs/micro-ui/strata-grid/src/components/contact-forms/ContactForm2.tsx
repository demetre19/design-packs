import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm2() {
  const [sent, setSent] = useState(false);

  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-2xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#2743f0]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">DIRECT ACCESS REGISTER</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight uppercase">Initialize engineering consultation.</h2>
        </div>

        {sent ? (
          <div className="bg-[#f2f3f5] p-8 border border-[#0d0e10]/15 text-center font-mono text-xs uppercase rounded-[2px]">
            Transmission logged. An infrastructure specialist will contact you shortly.
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-wider text-[#0d0e10]/60">Operator Full Name</label>
              <input type="text" required placeholder="Elena Vance" className="border-b border-[#0d0e10]/30 py-3 font-mono text-xs focus:border-[#2743f0] outline-none bg-transparent" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-wider text-[#0d0e10]/60">Secure Corporate Email</label>
              <input type="email" required placeholder="vance@nordikpower.io" className="border-b border-[#0d0e10]/30 py-3 font-mono text-xs focus:border-[#2743f0] outline-none bg-transparent" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-wider text-[#0d0e10]/60">Infrastructure Notes</label>
              <input type="text" placeholder="Number of substations or capacity in MW..." className="border-b border-[#0d0e10]/30 py-3 font-mono text-xs focus:border-[#2743f0] outline-none bg-transparent" />
            </div>
            <button type="submit" className="mt-4 bg-[#2743f0] text-white py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#1d32c4] transition-colors flex items-center justify-center gap-2 rounded-[2px]">
              <span>Transmit Consultation Request</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
