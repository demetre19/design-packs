import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';

export const Contact1: React.FC = () => {
  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Form */}
        <div className="lg:col-span-7 bg-[#14161a] text-[#f7f6f3] p-8 md:p-12 space-y-8" style={{ clipPath: 'polygon(0 0, 100% 3%, 100% 100%, 0 97%)' }}>
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#ffc72c] text-[#14161a] px-3 py-1 font-mono text-xs uppercase font-bold transform skew-x-[-12deg]">
              <Compass className="w-3.5 h-3.5" /> PROJECT INQUIRY
            </div>
            <h2 className="text-3xl font-extrabold uppercase">SUBMIT ARCHITECTURAL BRIEF</h2>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="space-y-2">
              <label className="font-mono text-xs text-[#ffc72c] uppercase">// FULL NAME</label>
              <input
                type="text"
                placeholder="DR. / MR. / MS."
                className="w-full bg-[#f7f6f3]/10 border border-[#f7f6f3]/20 px-4 py-3 text-xs text-[#f7f6f3] font-mono focus:outline-none focus:border-[#ffc72c]"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs text-[#ffc72c] uppercase">// EMAIL ADDRESS</label>
              <input
                type="email"
                placeholder="CLIENT@ORGANIZATION.COM"
                className="w-full bg-[#f7f6f3]/10 border border-[#f7f6f3]/20 px-4 py-3 text-xs text-[#f7f6f3] font-mono focus:outline-none focus:border-[#ffc72c]"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs text-[#ffc72c] uppercase">// PROJECT SPECIFICATION & ESTIMATED SCALE</label>
              <textarea
                rows={4}
                placeholder="DESCRIBE SITE TOPOGRAPHY, PLOT AREA (m²), AND TIMELINE..."
                className="w-full bg-[#f7f6f3]/10 border border-[#f7f6f3]/20 px-4 py-3 text-xs text-[#f7f6f3] font-mono focus:outline-none focus:border-[#ffc72c]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider hover:bg-[#f7f6f3] transition-colors flex items-center justify-center gap-2"
            >
              Transmit Brief <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Right Office Details */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// PRACTICE LOCATIONS</span>
            <h3 className="text-3xl font-extrabold uppercase">GLOBAL STUDIOS</h3>
            <p className="text-sm text-[#14161a]/80 font-sans leading-relaxed">
              Our principal architectural offices operate in Zurich and Tokyo, housing multidisciplinary engineering and parametric design teams.
            </p>
          </div>

          <div className="space-y-6 font-mono text-xs border-t border-[#14161a]/15 pt-6">
            <div>
              <span className="text-[#14161a]/50 block">// ZURICH HEADQUARTERS</span>
              <span className="font-bold text-sm block mt-1">TONY-ARED-STRASSE 14, 8050 ZURICH</span>
            </div>
            <div>
              <span className="text-[#14161a]/50 block">// TOKYO STUDIO</span>
              <span className="font-bold text-sm block mt-1">GINZA 6-CHOME 10-1, CHUO-KU, TOKYO</span>
            </div>
            <div>
              <span className="text-[#14161a]/50 block">// DIRECT PARTNER INQUIRY</span>
              <span className="font-bold text-sm block mt-1 text-[#ffc72c] bg-[#14161a] px-3 py-1 inline-block mt-1">brief@kantilever.arch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
