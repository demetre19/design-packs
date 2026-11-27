import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export function FeatureGrid3() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6 space-y-20">
      {/* Row 1 */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[#ff8c42]/30 rounded-[40px] transform -rotate-3"></div>
          <div className="relative bg-white p-4 rounded-[32px] shadow-2xl border-4 border-[#3d2530]">
            <img src="https://images.unsplash.com/photo-1596464019199-ef038b30e013?w=800&auto=format&fit=crop&q=80" alt="Activity" className="w-full h-72 object-cover rounded-2xl" />
          </div>
        </div>
        <div className="space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-[#ff8c42]/20 text-[#ff8c42] font-black text-sm uppercase tracking-wider">
            🎨 creative freedom
          </span>
          <h3 className="text-4xl font-black text-[#3d2530]">Let their imagination run wild</h3>
          <p className="text-lg text-[#3d2530]/80 font-medium">
            Every kit encourages open-ended exploration with zero rules and boundless opportunities to invent, build, and dream.
          </p>
          <ul className="space-y-3 font-bold text-[#3d2530]">
            <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-[#6dbf67]" /> Non-toxic organic play dough</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-[#6dbf67]" /> Step-by-step parent guide cards</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid4() {
  const items = [
    { title: "Artistic Expression", color: "bg-[#ff8c42]" },
    { title: "Logical Puzzles", color: "bg-[#5ba8e8]" },
    { title: "Sensory Discovery", color: "bg-[#f975a3]" },
    { title: "Nature Exploration", color: "bg-[#6dbf67]" },
  ];

  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#f975a3]/20 text-[#f975a3] font-black text-sm uppercase tracking-wider">
          ⭐ 2x2 sticker grid
        </div>
        <h2 className="text-4xl font-black text-[#3d2530]">Explore our core pillars</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] shadow-xl border-4 border-[#3d2530] relative overflow-hidden text-left flex items-center justify-between">
              <div className="absolute -top-4 -right-4 bg-[#ff8c42] text-white px-4 py-1 rounded-full font-black text-xs border-2 border-[#3d2530] rotate-6">
                Sticker Badge 🌟
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#3d2530] mb-2">{item.title}</h3>
                <p className="text-[#3d2530]/70 font-medium">Curated by child development specialists.</p>
              </div>
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-white text-2xl font-black shadow-md`}>
                ✨
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
