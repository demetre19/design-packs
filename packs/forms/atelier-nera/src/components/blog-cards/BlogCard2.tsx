import React from 'react';

export function BlogCard2() {
  const posts = [
    { num: "01", title: "the ethics of monochrome interfaces", date: "jan 2026" },
    { num: "02", title: "architectural restraint in web design", date: "dec 2025" },
    { num: "03", title: "notes on brutalist grid systems", date: "nov 2025" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="text-[9px] tracking-widest uppercase text-black/50 mb-12">numbered index</div>
      <div className="divide-y divide-black/10">
        {posts.map((p, idx) => (
          <div key={idx} className="py-6 flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-6">
              <span className="font-light text-2xl text-black/30">{p.num}.</span>
              <h4 className="font-light text-lg lowercase group-hover:underline">{p.title}</h4>
            </div>
            <span className="text-xs font-light text-black/40">{p.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
