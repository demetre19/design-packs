import React from 'react';

export const Media1: React.FC = () => {
  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// FULL-WIDTH MEDIA PLATE</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            THE GENEVA MONOLITH TERRACE
          </h2>
        </div>

        <div className="relative w-full h-[500px] bg-[#14161a] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
            alt="Geneva Monolith"
            className="w-full h-full object-cover filter saturate-[0.8]"
          />
          {/* Diagonal caption band */}
          <div className="absolute bottom-6 left-6 bg-[#14161a] text-[#f7f6f3] px-6 py-3 font-mono text-xs uppercase transform skew-x-[-12deg]">
            <span className="transform skew-x-[12deg] block text-[#ffc72c] font-bold">
              FIG 4.2 // STRUCTURAL CANTILEVER PLATE // 3,450 m²
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
