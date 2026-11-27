import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FeatureGrid3: React.FC = () => {
  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[380px] bg-[#14161a] overflow-hidden transform skew-x-[-8deg]">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
                alt="Cantilever Structure"
                className="w-full h-full object-cover transform skew-x-[8deg] scale-110 filter saturate-[0.8]"
              />
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs bg-[#ffc72c] text-[#14161a] px-3 py-1 uppercase font-bold inline-block transform skew-x-[-12deg]">
              // STRUCTURAL INNOVATION 01
            </span>
            <h3 className="text-3xl font-extrabold uppercase">ZERO-COLUMN OVERHANGS</h3>
            <p className="text-sm text-[#14161a]/80 font-sans leading-relaxed">
              By utilizing high-tensile prestressed concrete and diagonal steel cross-braces, our structures achieve unprecedented cantilevers without visual obstruction.
            </p>
            <div className="font-mono text-xs text-[#14161a]/60">
              SPAN: 18 METERS // LOAD CAPACITY: 450 kN/m²
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 lg:order-1">
            <span className="font-mono text-xs bg-[#14161a] text-[#ffc72c] px-3 py-1 uppercase font-bold inline-block">
              // ACOUSTIC & THERMAL 02
            </span>
            <h3 className="text-3xl font-extrabold uppercase">DIAGONAL FAÇADE LOUVERS</h3>
            <p className="text-sm text-[#14161a]/80 font-sans leading-relaxed">
              Automated kinetic louvers angled at 14 degrees dynamically track solar radiation angles, optimizing interior climate control naturally.
            </p>
            <div className="font-mono text-xs text-[#14161a]/60">
              ENERGY REDUCTION: 38% // EFFICIENCY RATING: A+
            </div>
          </div>
          <div className="lg:col-span-6 relative lg:order-2">
            <div className="relative w-full h-[380px] bg-[#14161a] overflow-hidden transform skew-x-[8deg]">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
                alt="Facade Louvers"
                className="w-full h-full object-cover transform skew-x-[-8deg] scale-110 filter saturate-[0.8]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
