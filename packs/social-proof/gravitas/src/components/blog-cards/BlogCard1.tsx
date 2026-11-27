import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard1() {
  const posts = [
    { num: '01', title: 'Optical Kerning in Variable Font Architectures', date: 'OCT 24, 2026', author: 'L. V. Hagen' },
    { num: '02', title: 'The Brutalist Revival in Swiss Editorial Design', date: 'SEP 18, 2026', author: 'Elena Voss' },
    { num: '03', title: 'Subpixel Rasterization & Terminal Legibility', date: 'AUG 02, 2026', author: 'Marcus Kaufmann' },
  ];

  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Blog 01 // Specimen Journal Cards</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Foundry Dispatch & Notes</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">WEIGHT CONTRAST HEADLINES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between hover:border-neutral-600 transition-colors group cursor-pointer">
              <div className="space-y-6">
                <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
                  <span>DISPATCH [{post.num}]</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-light tracking-tight text-white group-hover:underline">
                  {post.title}
                </h3>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-900 flex justify-between items-center text-xs font-mono text-neutral-400">
                <span>{post.author}</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
