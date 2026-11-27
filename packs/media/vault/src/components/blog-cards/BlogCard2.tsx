import React from 'react';

export function BlogCard2() {
  const items = [
    { num: "01", title: "THE DISAPPEARANCE OF COLOR IN CONTEMPORARY TAILORING", time: "6 Min Read" },
    { num: "02", title: "BRUTALISM AS A GARMENT: CONCRETE AND KASHMIR", time: "9 Min Read" },
    { num: "03", title: "INTERVIEW WITH ARCHITECT PIERRE VOGEL ON MONOCHROME SPACES", time: "12 Min Read" }
  ];

  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>INDEX LIST CARDS // NUMERALS</span>
          <span>CURATED DISPATCHES</span>
        </div>
        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="border border-black p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-zinc-50 transition-colors">
              <div className="flex items-center gap-6">
                <span className="text-5xl font-black font-serif-editorial text-zinc-400">{item.num}</span>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight mb-1">{item.title}</h3>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">{item.time}</span>
                </div>
              </div>
              <a href="#" className="text-xs font-mono uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
                Read*
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
