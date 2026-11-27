import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export function Pricing1() {
  const tiers = [
    { name: "Single Box", price: "$32", period: "one-time", color: "bg-white", popular: false },
    { name: "Explorer Club", price: "$28", period: "per month", color: "bg-[#ff8c42] text-white", popular: true },
    { name: "Master Creator", price: "$45", period: "per month", color: "bg-white", popular: false },
  ];

  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#ff8c42]/20 text-[#ff8c42] font-black text-sm uppercase tracking-wider">
          💎 simple pricing
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#3d2530]">
          Choose your carnival adventure
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((t, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-[36px] shadow-2xl border-4 border-[#3d2530] text-left relative transition-all ${t.color} ${t.popular ? 'transform -translate-y-4 scale-105 z-20' : 'bg-white'}`}
            >
              {t.popular && (
                <div className="absolute -top-5 right-6 bg-[#f975a3] text-white px-4 py-1.5 rounded-full font-black text-xs border-2 border-[#3d2530] rotate-6 shadow-md">
                  Most Popular 🔥
                </div>
              )}
              <h3 className={`text-2xl font-black mb-2 ${t.popular ? 'text-white' : 'text-[#3d2530]'}`}>{t.name}</h3>
              <div className="flex items-baseline gap-1 my-6">
                <span className={`text-5xl font-black ${t.popular ? 'text-white' : 'text-[#3d2530]'}`}>{t.price}</span>
                <span className={`font-bold opacity-80 text-sm ${t.popular ? 'text-white' : 'text-[#3d2530]'}`}>/ {t.period}</span>
              </div>
              <ul className={`space-y-4 mb-8 font-bold text-sm ${t.popular ? 'text-white' : 'text-[#3d2530]'}`}>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> 3+ tactile play activities</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Guided parent instruction card</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Free eco shipping</li>
              </ul>
              <button className={`w-full py-4 rounded-full font-black shadow-lg transition-all ${t.popular ? 'bg-white text-[#ff8c42] hover:bg-[#fdf3e7]' : 'bg-[#ff8c42] text-white hover:bg-[#e07733]'}`}>
                Choose {t.name} ✨
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
