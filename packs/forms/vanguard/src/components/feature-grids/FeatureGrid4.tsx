import React from 'react';

export function FeatureGrid4() {
  const items = [
    { id: '01', title: 'INERTIAL GUIDANCE', spec: 'ACCURACY: 0.01 NM/HR', desc: 'Standalone fiber-optic gyro platform operating independently of GPS constellations.' },
    { id: '02', title: 'SCRAMJET COMBUSTION', spec: 'ISP: 1,450 S', desc: 'Supersonic combustion ramjet delivering sustained high-mach atmospheric thrust.' },
    { id: '03', title: 'AVIONICS BUS', spec: 'REDUNDANCY: TRIPLE', desc: 'Radiation-hardened MIL-STD-1553 bus architecture with optical links.' },
    { id: '04', title: 'HEAT SHIELDING', spec: 'LIMIT: 1,900 °C', desc: 'Ablative carbon-phenolic tiles integrated with active internal cooling channels.' },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">FEATURE GRID // 04</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
            2X2 HUD-CROSSHAIR <span className="text-[#ff3d00]">GRID</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#20232a] border border-[#3a3e4c] p-8 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] relative"
            >
              <div className="absolute top-4 right-4 text-[10px] text-[#ff3d00] font-bold border border-[#ff3d00]/30 px-2 py-0.5 bg-[#ff3d00]/10">
                {item.spec}
              </div>
              <span className="text-xs font-black text-[#ff3d00] mb-2 block">{item.id} //</span>
              <h3 className="text-lg font-extrabold uppercase font-sans mb-3">{item.title}</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
