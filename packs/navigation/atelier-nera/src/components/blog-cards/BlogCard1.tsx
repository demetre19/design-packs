import React from 'react';

export function BlogCard1() {
  const articles = [
    { title: "on absence and whitespace", date: "march 2026", read: "4 min", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80" },
    { title: "grotesque typography in digital spaces", date: "february 2026", read: "6 min", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="flex justify-between items-center text-[9px] tracking-widest uppercase text-black/50 mb-12">
        <span>journal &amp; essays</span>
        <span>02 articles</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {articles.map((a, idx) => (
          <article key={idx} className="space-y-4 group cursor-pointer">
            <div className="w-full h-64 bg-neutral-100 p-2 border border-black/10">
              <img src={a.img} alt={a.title} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex justify-between text-[10px] uppercase tracking-wider text-black/50">
              <span>{a.date}</span>
              <span>{a.read} read</span>
            </div>
            <h3 className="font-light text-xl lowercase tracking-tight group-hover:underline">
              {a.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
