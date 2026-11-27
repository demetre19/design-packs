import React, { useState } from 'react';
import { Sparkles, Layers, Code, Eye, Heart, Compass, Star } from 'lucide-react';

// Navbar
import { Navbar1 } from './components/navbar/Navbar1';
import { Navbar2 } from './components/navbar/Navbar2';
import { Navbar3 } from './components/navbar/Navbar3';
import { Navbar4 } from './components/navbar/Navbar4';

// Heroes
import { Hero1 } from './components/heroes/Hero1';
import { Hero2 } from './components/heroes/Hero2';
import { Hero3 } from './components/heroes/Hero3';
import { Hero4 } from './components/heroes/Hero4';
import { Hero5 } from './components/heroes/Hero5';

// Feature Grids
import { FeatureGrid1 } from './components/feature-grids/FeatureGrid1';
import { FeatureGrid2 } from './components/feature-grids/FeatureGrid2';
import { FeatureGrid3 } from './components/feature-grids/FeatureGrid3';
import { FeatureGrid4 } from './components/feature-grids/FeatureGrid4';

// Pricing
import { Pricing1 } from './components/pricing/Pricing1';
import { Pricing2 } from './components/pricing/Pricing2';
import { Pricing3 } from './components/pricing/Pricing3';
import { Pricing4 } from './components/pricing/Pricing4';

// Testimonials
import { Testimonial1 } from './components/testimonials/Testimonial1';
import { Testimonial2 } from './components/testimonials/Testimonial2';
import { Testimonial3 } from './components/testimonials/Testimonial3';

// Blog Cards
import { BlogCard1 } from './components/blog-cards/BlogCard1';
import { BlogCard2 } from './components/blog-cards/BlogCard2';
import { BlogCard3 } from './components/blog-cards/BlogCard3';
import { BlogCard4 } from './components/blog-cards/BlogCard4';

// Footers
import { Footer1 } from './components/footers/Footer1';
import { Footer2 } from './components/footers/Footer2';
import { Footer3 } from './components/footers/Footer3';
import { Footer4 } from './components/footers/Footer4';

// Contact Forms
import { ContactForm1 } from './components/contact-forms/ContactForm1';
import { ContactForm2 } from './components/contact-forms/ContactForm2';
import { ContactForm3 } from './components/contact-forms/ContactForm3';

// Modals
import { Modal1 } from './components/modals/Modal1';
import { Modal2 } from './components/modals/Modal2';
import { Modal3 } from './components/modals/Modal3';

// Media
import { Media1 } from './components/media/Media1';
import { Media2 } from './components/media/Media2';
import { Media3 } from './components/media/Media3';

// FAQs
import { Faq1 } from './components/faqs/Faq1';
import { Faq2 } from './components/faqs/Faq2';
import { Faq3 } from './components/faqs/Faq3';

// CTAs
import { Cta1 } from './components/ctas/Cta1';
import { Cta2 } from './components/ctas/Cta2';
import { Cta3 } from './components/ctas/Cta3';

