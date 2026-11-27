import React from 'react';
import { ArrowRight } from 'lucide-react';

export function ContactForm2() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-3xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          CENTERED FORM // CONTACT 02
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-center">
          SITE SURVEY <span className="text-[#f25c05]">REQUEST</span>.
        </h2>
        <p className="font-mono text-xs text-neutral-600 uppercase tracking-wide text-center mb-12">
          Submit your extraction coordinates for immediate satellite mesh evaluation.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="border-4 border-black bg-white p-8 md:p-12 space-y-6 font-mono text-xs">
          <div className="space-y-2">
            <label className="block uppercase font-bold text-neutral-700">01 // SITE OPERATOR NAME</label>
            <input 
              type="text" 
              placeholder="ENTER FULL NAME" 
              className="w-full border-2 border-black p-3 bg-[#f5f4f0] focus:outline-none focus:border-[#f25c05] uppercase" 
            />
          </div>

          <div className="space-y-2">
            <label className="block uppercase font-bold text-neutral-700">02 // SECURE TELEMETRY EMAIL</label>
            <input 
              type="email" 
              placeholder="OPERATOR@COMPANY.COM" 
              className="w-full border-2 border-black p-3 bg-[#f5f4f0] focus:outline-none focus:border-[#f25c05] uppercase" 
            />
          </div>

          <div className="space-y-2">
            <label className="block uppercase font-bold text-neutral-700">03 // GPS COORDINATES / REGION</label>
            <input 
              type="text" 
              placeholder="E.G. LAT 34.0522° N, LON 118.2437° W" 
              className="w-full border-2 border-black p-3 bg-[#f5f4f0] focus:outline-none focus:border-[#f25c05] uppercase" 
            />
          </div>

          {/* Heavy black submit mass */}
          <button className="w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-[#f25c05] hover:text-black transition-colors flex items-center justify-center space-x-2">
            <span>Submit Site Survey Request</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
