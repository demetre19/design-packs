import React from 'react';

export function Stat3() {
  const specs = [
    { param: 'AIRFRAME LENGTH', value: '24.5 METERS' },
    { param: 'WISP WSPAN', value: '11.2 METERS' },
    { param: 'DRY WEIGHT', value: '14,200 KG' },
    { param: 'MAX FUEL CAPACITY', value: '28,500 KG (LH2)' },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">STATS // 03</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
            SPEC TABLE <span className="text-[#ff3d00]">STATS</span>
          </h2>
        </div>

        <div className="bg-[#20232a] border border-[#3a3e4c] [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] overflow-hidden">
          <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-[#3a3e4c]">
              {specs.map((s, i) => (
                <tr key={i} className="hover:bg-[#282c35]/50">
                  <td className="p-4 font-bold text-zinc-400 uppercase tracking-widest">{s.param}</td>
                  <td className="p-4 font-extrabold text-[#ff3d00] text-right font-mono">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
