import React from 'react';
import { ArrowRight } from 'lucide-react';

export function ContactForm2() {
  return (
    <section className="w-full bg-[#e8f0ec] py-24 px-6">
      <div className="max-w-2xl mx-auto bg-[#faf6f0] rounded-[32px] p-8 md:p-14 shadow-lg">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-2">
            Direct Consultation
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#122420] tracking-tight">
            Schedule an introductory dialogue.
          </h2>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#122420]/80 font-semibold mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Dr. Sarah Jenkins"
              className="w-full px-4 py-3 rounded-2xl bg-[#e8f0ec] border border-[#122420]/15 text-sm text-[#122420] focus:outline-none focus:border-[#2a7a6d]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#122420]/80 font-semibold mb-2">Professional Email</label>
            <input
              type="email"
              placeholder="sarah@longevityclinic.com"
              className="w-full px-4 py-3 rounded-2xl bg-[#e8f0ec] border border-[#122420]/15 text-sm text-[#122420] focus:outline-none focus:border-[#2a7a6d]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#122420]/80 font-semibold mb-2">Area of Focus</label>
            <select className="w-full px-4 py-3 rounded-2xl bg-[#e8f0ec] border border-[#122420]/15 text-sm text-[#122420] focus:outline-none focus:border-[#2a7a6d]">
              <option>Clinical Brand Architecture</option>
              <option>Spatial & Acoustic Design</option>
              <option>Longevity Protocol Integration</option>
              <option>Executive Health Retreats</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-[#1d4f47] text-[#faf6f0] text-sm font-medium hover:bg-[#153b34] transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <span>Request Introductory Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
