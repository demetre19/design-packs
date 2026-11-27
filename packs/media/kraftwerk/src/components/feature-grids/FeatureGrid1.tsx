import React from 'react';
import { Cpu, Shield, Zap, Terminal } from 'lucide-react';

export function FeatureGrid1() {
  const features = [
    { code: 'FG-01', title: 'ACTIVE AERO', desc: 'Real-time wing angle adjustment based on telemetry g-force vector sensors.' },
    { code: 'FG-02', title: 'TITANIUM EXHAUST', desc: 'Inconel-titanium alloy exhaust routing with tuned acoustic resonance chambers.' },
    { code: 'FG-03', title: 'CARBON BRAKES', desc: 'CCM-R ceramic discs with multi-piston forged monobloc calipers.' },
  ];

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-[#111] pb-3 mb-6">
          <div className="flex items-center space-x-2 text-xs uppercase font-bold">
            <Terminal className="w-4 h-4" />
            <span>[FEATURE MATRIX // 03-COL]</span>
          </div>
          <span className="text-[9px] text-[#666]">REF: MATRIX-1</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-[#111] divide-y md:divide-y-0 md:divide-x divide-[#111] bg-white">
          {features.map((f, i) => (
            <div key={i} className="p-6 flex flex-col justify-between space-y-6 hover:bg-[#f8f8f6] transition-colors">
              <div>
                <div className="flex justify-between items-center border-b border-[#111] pb-2 mb-4 text-[9px] text-[#666]">
                  <span>CODE: {f.code}</span>
                  <span className="font-bold">VERIFIED</span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2">{f.title}</h3>
                <p className="text-[10px] text-[#555] leading-relaxed">{f.desc}</p>
              </div>
              <div className="pt-4 border-t border-[#111] flex justify-between items-center text-[9px]">
                <span className="text-[#666]">SPEC COMPLIANCE</span>
                <span className="font-bold">100%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
