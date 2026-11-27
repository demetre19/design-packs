import React, { useState } from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';

export function Pricing2() {
  const [selectedPaint, setSelectedPaint] = useState('NIGHT CARBON');
  const [selectedBattery, setSelectedBattery] = useState('21.4 kWh PRO');
  const [selectedWheels, setSelectedWheels] = useState('FORGED MAGNESIUM');

  const paints = [
    { name: 'NIGHT CARBON', price: '$0' },
    { name: 'ELECTRIC ORANGE GLOW', price: '$1,200' },
    { name: 'TITANIUM MATTE GREY', price: '$2,500' },
  ];

  const batteries = [
    { name: '18.2 kWh STANDARD', price: '$0' },
    { name: '21.4 kWh PRO', price: '$3,500' },
  ];

  const wheels = [
    { name: 'FORGED ALUMINUM', price: '$0' },
    { name: 'FORGED MAGNESIUM', price: '$4,200' },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// CONFIGURATOR PRICING</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">CUSTOM SPECIFICATION BUILDER</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Option Selector Rows */}
          <div className="lg:col-span-8 space-y-8">
            {/* Paint */}
            <div className="bg-[#16181d] border border-[#272a33] p-6 clip-corner">
              <span className="font-mono-spec text-xs text-[#ff5a1f] block mb-3">01 // BODY COATING & WEAVE</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {paints.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setSelectedPaint(item.name)}
                    className={`p-4 text-left border clip-corner transition-all cursor-pointer flex flex-col justify-between ${selectedPaint === item.name ? 'border-[#ff5a1f] bg-[#ff5a1f]/10 text-white' : 'border-[#272a33] text-neutral-400 hover:border-neutral-500'}`}
                  >
                    <span className="font-mono-spec text-xs font-bold">{item.name}</span>
                    <span className="font-mono-spec text-[10px] text-[#ff5a1f] mt-2">{item.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Battery */}
            <div className="bg-[#16181d] border border-[#272a33] p-6 clip-corner">
              <span className="font-mono-spec text-xs text-[#ff5a1f] block mb-3">02 // ENERGY CAPACITY</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {batteries.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setSelectedBattery(item.name)}
                    className={`p-4 text-left border clip-corner transition-all cursor-pointer flex flex-col justify-between ${selectedBattery === item.name ? 'border-[#ff5a1f] bg-[#ff5a1f]/10 text-white' : 'border-[#272a33] text-neutral-400 hover:border-neutral-500'}`}
                  >
                    <span className="font-mono-spec text-xs font-bold">{item.name}</span>
                    <span className="font-mono-spec text-[10px] text-[#ff5a1f] mt-2">{item.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Wheels */}
            <div className="bg-[#16181d] border border-[#272a33] p-6 clip-corner">
              <span className="font-mono-spec text-xs text-[#ff5a1f] block mb-3">03 // WHEEL ARCHITECTURE</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wheels.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setSelectedWheels(item.name)}
                    className={`p-4 text-left border clip-corner transition-all cursor-pointer flex flex-col justify-between ${selectedWheels === item.name ? 'border-[#ff5a1f] bg-[#ff5a1f]/10 text-white' : 'border-[#272a33] text-neutral-400 hover:border-neutral-500'}`}
                  >
                    <span className="font-mono-spec text-xs font-bold">{item.name}</span>
                    <span className="font-mono-spec text-[10px] text-[#ff5a1f] mt-2">{item.price}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Summary Panel */}
          <div className="lg:col-span-4">
            <div className="bg-[#16181d] border border-[#272a33] p-8 clip-corner-lg sticky top-28">
              <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">ESTIMATED TOTAL</span>
              <div className="font-display font-extrabold text-4xl text-white mt-2 mb-6">
                $56,200 <span className="text-xs text-neutral-500 font-normal">USD</span>
              </div>

              <div className="space-y-3 font-mono-spec text-xs text-neutral-300 border-t border-[#272a33] pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-500">BASE PRICE:</span>
                  <span>$48,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">PAINT:</span>
                  <span className="text-[#ff5a1f]">+$1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">BATTERY:</span>
                  <span className="text-[#ff5a1f]">+$3,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">WHEELS:</span>
                  <span className="text-[#ff5a1f]">+$4,200</span>
                </div>
              </div>

              <button className="w-full bg-[#ff5a1f] text-black font-extrabold text-xs py-4 clip-corner hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <span>SUBMIT BUILD ORDER</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
