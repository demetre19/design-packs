import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Pricing2: React.FC = () => {
  const options = [
    { title: 'RESIDENTIAL VILLA BRIEF', area: '300 m² - 600 m²', duration: '4 Months', price: '$35,000' },
    { title: 'COMMERCIAL PAVILION', area: '1,000 m² - 2,500 m²', duration: '8 Months', price: '$85,000' },
    { title: 'CIVIC CULTURAL CENTER', area: '5,000 m²+', duration: '14 Months', price: '$210,000' },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// PROJECT-TIER PRICING MATRIX</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            SCALE-BASED FEES & TIMELINES
          </h2>
        </div>

        <div className="space-y-4">
          {options.map((opt, i) => (
            <div
              key={i}
              className="bg-[#14161a] text-[#f7f6f3] p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:bg-[#ffc72c] hover:text-[#14161a] transition-colors"
            >
              <div className="space-y-1">
                <span className="font-mono text-xs text-[#ffc72c] group-hover:text-[#14161a] uppercase">// TIER 0{i + 1}</span>
                <h3 className="text-2xl font-extrabold uppercase">{opt.title}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-8 font-mono text-xs">
                <div>
                  <span className="opacity-65 block">SCALE</span>
                  <span className="font-bold">{opt.area}</span>
                </div>
                <div>
                  <span className="opacity-65 block">TIMELINE</span>
                  <span className="font-bold">{opt.duration}</span>
                </div>
                <div>
                  <span className="opacity-65 block">FEE</span>
                  <span className="text-xl font-bold">{opt.price}</span>
                </div>
                <a
                  href="#book"
                  className="p-3 bg-[#f7f6f3] text-[#14161a] group-hover:bg-[#14161a] group-hover:text-[#f7f6f3] transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
