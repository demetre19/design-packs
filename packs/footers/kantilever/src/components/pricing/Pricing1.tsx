import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';

export const Pricing1: React.FC = () => {
  const tiers = [
    {
      name: 'CONCEPT BRIEF',
      price: '$12,500',
      meta: 'Initial Feasibility & Massing',
      features: ['Preliminary 3D Massing Study', 'Site Topography Analysis', 'Zoning Compliance Report', 'Initial Structural Sketch'],
      highlight: false,
    },
    {
      name: 'FLAGSHIP TECTONICS',
      price: '$48,000',
      meta: 'Complete Architectural Package',
      features: ['Full Structural Engineering', 'Parametric Façade Design', 'Material Specification Matrix', 'Permit-Ready Documentation', '3D Render Monograph'],
      highlight: true,
    },
    {
      name: 'URBAN INTERVENTION',
      price: '$120,000',
      meta: 'Full Scale Commercial & Residential',
      features: ['Multi-Level Cantilever Design', 'Site Supervision & Oversight', 'MEP Engineering Integration', 'Sustainability Certification', 'Dedicated Lead Architect'],
      highlight: false,
    },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// INVESTMENT STRUCTURE</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            PRACTICE FEE SCHEDULE
          </h2>
          <p className="text-sm text-[#14161a]/70 font-sans">
            Transparent architectural service pricing scaled to project complexity and structural volume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`p-8 flex flex-col justify-between relative ${
                tier.highlight
                  ? 'bg-[#14161a] text-[#f7f6f3] shadow-2xl transform md:-translate-y-4'
                  : 'bg-[#f7f6f3] text-[#14161a] border-2 border-[#14161a]/15'
              }`}
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)' }}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 bg-[#ffc72c] text-[#14161a] px-4 py-1 font-mono text-[10px] font-bold uppercase transform skew-x-[-12deg] translate-x-2 -translate-y-2">
                  // FLAGSHIP TIER
                </div>
              )}
              <div className="space-y-6">
                <div>
                  <span className={`font-mono text-xs uppercase ${tier.highlight ? 'text-[#ffc72c]' : 'text-[#14161a]/60'}`}>
                    {tier.meta}
                  </span>
                  <h3 className="text-2xl font-extrabold uppercase mt-1">{tier.name}</h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-extrabold font-mono">{tier.price}</span>
                  <span className={`text-xs font-mono ${tier.highlight ? 'text-[#f7f6f3]/60' : 'text-[#14161a]/50'}`}>/ project</span>
                </div>
                <ul className="space-y-3 pt-4 border-t border-current/15">
                  {tier.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-xs font-sans">
                      <Check className={`w-4 h-4 flex-shrink-0 ${tier.highlight ? 'text-[#ffc72c]' : 'text-[#14161a]'}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-8 border-t border-current/15">
                <a
                  href="#inquire"
                  className={`w-full py-3.5 px-6 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                    tier.highlight
                      ? 'bg-[#ffc72c] text-[#14161a] hover:bg-[#f7f6f3]'
                      : 'bg-[#14161a] text-[#f7f6f3] hover:bg-[#ffc72c] hover:text-[#14161a]'
                  }`}
                >
                  Select Package <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
