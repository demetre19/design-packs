import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';

export const Contact2: React.FC = () => {
  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#ffc72c] text-[#14161a] px-3 py-1 font-mono text-xs uppercase font-bold transform skew-x-[-12deg]">
            <Compass className="w-3.5 h-3.5" /> SECURE TRANSMISSION
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            DIRECT BRIEF INQUIRY
          </h2>
          <p className="text-sm text-[#14161a]/70 font-sans">
            Narrow-format secure transmission for private architectural briefs.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="bg-[#14161a] text-[#f7f6f3] p-8 md:p-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-mono text-xs text-[#ffc72c] uppercase">/ FULL NAME</label>
              <input
                type="text"
                placeholder="YOUR NAME"
                className="w-full bg-[#f7f6f3]/10 border border-[#f7f6f3]/20 px-4 py-3 text-xs text-[#f7f6f3] font-mono focus:outline-none focus:border-[#ffc72c]"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs text-[#ffc72c] uppercase">/ EMAIL</label>
              <input
                type="email"
                placeholder="EMAIL@DOMAIN.COM"
                className="w-full bg-[#f7f6f3]/10 border border-[#f7f6f3]/20 px-4 py-3 text-xs text-[#f7f6f3] font-mono focus:outline-none focus:border-[#ffc72c]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs text-[#ffc72c] uppercase">/ BRIEF DETAILS</label>
            <textarea
              rows={4}
              placeholder="PROJECT SPECIFICATIONS..."
              className="w-full bg-[#f7f6f3]/10 border border-[#f7f6f3]/20 px-4 py-3 text-xs text-[#f7f6f3] font-mono focus:outline-none focus:border-[#ffc72c]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider hover:bg-[#f7f6f3] transition-colors flex items-center justify-center gap-2"
          >
            Transmit Secure Brief <ArrowUpRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};
