import React from 'react';
import { Check, Shield, ArrowUpRight } from 'lucide-react';

export function Pricing1() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Pricing 01 // Weight Specimen Tiers</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Commercial Licensing Structure</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">SINGLE FEE / PERPETUAL</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="text-xs font-mono text-neutral-400 flex justify-between">
                <span>TIER 01</span>
                <span>DESKTOP</span>
              </div>
              <h3 className="text-3xl font-extralight tracking-tighter text-white">Individual</h3>
              <div className="text-4xl font-light tracking-tight text-white">$49 <span className="text-xs font-mono text-neutral-400">/ one-time</span></div>
              <p className="text-xs font-light text-neutral-400 leading-relaxed">
                For solo designers, hobbyists, and independent creators requiring 12 master weights for print and web graphics.
              </p>
              <ul className="space-y-3 text-xs font-mono text-neutral-400 border-t border-neutral-900 pt-6">
                <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-white" /><span>1 Workstation License</span></li>
                <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-white" /><span>OTF + TTF Formats</span></li>
                <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-white" /><span>Free Minor Updates</span></li>
              </ul>
            </div>
            <button className="mt-8 w-full bg-white text-black py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-200 transition-colors">
              Acquire License
            </button>
          </div>

          <div className="border border-neutral-700 bg-neutral-950 p-8 flex flex-col justify-between relative shadow-2xl">
            <div className="absolute -top-3 left-8 bg-white text-black px-3 py-0.5 text-[10px] font-mono uppercase font-bold">
              Most Popular Specimen
            </div>
            <div className="space-y-6">
              <div className="text-xs font-mono text-neutral-400 flex justify-between">
                <span>TIER 02</span>
                <span>STUDIO</span>
              </div>
              <h3 className="text-3xl font-normal tracking-tighter text-white">Studio Pro</h3>
              <div className="text-4xl font-normal tracking-tight text-white">$180 <span className="text-xs font-mono text-neutral-400">/ one-time</span></div>
              <p className="text-xs font-light text-neutral-400 leading-relaxed">
                Designed for boutique agencies, design studios, and small teams up to 10 active workstations.
              </p>
              <ul className="space-y-3 text-xs font-mono text-neutral-300 border-t border-neutral-900 pt-6">
                <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-white" /><span>Up to 10 Workstations</span></li>
                <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-white" /><span>WOFF2 Web Embedding</span></li>
                <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-white" /><span>E-Book & PDF Embedding</span></li>
              </ul>
            </div>
            <button className="mt-8 w-full bg-white text-black py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-200 transition-colors">
              Acquire Studio License
            </button>
          </div>

          <div className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="text-xs font-mono text-neutral-400 flex justify-between">
                <span>TIER 03</span>
                <span>ENTERPRISE</span>
              </div>
              <h3 className="text-3xl font-black tracking-tighter text-white">Enterprise</h3>
              <div className="text-4xl font-black tracking-tight text-white">$540 <span className="text-xs font-mono text-neutral-400">/ one-time</span></div>
              <p className="text-xs font-light text-neutral-400 leading-relaxed">
                Unlimited workstations, global server distribution, mobile apps, and broadcast television rights.
              </p>
              <ul className="space-y-3 text-xs font-mono text-neutral-400 border-t border-neutral-900 pt-6">
                <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-white" /><span>Unlimited Workstations</span></li>
                <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-white" /><span>App Embedding Rights</span></li>
                <li className="flex items-center space-x-2"><Check className="w-3 h-3 text-white" /><span>Priority Glyph Support</span></li>
              </ul>
            </div>
            <button className="mt-8 w-full bg-neutral-900 text-white border border-neutral-700 py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-800 transition-colors">
              Contact Enterprise Desk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
