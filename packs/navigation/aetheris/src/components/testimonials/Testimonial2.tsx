import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonial2() {
  const testimonials = [
    { quote: "Aetheris vaults provide absolute peace of mind for my family's heritage horological collection.", author: "Baroness Elena Von Risten", title: "Geneva & Zurich" },
    { quote: "The Tourbillon Souverain is a masterclass in mechanical purity and acoustic resonance.", author: "Dr. Kenji Takahashi", title: "Tokyo Salon" },
    { quote: "Subterranean strongrooms engineered with such meticulous care are exceptionally rare.", author: "Sir Arthur Vance", title: "London Vault Division" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrentIndex((currentIndex + 1) % testimonials.length);

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-2">PATRON TESTIMONIALS</span>
            <h2 className="font-serif text-3xl text-[#ece8e1]">Voices of Distinction</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#ece8e1] hover:border-[#d4b06a] hover:text-[#d4b06a] transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#ece8e1] hover:border-[#d4b06a] hover:text-[#d4b06a] transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-[#13171c] border border-white/10 p-10 min-h-[220px] flex flex-col justify-between">
          <p className="font-serif text-xl italic text-[#ece8e1] mb-6">"{testimonials[currentIndex].quote}"</p>
          <div className="flex justify-between items-end border-t border-white/10 pt-4">
            <div>
              <span className="font-serif text-sm text-[#ece8e1] block">{testimonials[currentIndex].author}</span>
              <span className="text-xs font-mono text-[#7a8494]">{testimonials[currentIndex].title}</span>
            </div>
            <span className="text-xs font-mono text-[#d4b06a]">0{currentIndex + 1} / 03</span>
          </div>
        </div>
      </div>
    </section>
  );
}
