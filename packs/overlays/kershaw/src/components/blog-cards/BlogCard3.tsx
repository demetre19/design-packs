import React from 'react';

export function BlogCard3() {
  const runs = [
    { id: 'RUN 07', date: '2026.11.25', title: 'V8 Twin-Turbo High Boost Validation', status: 'VERIFIED' },
    { id: 'RUN 06', date: '2026.11.20', title: 'Hybrid Energy Recovery Efficiency Test', status: 'ARCHIVED' },
    { id: 'RUN 05', date: '2026.11.14', title: 'Titanium Valve Train Thermal Soak', status: 'ARCHIVED' },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 03. RUN REGISTER ARCHIVE</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mt-2">
            CHRONOLOGICAL <span className="text-[#ffd500]">TEST REGISTERS.</span>
          </h2>
        </div>

        <div className="bg-[#14161a] border border-[#262c36] divide-y divide-[#22262f]">
          {runs.map((r, i) => (
            <div key={i} className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-[#0c0d0f]/50 transition-colors">
              <div className="flex items-center gap-6">
                <span className="text-xs text-[#ffd500] font-bold">{r.id}</span>
                <span className="text-xs text-zinc-500">{r.date}</span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">{r.title}</h3>
              </div>
              <span className={`text-[10px] px-3 py-1 font-bold ${r.status === 'VERIFIED' ? 'bg-[#ffd500] text-black' : 'bg-[#0c0d0f] text-zinc-400 border border-[#262c36]'}`}>
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
