import React from 'react';
import { Terminal } from 'lucide-react';

export function BlogCard3() {
  const articles = [
    { cell: 'A14', title: 'Carbon Monocoque Autoclave Curing Protocols', date: '2026.11.01' },
    { cell: 'A15', title: 'Telemetry Encryption Standards for GT3 Racing', date: '2026.11.05' },
    { cell: 'A16', title: 'Ceramic Rotor Heat Dissipation Benchmarks', date: '2026.11.12' },
    { cell: 'A17', title: 'Pneumatic Valve Spring Durability Analysis', date: '2026.11.18' },
  ];

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="p-4 border-b border-[#111] bg-[#e8e8e6] text-[10px] uppercase font-bold flex justify-between">
          <span>[ARCHIVAL REGISTER // CELL REFERENCES]</span>
          <span>REF: BC-03</span>
        </div>

        <div className="divide-y divide-[#111]">
          {articles.map((a, i) => (
            <div 
              key={i} 
              onClick={() => alert(`Accessing register cell ${a.cell}...`)}
              className="p-4 flex items-center justify-between hover:bg-[#f4f4f0] transition-colors cursor-pointer text-[10px]"
            >
              <div className="flex items-center space-x-6">
                <span className="font-bold text-[#666] bg-[#e8e8e6] px-2 py-1 border border-[#111]">{a.cell}</span>
                <span className="font-bold uppercase text-xs">{a.title}</span>
              </div>
              <div className="flex items-center space-x-4 text-[9px]">
                <span className="text-[#666]">{a.date}</span>
                <span className="font-bold">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
