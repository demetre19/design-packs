import React from 'react';

export const Stat1: React.FC = () => {
  const stats = [
    { label: 'COMPLETED PROJECTS', value: '44+', unit: 'Monographs' },
    { label: 'YEARS OF PRACTICE', value: '18', unit: 'Years' },
    { label: 'TOTAL BUILT AREA', value: '42,500', unit: 'm²' },
    { label: 'GLOBAL AWARDS', value: '12', unit: 'Prizes' },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// PRACTICE METRICS</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            QUANTIFIABLE TECTONIC METRICS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((st, i) => (
            <div
              key={i}
              className="bg-[#14161a] text-[#f7f6f3] p-8 space-y-4 border-l-4 border-[#ffc72c]"
              style={{ clipPath: 'polygon(0 0, 100% 4%, 100% 100%, 0 96%)' }}
            >
              <span className="font-mono text-xs text-[#ffc72c] uppercase">{st.label}</span>
              <div className="text-4xl md:text-5xl font-extrabold font-mono text-[#ffc72c]">{st.value}</div>
              <span className="font-mono text-xs text-[#f7f6f3]/60 uppercase">{st.unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
