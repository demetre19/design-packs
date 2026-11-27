import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';

export const Pricing3: React.FC = () => {
  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
        <div className="inline-flex items-center gap-2 bg-[#ffc72c] px-3 py-1 font-mono text-xs uppercase font-bold transform skew-x-[-12deg]">
          <Compass className="w-3.5 h-3.5" /> FLAGSHIP FLAT FEE
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
          THE COMPREHENSIVE TECTONIC PACKAGE
        </h2>

        <p className="text-sm md:text-base text-[#14161a]/80 font-sans max-w-xl mx-auto">
          One fixed investment for complete architectural schematics, structural engineering calculations, and zoning approvals.
        </p>

        <div className="bg-[#14161a] text-[#f7f6f3] p-12 relative overflow-hidden transform skew-x-[-4deg]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc72c] transform translate-x-16 -translate-y-16 opacity-20" />
          <div className="transform skew-x-[4deg] space-y-6">
            <span className="font-mono text-xs text-[#ffc72c] uppercase tracking-widest">// ALL-INCLUSIVE PRACTICE FEE</span>
            <div className="text-6xl md:text-7xl font-extrabold font-mono text-[#ffc72c]">$64,000</div>
            <p className="text-xs font-mono text-[#f7f6f3]/70">NO HIDDEN COSTS // INCLUDES FULL STRUCTURAL CERTIFICATION</p>
            <div className="pt-4">
              <a
                href="#secure"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider hover:bg-[#f7f6f3] transition-colors"
              >
                Secure Consultation <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
