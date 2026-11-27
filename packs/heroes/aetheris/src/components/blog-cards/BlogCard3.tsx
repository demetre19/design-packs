import React from 'react';

export function BlogCard3() {
  const archives = [
    { date: '24.10.2026', title: 'The Sonic Architecture of Minute Repeaters', category: 'ACOUSTICS' },
    { date: '12.09.2026', title: 'Subterranean Vault Logistics and Thermal Mapping', category: 'VAULTS' },
    { date: '01.08.2026', title: 'Perpetual Calendar Mechanisms Through Four Centuries', category: 'HOROLOGY' },
    { date: '15.07.2026', title: 'Geneva Seal Standards and Independent Certification', category: 'PROVENANCE' }
  ];

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">CHRONOLOGICAL INDEX</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">Archive Index</h2>
        </div>

        <div className="flex flex-col">
          {archives.map((a, i) => (
            <div key={i} className="py-6 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-[#13171c]/50 px-4 transition-colors cursor-pointer">
              <div className="flex items-center gap-6">
                <span className="text-xs font-mono text-[#d4b06a]">{a.date}</span>
                <h3 className="font-serif text-lg text-[#ece8e1]">{a.title}</h3>
              </div>
              <span className="text-[10px] font-mono text-[#7a8494] px-2 py-1 border border-white/10">{a.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
