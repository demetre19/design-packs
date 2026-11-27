import React from 'react';

export function Blog3() {
  const sorties = [
    { code: 'S-01', date: '2026.01.15', title: 'Subsonic Taxi & Brake Verification', status: 'COMPLETE' },
    { code: 'S-02', date: '2026.03.10', title: 'Transonic Flutter & Buffeting Sweep', status: 'COMPLETE' },
    { code: 'S-03', date: '2026.05.22', title: 'Mach 2.0 Ramjet Ignition Test', status: 'COMPLETE' },
    { code: 'S-04', date: '2026.08.14', title: 'Thermal Shielding Enclave Stress Test', status: 'COMPLETE' },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">FLIGHT LOGS // 03</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
            SORTIE <span className="text-[#ff3d00]">REGISTER</span>
          </h2>
        </div>

        <div className="bg-[#20232a] border border-[#3a3e4c] [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#3a3e4c] bg-[#16181d] text-zinc-400">
                <th className="p-4 uppercase tracking-widest text-[#ff3d00]">SORTIE CODE</th>
                <th className="p-4 uppercase tracking-widest">DATE</th>
                <th className="p-4 uppercase tracking-widest">MISSION TITLE</th>
                <th className="p-4 uppercase tracking-widest text-right">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3a3e4c]">
              {sorties.map((s) => (
                <tr key={s.code} className="hover:bg-[#282c35]/50">
                  <td className="p-4 font-bold text-[#ff3d00]">{s.code}</td>
                  <td className="p-4 text-zinc-400">{s.date}</td>
                  <td className="p-4 font-bold text-white uppercase">{s.title}</td>
                  <td className="p-4 text-right text-emerald-400 font-bold">{s.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
