import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonial3() {
  const reviews = [
    { quote: "Absolute masters of brutalist aesthetic and clean code.", author: "LARS OLSEN", meta: "OSLO // 2026" },
    { quote: "The print quality and paper stock exceeded all expectations.", author: "YUKI TANAKA", meta: "KYOTO // 2026" },
    { quote: "Fastest turnaround and highest fidelity design partner we've used.", author: "CHLOE MARTIN", meta: "PARIS // 2026" }
  ];

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block bg-[#ff6b5e] text-white font-mono text-xs font-black px-3 py-1 mb-3 shadow-hard-sm">
            CLIENT NETWORK
          </div>
          <h2 className="font-grotesk font-black text-4xl sm:text-5xl uppercase tracking-tighter">
            TRUSTED BY BUILDERS.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white border-3 border-[#111111] shadow-hard-lg p-6 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4 text-[#ffd92e]">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} fill="#111111" className="text-[#111111]" />
                  ))}
                </div>
                <p className="font-mono text-xs sm:text-sm text-[#111111]/90 leading-relaxed mb-6">
                  "{r.quote}"
                </p>
              </div>
              <div className="pt-4 border-t-2 border-[#111111] font-mono text-xs">
                <div className="font-bold">{r.author}</div>
                <div className="text-[#111111]/60 text-[10px] mt-0.5">{r.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
