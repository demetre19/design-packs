import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export function ContactForm1() {
  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Form */}
        <div className="lg:col-span-7 bg-[#e8f0ec] rounded-[32px] p-8 md:p-12 shadow-sm">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-2">
            Confidential Inquiry
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#122420] tracking-tight mb-8">
            Begin your practice transformation.
          </h2>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#122420]/80 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Dr. Alexander Vance"
                  className="w-full px-4 py-3 rounded-2xl bg-[#faf6f0] border border-[#122420]/15 text-sm text-[#122420] focus:outline-none focus:border-[#2a7a6d]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#122420]/80 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="alexander@clinic.com"
                  className="w-full px-4 py-3 rounded-2xl bg-[#faf6f0] border border-[#122420]/15 text-sm text-[#122420] focus:outline-none focus:border-[#2a7a6d]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#122420]/80 font-semibold mb-2">Practice Name & Scope</label>
              <input
                type="text"
                placeholder="Apex Longevity Institute (3 locations)"
                className="w-full px-4 py-3 rounded-2xl bg-[#faf6f0] border border-[#122420]/15 text-sm text-[#122420] focus:outline-none focus:border-[#2a7a6d]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#122420]/80 font-semibold mb-2">How can we assist?</label>
              <textarea
                rows={4}
                placeholder="Describe your current clinical goals and brand vision..."
                className="w-full px-4 py-3 rounded-2xl bg-[#faf6f0] border border-[#122420]/15 text-sm text-[#122420] focus:outline-none focus:border-[#2a7a6d]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#1d4f47] text-[#faf6f0] text-sm font-medium hover:bg-[#153b34] transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>Submit Confidential Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Contact Details Panel with Photo */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-[28px] overflow-hidden shadow-xl aspect-[16/10] bg-[#e8f0ec]">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
              alt="Consultation suite"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#e8f0ec] rounded-[28px] p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#faf6f0] flex items-center justify-center text-[#2a7a6d] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif text-lg text-[#122420]">Zurich Headquarters</p>
                <p className="text-sm text-[#122420]/80 font-light">Bahnhofstrasse 44, 8001 Zurich</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#faf6f0] flex items-center justify-center text-[#2a7a6d] flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif text-lg text-[#122420]">Direct Email</p>
                <p className="text-sm text-[#122420]/80 font-light">concierge@verdantvane.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
