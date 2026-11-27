import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function Pricing2() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-black text-[#3d2530]">Flexible billing for families</h2>

        {/* Monthly/Yearly Toggle as Chunky Pill Switch */}
        <div className="inline-flex items-center bg-white p-2 rounded-full border-4 border-[#3d2530] shadow-xl">
          <button 
            onClick={() => setYearly(false)}
            className={`px-6 py-3 rounded-full font-black text-sm transition-all ${!yearly ? 'bg-[#ff8c42] text-white shadow-md' : 'text-[#3d2530]'}`}
          >
            Monthly Billing
          </button>
          <button 
            onClick={() => setYearly(true)}
            className={`px-6 py-3 rounded-full font-black text-sm transition-all ${yearly ? 'bg-[#ff8c42] text-white shadow-md' : 'text-[#3d2530]'}`}
          >
            Yearly (Save 20% 🎉)
          </button>
        </div>

        <div className="bg-white p-10 rounded-[36px] shadow-2xl border-4 border-[#3d2530] max-w-lg mx-auto text-left relative">
          <div className="absolute -top-4 -right-4 bg-[#6dbf67] text-white px-4 py-1 rounded-full font-black text-xs border-2 border-[#3d2530] rotate-6">
            Best Value
          </div>
          <h3 className="text-3xl font-black text-[#3d2530] mb-4">All-Access Carnival Pass</h3>
          <div className="text-5xl font-black text-[#ff8c42] mb-6">
            {yearly ? '$22' : '$28'} <span className="text-base text-[#3d2530]/60 font-bold">/ month</span>
          </div>
          <p className="text-[#3d2530]/80 font-medium mb-6">Unlimited access to all play kits, live virtual storytelling sessions, and community library.</p>
          <button className="w-full py-4 rounded-full bg-[#ff8c42] text-white font-black shadow-lg hover:bg-[#e07733] transition-all">
            Get Annual Pass ✨
          </button>
        </div>
      </div>
    </section>
  );
}
