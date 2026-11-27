import React from 'react';

export const Stat3: React.FC = () => {
  const table = [
    { project: 'Zermatt Monolith', location: 'Switzerland', area: '1,120 m²', levels: '4 Levels', year: '2026' },
    { project: 'Kyoto Pavilion', location: 'Japan', area: '640 m²', levels: '2 Levels', year: '2025' },
    { project: 'Oslo Fjord Tower', location: 'Norway', area: '2,300 m²', levels: '5 Levels', year: '2026' },
    { project: 'Berlin Archive', location: 'Germany', area: '4,100 m²', levels: '7 Levels', year: '2024' },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// ALIGNED COLUMN PROJECT TABLES</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            PROJECT DATA REGISTER
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[#14161a] font-mono text-xs">
                <th className="py-4 px-6 uppercase font-extrabold">Project Name</th>
                <th className="py-4 px-6 uppercase font-extrabold">Location</th>
                <th className="py-4 px-6 uppercase font-extrabold">Built Area</th>
                <th className="py-4 px-6 uppercase font-extrabold">Levels</th>
                <th className="py-4 px-6 uppercase font-extrabold">Year</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#14161a]/15 font-mono text-xs">
              {table.map((row, i) => (
                <tr key={i} className="hover:bg-[#14161a]/5">
                  <td className="py-4 px-6 font-sans font-bold text-sm uppercase">{row.project}</td>
                  <td className="py-4 px-6">{row.location}</td>
                  <td className="py-4 px-6 font-bold text-[#14161a]">{row.area}</td>
                  <td className="py-4 px-6">{row.levels}</td>
                  <td className="py-4 px-6 text-[#ffc72c] font-bold bg-[#14161a]">{row.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
