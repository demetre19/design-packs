import React from 'react';
import { Star } from 'lucide-react';

export function Testimonial3() {
  const items = [
    { quote: "Best birthday gift ever!", author: "Jessica T.", bg: "border-[#ff8c42]" },
    { quote: "Incredible attention to detail.", author: "Brian K.", bg: "border-[#5ba8e8]" },
    { quote: "Pure joy in every box!", author: "Chloe S.", bg: "border-[#f975a3]" },
  ];

  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className={`p-8 rounded-[32px] border-4 ${item.bg} shadow-xl bg-white space-y-4`}>
            <div className="flex text-[#ff8c42]">
              {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-xl font-black text-[#3d2530]">"{item.quote}"</p>
            <div className="font-bold text-[#3d2530]/70">{item.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
