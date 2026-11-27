import React from 'react';
import { Cpu, Zap, Activity, Shield } from 'lucide-react';

export function FeatureGrid4() {
  const grids = [
    { icon: Cpu, label: 'CH-01', title: 'VALVETRAIN KINEMATICS', val: '9,200 RPM' },
    { icon: Zap, label: 'CH-02', title: 'INJECTION PRESSURE', val: '350 BAR' },
    { icon: Activity, label: 'CH-03', title: 'OIL VISCOSITY', val: '15W-50' },
    { icon: Shield, label: 'CH-04', title: 'BLOCK INTEGRITY', val: 'NOMINAL' },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 04. SENSOR MATRIX</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mt-2">
            CROSSHAIR <span className="text-[#ffd500]">TELEMETRY GRID.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#262c36]">
          {grids.map((g, i) => {
            const Icon = g.icon;
            return (
              <div key={i} className="bg-[#14161a] p-8 flex flex-col justify-between hover:bg-[#0c0d0f] transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs text-[#ffd500] font-bold">{g.label}</span>
                  <Icon className="w-6 h-6 text-zinc-400" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold uppercase tracking-wider mb-2 text-white">{g.title}</h3>
                  <span className="text-2xl font-black text-[#ffd500] font-mono">{g.val}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
