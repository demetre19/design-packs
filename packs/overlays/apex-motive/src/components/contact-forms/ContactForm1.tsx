import React from 'react';
import { ArrowRight, Shield, MapPin } from 'lucide-react';

export function ContactForm1() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Split Form */}
        <div className="lg:col-span-7 bg-[#16181d] border border-[#272a33] p-8 clip-corner-lg">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-2">// INQUIRY PROTOCOL</span>
          <h2 className="font-display font-extrabold text-3xl text-white mb-6">REQUEST DEALER ALLOCATION</h2>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6 font-mono-spec text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-neutral-400 block mb-2">RIDER NAME</label>
                <input type="text" placeholder="ALEXANDER VANCE" className="w-full bg-[#101114] border border-[#272a33] p-3 text-white focus:border-[#ff5a1f] outline-none clip-corner" />
              </div>
              <div>
                <label className="text-neutral-400 block mb-2">SECURE EMAIL</label>
                <input type="email" placeholder="A.VANCE@APEX.NET" className="w-full bg-[#101114] border border-[#272a33] p-3 text-white focus:border-[#ff5a1f] outline-none clip-corner" />
              </div>
            </div>
            <div>
              <label className="text-neutral-400 block mb-2">PREFERRED PLATFORM</label>
              <select className="w-full bg-[#101114] border border-[#272a33] p-3 text-white focus:border-[#ff5a1f] outline-none clip-corner">
                <option>APEX-V12 R ($48,500)</option>
                <option>APEX X TRACK EDITION ($62,000)</option>
                <option>TYPHOON ZERO ($55,000)</option>
              </select>
            </div>
            <div>
              <label className="text-neutral-400 block mb-2">TELEMETRY NOTES</label>
              <textarea rows={4} placeholder="Specify custom geometry or track calibration preferences..." className="w-full bg-[#101114] border border-[#272a33] p-3 text-white focus:border-[#ff5a1f] outline-none clip-corner resize-none"></textarea>
            </div>
            <button className="w-full bg-[#ff5a1f] text-black font-extrabold py-4 clip-corner hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <span>TRANSMIT ALLOCATION REQUEST</span>
              <ArrowRight size={14} />
            </button>
          </form>
        </div>

        {/* Dealer Locator Spec Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#16181d] border border-[#272a33] p-8 clip-corner">
            <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-2">FLAGSHIP SHOWROOMS</span>
            <h3 className="font-display font-extrabold text-xl text-white mb-6">GLOBAL EXPERIENCE HUBS</h3>
            
            <div className="space-y-6 font-mono-spec text-xs">
              <div className="border-b border-[#272a33] pb-4">
                <div className="text-white font-bold flex items-center gap-2">
                  <MapPin size={14} className="text-[#ff5a1f]" /> MUNICH FLAGSHIP LAB
                </div>
                <div className="text-neutral-400 mt-1">Leopoldstrasse 142, 80804 München</div>
              </div>
              <div className="border-b border-[#272a33] pb-4">
                <div className="text-white font-bold flex items-center gap-2">
                  <MapPin size={14} className="text-[#ff5a1f]" /> TOKYO EXPERIENCE CENTER
                </div>
                <div className="text-neutral-400 mt-1">Roppongi Hills Mori Tower, Tokyo</div>
              </div>
              <div>
                <div className="text-white font-bold flex items-center gap-2">
                  <MapPin size={14} className="text-[#ff5a1f]" /> AUSTIN TEST FACILITY
                </div>
                <div className="text-neutral-400 mt-1">Circuit of the Americas, Austin, TX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
