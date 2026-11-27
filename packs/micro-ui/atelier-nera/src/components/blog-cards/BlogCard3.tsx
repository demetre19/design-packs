import React from 'react';

export function BlogCard3() {
  const articles = [
    { title: "materiality in the age of screens", category: "theory" },
    { title: "silence as a user experience metric", category: "ux" },
    { title: "the geometry of silence", category: "architecture" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="text-[9px] tracking-widest uppercase text-black/50 mb-12">minimal article rows</div>
      <div className="space-y-6">
        {articles.map((art, idx) => (
          <div key={idx} className="pb-6 border-b border-black/10 flex flex-col md:flex-row md:items-center justify-between gap-2 group cursor-pointer">
            <span className="font-light text-xl lowercase group-hover:underline">{art.title}</span>
            <span className="text-[10px] uppercase tracking-wider text-black/50">[{art.category}]</span>
          </div>
        ))}
      </div>
    </section>
  );
}
