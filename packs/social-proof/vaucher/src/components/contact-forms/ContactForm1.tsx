import React, { useState } from 'react';
import { Compass, Send, CheckCircle } from 'lucide-react';

export function ContactForm1() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">CONTACT 01 · SPLIT FORM + SPECIFICATION DETAILS PANEL</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Atelier Appointment Inquiry</h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 bg-[#1c2128] text-white p-8 border border-[#2e5e8e]/40 space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-geneva-stripe opacity-30" />
          <div className="relative z-10 space-y-4">
            <span className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.3em]">RESERVATION DOSSIER</span>
            <h3 className="text-xl font-light tracking-wide">Private Geneva Viewings</h3>
            <p className="font-mono text-xs text-white/70 tracking-wider leading-relaxed">
              Appointments are scheduled directly with our master horologists at our Rue du Rhône salon.
            </p>
            <div className="pt-4 space-y-2 font-mono text-xs text-white/90">
              <div><span className="text-[#2e5e8e]">PHONE:</span> +41 22 819 8000</div>
              <div><span className="text-[#2e5e8e]">EMAIL:</span> salon@vaucher-fils.ch</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white border border-[#d0d0cc] p-8 space-y-6">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle className="w-12 h-12 text-[#2e5e8e] mx-auto" />
              <h3 className="text-2xl font-light tracking-wide text-[#232a30]">Inquiry Registered</h3>
              <p className="font-mono text-xs text-[#232a30]/70 tracking-wider">
                Our concierge will contact you within 24 hours. REF. APP-2026.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#232a30]/70">Full Name</label>
                  <input required type="text" className="w-full bg-[#f4f4f2] border border-[#d0d0cc] p-3 font-mono text-xs focus:border-[#2e5e8e] outline-none" placeholder="Jean-Luc Picard" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#232a30]/70">Email Address</label>
                  <input required type="email" className="w-full bg-[#f4f4f2] border border-[#d0d0cc] p-3 font-mono text-xs focus:border-[#2e5e8e] outline-none" placeholder="jean@vaucher.ch" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#232a30]/70">Model Reference</label>
                <select className="w-full bg-[#f4f4f2] border border-[#d0d0cc] p-3 font-mono text-xs focus:border-[#2e5e8e] outline-none">
                  <option>REF. 5711-A · Stainless Steel Chronometer</option>
                  <option>REF. 5726-A · Annual Calendar</option>
                  <option>REF. 6300-G · Grand Complication</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-[#2e5e8e] text-white font-mono text-xs tracking-[0.25em] py-3.5 hover:bg-[#232a30] transition-colors flex items-center justify-center space-x-2">
                <span>SUBMIT INQUIRY</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
