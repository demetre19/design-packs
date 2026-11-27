import React from 'react';

export function BlogCard2() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Featured Article */}
        <div className="bg-white p-8 rounded-[36px] shadow-2xl border-4 border-[#3d2530] space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#f975a3] text-white font-black text-xs uppercase">Featured Story</span>
            <h3 className="text-3xl font-black text-[#3d2530]">The Complete Guide to Montessori Play at Home</h3>
            <p className="text-[#3d2530]/80 font-medium">Discover how to set up simple sensory stations that foster independence and focus in early childhood.</p>
          </div>
          <button className="px-6 py-3 rounded-full bg-[#ff8c42] text-white font-black w-fit shadow-md">Read Story ✨</button>
        </div>

        {/* Small Rows with Round Thumbnails */}
        <div className="space-y-4">
          {[1, 2, 3].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow-md border-2 border-[#3d2530]/10 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#5ba8e8] flex-shrink-0 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=200&auto=format&fit=crop&q=80" alt="Thumb" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-black text-[#3d2530]">10 Screen-Free Activities for Toddlers</h4>
                <div className="text-xs font-bold text-[#3d2530]/60">June 12, 2026 • 4 min read</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
