import React from 'react';

export function Stats3() {
  const specs = [
    { param: 'DISPLACEMENT', value: '4.0 LITER V8' },
    { param: 'VALVETRAIN', value: '32-VALVE TITANIUM' },
    { param: 'COMPRESSION RATIO', value: '12.5 : 1' },
    { param: 'TURBOCHARGER', value: 'TWIN-SCROLL BALL BEARING' },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 03. SPECIFICATION TABLE</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mt-2">
            POWERTRAIN <span className="text-[#ffd500]">SPEC TABLE.</span>
          </h2>
        </div>

        <div className="bg-[#14161a] border border-[#262c36]">
          <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-[#22262f]">
              {specs.map((s, i) => (
                <tr key={i} className="hover:bg-[#0c0d0f]/50">
                  <td className="p-6 text-zinc-400 uppercase font-bold">{s.param}</td>
                  <td className="p-6 text-white font-mono font-bold text-right">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
