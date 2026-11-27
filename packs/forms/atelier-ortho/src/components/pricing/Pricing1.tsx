import React from 'react';
import { Check, Shield, ArrowRight } from 'lucide-react';

export function Pricing1() {
  const tiers = [
    { name: "SCHEMATIC DESIGN", price: "$4,500", desc: "Initial site analysis, zoning compliance, and massing models.", approved: false },
    { name: "DESIGN DEVELOPMENT", price: "$12,800", desc: "Comprehensive floor plans, structural grids, and material palettes.", approved: true },
    { name: "CONSTRUCTION DOCS", price: "$28,500", desc: "Full MEP, structural calculations, and permit-ready drawing set.", approved: false },
  ];

  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs text-cyan-300 border border-cyan-300 px-3 py-1 bg-[#142d48]">PRICING MATRIX // 01</span>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Architectural Scope Tiers</h2>
          <p className="text-xs text-cyan-100 max-w-xl mx-auto">Transparent fixed-fee scopes calibrated to AIA standards and professional engineering requirements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`border-2 p-6 flex flex-col justify-between relative bg-[#142d48] ${tier.approved ? 'border-cyan-400 ring-2 ring-cyan-400/30' : 'border-white/40'}`}>
              {tier.approved && (
                <div className="absolute -top-3 right-6 bg-cyan-400 text-[#1b3a5c] px-3 py-0.5 text-[10px] font-bold tracking-widest border border-white">
                  APPROVED STAMP
                </div>
              )}
              <div className="space-y-4">
                <div className="text-xs text-cyan-300">TIER [{idx + 1}]</div>
                <h3 className="text-xl font-bold uppercase tracking-wide">{tier.name}</h3>
                <div className="text-3xl font-bold text-cyan-300">{tier.price}</div>
                <p className="text-xs text-cyan-100 leading-relaxed">{tier.desc}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 space-y-3">
                <div className="flex items-center gap-2 text-xs text-cyan-200">
                  <Check className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Full CAD & BIM Deliverables</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-cyan-200">
                  <Check className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Engineering Sign-Off</span>
                </div>
                <button className={`w-full mt-4 py-3 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border ${tier.approved ? 'bg-cyan-400 text-[#1b3a5c] border-cyan-400 hover:bg-white' : 'border-white/40 hover:bg-white/10'}`}>
                  SELECT SCOPE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
