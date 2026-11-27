import React from 'react';

export function Stats3() {
  return (
    <section className="w-full bg-[#3d2530] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-black text-[#ff8c42]">45,000+</div>
          <div className="text-sm font-bold opacity-80 mt-1">Happy Kids</div>
        </div>
        <div>
          <div className="text-4xl font-black text-[#5ba8e8]">1.2M</div>
          <div className="text-sm font-bold opacity-80 mt-1">Kits Sent</div>
        </div>
        <div>
          <div className="text-4xl font-black text-[#f975a3]">99%</div>
          <div className="text-sm font-bold opacity-80 mt-1">Satisfaction</div>
        </div>
        <div>
          <div className="text-4xl font-black text-[#6dbf67]">15</div>
          <div className="text-sm font-bold opacity-80 mt-1">Awards</div>
        </div>
      </div>
    </section>
  );
}
