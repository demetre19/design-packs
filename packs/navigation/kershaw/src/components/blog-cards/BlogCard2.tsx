import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';

export function BlogCard2() {
  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#14161a] border border-[#262c36] p-8">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 text-xs text-[#ffd500] mb-3">
            <Activity className="w-4 h-4" />
            <span>FEATURED DYNO REPORT // RUN 07</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter mb-4">
            ANALYZING THE 8,400 RPM V8 POWERTRAIN BREAKTHROUGH.
          </h2>
          <p className="text-zinc-400 font-sans text-xs md:text-sm mb-6">
            Detailed breakdown of thermal transfer rates and peak torque curves recorded during our recent 40-run endurance test protocol in Cell 04.
          </p>
          <button className="bg-[#ffd500] text-black font-extrabold text-xs px-6 py-3 uppercase tracking-wider hover:bg-[#ffdf33] transition-colors inline-flex items-center gap-2">
            <span>READ FULL REPORT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="lg:col-span-5 bg-[#0c0d0f] border border-[#262c36] p-6 space-y-4 text-xs">
          <div className="flex justify-between border-b border-[#22262f] pb-3">
            <span className="text-zinc-400">PUBLISHED</span>
            <span className="text-white font-bold">2026.11.25</span>
          </div>
          <div className="flex justify-between border-b border-[#22262f] pb-3">
            <span className="text-zinc-400">AUTHOR</span>
            <span className="text-[#ffd500] font-bold">K. VANCE (CHIEF LAB)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">CLASSIFICATION</span>
            <span className="text-white font-bold">RESTRICTED / RACING</span>
          </div>
        </div>
      </div>
    </section>
  );
}
