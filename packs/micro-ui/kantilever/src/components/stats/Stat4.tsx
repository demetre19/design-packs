import React from 'react';

export const Stat4: React.FC = () => {
  return (
    <section className="bg-[#14161a] text-[#f7f6f3] py-20 border-t border-[#f7f6f3]/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-px bg-[#ffc72c]/30 border border-[#ffc72c]/30">
        <div className="bg-[#14161a] p-8 space-y-2">
          <span className="font-mono text-xs text-[#ffc72c] uppercase">// STRUCTURAL STEEL</span>
          <div className="text-3xl md:text-4xl font-extrabold font-mono text-[#ffc72c]">S690QL</div>
          <p className="text-xs text-[#f7f6f3]/60 font-sans">High-tensile grade</p>
        </div>
        <div className="bg-[#14161a] p-8 space-y-2">
          <span className="font-mono text-xs text-[#ffc72c] uppercase">// CONCRETE CLASS</span>
          <div className="text-3xl md:text-4xl font-extrabold font-mono text-[#ffc72c]">C60/75</div>
          <p className="text-xs text-[#f7f6f3]/60 font-sans">Ultra-high performance</p>
        </div>
        <div className="bg-[#14161a] p-8 space-y-2">
          <span className="font-mono text-xs text-[#ffc72c] uppercase">// TOLERANCE</span>
          <div className="text-3xl md:text-4xl font-extrabold font-mono text-[#ffc72c]">±0.02 mm</div>
          <p className="text-xs text-[#f7f6f3]/60 font-sans">Parametric precision</p>
        </div>
        <div className="bg-[#14161a] p-8 space-y-2">
          <span className="font-mono text-xs text-[#ffc72c] uppercase">// CERTIFICATION</span>
          <div className="text-3xl md:text-4xl font-extrabold font-mono text-[#ffc72c]">ISO 9001</div>
          <p className="text-xs text-[#f7f6f3]/60 font-sans">Global accredited</p>
        </div>
      </div>
    </section>
  );
};
