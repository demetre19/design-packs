import React from 'react';
import { ArrowRight } from 'lucide-react';

export function BlogCard1() {
  const posts = [
    { date: '2026.11.24', code: 'LOG-01', title: 'Optimizing Turbo Spool Response at High Altitude Barometric Pressures' },
    { date: '2026.11.18', code: 'LOG-02', title: 'Titanium Connecting Rod Stress Analysis Under 11,000 RPM Thermal Soak' },
    { date: '2026.11.12', code: 'LOG-03', title: 'Dry Sump Scavenging Efficiency Across Extreme Lateral G-Force Curves' },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 01. TEST LOG REGISTERS</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mt-2">
            ENGINEERING <span className="text-[#ffd500]">RESEARCH LOGS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <div key={i} className="bg-[#14161a] border border-[#262c36] p-6 flex flex-col justify-between hover:border-[#ffd500] transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
                  <span>{p.date}</span>
                  <span className="text-[#ffd500] font-bold">{p.code}</span>
                </div>
                <h3 className="text-base font-bold uppercase tracking-wider mb-4 text-white hover:text-[#ffd500] transition-colors cursor-pointer">
                  {p.title}
                </h3>
              </div>
              <div className="pt-4 border-t border-[#22262f] flex items-center justify-between text-xs">
                <span className="text-zinc-400">READ LOG</span>
                <ArrowRight className="w-4 h-4 text-[#ffd500]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
