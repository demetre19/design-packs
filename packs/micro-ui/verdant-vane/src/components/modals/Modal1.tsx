import React from 'react';
import { X, ArrowRight } from 'lucide-react';

export function Modal1() {
  return (
    <section className="w-full bg-[#e8f0ec] py-24 px-6 flex items-center justify-center">
      <div className="w-full max-w-lg bg-[#faf6f0] rounded-[32px] p-8 md:p-10 shadow-2xl relative border border-[#122420]/10">
        <button className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[#122420] hover:bg-[#1d4f47] hover:text-[#faf6f0] transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-2">
          Initial Consultation
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-[#122420] tracking-tight mb-6">
          Schedule with our team.
        </h3>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#122420]/80 font-semibold mb-1.5">Full Name</label>
            <input
              type="text"
              placeholder="Dr. Julian Vance"
              className="w-full px-4 py-3 rounded-2xl bg-[#e8f0ec] border border-[#122420]/15 text-sm text-[#122420] focus:outline-none focus:border-[#2a7a6d]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#122420]/80 font-semibold mb-1.5">Email</label>
            <input
              type="email"
              placeholder="julian@practice.com"
              className="w-full px-4 py-3 rounded-2xl bg-[#e8f0ec] border border-[#122420]/15 text-sm text-[#122420] focus:outline-none focus:border-[#2a7a6d]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#122420]/80 font-semibold mb-1.5">Practice Scope</label>
            <input
              type="text"
              placeholder="Longevity Clinic (2 locations)"
              className="w-full px-4 py-3 rounded-2xl bg-[#e8f0ec] border border-[#122420]/15 text-sm text-[#122420] focus:outline-none focus:border-[#2a7a6d]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-[#1d4f47] text-[#faf6f0] text-sm font-medium hover:bg-[#153b34] transition-all shadow-sm flex items-center justify-center gap-2 mt-4"
          >
            <span>Confirm Request</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
