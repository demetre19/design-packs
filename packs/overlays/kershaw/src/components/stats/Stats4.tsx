import React from 'react';

export function Stats4() {
  return (
    <section className="bg-[#0c0d0f] text-white py-16 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto bg-[#14161a] border border-[#262c36] p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <span className="text-[10px] text-zinc-500 block mb-1">RPM SENSOR</span>
          <span className="text-xl font-black text-white">8,400 RPM</span>
        </div>
        <div>
          <span className="text-[10px] text-zinc-500 block mb-1">TORQUE CELL</span>
          <span className="text-xl font-black text-[#ffd500]">612 NM</span>
        </div>
        <div>
          <span className="text-[10px] text-zinc-500 block mb-1">OIL TEMP</span>
          <span className="text-xl font-black text-white">94.2°C</span>
        </div>
        <div>
          <span className="text-[10px] text-zinc-500 block mb-1">RUN INDEX</span>
          <span className="text-xl font-black text-[#ffd500]">07 / 40</span>
        </div>
      </div>
    </section>
  );
}
