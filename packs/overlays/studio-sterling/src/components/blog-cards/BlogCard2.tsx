import React from 'react';

export function BlogCard2() {
  const articles = [
    { num: '1', date: 'NOV 2026', title: 'The Grid as Infrastructure in Modernist Publishing', read: '6 MIN READ' },
    { num: '2', date: 'AUG 2026', title: 'Negative Space and Architectural Typography', read: '9 MIN READ' },
    { num: '3', date: 'MAY 2026', title: 'Monograph Design for Brutalist Structures', read: '5 MIN READ' },
  ];

  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">INDEXED ESSAYS & WRITINGS</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">BLOG 02</span>
        </div>
        <div className="border border-black divide-y divide-black">
          {articles.map((art, idx) => (
            <div key={idx} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white hover:bg-neutral-50 transition-colors">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-7 h-7 border border-black rounded-full text-xs font-bold shrink-0">{art.num}</span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-1">{art.date} // {art.read}</div>
                  <h3 className="font-bold text-xs md:text-sm uppercase tracking-tight">{art.title}</h3>
                </div>
              </div>
              <button className="border border-black px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors shrink-0">
                Read Article
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
