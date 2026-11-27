import React from 'react';
import { Award, Shield } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      {/* Single centered price as certificate */}
      <div className="max-w-xl mx-auto bg-white border-2 border-[#232a30] p-8 md:p-12 text-center space-y-6 relative shadow-sm">
        <div className="absolute top-4 left-4 font-mono text-[9px] text-[#2e5e8e] tracking-[0.3em]">CERTIFICATE OF VALUE</div>
        <div className="absolute top-4 right-4 font-mono text-[9px] text-[#232a30]/40 tracking-[0.3em]">REF. CERT-99</div>

        <div className="pt-4">
          <Award className="w-10 h-10 text-[#2e5e8e] mx-auto opacity-80" />
          <h2 className="text-2xl font-light tracking-[0.08em] text-[#232a30] mt-4">Atelier Lifetime Membership</h2>
          <p className="font-mono text-xs text-[#232a30]/70 tracking-wider mt-2">
            Exclusive access to limited production allocation and annual private viewings in Geneva.
          </p>
        </div>

        <div className="py-6 border-y border-[#d0d0cc]">
          <div className="font-mono text-4xl font-light text-[#232a30]">$85,000</div>
          <div className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.25em] mt-1">ONE-TIME ATELIER ENROLMENT</div>
        </div>

        <button className="w-full bg-[#2e5e8e] text-white font-mono text-xs tracking-[0.25em] py-3.5 hover:bg-[#232a30] transition-colors">
          REQUEST CERTIFICATE
        </button>
      </div>
    </section>
  );
}
