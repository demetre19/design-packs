import React from 'react';

export function Testimonial1() {
  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs text-[#ffd500] tracking-widest uppercase block mb-6">// 01. ENGINEER VERIFICATION</span>
        <blockquote className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight leading-snug mb-8">
          “Kershaw Dynamics Cell 04 provided the exact volumetric precision we needed to lock in our 24-hour Le Mans powertrain mapping. Unrivaled consistency.”
        </blockquote>
        <div>
          <strong className="text-white block text-sm uppercase tracking-wider">MARCUS VANCE</strong>
          <span className="text-xs text-zinc-400 font-sans">CHIEF POWERTRAIN ENGINEER, APEX MOTORSPORT</span>
        </div>
      </div>
    </section>
  );
}
