import React from 'react';
import { Check, Star } from 'lucide-react';

export default function Pricing1() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-[#ffd92e] border-2 border-[#111111] font-mono text-xs font-black px-3 py-1 mb-3 shadow-hard-sm">
            EDITION TIERS
          </div>
          <h2 className="font-grotesk font-black text-4xl sm:text-5xl uppercase tracking-tighter">
            TRANSPARENT PRICING.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Tier 1 */}
          <div className="bg-white border-3 border-[#111111] shadow-hard-lg p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-[#111111]/70 mb-2">// BASIC FORGE</div>
              <h3 className="font-grotesk font-black text-2xl uppercase mb-4">PRINT STARTER</h3>
              <div className="font-grotesk font-black text-4xl mb-6">$1,250 <span className="font-mono text-sm font-normal">/ project</span></div>
              <p className="font-mono text-xs text-[#111111]/80 mb-6">Ideal for indie creators needing a single risograph print edition.</p>
              <ul className="space-y-3 font-mono text-xs mb-8">
                <li className="flex items-center gap-2"><Check size={14} className="text-[#ff6b5e]" /><span>2-color risograph separation</span></li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#ff6b5e]" /><span>100 archival prints (A3)</span></li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#ff6b5e]" /><span>Digital asset pack</span></li>
              </ul>
            </div>
            <button className="btn-brutal bg-white text-[#111111] font-grotesk font-black text-sm py-3 w-full">
              SELECT STARTER
            </button>
          </div>

          {/* Tier 2 (Popular, elevated with rotated sticker) */}
          <div className="bg-[#ffd92e] border-3 border-[#111111] shadow-hard-xl p-8 flex flex-col justify-between relative lg:-translate-y-4">
            <div className="absolute -top-5 right-6 bg-[#ff6b5e] text-white font-mono text-xs font-black px-3 py-1 border-2 border-[#111111] shadow-hard-sm rotate-[4deg]">
              ★ MOST POPULAR
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-[#111111] mb-2">// FULL STUDIO FORGE</div>
              <h3 className="font-grotesk font-black text-2xl uppercase mb-4">COMPLETE SYSTEM</h3>
              <div className="font-grotesk font-black text-4xl mb-6">$3,800 <span className="font-mono text-sm font-normal">/ project</span></div>
              <p className="font-mono text-xs text-[#111111]/90 mb-6">Complete brutalist web frontend + limited print run for ambitious brands.</p>
              <ul className="space-y-3 font-mono text-xs mb-8">
                <li className="flex items-center gap-2"><Check size={14} className="text-[#111111]" /><span>Full React / Tailwind Web App</span></li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#111111]" /><span>3-color risograph poster series (250 qty)</span></li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#111111]" /><span>Custom typography guidelines</span></li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#111111]" /><span>Priority 24/7 support</span></li>
              </ul>
            </div>
            <button className="btn-brutal bg-[#111111] text-[#ffd92e] font-grotesk font-black text-sm py-3.5 w-full">
              SECURE SYSTEM SLOT ⚡
            </button>
          </div>

          {/* Tier 3 */}
          <div className="bg-white border-3 border-[#111111] shadow-hard-lg p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-[#111111]/70 mb-2">// ENTERPRISE FORGE</div>
              <h3 className="font-grotesk font-black text-2xl uppercase mb-4">REVOLT RETAINER</h3>
              <div className="font-grotesk font-black text-4xl mb-6">$7,500 <span className="font-mono text-sm font-normal">/ month</span></div>
              <p className="font-mono text-xs text-[#111111]/80 mb-6">Dedicated design lab team for ongoing digital and print rollouts.</p>
              <ul className="space-y-3 font-mono text-xs mb-8">
                <li className="flex items-center gap-2"><Check size={14} className="text-[#ff6b5e]" /><span>Unlimited monthly web sprints</span></li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#ff6b5e]" /><span>Monthly physical zine & prints</span></li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#ff6b5e]" /><span>Dedicated Berlin/Tokyo design leads</span></li>
              </ul>
            </div>
            <button className="btn-brutal bg-white text-[#111111] font-grotesk font-black text-sm py-3 w-full">
              CONTACT LAB
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
