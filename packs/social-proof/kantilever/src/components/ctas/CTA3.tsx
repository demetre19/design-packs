import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CTA3: React.FC = () => {
  return (
    <section className="bg-[#14161a] text-[#f7f6f3] py-20 border-t border-[#f7f6f3]/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="font-mono text-xs text-[#ffc72c] uppercase">// MINIMAL ACTION BAND</span>
          <h3 className="text-2xl font-extrabold uppercase">DOWNLOAD 2026 PRACTICE MONOGRAPH</h3>
        </div>
        <a
          href="#download"
          className="px-8 py-4 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider hover:bg-[#f7f6f3] transition-colors flex items-center gap-2"
        >
          Download PDF (14.2 MB) <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
