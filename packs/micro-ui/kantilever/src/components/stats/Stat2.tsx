import React from 'react';

export const Stat2: React.FC = () => {
  return (
    <section className="bg-[#14161a] text-[#f7f6f3] py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        <div className="space-y-4 relative">
          <div className="absolute -top-12 -left-6 text-9xl font-extrabold text-[#f7f6f3] opacity-[0.03] font-mono select-none">
            01
          </div>
          <span className="font-mono text-xs text-[#ffc72c] uppercase">// OVERHANG SPAN</span>
          <div className="text-5xl md:text-6xl font-extrabold font-mono text-[#ffc72c]">18 m</div>
          <p className="text-xs text-[#f7f6f3]/70 font-sans">
            Maximum cantilever distance achieved without vertical perimeter supports.
          </p>
        </div>

        <div className="space-y-4 relative">
          <div className="absolute -top-12 -left-6 text-9xl font-extrabold text-[#f7f6f3] opacity-[0.03] font-mono select-none">
            02
          </div>
          <span className="font-mono text-xs text-[#ffc72c] uppercase">// SEISMIC LATERAL RESISTANCE</span>
          <div className="text-5xl md:text-6xl font-extrabold font-mono text-[#ffc72c]">Zone 4</div>
          <p className="text-xs text-[#f7f6f3]/70 font-sans">
            Highest grade seismic safety rating for high-rise diagonal frameworks.
          </p>
        </div>

        <div className="space-y-4 relative">
          <div className="absolute -top-12 -left-6 text-9xl font-extrabold text-[#f7f6f3] opacity-[0.03] font-mono select-none">
            03
          </div>
          <span className="font-mono text-xs text-[#ffc72c] uppercase">// ENERGY EFFICIENCY</span>
          <div className="text-5xl md:text-6xl font-extrabold font-mono text-[#ffc72c]">38%</div>
          <p className="text-xs text-[#f7f6f3]/70 font-sans">
            Average reduction in thermal cooling load via 14-degree angular louvers.
          </p>
        </div>
      </div>
    </section>
  );
};
