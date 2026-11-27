import React from 'react';

export function Stats1() {
  const stats = [
    { num: "45k+", label: "Active Families", color: "bg-[#ff8c42]/10 text-[#ff8c42]" },
    { num: "1.2m", label: "Kits Delivered", color: "bg-[#5ba8e8]/10 text-[#5ba8e8]" },
    { num: "99%", label: "Parent Joy Rate", color: "bg-[#f975a3]/10 text-[#f975a3]" },
    { num: "15+", label: "Design Awards", color: "bg-[#6dbf67]/10 text-[#6dbf67]" },
  ];

  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-[36px] shadow-xl border-4 border-[#3d2530] text-center space-y-2">
            <div className={`text-4xl md:text-5xl font-black ${s.color} inline-block px-4 py-2 rounded-2xl`}>{s.num}</div>
            <div className="font-bold text-[#3d2530]/70 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
