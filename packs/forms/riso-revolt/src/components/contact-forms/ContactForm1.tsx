import React from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactForm1() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Form */}
        <div className="lg:col-span-7 bg-white border-3 border-[#111111] shadow-hard-lg p-8 sm:p-10">
          <div className="inline-block bg-[#ffd92e] border-2 border-[#111111] font-mono text-xs font-black px-3 py-1 mb-4 shadow-hard-sm">
            PROJECT INTAKE
          </div>
          <h2 className="font-grotesk font-black text-3xl sm:text-4xl uppercase mb-6">START A BRIEF.</h2>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-mono text-xs">
            <div>
              <label className="block font-bold mb-1">01. YOUR NAME / ORG</label>
              <input type="text" placeholder="e.g. Studio Monolith" className="w-full bg-[#fffdf5] border-2 border-[#111111] p-3 focus:outline-none shadow-hard-sm" />
            </div>
            <div>
              <label className="block font-bold mb-1">02. EMAIL ADDRESS</label>
              <input type="email" placeholder="elena@monolith.io" className="w-full bg-[#fffdf5] border-2 border-[#111111] p-3 focus:outline-none shadow-hard-sm" />
            </div>
            <div>
              <label className="block font-bold mb-1">03. PROJECT SCOPE</label>
              <textarea rows={4} placeholder="Describe your print or digital requirements..." className="w-full bg-[#fffdf5] border-2 border-[#111111] p-3 focus:outline-none shadow-hard-sm"></textarea>
            </div>
            <button className="btn-brutal bg-[#ffd92e] text-[#111111] font-grotesk font-black text-sm py-3.5 w-full flex items-center justify-center gap-2">
              <span>TRANSMIT BRIEF</span>
              <ArrowRight size={16} strokeWidth={3} />
            </button>
          </form>
        </div>

        {/* Right Details Panel */}
        <div className="lg:col-span-5 bg-[#ffd92e] border-3 border-[#111111] shadow-hard-lg p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="font-mono text-xs font-bold mb-2">// DIRECT CONTACT</div>
            <h3 className="font-grotesk font-black text-2xl uppercase mb-6">BERLIN & TOKYO LABS</h3>
            
            <div className="space-y-6 font-mono text-xs">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold">BERLIN HEADQUARTERS</div>
                  <div className="text-[#111111]/70">Köpenicker Str. 12, 10997 Berlin</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold">ELECTRONIC MAIL</div>
                  <div className="text-[#111111]/70">hello@risorevolt.studio</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold">DIRECT LINE</div>
                  <div className="text-[#111111]/70">+49 (0) 30 555 019</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t-2 border-[#111111] font-mono text-xs font-bold">
            STATUS: 4 SLOTS OPEN FOR Q2 2026
          </div>
        </div>

      </div>
    </section>
  );
}
