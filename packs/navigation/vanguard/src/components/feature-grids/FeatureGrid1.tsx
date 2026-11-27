import React from 'react';
import { Gauge, Shield, Cpu, Zap, Radio, Compass } from 'lucide-react';

export function FeatureGrid1() {
  const features = [
    { id: '01', title: 'SCRAMJET AFTERBURNER', spec: 'ISP: 1,420 SEC', desc: 'Sustained supersonic combustion ramjet with automated fuel-air mixing ratio.' },
    { id: '02', title: 'TITANIUM MATRIX SKIN', spec: 'TEMP: 1,650 °C', desc: 'Advanced thermal protection system designed to withstand extreme atmospheric friction.' },
    { id: '03', title: 'NEURAL FLIGHT COMPUTER', spec: 'LATENCY: < 1.2MS', desc: 'Triple-redundant AI guidance system computing trajectory corrections in real time.' },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#2a2d35] pb-6">
          <div>
            <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">FEATURE GRID // 01</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
              CARBON PANEL <span className="text-[#ff3d00]">ARCHITECTURE</span>
            </h2>
          </div>
          <div className="text-xs text-zinc-400 mt-2 md:mt-0">
            SYSTEM STATUS: ALL COLUMNS NOMINAL
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.id}
              className="bg-[#20232a] border border-[#3a3e4c] p-6 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black text-[#ff3d00]">{f.id} //</span>
                  <span className="text-[10px] bg-[#16181d] px-2 py-1 border border-[#2a2d35] text-zinc-300 font-bold">
                    {f.spec}
                  </span>
                </div>
                <h3 className="text-base font-extrabold uppercase font-sans tracking-wide mb-2">{f.title}</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">{f.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#2a2d35] flex items-center justify-between text-[10px] text-zinc-400">
                <span>TELEMETRY VERIFIED</span>
                <span className="text-[#ff3d00] font-bold">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
