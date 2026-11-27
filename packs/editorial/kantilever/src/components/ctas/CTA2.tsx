import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CTA2: React.FC = () => {
  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// DIRECT CONSULTATION</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            START YOUR TECTONIC BRIEF WITH OUR PARTNERS
          </h2>
          <p className="text-sm text-[#14161a]/80 font-sans leading-relaxed">
            Schedule a direct preliminary consultation with our lead structural engineers in Zurich or Tokyo.
          </p>
          <div className="pt-2">
            <a
              href="#consult"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#14161a] text-[#f7f6f3] text-xs font-bold uppercase tracking-wider hover:bg-[#ffc72c] hover:text-[#14161a] transition-colors"
            >
              Schedule Consultation <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative w-full h-[320px] bg-[#14161a] overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 8%, 100% 100%, 0 92%)' }}>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Consultation"
              className="w-full h-full object-cover filter saturate-[0.8]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
