import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Contact1() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 bg-[#14161a] border border-[#262c36] p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs text-[#ffd500] tracking-widest uppercase block mb-3">// 01. WORKSHOP INQUIRY</span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tighter mb-4">
              SECURE CELL <span className="text-[#ffd500]">ALLOCATION.</span>
            </h2>
            <p className="text-zinc-400 font-sans text-xs mb-8">
              Submit your powertrain parameters to reserve testing time in Cell 04 with our senior resident engineers.
            </p>
          </div>
          <div className="space-y-4 text-xs text-zinc-400 border-t border-[#22262f] pt-6 font-mono">
            <div className="flex justify-between">
              <span>LOCATION:</span>
              <span className="text-white">STUTTGART LAB 04</span>
            </div>
            <div className="flex justify-between">
              <span>DIRECT LINE:</span>
              <span className="text-[#ffd500]">+49 711 9982-0</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#14161a] border border-[#262c36] p-8">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <CheckCircle2 className="w-12 h-12 text-[#ffd500] mb-4" />
              <h3 className="text-lg font-bold uppercase mb-2">TELEMETRY REQUEST RECEIVED</h3>
              <p className="text-xs text-zinc-400 font-sans">Our test director will contact you within 2 hours with run availability.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs text-zinc-400 mb-2">ENGINEER / TEAM NAME</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Motorsport V8"
                  className="w-full bg-[#0c0d0f] border border-[#262c36] px-4 py-3 text-xs text-white focus:border-[#ffd500] outline-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-zinc-400 mb-2">TARGET RPM</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 8,400 RPM"
                    className="w-full bg-[#0c0d0f] border border-[#262c36] px-4 py-3 text-xs text-white focus:border-[#ffd500] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-2">CONTACT EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="engineer@team.com"
                    className="w-full bg-[#0c0d0f] border border-[#262c36] px-4 py-3 text-xs text-white focus:border-[#ffd500] outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-zinc-400 mb-2">POWERTRAIN SPECIFICATIONS</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe displacement, turbo configuration, and expected torque..."
                  className="w-full bg-[#0c0d0f] border border-[#262c36] p-4 text-xs text-white focus:border-[#ffd500] outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#ffd500] text-black font-extrabold text-xs py-4 uppercase tracking-widest hover:bg-[#ffdf33] transition-colors flex items-center justify-center gap-2"
              >
                <span>TRANSMIT INQUIRY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
