import React from 'react';
import { Camera } from 'lucide-react';

export function Media2() {
  const plates = [
    { title: "Foundation Excavation", ref: "PL-01", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" },
    { title: "Steel Frame Erection", ref: "PL-02", img: "https://images.unsplash.com/photo-1541888946425-d0fbb18f1f3d?auto=format&fit=crop&w=800&q=80" },
    { title: "Curtain Wall Glazing", ref: "PL-03", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono paper-grid-bg">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="border-b border-[#1b3a5c]/30 pb-4">
          <span className="text-xs text-[#1b3a5c]/70">MEDIA SECTION // 02</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Drawing Sheet Grid Gallery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plates.map((p, idx) => (
            <div key={idx} className="border-2 border-[#1b3a5c] p-4 bg-white shadow-md relative">
              <div className="absolute top-2 left-4 text-[10px] bg-[#1b3a5c] text-white px-2 py-0.5">
                {p.ref}
              </div>
              <div className="aspect-[4/3] border border-[#1b3a5c]/30 my-4 overflow-hidden bg-gray-200">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale contrast-125" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wide">{p.title}</h3>
              <div className="text-[9px] text-[#1b3a5c]/60 mt-1 flex justify-between">
                <span>SCALE 1:200</span>
                <span>APPROVED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
