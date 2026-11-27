import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard1() {
  const articles = [
    {
      date: "2026.11.24 // SEC-01",
      title: "AUTONOMOUS FLEET DEPLOYMENT ACROSS SUB-ZERO EXTRACTION ZONES",
      image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
      excerpt: "How decentralized edge clusters maintain 99.98% uptime in minus 40 degree mining environments."
    },
    {
      date: "2026.11.18 // SEC-04",
      title: "ACOUSTIC STRESS AI: PREDICTING DRILL BIT FAILURE IN REAL TIME",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f86f6?auto=format&fit=crop&w=800&q=80",
      excerpt: "Ultrasonic frequency analysis detects micro-fractures milliseconds before catastrophic structural shear."
    },
    {
      date: "2026.11.10 // SEC-09",
      title: "MEGAVATT POWER DISTRIBUTION FOR REMOTE MEGASITES",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
      excerpt: "Architecting high-voltage substations for autonomous earth-moving machinery fleets."
    }
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          EDITORIAL & LOGS // BLOG 01
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          INDUSTRIAL <span className="text-[#f25c05]">RESEARCH</span> & DISPATCHES.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art, idx) => (
            <div key={idx} className="border-2 border-black bg-white flex flex-col justify-between group hover:border-[#f25c05] transition-colors">
              <div>
                <div className="relative h-48 bg-black border-b-2 border-black overflow-hidden">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 font-mono text-[9px] border border-neutral-700">
                    {art.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-black text-lg uppercase tracking-tight mb-3 leading-snug">{art.title}</h3>
                  <p className="font-mono text-xs text-neutral-600 leading-relaxed">{art.excerpt}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between font-mono text-xs">
                  <span className="text-neutral-500 uppercase">Read Dispatch</span>
                  <ArrowUpRight className="w-4 h-4 text-[#f25c05]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
