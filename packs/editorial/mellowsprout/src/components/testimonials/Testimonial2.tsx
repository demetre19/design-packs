import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

export function Testimonial2() {
  const reviews = [
    { quote: "The clay sculpting kit kept both my children engaged for hours! Absolute magic.", author: "David Miller, Dad of Leo" },
    { quote: "Screen-free playtime has never been this vibrant and effortless. Thank you MellowSprout!", author: "Elena Rostova, Mom of Maya" },
    { quote: "The quality of materials and organic play dough is unmatched anywhere else.", author: "Marcus Vance, Educator" },
  ];
  const [current, setCurrent] = useState(0);

  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-[36px] shadow-2xl border-4 border-[#3d2530] text-center space-y-6 relative">
        <div className="text-xl font-black text-[#ff8c42]">⭐ Parent Stories</div>
        <p className="text-2xl font-black text-[#3d2530] min-h-[90px] flex items-center justify-center">
          "{reviews[current].quote}"
        </p>
        <div className="font-bold text-[#3d2530]/80">{reviews[current].author}</div>
        <div className="flex justify-center gap-4 pt-4">
          <button 
            onClick={() => setCurrent((current - 1 + reviews.length) % reviews.length)}
            className="w-12 h-12 rounded-full bg-[#ff8c42] text-white flex items-center justify-center font-black shadow-md hover:bg-[#e07733]"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setCurrent((current + 1) % reviews.length)}
            className="w-12 h-12 rounded-full bg-[#ff8c42] text-white flex items-center justify-center font-black shadow-md hover:bg-[#e07733]"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function Testimonial3() {
  const items = [
    { quote: "Best birthday gift ever!", author: "Jessica T.", bg: "bg-[#ff8c42]/10 border-[#ff8c42]" },
    { quote: "Incredible attention to detail.", author: "Brian K.", bg: "bg-[#5ba8e8]/10 border-[#5ba8e8]" },
    { quote: "Pure joy in every box!", author: "Chloe S.", bg: "bg-[#f975a3]/10 border-[#f975a3]" },
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
