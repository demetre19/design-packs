import React from 'react';

export function Stats2() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-12 rounded-[40px] shadow-2xl border-4 border-[#3d2530] text-center space-y-8">
        <h3 className="text-3xl font-black text-[#3d2530]">Our Impact in Numbers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-5xl font-black text-[#ff8c42] underline decoration-wavy decoration-[#ff8c42]">100%</div>
            <div className="mt-2 font-bold text-[#3d2530]">Screen-Free Fun</div>
          </div>
          <div>
            <div className="text-5xl font-black text-[#5ba8e8] underline decoration-wavy decoration-[#5ba8e8]">500+</div>
            <div className="mt-2 font-bold text-[#3d2530]">Unique Activities</div>
          </div>
          <div>
            <div className="text-5xl font-black text-[#f975a3] underline decoration-wavy decoration-[#f975a3]">50</div>
            <div className="mt-2 font-bold text-[#3d2530]">Countries Reached</div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
