import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

export function ContactForm1() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          CONTACT & DEPLOY // FORM 01
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          ESTABLISH <span className="text-[#f25c05]">COMMAND</span> CONTACT.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Black contact panel left */}
          <div className="lg:col-span-5 bg-black text-white p-8 border-4 border-black flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-6 h-6 text-[#f25c05]" />
                <span className="font-mono text-xs text-[#f25c05] uppercase tracking-widest">TACTICAL DISPATCH</span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4">
                DIRECT EXTRACTION INQUIRY
              </h3>
              <p className="font-mono text-xs text-neutral-400 leading-relaxed mb-6">
                Connect directly with Titan Forge deployment engineers for site surveys, fleet licensing, and mesh architecture consultation.
              </p>
            </div>
            <div className="space-y-2 font-mono text-xs text-neutral-300 border-t border-neutral-800 pt-6">
              <div>SECURE LINE: +1 (800) 555-TITAN</div>
              <div>TELEMETRY: dispatch@titanforge.industrial</div>
            </div>
          </div>

          {/* Thin form right */}
          <div className="lg:col-span-7 border-2 border-black bg-white p-8">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 font-mono text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block uppercase font-bold text-neutral-700">01 // OPERATOR NAME</label>
                  <input 
                    type="text" 
                    placeholder="ENTER FULL NAME" 
                    className="w-full border-2 border-black p-3 bg-[#f5f4f0] focus:outline-none focus:border-[#f25c05] font-mono text-xs uppercase" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block uppercase font-bold text-neutral-700">02 // CORPORATE EMAIL</label>
                  <input 
                    type="email" 
                    placeholder="OPERATOR@CORP.COM" 
                    className="w-full border-2 border-black p-3 bg-[#f5f4f0] focus:outline-none focus:border-[#f25c05] font-mono text-xs uppercase" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block uppercase font-bold text-neutral-700">03 // EXTRACTION SITE SECTOR</label>
                <input 
                  type="text" 
                  placeholder="E.G. SECTOR 7-ALPHA // DESERT EXTRACTION GRID" 
                  className="w-full border-2 border-black p-3 bg-[#f5f4f0] focus:outline-none focus:border-[#f25c05] font-mono text-xs uppercase" 
                />
              </div>

              <div className="space-y-2">
                <label className="block uppercase font-bold text-neutral-700">04 // DEPLOYMENT REQUIREMENTS</label>
                <textarea 
                  rows={4} 
                  placeholder="SPECIFY FLEET SIZE, TONNAGE TARGETS, OR TELEMETRY NEEDS..." 
                  className="w-full border-2 border-black p-3 bg-[#f5f4f0] focus:outline-none focus:border-[#f25c05] font-mono text-xs uppercase"
                ></textarea>
              </div>

              <button className="w-full bg-black text-white py-4 font-black uppercase tracking-wider hover:bg-[#f25c05] hover:text-black transition-colors flex items-center justify-center space-x-2">
                <span>Transmit Inquiry to Command</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
