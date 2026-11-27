import React from 'react';
import { Zap, Shield, Cpu, Activity, Compass, Flame } from 'lucide-react';

export function FeatureGrid4() {
  const items = [
    { icon: Zap, title: 'INSTANT TORQUE', val: '305 NM' },
    { icon: Shield, title: 'TITANIUM CAGE', val: 'FIA CERTIFIED' },
    { icon: Cpu, title: 'NEURAL ECU', val: '5KHZ SAMPLING' },
    { icon: Activity, title: 'TELEMETRY CLOUD', val: 'LIVE 4G/5G' },
    { icon: Compass, title: 'LEAN ANGLE', val: '64 DEGREES' },
    { icon: Flame, title: 'COOLING BATH', val: 'DIELECTRIC' },
  ];

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Single giant title spanning full width */}
        <div className="mb-12">
          <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// DENSE MICRO-GRID REGISTER</div>
          <h2 className="text-5xl sm:text-8xl font-black uppercase tracking-tighter leading-none">
            TOTAL <span className="text-[#ff2e00]">SPECIFICATION</span> INDEX
          </h2>
        </div>

        {/* Dense micro-grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="border-2 border-black p-6 bg-white hover:bg-neutral-50 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-neutral-500 text-[10px] mb-1">
                    <Icon className="w-3.5 h-3.5 text-[#ff2e00]" />
                    <span>// SPEC 0{idx + 1}</span>
                  </div>
                  <div className="font-bold text-sm uppercase text-black">{item.title}</div>
                </div>
                <div className="bg-black text-white px-3 py-1 text-xs font-black">
                  {item.val}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
