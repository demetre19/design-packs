import React from 'react';
import { Check, FileText } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-4xl mx-auto border-2 border-white/40 p-8 bg-[#142d48] relative shadow-2xl">
        <div className="absolute -top-3 left-8 bg-cyan-400 text-[#1b3a5c] px-3 py-0.5 text-[10px] font-bold">
          SINGLE SCOPE SHEET // DWG-PRC-03
        </div>

        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl font-bold uppercase tracking-tight">Master Architectural & Structural Package</h2>
          <p className="text-xs text-cyan-100 max-w-xl mx-auto">All-inclusive turnkey engineering and architectural documentation for ground-up commercial structures.</p>
          <div className="text-5xl font-bold text-cyan-300 py-4">$34,500 <span className="text-xs text-white font-normal">/ FIXED PROJECT FEE</span></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-b border-white/20 py-6 mb-8 text-xs">
          <div className="space-y-3">
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-300" /><span>Complete Architectural Schematics</span></div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-300" /><span>Structural Calculations & Stamping</span></div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-300" /><span>MEP & HVAC System Integration</span></div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-300" /><span>Zoning Board Presentation Package</span></div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-300" /><span>Weekly Site Inspection Reports</span></div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-300" /><span>As-Built BIM 360 Deliverable</span></div>
          </div>
        </div>

        <div className="text-center">
          <button className="border border-cyan-400 bg-cyan-400 text-[#1b3a5c] px-8 py-3.5 font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer">
            INITIATE MASTER SCOPE CONTRACT
          </button>
        </div>
      </div>
    </section>
  );
}
