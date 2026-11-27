import React from 'react';
import { Check, Zap } from 'lucide-react';

export default function Pricing3() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-3 border-[#111111] shadow-hard-xl p-8 sm:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b-3 border-[#111111] gap-6">
            <div>
              <div className="inline-block bg-[#ff6b5e] text-white font-mono text-xs font-black px-3 py-1 mb-2 shadow-hard-sm">
                SINGLE ALL-INCLUSIVE PLAN
              </div>
              <h3 className="font-grotesk font-black text-3xl sm:text-4xl uppercase">THE FOUNDER'S PASS</h3>
            </div>
            <div className="text-left md:text-right">
              <div className="font-grotesk font-black text-5xl">$4,950</div>
              <div className="font-mono text-xs text-[#111111]/70 mt-1">ONE-TIME FEE // LIFETIME ACCESS</div>
            </div>
          </div>

          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="flex items-center gap-3 p-3 bg-[#fffdf5] border-2 border-[#111111]">
              <Check size={16} className="text-[#ff6b5e]" />
              <span>Full brand identity overhaul</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#fffdf5] border-2 border-[#111111]">
              <Check size={16} className="text-[#ff6b5e]" />
              <span>Custom React & Tailwind codebase</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#fffdf5] border-2 border-[#111111]">
              <Check size={16} className="text-[#ff6b5e]" />
              <span>500 limited risograph art books</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#fffdf5] border-2 border-[#111111]">
              <Check size={16} className="text-[#ff6b5e]" />
              <span>Direct Slack channel with founders</span>
            </div>
          </div>

          <button className="btn-brutal bg-[#ffd92e] text-[#111111] font-grotesk font-black text-base py-4 w-full flex items-center justify-center gap-3">
            <Zap size={18} fill="#111111" />
            <span>CLAIM FOUNDER'S PASS NOW</span>
          </button>
        </div>
      </div>
    </section>
  );
}