// Stats
import { Stats1 } from './components/stats/Stats1';
import { Stats2 } from './components/stats/Stats2';
import { Stats3 } from './components/stats/Stats3';
import { Stats4 } from './components/stats/Stats4';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All 44 Components' },
    { id: 'navbar', label: 'Navbars (4)' },
    { id: 'heroes', label: 'Heroes (5)' },
    { id: 'feature-grids', label: 'Feature Grids (4)' },
    { id: 'pricing', label: 'Pricing (4)' },
    { id: 'testimonials', label: 'Testimonials (3)' },
    { id: 'blog-cards', label: 'Blog & Editorial (4)' },
    { id: 'footers', label: 'Footers (4)' },
    { id: 'contact-forms', label: 'Contact Forms (3)' },
    { id: 'modals', label: 'Modals (3)' },
    { id: 'media', label: 'Media & Galleries (3)' },
    { id: 'faqs', label: 'FAQs (3)' },
    { id: 'ctas', label: 'CTAs (3)' },
    { id: 'stats', label: 'Stats (4)' },
  ];

  return (
    <div className="min-h-screen bg-[#fdf3e7] text-[#3d2530] flex flex-col font-chunky">
      {/* Top Banner Header */}
      <header className="bg-white border-b-4 border-[#3d2530]/10 py-8 px-6 text-center sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#ff8c42] flex items-center justify-center text-white shadow-lg transform -rotate-3">
              <Sparkles className="w-7 h-7" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-black text-[#3d2530]">MellowSprout Design System</h1>
              <div className="text-xs text-[#f975a3] font-bold uppercase tracking-wider">Soft Maximalist Carnival • 44 Components</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[#fdf3e7] p-2 rounded-full border-2 border-[#3d2530]/10">
            <span className="px-4 py-1.5 rounded-full bg-[#ff8c42] text-white text-xs font-black">44 Self-Contained Components</span>
          </div>
        </div>
      </header>

      {/* Category Filter Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b-2 border-[#3d2530]/10 py-4 px-6 sticky top-24 z-40 overflow-x-auto">
        <div className="max-w-6xl mx-auto flex gap-2 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-black text-sm transition-all border-2 ${activeCategory === cat.id ? 'bg-[#ff8c42] text-white border-[#3d2530] shadow-md' : 'bg-white text-[#3d2530] border-[#3d2530]/10 hover:bg-[#fdf3e7]'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Component Showcase Stream */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 space-y-16">
        
        {/* Navbars */}
        {(activeCategory === 'all' || activeCategory === 'navbar') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1 rounded-full bg-[#ff8c42] text-white font-black text-sm">navbar/</span>
              <h2 className="text-2xl font-black">4 Navigation Headers</h2>
            </div>
            <div className="space-y-8 border-4 border-dashed border-[#3d2530]/20 p-6 rounded-[36px] bg-white/40">
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Navbar1.tsx</div><Navbar1 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Navbar2.tsx</div><Navbar2 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Navbar3.tsx</div><Navbar3 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Navbar4.tsx</div><Navbar4 /></div>
            </div>
          </div>
        )}

        {/* Heroes */}
        {(activeCategory === 'all' || activeCategory === 'heroes') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1 rounded-full bg-[#5ba8e8] text-white font-black text-sm">heroes/</span>
              <h2 className="text-2xl font-black">5 Hero Sections</h2>
            </div>
            <div className="space-y-8 border-4 border-dashed border-[#3d2530]/20 p-6 rounded-[36px] bg-white/40">
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Hero1.tsx</div><Hero1 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Hero2.tsx</div><Hero2 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Hero3.tsx</div><Hero3 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Hero4.tsx</div><Hero4 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Hero5.tsx</div><Hero5 /></div>
            </div>
          </div>
        )}

        {/* Feature Grids */}
        {(activeCategory === 'all' || activeCategory === 'feature-grids') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1 rounded-full bg-[#f975a3] text-white font-black text-sm">feature-grids/</span>
              <h2 className="text-2xl font-black">4 Feature Sections</h2>
            </div>
            <div className="space-y-8 border-4 border-dashed border-[#3d2530]/20 p-6 rounded-[36px] bg-white/40">
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">FeatureGrid1.tsx</div><FeatureGrid1 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">FeatureGrid2.tsx</div><FeatureGrid2 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">FeatureGrid3.tsx</div><FeatureGrid3 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">FeatureGrid4.tsx</div><FeatureGrid4 /></div>
            </div>
          </div>
        )}

        {/* Pricing */}
        {(activeCategory === 'all' || activeCategory === 'pricing') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1 rounded-full bg-[#6dbf67] text-white font-black text-sm">pricing/</span>
              <h2 className="text-2xl font-black">4 Pricing Sections</h2>
            </div>
            <div className="space-y-8 border-4 border-dashed border-[#3d2530]/20 p-6 rounded-[36px] bg-white/40">
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Pricing1.tsx</div><Pricing1 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Pricing2.tsx</div><Pricing2 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Pricing3.tsx</div><Pricing3 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Pricing4.tsx</div><Pricing4 /></div>
            </div>
          </div>
        )}

        {/* Testimonials */}
        {(activeCategory === 'all' || activeCategory === 'testimonials') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1 rounded-full bg-[#ff8c42] text-white font-black text-sm">testimonials/</span>
              <h2 className="text-2xl font-black">3 Testimonial Sections</h2>
            </div>
            <div className="space-y-8 border-4 border-dashed border-[#3d2530]/20 p-6 rounded-[36px] bg-white/40">
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Testimonial1.tsx</div><Testimonial1 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Testimonial2.tsx</div><Testimonial2 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Testimonial3.tsx</div><Testimonial3 /></div>
            </div>
          </div>
        )}

        {/* Blog Cards */}
        {(activeCategory === 'all' || activeCategory === 'blog-cards') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1 rounded-full bg-[#5ba8e8] text-white font-black text-sm">blog-cards/</span>
              <h2 className="text-2xl font-black">4 Blog & Editorial Sections</h2>
            </div>
            <div className="space-y-8 border-4 border-dashed border-[#3d2530]/20 p-6 rounded-[36px] bg-white/40">
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">BlogCard1.tsx</div><BlogCard1 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">BlogCard2.tsx</div><BlogCard2 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">BlogCard3.tsx</div><BlogCard3 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">BlogCard4.tsx</div><BlogCard4 /></div>
            </div>
          </div>
        )}

        {/* Footers */}
        {(activeCategory === 'all' || activeCategory === 'footers') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1 rounded-full bg-[#3d2530] text-white font-black text-sm">footers/</span>
              <h2 className="text-2xl font-black">4 Footers</h2>
            </div>
            <div className="space-y-8 border-4 border-dashed border-[#3d2530]/20 p-6 rounded-[36px] bg-white/40">
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Footer1.tsx</div><Footer1 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Footer2.tsx</div><Footer2 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Footer3.tsx</div><Footer3 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Footer4.tsx</div><Footer4 /></div>
            </div>
          </div>
        )}

        {/* Contact Forms */}
        {(activeCategory === 'all' || activeCategory === 'contact-forms') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1 rounded-full bg-[#f975a3] text-white font-black text-sm">contact-forms/</span>
              <h2 className="text-2xl font-black">3 Contact Forms</h2>
            </div>
            <div className="space-y-8 border-4 border-dashed border-[#3d2530]/20 p-6 rounded-[36px] bg-white/40">
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">ContactForm1.tsx</div><ContactForm1 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">ContactForm2.tsx</div><ContactForm2 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">ContactForm3.tsx</div><ContactForm3 /></div>
            </div>
          </div>
        )}

        {/* Modals */}
        {(activeCategory === 'all' || activeCategory === 'modals') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1 rounded-full bg-[#6dbf67] text-white font-black text-sm">modals/</span>
              <h2 className="text-2xl font-black">3 Modals & Dialogs</h2>
            </div>
            <div className="space-y-8 border-4 border-dashed border-[#3d2530]/20 p-6 rounded-[36px] bg-white/40">
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Modal1.tsx</div><Modal1 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Modal2.tsx</div><Modal2 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Modal3.tsx</div><Modal3 /></div>
            </div>
          </div>
        )}

        {/* Media */}
        {(activeCategory === 'all' || activeCategory === 'media') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1 rounded-full bg-[#ff8c42] text-white font-black text-sm">media/</span>
              <h2 className="text-2xl font-black">3 Media & Galleries</h2>
            </div>
            <div className="space-y-8 border-4 border-dashed border-[#3d2530]/20 p-6 rounded-[36px] bg-white/40">
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Media1.tsx</div><Media1 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Media2.tsx</div><Media2 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Media3.tsx</div><Media3 /></div>
            </div>
          </div>
        )}

        {/* FAQs */}
        {(activeCategory === 'all' || activeCategory === 'faqs') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1 rounded-full bg-[#5ba8e8] text-white font-black text-sm">faqs/</span>
              <h2 className="text-2xl font-black">3 FAQs</h2>
            </div>
            <div className="space-y-8 border-4 border-dashed border-[#3d2530]/20 p-6 rounded-[36px] bg-white/40">
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Faq1.tsx</div><Faq1 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Faq2.tsx</div><Faq2 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Faq3.tsx</div><Faq3 /></div>
            </div>
          </div>
        )}

        {/* CTAs */}
        {(activeCategory === 'all' || activeCategory === 'ctas') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1 rounded-full bg-[#f975a3] text-white font-black text-sm">ctas/</span>
              <h2 className="text-2xl font-black">3 Call-To-Action Sections</h2>
            </div>
            <div className="space-y-8 border-4 border-dashed border-[#3d2530]/20 p-6 rounded-[36px] bg-white/40">
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Cta1.tsx</div><Cta1 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Cta2.tsx</div><Cta2 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Cta3.tsx</div><Cta3 /></div>
            </div>
          </div>
        )}

        {/* Stats */}
        {(activeCategory === 'all' || activeCategory === 'stats') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1 rounded-full bg-[#6dbf67] text-white font-black text-sm">stats/</span>
              <h2 className="text-2xl font-black">4 Stats Sections</h2>
            </div>
            <div className="space-y-8 border-4 border-dashed border-[#3d2530]/20 p-6 rounded-[36px] bg-white/40">
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Stats1.tsx</div><Stats1 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Stats2.tsx</div><Stats2 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Stats3.tsx</div><Stats3 /></div>
              <div><div className="text-xs font-bold text-[#3d2530]/60 mb-2">Stats4.tsx</div><Stats4 /></div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-[#3d2530]/15 py-12 px-6 text-center mt-20">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 font-black text-xl text-[#3d2530]">
            <span>🌈</span> MellowSprout Design System <span className="text-[#f975a3]">❤️</span>
          </div>
          <p className="text-sm font-bold text-[#3d2530]/70">
            All 44 components crafted with soft maximalist carnival aesthetics, friendly chunky typography, and rich pastel color palettes.
          </p>
        </div>
      </footer>
    </div>
  );
}
