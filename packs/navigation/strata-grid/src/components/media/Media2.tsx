import React from 'react';

export function Media2() {
  const items = [
    { title: "Substation Cluster Alpha", desc: "1,420 Active Nodes", index: "01" },
    { title: "Quantum Lattice Encryption", desc: "Post-Quantum PQC", index: "02" },
    { title: "High-Frequency Telemetry", desc: "10,000 Hz Sampling", index: "03" }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">TESSELLATED GALLERY</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Infrastructure visual register.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[MED-02 // GALLERY]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-[#f2f3f5] p-6 border border-[#0d0e10]/15 flex flex-col justify-between gap-12 rounded-[2px] group hover:border-[#2743f0] transition-colors">
              <div className="flex justify-between items-center font-mono text-[10px]">
                <span className="text-[#2743f0] font-bold">PLATE // {item.index}</span>
                <span className="text-[#0d0e10]/40">ONLINE</span>
              </div>
              <div className="h-32 bg-[#0d0e10] text-white flex items-center justify-center p-4 font-mono text-xs uppercase text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#2743f0 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
                <span className="relative z-10">{item.title}</span>
              </div>
              <div className="flex justify-between items-center font-mono text-xs pt-4 border-t border-[#0d0e10]/10">
                <span className="text-[#0d0e10]/70 uppercase">{item.desc}</span>
                <span className="text-[#2743f0] font-bold">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
